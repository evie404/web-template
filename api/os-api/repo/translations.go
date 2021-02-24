package repo

import (
	"google.golang.org/protobuf/types/known/timestamppb"
)

func toRPCModel(model dbModelT) *modelT {
	return &modelT{
		Id:   model.ID,
		Name: model.Name,

		CreatedAt:  timestamppb.New(model.CreatedAt),
		ModifiedAt: timestamppb.New(model.ModifiedAt),
	}
}

func toRPCModels(models []dbModelT) []*modelT {
	rpcModels := make([]*modelT, len(models))

	for i, model := range models {
		rpcModels[i] = toRPCModel(model)
	}

	return rpcModels
}

func toDBModel(rpcModel *modelT) *dbModelT {
	if rpcModel == nil {
		return nil
	}

	return &dbModelT{
		ID:   rpcModel.GetId(),
		Name: rpcModel.GetName(),

		CreatedAt:  rpcModel.GetCreatedAt().AsTime(),
		ModifiedAt: rpcModel.GetModifiedAt().AsTime(),
	}
}

func toDBModels(rpcModels []*modelT) []*dbModelT {
	dbModels := make([]*dbModelT, len(rpcModels))

	for i, rpcModel := range rpcModels {
		dbModels[i] = toDBModel(rpcModel)
	}

	return dbModels
}
