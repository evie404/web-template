import * as grpc from "@grpc/grpc-js";
import { PhoneWriterClient as PhoneWriterClientGrpc } from "../../protobuf/phone/phone_writer_grpc_pb";

const PhoneWriterClient = new PhoneWriterClientGrpc(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

export default PhoneWriterClient;
