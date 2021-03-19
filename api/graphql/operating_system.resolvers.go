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

func (r *operatingSystemResolver) Phones(ctx context.Context, obj *ent.OperatingSystem) ([]*ent.Phone, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *operatingSystemMutationResolver) CreateOperatingSystem(ctx context.Context, obj *ent.OperatingSystemMutation, input model.OperatingSystemInput) (*ent.OperatingSystem, error) {
	now := time.Now()

	return r.client.OperatingSystem.Create().
		SetName(input.Name).
		SetCreatedAt(now).
		SetModifiedAt(now).
		Save(ctx)
}

// OperatingSystem returns generated.OperatingSystemResolver implementation.
func (r *Resolver) OperatingSystem() generated.OperatingSystemResolver {
	return &operatingSystemResolver{r}
}

// OperatingSystemMutation returns generated.OperatingSystemMutationResolver implementation.
func (r *Resolver) OperatingSystemMutation() generated.OperatingSystemMutationResolver {
	return &operatingSystemMutationResolver{r}
}

type operatingSystemResolver struct{ *Resolver }
type operatingSystemMutationResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *operatingSystemResolver) ID(ctx context.Context, obj *schema.OperatingSystem) (int, error) {
	panic(fmt.Errorf("not implemented"))
}
func (r *operatingSystemResolver) Name(ctx context.Context, obj *schema.OperatingSystem) (string, error) {
	panic(fmt.Errorf("not implemented"))
}
func (r *operatingSystemResolver) CreatedAt(ctx context.Context, obj *schema.OperatingSystem) (*time.Time, error) {
	panic(fmt.Errorf("not implemented"))
}
func (r *operatingSystemResolver) ModifiedAt(ctx context.Context, obj *schema.OperatingSystem) (*time.Time, error) {
	panic(fmt.Errorf("not implemented"))
}
