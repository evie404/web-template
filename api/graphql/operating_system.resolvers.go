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
