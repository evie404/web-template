// Code generated by sqlc. DO NOT EDIT.

package phone

import (
	"context"
)

type Querier interface {
	GetByID(ctx context.Context, id int64) (Phone, error)
	ListPhones(ctx context.Context) ([]Phone, error)
}

var _ Querier = (*Queries)(nil)