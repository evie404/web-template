package server

import (
	rpc "github.com/rickypai/web-template/api/protobuf/manufacturer"
)

// this is as close as we can get without generics. Just modify this one line to change the model in question
type (
	modelT     = rpc.Manufacturer
	createReqT = rpc.ManufacturerCreateRequest

	rpcReaderT = rpc.UnimplementedManufacturerReaderServer
	rpcWriterT = rpc.UnimplementedManufacturerWriterServer
)

const (
	modelName  = "manufacturer"
	modelsName = "manufacturers"
)
