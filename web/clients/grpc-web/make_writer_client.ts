import { MakeWriterClient as MakeWriterClientGrpc } from "../../protobuf/make/Make_writerServiceClientPb";

const MakeWriterClient = new MakeWriterClientGrpc("http://localhost:8080");

export default MakeWriterClient;
