package graphql

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"time"

	"github.com/rickypai/web-template/api/ent"
	"github.com/rickypai/web-template/api/graphql/generated"
	"github.com/rickypai/web-template/api/graphql/model"
)

func (r *manufacturerResolver) Phones(ctx context.Context, obj *ent.Manufacturer) ([]*ent.Phone, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *manufacturerMutationResolver) CreateManufacturer(ctx context.Context, obj *ent.ManufacturerMutation, input model.ManufacturerInput) (*ent.Manufacturer, error) {
	now := time.Now()

	return r.client.Manufacturer.Create().
		SetName(input.Name).
		SetCreatedAt(now).
		SetModifiedAt(now).
		Save(ctx)
}

// Manufacturer returns generated.ManufacturerResolver implementation.
func (r *Resolver) Manufacturer() generated.ManufacturerResolver { return &manufacturerResolver{r} }

// ManufacturerMutation returns generated.ManufacturerMutationResolver implementation.
func (r *Resolver) ManufacturerMutation() generated.ManufacturerMutationResolver {
	return &manufacturerMutationResolver{r}
}

type manufacturerResolver struct{ *Resolver }
type manufacturerMutationResolver struct{ *Resolver }
