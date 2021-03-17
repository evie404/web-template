package operatingSystem

import (
	"context"
	"database/sql"

	"github.com/rickypai/web-template/api/operating-system-api/server"
	rpc "github.com/rickypai/web-template/api/protobuf/operating_system"
	"google.golang.org/grpc"
)

func NewLocalReadServer(db *sql.DB) rpc.OperatingSystemReaderClient {
	return &LocalReadServer{
		localServer: server.NewReadServer(db),
	}
}

type LocalReadServer struct {
	localServer rpc.OperatingSystemReaderServer
}

func (s *LocalReadServer) GetOneByID(ctx context.Context, req *rpc.GetOneByIDRequest, opts ...grpc.CallOption) (*rpc.GetOneByIDResponse, error) {
	return s.localServer.GetOneByID(ctx, req)
}

func (s *LocalReadServer) GetManyByIDs(ctx context.Context, req *rpc.GetManyByIDsRequest, opts ...grpc.CallOption) (*rpc.GetManyByIDsResponse, error) {
	return s.localServer.GetManyByIDs(ctx, req)
}

func (s *LocalReadServer) ListByCursor(ctx context.Context, req *rpc.ListByCursorRequest, opts ...grpc.CallOption) (*rpc.ListByCursorResponse, error) {
	return s.localServer.ListByCursor(ctx, req)
}

func (s *LocalReadServer) ListByPage(ctx context.Context, req *rpc.ListByPageRequest, opts ...grpc.CallOption) (*rpc.ListByPageResponse, error) {
	return s.localServer.ListByPage(ctx, req)
}

func (s *LocalReadServer) ListByPrefix(ctx context.Context, req *rpc.ListByPrefixRequest, opts ...grpc.CallOption) (*rpc.ListByPrefixResponse, error) {
	return s.localServer.ListByPrefix(ctx, req)
}
