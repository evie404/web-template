package cursor

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

type pageRequest struct {
	page, size int64
}

func (r *pageRequest) GetPage() int64 {
	if r == nil {
		return 0
	}

	return r.page
}

func (r *pageRequest) GetSize() int64 {
	if r == nil {
		return 0
	}

	return r.size
}

func TestGetPageOptions(t *testing.T) {
	tests := []struct {
		name       string
		arg        PageRequest
		wantCursor int64
		wantCount  int
	}{
		{
			"returns 0 cursor and default count for zero request",
			&pageRequest{
				page: 0,
				size: 0,
			},
			0,
			defaultCount,
		},
		{
			"returns one page offset for cursor and default count for one page",
			&pageRequest{
				page: 1,
				size: 0,
			},
			defaultCount,
			defaultCount,
		},
		{
			"returns ten pages offset for cursor and default count for tenth page",
			&pageRequest{
				page: 10,
				size: 0,
			},
			defaultCount * 10,
			defaultCount,
		},
		{
			"returns ten pages offset for cursor and default count for tenth page with negative page size",
			&pageRequest{
				page: 10,
				size: -123,
			},
			defaultCount * 10,
			defaultCount,
		},
		{
			"returns ten pages offset for cursor and default count for tenth page with page size larger than twice of default",
			&pageRequest{
				page: 10,
				size: defaultCount*2 + 1,
			},
			defaultCount * 10,
			defaultCount,
		},
		{
			"returns ten pages offset for cursor and default count for tenth page and custom size",
			&pageRequest{
				page: 10,
				size: 15,
			},
			15 * 10,
			15,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			gotCursor, gotCount := GetPageOptions(tt.arg)
			assert.Equal(t, tt.wantCursor, gotCursor)
			assert.Equal(t, tt.wantCount, gotCount)
		})
	}
}
