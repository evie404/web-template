package main

import (
	"context"
	"log"
	"net"
	"net/http"

	"github.com/rickypai/web-template/api/config"
	"github.com/rickypai/web-template/api/extauth"
	"github.com/rickypai/web-template/api/protobuf/api"
	"github.com/rickypai/web-template/api/server"
	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"
)

const (
	grpcPort = ":50051"
	httpPort = ":50052"
)

func main() {
	lis, err := net.Listen("tcp", grpcPort)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	ctx := context.Background()

	db, err := config.DB(ctx)
	if err != nil {
		log.Fatalf("connecting to database: %v", err)
	}

	s := grpc.NewServer()
	api.RegisterAPIServer(s, server.NewServer(db))

	extAuth := extauth.NewExternalAuth()

	g := &errgroup.Group{}
	g.Go(func() error {
		log.Printf("listening gRPC on %s", grpcPort)
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
