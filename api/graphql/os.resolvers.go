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

func (r *oSResolver) ID(ctx context.Context, obj *schema.OS) (int, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *oSResolver) Name(ctx context.Context, obj *schema.OS) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *oSResolver) CreatedAt(ctx context.Context, obj *schema.OS) (*time.Time, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *oSResolver) ModifiedAt(ctx context.Context, obj *schema.OS) (*time.Time, error) {
	panic(fmt.Errorf("not implemented"))
}

// OS returns generated.OSResolver implementation.
func (r *Resolver) OS() generated.OSResolver { return &oSResolver{r} }

type oSResolver struct{ *Resolver }
