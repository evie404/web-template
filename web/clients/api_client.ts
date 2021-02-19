import { PhoneServiceClient } from "../protobuf/phone/Phone_serviceServiceClientPb";

const Client = new PhoneServiceClient("http://localhost:8080");

export default Client;
