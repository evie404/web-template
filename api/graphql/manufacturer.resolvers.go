package graphql

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"time"

	"github.com/rickypai/web-template/api/ent"
	"github.com/rickypai/web-template/api/ent/schema"
	"github.com/rickypai/web-template/api/graphql/generated"
	"github.com/rickypai/web-template/api/graphql/model"
)

func (r *manufacturerResolver) Phones(ctx context.Context, obj *ent.Manufacturer) ([]*ent.Phone, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *manufacturerMutationResolver) CreateManufacturer(ctx context.Context, obj *ent.ManufacturerMutation, input model.ManufacturerInput) (*ent.Manufacturer, error) {
	panic(fmt.Errorf("not implemented"))
}

// Manufacturer returns generated.ManufacturerResolver implementation.
func (r *Resolver) Manufacturer() generated.ManufacturerResolver { return &manufacturerResolver{r} }

// ManufacturerMutation returns generated.ManufacturerMutationResolver implementation.
func (r *Resolver) ManufacturerMutation() generated.ManufacturerMutationResolver {
	return &manufacturerMutationResolver{r}
}

type manufacturerResolver struct{ *Resolver }
type manufacturerMutationResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *manufacturerResolver) ID(ctx context.Context, obj *schema.Manufacturer) (int, error) {
	panic(fmt.Errorf("not implemented"))
}
func (r *manufacturerResolver) Name(ctx context.Context, obj *schema.Manufacturer) (string, error) {
	panic(fmt.Errorf("not implemented"))
}
func (r *manufacturerResolver) CreatedAt(ctx context.Context, obj *schema.Manufacturer) (*time.Time, error) {
	panic(fmt.Errorf("not implemented"))
}
func (r *manufacturerResolver) ModifiedAt(ctx context.Context, obj *schema.Manufacturer) (*time.Time, error) {
	panic(fmt.Errorf("not implemented"))
}
func (r *manufacturerMutationResolver) CreateMake(ctx context.Context, obj *ent.ManufacturerMutation, phone model.ManufacturerInput) (*schema.Manufacturer, error) {
	panic(fmt.Errorf("not implemented"))
}
