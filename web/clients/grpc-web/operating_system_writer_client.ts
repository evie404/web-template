import { OperatingSystemWriterClient as OperatingSystemWriterClientGrpc } from "../../protobuf/operating_system/Operating_system_writerServiceClientPb";

const OperatingSystemWriterClient = new OperatingSystemWriterClientGrpc(
  "http://locahost:8080"
);

export default OperatingSystemWriterClient;
