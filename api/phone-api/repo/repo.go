package repo

import (
	"context"
	"database/sql"
	"fmt"

	dbModel "github.com/rickypai/web-template/api/dbmodels/phone"
	rpc "github.com/rickypai/web-template/api/protobuf/phone"
	cursorPkg "github.com/rickypai/web-template/api/server/cursor"
)

// this is as close as we can get without generics. Just modify this one line to change the model in question
type modelT = rpc.Phone

type Repo struct {
	db dbModel.Querier
}

func NewRepo(db *sql.DB) *Repo {
	return &Repo{
		db: dbModel.New(db),
	}
}

func (s *Repo) ListByPage(ctx context.Context, req cursorPkg.PageRequest) ([]*modelT, *cursorPkg.PageResult, error) {
	page, cursor, count := cursorPkg.GetPageOptions(req)
	dbModels, err := s.db.ListOffset(ctx, dbModel.ListOffsetParams{Limit: int32(count) + 1, Offset: int32(cursor)})
	if err != nil {
		return nil, nil, fmt.Errorf("error fetching from database: %w", err)
	}

	hasNext := len(dbModels) > count

	var results []*modelT

	if hasNext {
		results = toRPCModels(dbModels[:len(dbModels)-1])
	} else {
		results = toRPCModels(dbModels)
	}

	total, err := s.db.CountTotal(ctx)
	if err != nil {
		return nil, nil, fmt.Errorf("error fetching total count from database: %w", err)
	}

	return results, &cursorPkg.PageResult{
		NextPage:   page + 1,
		HasNext:    hasNext,
		TotalPages: total,
	}, nil
}

func (s *Repo) ListByCursor(ctx context.Context, req cursorPkg.CursorRequest) ([]*modelT, *cursorPkg.CursorResult, error) {
	cursor, count := cursorPkg.GetCursorOptions(req)
	dbModels, err := s.db.ListOffset(ctx, dbModel.ListOffsetParams{Limit: int32(count), Offset: int32(cursor)})
	if err != nil {
		return nil, nil, fmt.Errorf("error fetching from database: %w", err)
	}

	results := toRPCModels(dbModels)

	var nextPageCursor int64

	if len(results) > 1 {
		nextPageCursor = results[len(results)-1].GetId()
	}

	return results, &cursorPkg.CursorResult{
		Cursor: nextPageCursor,
	}, nil
}

func (s *Repo) GetOneByID(ctx context.Context, id int64) (*modelT, error) {
	dbResult, err := s.db.GetByID(ctx, id)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}

		return nil, fmt.Errorf("error fetching from database: %w", err)
	}

	return toRPCModel(dbResult), nil
}
