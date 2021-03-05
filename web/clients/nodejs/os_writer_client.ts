import * as grpc from "@grpc/grpc-js";
import { OSWriterClient as OSWriterClientGrpc } from "../../protobuf/os/os_writer_grpc_pb";

const OSWriterClient = new OSWriterClientGrpc(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

export default OSWriterClient;
