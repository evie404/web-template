package repo

import (
	"context"
	"errors"
	"fmt"
	"time"

	dbModel "github.com/rickypai/web-template/api/dbmodels/make"
)

type Writer struct {
	db dbModel.Querier
}

func NewWriter(db dbModel.DBTX) *Writer {
	return &Writer{
		db: dbModel.New(db),
	}
}

func (r *Writer) CreateOne(ctx context.Context, rpcInstance *recordT) (*modelT, error) {
	dbInstance := toDBModel(rpcInstance)
	if dbInstance == nil {
		return nil, errors.New("cannot create empty instance")
	}

	now := time.Now()

	dbResult, err := r.db.CreateOne(ctx, dbModel.CreateOneParams{
		Name:       dbInstance.Name,
		CreatedAt:  now,
		ModifiedAt: now,
	})
	if err != nil {
		return nil, fmt.Errorf("error inserting into database: %w", err)
	}

	return toRPCModel(dbResult), nil
}
