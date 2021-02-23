package repo

import (
	dbModel "github.com/rickypai/web-template/api/dbmodels/make"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func toRPCModel(model dbModel.Make) *modelT {
	return &modelT{
		Id:   model.ID,
		Name: model.Name,

		CreatedAt:  timestamppb.New(model.CreatedAt),
		ModifiedAt: timestamppb.New(model.ModifiedAt),
	}
}

func toRPCModels(models []dbModel.Make) []*modelT {
	rpcModels := make([]*modelT, len(models))

	for i, model := range models {
		rpcModels[i] = toRPCModel(model)
	}

	return rpcModels
}
