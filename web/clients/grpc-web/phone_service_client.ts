import { PhoneReaderClient as PhoneReaderClientGrpc } from "../../protobuf/phone/Phone_serviceServiceClientPb";

const PhoneReaderClient = new PhoneReaderClientGrpc("http://localhost:8080");

export default PhoneReaderClient;
