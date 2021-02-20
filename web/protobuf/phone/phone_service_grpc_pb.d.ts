// package: phone
// file: protobuf/phone/phone_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_phone_phone_service_pb from "../../protobuf/phone/phone_service_pb";
import * as protobuf_phone_phone_pb from "../../protobuf/phone/phone_pb";

interface IPhoneServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOneByID: IPhoneServiceService_IGetOneByID;
    getPageByCursor: IPhoneServiceService_IGetPageByCursor;
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
interface IPhoneServiceService_IGetPageByCursor extends grpc.MethodDefinition<protobuf_phone_phone_service_pb.GetPageByCursorRequest, protobuf_phone_phone_service_pb.GetPageByCursorResponse> {
    path: "/phone.PhoneService/GetPageByCursor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_phone_phone_service_pb.GetPageByCursorRequest>;
    requestDeserialize: grpc.deserialize<protobuf_phone_phone_service_pb.GetPageByCursorRequest>;
    responseSerialize: grpc.serialize<protobuf_phone_phone_service_pb.GetPageByCursorResponse>;
    responseDeserialize: grpc.deserialize<protobuf_phone_phone_service_pb.GetPageByCursorResponse>;
}

export const PhoneServiceService: IPhoneServiceService;

export interface IPhoneServiceServer {
    getOneByID: grpc.handleUnaryCall<protobuf_phone_phone_service_pb.GetOneByIDRequest, protobuf_phone_phone_service_pb.GetOneByIDResponse>;
    getPageByCursor: grpc.handleUnaryCall<protobuf_phone_phone_service_pb.GetPageByCursorRequest, protobuf_phone_phone_service_pb.GetPageByCursorResponse>;
}

export interface IPhoneServiceClient {
    getOneByID(request: protobuf_phone_phone_service_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_phone_phone_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_phone_phone_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getPageByCursor(request: protobuf_phone_phone_service_pb.GetPageByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetPageByCursorResponse) => void): grpc.ClientUnaryCall;
    getPageByCursor(request: protobuf_phone_phone_service_pb.GetPageByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetPageByCursorResponse) => void): grpc.ClientUnaryCall;
    getPageByCursor(request: protobuf_phone_phone_service_pb.GetPageByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetPageByCursorResponse) => void): grpc.ClientUnaryCall;
}

export class PhoneServiceClient extends grpc.Client implements IPhoneServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOneByID(request: protobuf_phone_phone_service_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_phone_phone_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_phone_phone_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getPageByCursor(request: protobuf_phone_phone_service_pb.GetPageByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetPageByCursorResponse) => void): grpc.ClientUnaryCall;
    public getPageByCursor(request: protobuf_phone_phone_service_pb.GetPageByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetPageByCursorResponse) => void): grpc.ClientUnaryCall;
    public getPageByCursor(request: protobuf_phone_phone_service_pb.GetPageByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetPageByCursorResponse) => void): grpc.ClientUnaryCall;
}
