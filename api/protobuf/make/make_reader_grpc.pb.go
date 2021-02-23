// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package make

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// MakeReaderClient is the client API for MakeReader service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MakeReaderClient interface {
	GetOneByID(ctx context.Context, in *GetOneByIDRequest, opts ...grpc.CallOption) (*GetOneByIDResponse, error)
	GetManyByIDs(ctx context.Context, in *GetManyByIDsRequest, opts ...grpc.CallOption) (*GetManyByIDsResponse, error)
	ListByCursor(ctx context.Context, in *ListByCursorRequest, opts ...grpc.CallOption) (*ListByCursorResponse, error)
	ListByPage(ctx context.Context, in *ListByPageRequest, opts ...grpc.CallOption) (*ListByPageResponse, error)
}

type makeReaderClient struct {
	cc grpc.ClientConnInterface
}

func NewMakeReaderClient(cc grpc.ClientConnInterface) MakeReaderClient {
	return &makeReaderClient{cc}
}

func (c *makeReaderClient) GetOneByID(ctx context.Context, in *GetOneByIDRequest, opts ...grpc.CallOption) (*GetOneByIDResponse, error) {
	out := new(GetOneByIDResponse)
	err := c.cc.Invoke(ctx, "/make.MakeReader/GetOneByID", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *makeReaderClient) GetManyByIDs(ctx context.Context, in *GetManyByIDsRequest, opts ...grpc.CallOption) (*GetManyByIDsResponse, error) {
	out := new(GetManyByIDsResponse)
	err := c.cc.Invoke(ctx, "/make.MakeReader/GetManyByIDs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *makeReaderClient) ListByCursor(ctx context.Context, in *ListByCursorRequest, opts ...grpc.CallOption) (*ListByCursorResponse, error) {
	out := new(ListByCursorResponse)
	err := c.cc.Invoke(ctx, "/make.MakeReader/ListByCursor", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *makeReaderClient) ListByPage(ctx context.Context, in *ListByPageRequest, opts ...grpc.CallOption) (*ListByPageResponse, error) {
	out := new(ListByPageResponse)
	err := c.cc.Invoke(ctx, "/make.MakeReader/ListByPage", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MakeReaderServer is the server API for MakeReader service.
// All implementations must embed UnimplementedMakeReaderServer
// for forward compatibility
type MakeReaderServer interface {
	GetOneByID(context.Context, *GetOneByIDRequest) (*GetOneByIDResponse, error)
	GetManyByIDs(context.Context, *GetManyByIDsRequest) (*GetManyByIDsResponse, error)
	ListByCursor(context.Context, *ListByCursorRequest) (*ListByCursorResponse, error)
	ListByPage(context.Context, *ListByPageRequest) (*ListByPageResponse, error)
	mustEmbedUnimplementedMakeReaderServer()
}

// UnimplementedMakeReaderServer must be embedded to have forward compatible implementations.
type UnimplementedMakeReaderServer struct {
}

func (UnimplementedMakeReaderServer) GetOneByID(context.Context, *GetOneByIDRequest) (*GetOneByIDResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOneByID not implemented")
}
func (UnimplementedMakeReaderServer) GetManyByIDs(context.Context, *GetManyByIDsRequest) (*GetManyByIDsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetManyByIDs not implemented")
}
func (UnimplementedMakeReaderServer) ListByCursor(context.Context, *ListByCursorRequest) (*ListByCursorResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListByCursor not implemented")
}
func (UnimplementedMakeReaderServer) ListByPage(context.Context, *ListByPageRequest) (*ListByPageResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListByPage not implemented")
}
func (UnimplementedMakeReaderServer) mustEmbedUnimplementedMakeReaderServer() {}

// UnsafeMakeReaderServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MakeReaderServer will
// result in compilation errors.
type UnsafeMakeReaderServer interface {
	mustEmbedUnimplementedMakeReaderServer()
}

func RegisterMakeReaderServer(s grpc.ServiceRegistrar, srv MakeReaderServer) {
	s.RegisterService(&MakeReader_ServiceDesc, srv)
}

func _MakeReader_GetOneByID_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOneByIDRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MakeReaderServer).GetOneByID(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/make.MakeReader/GetOneByID",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MakeReaderServer).GetOneByID(ctx, req.(*GetOneByIDRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MakeReader_GetManyByIDs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetManyByIDsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MakeReaderServer).GetManyByIDs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/make.MakeReader/GetManyByIDs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MakeReaderServer).GetManyByIDs(ctx, req.(*GetManyByIDsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MakeReader_ListByCursor_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListByCursorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MakeReaderServer).ListByCursor(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/make.MakeReader/ListByCursor",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MakeReaderServer).ListByCursor(ctx, req.(*ListByCursorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MakeReader_ListByPage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListByPageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MakeReaderServer).ListByPage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/make.MakeReader/ListByPage",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MakeReaderServer).ListByPage(ctx, req.(*ListByPageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// MakeReader_ServiceDesc is the grpc.ServiceDesc for MakeReader service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MakeReader_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "make.MakeReader",
	HandlerType: (*MakeReaderServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetOneByID",
			Handler:    _MakeReader_GetOneByID_Handler,
		},
		{
			MethodName: "GetManyByIDs",
			Handler:    _MakeReader_GetManyByIDs_Handler,
		},
		{
			MethodName: "ListByCursor",
			Handler:    _MakeReader_ListByCursor_Handler,
		},
		{
			MethodName: "ListByPage",
			Handler:    _MakeReader_ListByPage_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "protobuf/make/make_reader.proto",
}
