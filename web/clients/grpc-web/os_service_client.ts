import { OSServiceClient as OSServiceClientGrpc } from "../../protobuf/os/OS_serviceServiceClientPb";

const OSServiceClient = new OSServiceClientGrpc("http://localhost:8080");

export default OSServiceClient;
