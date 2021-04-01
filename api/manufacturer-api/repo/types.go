package repo

import (
	dbModel "github.com/rickypai/web-template/api/dbmodels/manufacturer"
	rpc "github.com/rickypai/web-template/api/protobuf/manufacturer"
)

// this is as close as we can get without generics. Just modify this one line to change the model in question
type (
	modelT      = rpc.Manufacturer
	createReqT  = rpc.ManufacturerCreateRequest
	listByPageT = rpc.ListByPageRequest

	dbModelT = dbModel.Manufacturer
)
