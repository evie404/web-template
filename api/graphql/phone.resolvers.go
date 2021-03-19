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

func (r *phoneResolver) OperatingSystem(ctx context.Context, obj *ent.Phone) (*ent.OperatingSystem, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *phoneResolver) Manufacturer(ctx context.Context, obj *ent.Phone) (*ent.Manufacturer, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *phoneMutationResolver) CreatePhone(ctx context.Context, obj *ent.PhoneMutation, input model.PhoneInput) (*ent.Phone, error) {
	now := time.Now()

	return r.client.Phone.Create().
		SetName(input.Name).
		SetOsID(input.OperatingSystemID).
		SetManufacturerID(input.ManufacturerID).
		SetCreatedAt(now).
		SetModifiedAt(now).
		Save(ctx)
}

// Phone returns generated.PhoneResolver implementation.
func (r *Resolver) Phone() generated.PhoneResolver { return &phoneResolver{r} }

// PhoneMutation returns generated.PhoneMutationResolver implementation.
func (r *Resolver) PhoneMutation() generated.PhoneMutationResolver { return &phoneMutationResolver{r} }

type phoneResolver struct{ *Resolver }
type phoneMutationResolver struct{ *Resolver }
