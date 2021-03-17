import * as grpc from "@grpc/grpc-js";
import { ManufacturerReaderClient as ManufacturerReaderClientGrpc } from "../../protobuf/manufacturer/manufacturer_reader_grpc_pb";

const ManufacturerReaderClient = new ManufacturerReaderClientGrpc(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

export default ManufacturerReaderClient;
