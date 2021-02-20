package server

import (
	"context"
	"fmt"

	"github.com/golang/protobuf/ptypes"
	makePb "github.com/rickypai/web-template/api/protobuf/make"
	"github.com/rickypai/web-template/api/protobuf/os"
	"github.com/rickypai/web-template/api/protobuf/phone"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Server struct {
	phone.UnimplementedPhoneServiceServer
}

type CursorRequest interface {
	GetCursor() int64
	GetCount() int64
}

const defaultCount = 20

func getCursorOptions(req CursorRequest) (cursor int64, count int) {
	cursor = req.GetCursor()
	count = int(req.GetCount())
	if count < 1 || count > defaultCount*2 {
		count = defaultCount
	}

	return cursor, count
}

func (s *Server) GetPageByCursor(ctx context.Context, in *phone.GetPageByCursorRequest) (*phone.GetPageByCursorResponse, error) {
	cursor, count := getCursorOptions(in)
	results := make([]*phone.Phone, 0, count)

	for i := cursor + 1; i < cursor+1+int64(count); i++ {
		results = append(results, getPhone(i))
	}

	nextPageCursor := results[len(results)-1].GetId()

	return &phone.GetPageByCursorResponse{
		Results: results,
		Cursor:  nextPageCursor,
	}, nil
}

func (s *Server) GetOneByID(ctx context.Context, in *phone.GetOneByIDRequest) (*phone.GetOneByIDResponse, error) {
	fmt.Printf("Called GetPhone with %+v\n", in)

	id := in.GetId()

	if id == 404 {
		return nil, status.Error(codes.NotFound, "not found")
	}

	if id == 500 {
		return nil, status.Error(codes.Unknown, "unknown")
	}

	return &phone.GetOneByIDResponse{
		Result: getPhone(id),
	}, nil
}

func getPhone(id int64) *phone.Phone {
	ts := ptypes.TimestampNow()

	return &phone.Phone{
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
