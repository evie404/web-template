package server

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/rickypai/web-template/api/operating-system-api/repo"
	rpc "github.com/rickypai/web-template/api/protobuf/operating_system"
)

type modelTWriter interface {
	CreateOne(ctx context.Context, rpcInstance *createReqT) (*modelT, error)
}

func NewWriteServer(db *sql.DB) *WriteServer {
	return &WriteServer{
		repo: repo.NewWriter(db),
	}
}

type WriteServer struct {
	rpcWriterT

	repo modelTWriter
}

func (s *WriteServer) CreateOne(ctx context.Context, req *rpc.CreateOneRequest) (*rpc.CreateOneResponse, error) {
	result, err := s.repo.CreateOne(ctx, req.GetRequest())
	if err != nil {
		return nil, fmt.Errorf("error creating %s: %w", modelName, err)
	}

	return &rpc.CreateOneResponse{
		Result: result,
	}, nil
}
