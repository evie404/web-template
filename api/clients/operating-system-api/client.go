package operatingSystem

import (
	"fmt"

	rpc "github.com/rickypai/web-template/api/protobuf/operating_system"
	"github.com/rickypai/web-template/api/server/address"
	"google.golang.org/grpc"
)

func NewOperatingSystemReaderClient() (rpc.OperatingSystemReaderClient, error) {
	opts := []grpc.DialOption{
		grpc.WithInsecure(),
	}

	conn, err := grpc.Dial(address.OperatingSystemReaderAddress, opts...)
	if err != nil {
		return nil, fmt.Errorf("error dialing %s: %w", address.OperatingSystemReaderAddress, err)
	}
	defer conn.Close()

	return rpc.NewOperatingSystemReaderClient(conn), nil
}
