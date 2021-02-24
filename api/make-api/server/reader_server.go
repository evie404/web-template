package server

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/rickypai/web-template/api/make-api/repo"
	rpc "github.com/rickypai/web-template/api/protobuf/make"
	"github.com/rickypai/web-template/api/server/cursor"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type modelTReader interface {
	GetOneByID(context.Context, int64) (modelT, error)
	GetManyByIDs(context.Context, []int64) ([]modelT, error)

	ListByPage(context.Context, cursor.PageRequest) ([]modelT, *cursor.PageResult, error)
	ListByCursor(context.Context, cursor.CursorRequest) ([]modelT, *cursor.CursorResult, error)
}

func NewReaderServer(db *sql.DB) *ReaderServer {
	return &ReaderServer{
		repo: repo.NewReader(db),
	}
}

type ReaderServer struct {
	rpcT

	repo modelTReader
}

func (s *ReaderServer) ListByPage(ctx context.Context, req *rpc.ListByPageRequest) (*rpc.ListByPageResponse, error) {
	results, pageResult, err := s.repo.ListByPage(ctx, req)
	if err != nil {
		return nil, fmt.Errorf("error fetching %s: %w", modelsName, err)
	}

	return &rpc.ListByPageResponse{
		Results:    results,
		NextPage:   pageResult.NextPage,
		TotalPages: pageResult.TotalPages,
		HasNext:    pageResult.HasNext,
	}, nil
}

func (s *ReaderServer) ListByCursor(ctx context.Context, req *rpc.ListByCursorRequest) (*rpc.ListByCursorResponse, error) {
	results, cursorResult, err := s.repo.ListByCursor(ctx, req)
	if err != nil {
		return nil, fmt.Errorf("error fetching %s: %w", modelsName, err)
	}

	return &rpc.ListByCursorResponse{
		Results: results,
		Cursor:  cursorResult.Cursor,
	}, nil
}

func (s *ReaderServer) GetOneByID(ctx context.Context, req *rpc.GetOneByIDRequest) (*rpc.GetOneByIDResponse, error) {
	result, err := s.repo.GetOneByID(ctx, req.GetId())
	if err != nil {
		return nil, fmt.Errorf("error fetching %s: %w", modelName, err)
	}

	if result == nil {
		return nil, status.Error(codes.NotFound, fmt.Sprintf("%s with ID#%v not found", modelName, req.GetId()))
	}

	return &rpc.GetOneByIDResponse{
		Result: result,
	}, nil
}

func (s *ReaderServer) GetManyByIDs(ctx context.Context, req *rpc.GetManyByIDsRequest) (*rpc.GetManyByIDsResponse, error) {
	results, err := s.repo.GetManyByIDs(ctx, req.GetIds())
	if err != nil {
		return nil, fmt.Errorf("error fetching %s: %w", modelName, err)
	}

	return &rpc.GetManyByIDsResponse{
		Results: results,
	}, nil
}
