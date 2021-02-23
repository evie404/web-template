package repo

import (
	"context"
	"fmt"

	makePb "github.com/rickypai/web-template/api/protobuf/make"
	osPb "github.com/rickypai/web-template/api/protobuf/os"
)

type Hydrator struct {
	makeClient makePb.MakeServiceClient
	osClient   osPb.OSServiceClient
}

func NewHydrator(makeClient makePb.MakeServiceClient, osClient osPb.OSServiceClient) *Hydrator {
	return &Hydrator{
		makeClient: makeClient,
		osClient:   osClient,
	}
}

func (h *Hydrator) HydrateOne(ctx context.Context, instance *modelT) error {
	makeResult, err := h.makeClient.GetOneByID(ctx, &makePb.GetOneByIDRequest{
		Id: instance.GetMake().GetId(),
	})
	if err != nil {
		return fmt.Errorf("error fetching make ID#%v: %w", instance.GetMake().GetId(), err)
	}

	osResult, err := h.osClient.GetOneByID(ctx, &osPb.GetOneByIDRequest{
		Id: instance.GetOs().GetId(),
	})
	if err != nil {
		return fmt.Errorf("error fetching os ID#%v: %w", instance.GetOs().GetId(), err)
	}

	instance.Make = makeResult.GetResult()
	instance.Os = osResult.GetResult()

	return nil
}

func (h *Hydrator) HydrateMany(ctx context.Context, instances []*modelT) error {
	// TODO: more efficient calls
	for i := range instances {
		h.HydrateOne(ctx, instances[i])
	}

	return nil
}
