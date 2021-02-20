// package: phone
// file: protobuf/phone/phone_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_phone_phone_service_pb from "../../protobuf/phone/phone_service_pb";
import * as protobuf_phone_phone_pb from "../../protobuf/phone/phone_pb";

interface IPhoneServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOneByID: IPhoneServiceService_IGetOneByID;
    listByCursor: IPhoneServiceService_IListByCursor;
}

interface IPhoneServiceService_IGetOneByID extends grpc.MethodDefinition<protobuf_phone_phone_service_pb.GetOneByIDRequest, protobuf_phone_phone_service_pb.GetOneByIDResponse> {
    path: "/phone.PhoneService/GetOneByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_phone_phone_service_pb.GetOneByIDRequest>;
    requestDeserialize: grpc.deserialize<protobuf_phone_phone_service_pb.GetOneByIDRequest>;
    responseSerialize: grpc.serialize<protobuf_phone_phone_service_pb.GetOneByIDResponse>;
    responseDeserialize: grpc.deserialize<protobuf_phone_phone_service_pb.GetOneByIDResponse>;
}
interface IPhoneServiceService_IListByCursor extends grpc.MethodDefinition<protobuf_phone_phone_service_pb.ListByCursorRequest, protobuf_phone_phone_service_pb.ListByCursorResponse> {
    path: "/phone.PhoneService/ListByCursor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_phone_phone_service_pb.ListByCursorRequest>;
    requestDeserialize: grpc.deserialize<protobuf_phone_phone_service_pb.ListByCursorRequest>;
    responseSerialize: grpc.serialize<protobuf_phone_phone_service_pb.ListByCursorResponse>;
    responseDeserialize: grpc.deserialize<protobuf_phone_phone_service_pb.ListByCursorResponse>;
}

export const PhoneServiceService: IPhoneServiceService;

export interface IPhoneServiceServer {
    getOneByID: grpc.handleUnaryCall<protobuf_phone_phone_service_pb.GetOneByIDRequest, protobuf_phone_phone_service_pb.GetOneByIDResponse>;
    listByCursor: grpc.handleUnaryCall<protobuf_phone_phone_service_pb.ListByCursorRequest, protobuf_phone_phone_service_pb.ListByCursorResponse>;
}

export interface IPhoneServiceClient {
    getOneByID(request: protobuf_phone_phone_service_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_phone_phone_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_phone_phone_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_phone_phone_service_pb.ListByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_phone_phone_service_pb.ListByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_phone_phone_service_pb.ListByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
}

export class PhoneServiceClient extends grpc.Client implements IPhoneServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOneByID(request: protobuf_phone_phone_service_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_phone_phone_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_phone_phone_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_phone_phone_service_pb.ListByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_phone_phone_service_pb.ListByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_phone_phone_service_pb.ListByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
}
