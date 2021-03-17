package manufacturer

import (
	"fmt"

	rpc "github.com/rickypai/web-template/api/protobuf/manufacturer"
	"github.com/rickypai/web-template/api/server/address"
	"google.golang.org/grpc"
)

func NewManufacturerReaderClient() (rpc.ManufacturerReaderClient, error) {
	opts := []grpc.DialOption{
		grpc.WithInsecure(),
	}

	conn, err := grpc.Dial(address.ManufacturerReaderAddress, opts...)
	if err != nil {
		return nil, fmt.Errorf("error dialing %s: %w", address.ManufacturerReaderAddress, err)
	}
	defer conn.Close()

	return rpc.NewManufacturerReaderClient(conn), nil
}
