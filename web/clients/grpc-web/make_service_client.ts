import { MakeReaderClient as MakeReaderClientGrpc } from "../../protobuf/make/Make_serviceServiceClientPb";

const MakeReaderClient = new MakeReaderClientGrpc("http://localhost:8080");

export default MakeReaderClient;
