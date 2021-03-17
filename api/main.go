package main

import (
	"context"
	"log"
	"net"
	"net/http"

	manufacturerCl "github.com/rickypai/web-template/api/clients/manufacturer-api"
	osCl "github.com/rickypai/web-template/api/clients/os-api"
	"github.com/rickypai/web-template/api/config"
	"github.com/rickypai/web-template/api/extauth"
	manufacturerSrv "github.com/rickypai/web-template/api/manufacturer-api/server"
	osSrv "github.com/rickypai/web-template/api/os-api/server"
	phoneSrv "github.com/rickypai/web-template/api/phone-api/server"
	"github.com/rickypai/web-template/api/protobuf/manufacturer"
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

	manufacturerClient := manufacturerCl.NewLocalReadServer(db)
	osClient := osCl.NewLocalReadServer(db)

	s := grpc.NewServer()
	phone.RegisterPhoneReaderServer(s, phoneSrv.NewReadServer(db, manufacturerClient, osClient))
	manufacturer.RegisterManufacturerReaderServer(s, manufacturerSrv.NewReadServer(db))
	os.RegisterOSReaderServer(s, osSrv.NewReadServer(db))

	phone.RegisterPhoneWriterServer(s, phoneSrv.NewWriteServer(db))
	manufacturer.RegisterManufacturerWriterServer(s, manufacturerSrv.NewWriteServer(db))
	os.RegisterOSWriterServer(s, osSrv.NewWriteServer(db))

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
