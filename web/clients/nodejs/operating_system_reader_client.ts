import * as grpc from "@grpc/grpc-js";
import { OperatingSystemReaderClient as OperatingSystemReaderClientGrpc } from "../../protobuf/operating_system/operating_system_reader_grpc_pb";

const OperatingSystemReaderClient = new OperatingSystemReaderClientGrpc(
  "locahost:8080",
  grpc.credentials.createInsecure()
);

export default OperatingSystemReaderClient;
