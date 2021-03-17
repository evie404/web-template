package repo

import (
	"context"
	"fmt"

	manufacturerPb "github.com/rickypai/web-template/api/protobuf/manufacturer"
	osPb "github.com/rickypai/web-template/api/protobuf/os"
	"golang.org/x/sync/errgroup"
)

type Hydrator struct {
	manufacturerClient manufacturerPb.ManufacturerReaderClient
	osClient   osPb.OSReaderClient
}

func NewHydrator(manufacturerClient manufacturerPb.ManufacturerReaderClient, osClient osPb.OSReaderClient) *Hydrator {
	return &Hydrator{
		manufacturerClient: manufacturerClient,
		osClient:   osClient,
	}
}

func (h *Hydrator) HydrateOne(ctx context.Context, instance *modelT) error {
	wg, ctx := errgroup.WithContext(ctx)

	var manufacturerResult *manufacturerPb.GetOneByIDResponse
	wg.Go(func() error {
		var manufacturerErr error
		manufacturerResult, manufacturerErr = h.manufacturerClient.GetOneByID(ctx, &manufacturerPb.GetOneByIDRequest{
			Id: instance.GetManufacturer().GetId(),
		})
		if manufacturerErr != nil {
			return fmt.Errorf("error fetching manufacturer ID#%v: %w", instance.GetManufacturer().GetId(), manufacturerErr)
		}

		return nil
	})

	var osResult *osPb.GetOneByIDResponse
	wg.Go(func() error {
		var osErr error
		osResult, osErr = h.osClient.GetOneByID(ctx, &osPb.GetOneByIDRequest{
			Id: instance.GetOs().GetId(),
		})
		if osErr != nil {
			return fmt.Errorf("error fetching os ID#%v: %w", instance.GetOs().GetId(), osErr)
		}

		return nil
	})

	err := wg.Wait()
	if err != nil {
		return err
	}

	instance.Manufacturer = manufacturerResult.GetResult()
	instance.Os = osResult.GetResult()

	return nil
}

func (h *Hydrator) HydrateMany(ctx context.Context, instances []*modelT) error {
	wg, ctx := errgroup.WithContext(ctx)

	manufacturerResults := make(map[int64]*manufacturerPb.Manufacturer, len(instances))
	wg.Go(func() error {
		manufacturerIds := make([]int64, len(instances))
		for i, instance := range instances {
			manufacturerIds[i] = instance.GetManufacturer().GetId()
		}

		manufacturersResponse, manufacturerErr := h.manufacturerClient.GetManyByIDs(ctx, &manufacturerPb.GetManyByIDsRequest{
			Ids: manufacturerIds,
		})
		if manufacturerErr != nil {
			return fmt.Errorf("error fetching manufacturer IDs#%+v: %w", manufacturerIds, manufacturerErr)
		}

		for _, result := range manufacturersResponse.GetResults() {
			manufacturerResults[result.GetId()] = result
		}

		return nil
	})

	osResults := make(map[int64]*osPb.OS, len(instances))
	wg.Go(func() error {
		osIds := make([]int64, len(instances))
		for i, instance := range instances {
			osIds[i] = instance.GetOs().GetId()
		}

		ossResponse, osErr := h.osClient.GetManyByIDs(ctx, &osPb.GetManyByIDsRequest{
			Ids: osIds,
		})
		if osErr != nil {
			return fmt.Errorf("error fetching os IDs#%+v: %w", osIds, osErr)
		}

		for _, result := range ossResponse.GetResults() {
			osResults[result.GetId()] = result
		}

		return nil
	})

	err := wg.Wait()
	if err != nil {
		return err
	}

	for _, instance := range instances {
		instance.Manufacturer = manufacturerResults[instance.GetManufacturer().GetId()]
		instance.Os = osResults[instance.GetOs().GetId()]
	}

	return nil
}
