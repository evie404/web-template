// Code generated by sqlc. DO NOT EDIT.

package app

import (
	"context"
)

type Querier interface {
	GetByID(ctx context.Context, id int32) (App, error)
}

var _ Querier = (*Queries)(nil)
