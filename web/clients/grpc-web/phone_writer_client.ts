import { PhoneWriterClient as PhoneWriterClientGrpc } from "../../protobuf/phone/Phone_writerServiceClientPb";

const PhoneWriterClient = new PhoneWriterClientGrpc("http://localhost:8080");

export default PhoneWriterClient;
