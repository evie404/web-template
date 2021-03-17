package repo

import (
	manufacturerPb "github.com/rickypai/web-template/api/protobuf/manufacturer"
	"github.com/rickypai/web-template/api/protobuf/os"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func toRPCModel(model dbModelT) *modelT {
	return &modelT{
		Id:   model.ID,
		Name: model.Name,

		Manufacturer: &manufacturerPb.Manufacturer{
			Id: int64(model.ManufacturerID),
		},
		Os: &os.OS{
			Id: int64(model.OsID),
		},

		CreatedAt:  timestamppb.New(model.CreatedAt),
		ModifiedAt: timestamppb.New(model.ModifiedAt),
	}
}

func toRPCModels(models []dbModelT) []*modelT {
	if len(models) == 0 {
		return nil
	}

	rpcModels := make([]*modelT, len(models))

	for i, model := range models {
		rpcModels[i] = toRPCModel(model)
	}

	return rpcModels
}
