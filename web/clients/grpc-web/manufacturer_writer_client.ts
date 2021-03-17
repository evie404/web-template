import { ManufacturerWriterClient as ManufacturerWriterClientGrpc } from "../../protobuf/manufacturer/Manufacturer_writerServiceClientPb";

const ManufacturerWriterClient = new ManufacturerWriterClientGrpc("http://localhost:8080");

export default ManufacturerWriterClient;
