package repo

import (
	dbModel "github.com/rickypai/web-template/api/dbmodels/operating_system"
	rpc "github.com/rickypai/web-template/api/protobuf/operating_system"
)

// this is as close as we can get without generics. Just modify this one line to change the model in question
type (
	modelT        = rpc.OperatingSystem
	createReqT    = rpc.OperatingSystemCreateRequest
	listByCursorT = rpc.ListByCursorRequest
	listByPageT   = rpc.ListByPageRequest

	dbModelT = dbModel.OperatingSystem
)
