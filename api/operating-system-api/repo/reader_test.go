package repo

import (
	"context"
	"testing"

	"github.com/rickypai/web-template/api/config"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestReader_ListByPrefix(t *testing.T) {
	instanceA := &modelT{Name: "A"}
	instanceAAC := &modelT{Name: "AAC"}
	instanceABC := &modelT{Name: "ABC"}
	instanceAaa := &modelT{Name: "Aaa"}
	instanceB := &modelT{Name: "B"}
	instanceC := &modelT{Name: "C"}

	type fields struct {
		existing []*modelT
	}
	type args struct {
		prefix string
		limit  int64
	}
	tests := []struct {
		name    string
		fields  fields
		args    args
		want    []*modelT
		wantErr bool
	}{
		{
			"matches items that has the prefix (case-insensitive)",
			fields{
				existing: []*modelT{
					instanceA,
					instanceAaa,
					instanceAAC,
					instanceABC,
					instanceB,
					instanceC,
				},
			},
			args{
				prefix: "a",
				limit:  10,
			},
			nil, // TODO: implement case-insensitive match
			false,
		},
		{
			"matches items that has the prefix",
			fields{
				existing: []*modelT{
					instanceA,
					instanceAaa,
					instanceAAC,
					instanceABC,
					instanceB,
					instanceC,
				},
			},
			args{
				prefix: "A",
				limit:  10,
			},
			[]*modelT{
				instanceA,
				instanceAAC,
				instanceABC,
				instanceAaa,
			},
			false,
		},
		{
			"matches items that has the prefix up to a limit",
			fields{
				existing: []*modelT{
					instanceA,
					instanceAaa,
					instanceAAC,
					instanceABC,
					instanceB,
					instanceC,
				},
			},
			args{
				prefix: "A",
				limit:  2,
			},
			[]*modelT{
				instanceA,
				instanceAAC,
			},
			false,
		},
		{
			"returns nil if there are no matches",
			fields{
				existing: []*modelT{},
			},
			args{
				prefix: "Z",
				limit:  10,
			},
			nil,
			false,
		},
		{
			"returns nil if limit is 0",
			fields{
				existing: []*modelT{
					instanceA,
					instanceAaa,
					instanceAAC,
					instanceABC,
					instanceB,
					instanceC,
				},
			},
			args{
				prefix: "A",
				limit:  0,
			},
			nil,
			false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			ctx := context.Background()

			db, err := config.TestDB(ctx)
			require.NoError(t, err)

			tx, err := db.Begin()
			require.NoError(t, err)
			defer tx.Rollback()

			w := NewWriter(tx)
			for _, existing := range tt.fields.existing {
				// TODO: use translation method
				_, err := w.CreateOne(ctx, &createReqT{
					Name: existing.GetName(),
				})
				require.NoError(t, err)
			}

			r := NewReader(tx)

			got, err := r.ListByPrefix(ctx, tt.args.prefix, tt.args.limit)
			if tt.wantErr {
				assert.Error(t, err)
			} else {
				assert.NoError(t, err)
			}

			// clear out transient fields for equality assertion
			for _, result := range got {
				result.CreatedAt = nil
				result.ModifiedAt = nil
				result.Id = 0
			}

			assert.Equal(t, tt.want, got)
		})
	}
}
