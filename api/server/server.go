package server

import (
	"context"
	"fmt"

	"github.com/golang/protobuf/ptypes"
	"github.com/rickypai/web-template/api/protobuf/make"
	"github.com/rickypai/web-template/api/protobuf/os"
	"github.com/rickypai/web-template/api/protobuf/phone"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Server struct {
	phone.UnimplementedPhoneServiceServer
}

func (s *Server) GetPageByCursor(ctx context.Context, in *phone.GetPageByCursorRequest) (*phone.GetPageByCursorResponse, error) {
	return &phone.GetPageByCursorResponse{
		Results: []*phone.Phone{
			getPhone(1),
			getPhone(2),
			getPhone(3),
			getPhone(4),
		},
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
		Make: &make.Make{
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
