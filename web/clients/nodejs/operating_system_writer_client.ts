import * as grpc from "@grpc/grpc-js";
import { OperatingSystemWriterClient as OperatingSystemWriterClientGrpc } from "../../protobuf/operating_system/operating_system_writer_grpc_pb";

const OperatingSystemWriterClient = new OperatingSystemWriterClientGrpc(
  "locahost:8080",
  grpc.credentials.createInsecure()
);

export default OperatingSystemWriterClient;
