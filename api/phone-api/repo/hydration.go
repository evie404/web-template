package repo

import (
	"context"
	"fmt"

	manufacturerPb "github.com/rickypai/web-template/api/protobuf/manufacturer"
	operatingSystemPb "github.com/rickypai/web-template/api/protobuf/operating_system"
	"golang.org/x/sync/errgroup"
)

type Hydrator struct {
	manufacturerClient    manufacturerPb.ManufacturerReaderClient
	operatingSystemClient operatingSystemPb.OperatingSystemReaderClient
}

func NewHydrator(manufacturerClient manufacturerPb.ManufacturerReaderClient, operatingSystemClient operatingSystemPb.OperatingSystemReaderClient) *Hydrator {
	return &Hydrator{
		manufacturerClient:    manufacturerClient,
		operatingSystemClient: operatingSystemClient,
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

	var operatingSystemResult *operatingSystemPb.GetOneByIDResponse
	wg.Go(func() error {
		var operatingSystemErr error
		operatingSystemResult, operatingSystemErr = h.operatingSystemClient.GetOneByID(ctx, &operatingSystemPb.GetOneByIDRequest{
			Id: instance.GetOperatingSystem().GetId(),
		})
		if operatingSystemErr != nil {
			return fmt.Errorf("error fetching operatingSystem ID#%v: %w", instance.GetOperatingSystem().GetId(), operatingSystemErr)
		}

		return nil
	})

	err := wg.Wait()
	if err != nil {
		return err
	}

	instance.Manufacturer = manufacturerResult.GetResult()
	instance.OperatingSystem = operatingSystemResult.GetResult()

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

	operatingSystemResults := make(map[int64]*operatingSystemPb.OperatingSystem, len(instances))
	wg.Go(func() error {
		operatingSystemIds := make([]int64, len(instances))
		for i, instance := range instances {
			operatingSystemIds[i] = instance.GetOperatingSystem().GetId()
		}

		operatingSystemsResponse, operatingSystemErr := h.operatingSystemClient.GetManyByIDs(ctx, &operatingSystemPb.GetManyByIDsRequest{
			Ids: operatingSystemIds,
		})
		if operatingSystemErr != nil {
			return fmt.Errorf("error fetching operatingSystem IDs#%+v: %w", operatingSystemIds, operatingSystemErr)
		}

		for _, result := range operatingSystemsResponse.GetResults() {
			operatingSystemResults[result.GetId()] = result
		}

		return nil
	})

	err := wg.Wait()
	if err != nil {
		return err
	}

	for _, instance := range instances {
		instance.Manufacturer = manufacturerResults[instance.GetManufacturer().GetId()]
		instance.OperatingSystem = operatingSystemResults[instance.GetOperatingSystem().GetId()]
	}

	return nil
}
