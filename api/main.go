package main

import (
	"context"
	"log"
	"net"
	"net/http"

	makeCl "github.com/rickypai/web-template/api/clients/make-api"
	osCl "github.com/rickypai/web-template/api/clients/os-api"
	"github.com/rickypai/web-template/api/config"
	"github.com/rickypai/web-template/api/extauth"
	makeSrv "github.com/rickypai/web-template/api/make-api/server"
	osSrv "github.com/rickypai/web-template/api/os-api/server"
	phoneSrv "github.com/rickypai/web-template/api/phone-api/server"
	"github.com/rickypai/web-template/api/protobuf/make"
	"github.com/rickypai/web-template/api/protobuf/os"
	"github.com/rickypai/web-template/api/protobuf/phone"
	"github.com/rickypai/web-template/api/server/address"
	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"
)

const (
	httpPort = ":50052"
)

func main() {
	lis, err := net.Listen("tcp", address.GeneralAPIAddress)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	ctx := context.Background()

	db, err := config.DB(ctx)
	if err != nil {
		log.Fatalf("connecting to database: %v", err)
	}

	makeClient := makeCl.NewMakeReaderLocalServer(db)
	osClient := osCl.NewOSReaderLocalServer(db)

	s := grpc.NewServer()
	phone.RegisterPhoneReaderServer(s, phoneSrv.NewReaderServer(db, makeClient, osClient))
	make.RegisterMakeReaderServer(s, makeSrv.NewReaderServer(db))
	os.RegisterOSReaderServer(s, osSrv.NewReaderServer(db))

	extAuth := extauth.NewExternalAuth()

	g, _ := errgroup.WithContext(ctx)
	g.Go(func() error {
		log.Printf("listening gRPC on %s", address.GeneralAPIAddress)
		return s.Serve(lis)
	})

	g.Go(func() error {
		log.Printf("listening HTTP on %s", httpPort)
		return http.ListenAndServe(httpPort, extAuth)
	})

	if err := g.Wait(); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
