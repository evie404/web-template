package repo

import (
	"context"
	"fmt"

	makePb "github.com/rickypai/web-template/api/protobuf/make"
	osPb "github.com/rickypai/web-template/api/protobuf/os"
	"golang.org/x/sync/errgroup"
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
	wg, ctx := errgroup.WithContext(ctx)

	var makeResult *makePb.GetOneByIDResponse
	wg.Go(func() error {
		var makeErr error
		makeResult, makeErr = h.makeClient.GetOneByID(ctx, &makePb.GetOneByIDRequest{
			Id: instance.GetMake().GetId(),
		})
		if makeErr != nil {
			return fmt.Errorf("error fetching make ID#%v: %w", instance.GetMake().GetId(), makeErr)
		}

		return nil
	})

	var osResult *osPb.GetOneByIDResponse
	wg.Go(func() error {
		var osErr error
		osResult, osErr = h.osClient.GetOneByID(ctx, &osPb.GetOneByIDRequest{
			Id: instance.GetMake().GetId(),
		})
		if osErr != nil {
			return fmt.Errorf("error fetching os ID#%v: %w", instance.GetMake().GetId(), osErr)
		}

		return nil
	})

	err := wg.Wait()
	if err != nil {
		return err
	}

	instance.Make = makeResult.GetResult()
	instance.Os = osResult.GetResult()

	return nil
}

func (h *Hydrator) HydrateMany(ctx context.Context, instances []*modelT) error {
	wg, ctx := errgroup.WithContext(ctx)

	var makeResults *makePb.GetManyByIDsResponse
	wg.Go(func() error {
		var makeErr error

		makeIds := make([]int64, len(instances))
		for i, instance := range instances {
			makeIds[i] = instance.GetMake().GetId()
		}

		makeResults, makeErr = h.makeClient.GetManyByIDs(ctx, &makePb.GetManyByIDsRequest{
			Ids: makeIds,
		})
		if makeErr != nil {
			return fmt.Errorf("error fetching make IDs#%+v: %w", makeIds, makeErr)
		}

		return nil
	})

	var osResults *osPb.GetManyByIDsResponse
	wg.Go(func() error {
		var osErr error

		osIds := make([]int64, len(instances))
		for i, instance := range instances {
			osIds[i] = instance.GetMake().GetId()
		}

		osResults, osErr = h.osClient.GetManyByIDs(ctx, &osPb.GetManyByIDsRequest{
			Ids: osIds,
		})
		if osErr != nil {
			return fmt.Errorf("error fetching os IDs#%+v: %w", osIds, osErr)
		}

		return nil
	})

	err := wg.Wait()
	if err != nil {
		return err
	}

	for i, instance := range instances {
		instance.Make = makeResults.GetResults()[i]
		instance.Os = osResults.GetResults()[i]
	}

	return nil
}
