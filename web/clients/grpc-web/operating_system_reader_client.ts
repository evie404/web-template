import { OperatingSystemReaderClient as OperatingSystemReaderClientGrpc } from "../../protobuf/operating_system/Operating_system_readerServiceClientPb";

const OperatingSystemReaderClient = new OperatingSystemReaderClientGrpc(
  "http://locahost:8080"
);

export default OperatingSystemReaderClient;
