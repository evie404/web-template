package phone

import (
	"context"

	dbModel "github.com/rickypai/web-template/api/dbmodels/phone"
	makeRPC "github.com/rickypai/web-template/api/protobuf/make"
	"github.com/rickypai/web-template/api/protobuf/os"
	rpc "github.com/rickypai/web-template/api/protobuf/phone"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type PhoneRepo struct {
	db dbModel.Querier
}

func NewPhoneRepo(db dbModel.DBTX) *PhoneRepo {
	return &PhoneRepo{
		db: dbModel.New(db),
	}
}

func (r *PhoneRepo) ListPhones(ctx context.Context) ([]*rpc.Phone, error) {
	dbModels, err := r.db.ListPhones(ctx)
	if err != nil {
		return nil, err
	}

	return toRPCModels(dbModels), nil
}

func toRPCModel(model dbModel.Phone) *rpc.Phone {
	return &rpc.Phone{
		Id:         model.ID,
		Name:       model.Name,
		Make:       &makeRPC.Make{},
		Os:         &os.OS{},
		CreatedAt:  timestamppb.New(model.CreatedAt),
		ModifiedAt: timestamppb.New(model.ModifiedAt),
	}
}

func toRPCModels(models []dbModel.Phone) []*rpc.Phone {
	rpcModels := make([]*rpc.Phone, len(models))

	for i, model := range models {
		rpcModels[i] = toRPCModel(model)
	}

	return rpcModels
}
