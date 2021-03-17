import { ManufacturerReaderClient as ManufacturerReaderClientGrpc } from "../../protobuf/manufacturer/Manufacturer_readerServiceClientPb";

const ManufacturerReaderClient = new ManufacturerReaderClientGrpc(
  "http://localhost:8080"
);

export default ManufacturerReaderClient;
