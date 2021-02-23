import { OSReaderClient as OSReaderClientGrpc } from "../../protobuf/os/Os_serviceServiceClientPb";

const OSReaderClient = new OSReaderClientGrpc("http://localhost:8080");

export default OSReaderClient;
