// Code generated by sqlc. DO NOT EDIT.

package phone

import (
	"time"
)

type Phone struct {
	ID         int64
	Name       string
	MakeID     int32
	OsID       int32
	CreatedAt  time.Time
	ModifiedAt time.Time
}
