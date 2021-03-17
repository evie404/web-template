import * as grpc from "@grpc/grpc-js";
import { ManufacturerWriterClient as ManufacturerWriterClientGrpc } from "../../protobuf/manufacturer/manufacturer_writer_grpc_pb";

const ManufacturerWriterClient = new ManufacturerWriterClientGrpc(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

export default ManufacturerWriterClient;
