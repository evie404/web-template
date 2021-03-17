package server

import (
	rpc "github.com/rickypai/web-template/api/protobuf/operating_system"
)

// this is as cloperatingSysteme as we can get without generics. Just modify this one line to change the model in question
type (
	modelT     = rpc.OperatingSystem
	createReqT = rpc.OperatingSystemCreateRequest

	rpcReaderT = rpc.UnimplementedOperatingSystemReaderServer
	rpcWriterT = rpc.UnimplementedOperatingSystemWriterServer
)

const (
	modelName  = "OperatingSystem"
	modelsName = "OperatingSystems"
)
