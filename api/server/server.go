package server

import (
	"context"
	"database/sql"
	"fmt"
	"log"

	"github.com/golang/protobuf/ptypes"
	"github.com/rickypai/web-template/api/protobuf/api"
	"github.com/rickypai/web-template/api/protobuf/make"
	"github.com/rickypai/web-template/api/protobuf/os"
	"github.com/rickypai/web-template/api/protobuf/phone"
	repo "github.com/rickypai/web-template/api/repo/phone"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Server struct {
	api.UnimplementedAPIServer

	phoneGetter
}

func NewServer(db *sql.DB) *Server {
	return &Server{
		phoneGetter: repo.NewPhoneRepo(db),
	}
}

type phoneGetter interface {
	ListPhones(context.Context) ([]*phone.Phone, error)
}

func (s *Server) ListPhones(ctx context.Context, in *api.ListPhonesRequest) (*api.ListPhonesResponse, error) {
	fmt.Printf("Called ListPhones with %+v\n", in)

	phones, err := s.phoneGetter.ListPhones(ctx)
	if err != nil {
		log.Printf("%+v\n", err)
		return nil, err
	}

	log.Printf("%+v\n", phones)

	return &api.ListPhonesResponse{
		Phones: phones,
	}, nil
}

func (s *Server) GetPhone(ctx context.Context, in *api.GetPhoneRequest) (*api.GetPhoneResponse, error) {
	fmt.Printf("Called GetPhone with %+v\n", in)

	id := in.GetId()

	if id == 404 {
		return nil, status.Error(codes.NotFound, "not found")
	}

	if id == 500 {
		return nil, status.Error(codes.Unknown, "unknown")
	}

	return &api.GetPhoneResponse{
		Phone: getPhone(id),
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
