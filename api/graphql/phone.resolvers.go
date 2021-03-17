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

func (r *phoneResolver) ID(ctx context.Context, obj *schema.Phone) (int, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *phoneResolver) Name(ctx context.Context, obj *schema.Phone) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *phoneResolver) Os(ctx context.Context, obj *schema.Phone) (*schema.OS, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *phoneResolver) Manufacturer(ctx context.Context, obj *schema.Phone) (*schema.Manufacturer, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *phoneResolver) CreatedAt(ctx context.Context, obj *schema.Phone) (*time.Time, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *phoneResolver) ModifiedAt(ctx context.Context, obj *schema.Phone) (*time.Time, error) {
	panic(fmt.Errorf("not implemented"))
}

// Phone returns generated.PhoneResolver implementation.
func (r *Resolver) Phone() generated.PhoneResolver { return &phoneResolver{r} }

type phoneResolver struct{ *Resolver }
