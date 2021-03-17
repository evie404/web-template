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

func (r *phoneResolver) ID(ctx context.Context, obj *schema.Phone) (int, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *phoneResolver) Name(ctx context.Context, obj *schema.Phone) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *phoneResolver) OperatingSystem(ctx context.Context, obj *schema.Phone) (*schema.OperatingSystem, error) {
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

func (r *phoneMutationResolver) CreatePhone(ctx context.Context, obj *ent.PhoneMutation, phone model.PhoneInput) (*schema.Phone, error) {
	panic(fmt.Errorf("not implemented"))
}

// Phone returns generated.PhoneResolver implementation.
func (r *Resolver) Phone() generated.PhoneResolver { return &phoneResolver{r} }

// PhoneMutation returns generated.PhoneMutationResolver implementation.
func (r *Resolver) PhoneMutation() generated.PhoneMutationResolver { return &phoneMutationResolver{r} }

type phoneResolver struct{ *Resolver }
type phoneMutationResolver struct{ *Resolver }
