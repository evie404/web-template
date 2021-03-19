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

func (r *phoneResolver) OperatingSystem(ctx context.Context, obj *ent.Phone) (*ent.OperatingSystem, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *phoneResolver) Manufacturer(ctx context.Context, obj *ent.Phone) (*ent.Manufacturer, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *phoneMutationResolver) CreatePhone(ctx context.Context, obj *ent.PhoneMutation, input model.PhoneInput) (*ent.Phone, error) {
	panic(fmt.Errorf("not implemented"))
}

// Phone returns generated.PhoneResolver implementation.
func (r *Resolver) Phone() generated.PhoneResolver { return &phoneResolver{r} }

// PhoneMutation returns generated.PhoneMutationResolver implementation.
func (r *Resolver) PhoneMutation() generated.PhoneMutationResolver { return &phoneMutationResolver{r} }

type phoneResolver struct{ *Resolver }
type phoneMutationResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *phoneResolver) ID(ctx context.Context, obj *schema.Phone) (int, error) {
	panic(fmt.Errorf("not implemented"))
}
func (r *phoneResolver) Name(ctx context.Context, obj *schema.Phone) (string, error) {
	panic(fmt.Errorf("not implemented"))
}
func (r *phoneResolver) CreatedAt(ctx context.Context, obj *schema.Phone) (*time.Time, error) {
	panic(fmt.Errorf("not implemented"))
}
func (r *phoneResolver) ModifiedAt(ctx context.Context, obj *schema.Phone) (*time.Time, error) {
	panic(fmt.Errorf("not implemented"))
}
