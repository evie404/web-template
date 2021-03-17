package graphql

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"time"

	"github.com/rickypai/web-template/api/ent/schema"
	"github.com/rickypai/web-template/api/graphql/generated"
)

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

// Manufacturer returns generated.ManufacturerResolver implementation.
func (r *Resolver) Manufacturer() generated.ManufacturerResolver { return &manufacturerResolver{r} }

type manufacturerResolver struct{ *Resolver }
