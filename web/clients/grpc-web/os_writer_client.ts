import { OSWriterClient as OSWriterClientGrpc } from "../../protobuf/os/Os_writerServiceClientPb";

const OSWriterClient = new OSWriterClientGrpc("http://localhost:8080");

export default OSWriterClient;
