import * as grpc from "@grpc/grpc-js";
import { MakeWriterClient as MakeWriterClientGrpc } from "../../protobuf/make/make_writer_grpc_pb";

const MakeWriterClient = new MakeWriterClientGrpc(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

export default MakeWriterClient;
