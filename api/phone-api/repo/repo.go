package repo

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/golang/protobuf/ptypes"
	dbModel "github.com/rickypai/web-template/api/dbmodels/phone"
	makePb "github.com/rickypai/web-template/api/protobuf/make"
	makeRPC "github.com/rickypai/web-template/api/protobuf/make"
	"github.com/rickypai/web-template/api/protobuf/os"
	rpc "github.com/rickypai/web-template/api/protobuf/phone"
	cursorPkg "github.com/rickypai/web-template/api/server/cursor"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"
)

// this is as close as we can get without generics. Just modify this one line to change the model in question
type modelT = *rpc.Phone

type Repo struct {
	db dbModel.Querier
}

func NewRepo(db *sql.DB) *Repo {
	return &Repo{
		db: dbModel.New(db),
	}
}

func (r *Repo) listPhones(ctx context.Context) ([]modelT, error) {
	dbModels, err := r.db.ListPhones(ctx)
	if err != nil {
		return nil, err
	}

	return toRPCModels(dbModels), nil
}

func (s *Repo) ListByPage(ctx context.Context, req cursorPkg.PageRequest) ([]modelT, *cursorPkg.PageResult, error) {
	page, _, _ := cursorPkg.GetPageOptions(req)
	results, err := s.listPhones(ctx)
	if err != nil {
		return nil, nil, fmt.Errorf("error fetching from database: %w", err)
	}

	return results, &cursorPkg.PageResult{
		NextPage:   page + 1,
		HasNext:    true,
		TotalPages: 100,
	}, nil
}

func (s *Repo) ListByCursor(ctx context.Context, req cursorPkg.CursorRequest) ([]modelT, *cursorPkg.CursorResult, error) {
	cursor, count := cursorPkg.GetCursorOptions(req)
	results := make([]modelT, 0, count)

	for i := cursor + 1; i < cursor+1+int64(count); i++ {
		results = append(results, getPhone(i))
	}

	nextPageCursor := results[len(results)-1].GetId()

	return results, &cursorPkg.CursorResult{
		Cursor: nextPageCursor,
	}, nil
}

func (s *Repo) GetOneByID(ctx context.Context, id int64) (modelT, error) {
	if id == 404 {
		return nil, status.Error(codes.NotFound, "not found")
	}

	if id == 500 {
		return nil, status.Error(codes.Unknown, "unknown")
	}

	return getPhone(id), nil
}

func getPhone(id int64) *rpc.Phone {
	ts := ptypes.TimestampNow()

	return &rpc.Phone{
		Id:   id,
		Name: fmt.Sprintf("Phone #%v", id),
		Make: &makePb.Make{
			Id:   id,
			Name: fmt.Sprintf("Make #%v", id),

			CreatedAt:  ts,
			ModifiedAt: ts,
		},
		Os: &os.OS{
			Id:   id,
			Name: fmt.Sprintf("OS #%v", id),

			CreatedAt:  ts,
			ModifiedAt: ts,
		},

		CreatedAt:  ts,
		ModifiedAt: ts,
	}
}

func toRPCModel(model dbModel.Phone) *rpc.Phone {
	return &rpc.Phone{
		Id:         model.ID,
		Name:       model.Name,
		Make:       &makeRPC.Make{},
		Os:         &os.OS{},
		CreatedAt:  timestamppb.New(model.CreatedAt),
		ModifiedAt: timestamppb.New(model.ModifiedAt),
	}
}

func toRPCModels(models []dbModel.Phone) []*rpc.Phone {
	rpcModels := make([]*rpc.Phone, len(models))

	for i, model := range models {
		rpcModels[i] = toRPCModel(model)
	}

	return rpcModels
}
