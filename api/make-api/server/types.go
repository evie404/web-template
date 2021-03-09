package server

import (
	rpc "github.com/rickypai/web-template/api/protobuf/make"
)

// this is as close as we can get without generics. Just modify this one line to change the model in question
type (
	modelT     = rpc.Make
	createReqT = rpc.MakeCreateRequest

	rpcReaderT = rpc.UnimplementedMakeReaderServer
	rpcWriterT = rpc.UnimplementedMakeWriterServer
)

const (
	modelName  = "make"
	modelsName = "makes"
)
