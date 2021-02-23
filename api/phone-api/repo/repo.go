package repo

import (
	"context"
	"fmt"

	"github.com/golang/protobuf/ptypes"
	makePb "github.com/rickypai/web-template/api/protobuf/make"
	"github.com/rickypai/web-template/api/protobuf/os"
	rpc "github.com/rickypai/web-template/api/protobuf/phone"
	cursorPkg "github.com/rickypai/web-template/api/server/cursor"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func NewPhoneRepo() *PhoneRepo {
	return &PhoneRepo{}
}

type PhoneRepo struct {
}

func (s *PhoneRepo) ListByPage(ctx context.Context, req cursorPkg.PageRequest) ([]*rpc.Phone, *cursorPkg.PageResult, error) {
	page, cursor, count := cursorPkg.GetPageOptions(req)
	results := make([]*rpc.Phone, 0, count)

	for i := cursor + 1; i < cursor+1+int64(count); i++ {
		results = append(results, getPhone(i))
	}

	return results, &cursorPkg.PageResult{
		NextPage:   page + 1,
		HasNext:    true,
		TotalPages: 100,
	}, nil
}

func (s *PhoneRepo) ListByCursor(ctx context.Context, req cursorPkg.CursorRequest) ([]*rpc.Phone, *cursorPkg.CursorResult, error) {
	cursor, count := cursorPkg.GetCursorOptions(req)
	results := make([]*rpc.Phone, 0, count)

	for i := cursor + 1; i < cursor+1+int64(count); i++ {
		results = append(results, getPhone(i))
	}

	nextPageCursor := results[len(results)-1].GetId()

	return results, &cursorPkg.CursorResult{
		Cursor: nextPageCursor,
	}, nil
}

func (s *PhoneRepo) GetOneByID(ctx context.Context, id int64) (*rpc.Phone, error) {
	if id == 404 {
		return nil, status.Error(codes.NotFound, "not found")
	}

	if id == 500 {
		return nil, status.Error(codes.Unknown, "unknown")
	}

	return getPhone(id), nil
}

func getPhone(id int64) *rpc.Phone {
	ts := ptypes.TimestampNow()

	return &rpc.Phone{
		Id:   id,
		Name: fmt.Sprintf("Phone #%v", id),
		Make: &makePb.Make{
			Id:   id,
			Name: fmt.Sprintf("Make #%v", id),

			CreatedAt:  ts,
			ModifiedAt: ts,
		},
		Os: &os.OS{
			Id:   id,
			Name: fmt.Sprintf("OS #%v", id),

			CreatedAt:  ts,
			ModifiedAt: ts,
		},

		CreatedAt:  ts,
		ModifiedAt: ts,
	}
}
