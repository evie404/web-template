// package: operating_system
// file: protobuf/operating_system/operating_system_reader.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_operating_system_operating_system_reader_pb from "../../protobuf/operating_system/operating_system_reader_pb";
import * as protobuf_operating_system_operating_system_pb from "../../protobuf/operating_system/operating_system_pb";

interface IOperatingSystemReaderService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOneByID: IOperatingSystemReaderService_IGetOneByID;
    getManyByIDs: IOperatingSystemReaderService_IGetManyByIDs;
    listByCursor: IOperatingSystemReaderService_IListByCursor;
    listByPage: IOperatingSystemReaderService_IListByPage;
    listByPrefix: IOperatingSystemReaderService_IListByPrefix;
}

interface IOperatingSystemReaderService_IGetOneByID extends grpc.MethodDefinition<protobuf_operating_system_operating_system_reader_pb.GetOneByIDRequest, protobuf_operating_system_operating_system_reader_pb.GetOneByIDResponse> {
    path: "/operating_system.OperatingSystemReader/GetOneByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_operating_system_operating_system_reader_pb.GetOneByIDRequest>;
    requestDeserialize: grpc.deserialize<protobuf_operating_system_operating_system_reader_pb.GetOneByIDRequest>;
    responseSerialize: grpc.serialize<protobuf_operating_system_operating_system_reader_pb.GetOneByIDResponse>;
    responseDeserialize: grpc.deserialize<protobuf_operating_system_operating_system_reader_pb.GetOneByIDResponse>;
}
interface IOperatingSystemReaderService_IGetManyByIDs extends grpc.MethodDefinition<protobuf_operating_system_operating_system_reader_pb.GetManyByIDsRequest, protobuf_operating_system_operating_system_reader_pb.GetManyByIDsResponse> {
    path: "/operating_system.OperatingSystemReader/GetManyByIDs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_operating_system_operating_system_reader_pb.GetManyByIDsRequest>;
    requestDeserialize: grpc.deserialize<protobuf_operating_system_operating_system_reader_pb.GetManyByIDsRequest>;
    responseSerialize: grpc.serialize<protobuf_operating_system_operating_system_reader_pb.GetManyByIDsResponse>;
    responseDeserialize: grpc.deserialize<protobuf_operating_system_operating_system_reader_pb.GetManyByIDsResponse>;
}
interface IOperatingSystemReaderService_IListByCursor extends grpc.MethodDefinition<protobuf_operating_system_operating_system_reader_pb.ListByCursorRequest, protobuf_operating_system_operating_system_reader_pb.ListByCursorResponse> {
    path: "/operating_system.OperatingSystemReader/ListByCursor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_operating_system_operating_system_reader_pb.ListByCursorRequest>;
    requestDeserialize: grpc.deserialize<protobuf_operating_system_operating_system_reader_pb.ListByCursorRequest>;
    responseSerialize: grpc.serialize<protobuf_operating_system_operating_system_reader_pb.ListByCursorResponse>;
    responseDeserialize: grpc.deserialize<protobuf_operating_system_operating_system_reader_pb.ListByCursorResponse>;
}
interface IOperatingSystemReaderService_IListByPage extends grpc.MethodDefinition<protobuf_operating_system_operating_system_reader_pb.ListByPageRequest, protobuf_operating_system_operating_system_reader_pb.ListByPageResponse> {
    path: "/operating_system.OperatingSystemReader/ListByPage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_operating_system_operating_system_reader_pb.ListByPageRequest>;
    requestDeserialize: grpc.deserialize<protobuf_operating_system_operating_system_reader_pb.ListByPageRequest>;
    responseSerialize: grpc.serialize<protobuf_operating_system_operating_system_reader_pb.ListByPageResponse>;
    responseDeserialize: grpc.deserialize<protobuf_operating_system_operating_system_reader_pb.ListByPageResponse>;
}
interface IOperatingSystemReaderService_IListByPrefix extends grpc.MethodDefinition<protobuf_operating_system_operating_system_reader_pb.ListByPrefixRequest, protobuf_operating_system_operating_system_reader_pb.ListByPrefixResponse> {
    path: "/operating_system.OperatingSystemReader/ListByPrefix";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_operating_system_operating_system_reader_pb.ListByPrefixRequest>;
    requestDeserialize: grpc.deserialize<protobuf_operating_system_operating_system_reader_pb.ListByPrefixRequest>;
    responseSerialize: grpc.serialize<protobuf_operating_system_operating_system_reader_pb.ListByPrefixResponse>;
    responseDeserialize: grpc.deserialize<protobuf_operating_system_operating_system_reader_pb.ListByPrefixResponse>;
}

export const OperatingSystemReaderService: IOperatingSystemReaderService;

export interface IOperatingSystemReaderServer {
    getOneByID: grpc.handleUnaryCall<protobuf_operating_system_operating_system_reader_pb.GetOneByIDRequest, protobuf_operating_system_operating_system_reader_pb.GetOneByIDResponse>;
    getManyByIDs: grpc.handleUnaryCall<protobuf_operating_system_operating_system_reader_pb.GetManyByIDsRequest, protobuf_operating_system_operating_system_reader_pb.GetManyByIDsResponse>;
    listByCursor: grpc.handleUnaryCall<protobuf_operating_system_operating_system_reader_pb.ListByCursorRequest, protobuf_operating_system_operating_system_reader_pb.ListByCursorResponse>;
    listByPage: grpc.handleUnaryCall<protobuf_operating_system_operating_system_reader_pb.ListByPageRequest, protobuf_operating_system_operating_system_reader_pb.ListByPageResponse>;
    listByPrefix: grpc.handleUnaryCall<protobuf_operating_system_operating_system_reader_pb.ListByPrefixRequest, protobuf_operating_system_operating_system_reader_pb.ListByPrefixResponse>;
}

export interface IOperatingSystemReaderClient {
    getOneByID(request: protobuf_operating_system_operating_system_reader_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_operating_system_operating_system_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_operating_system_operating_system_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_operating_system_operating_system_reader_pb.GetManyByIDsRequest, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_operating_system_operating_system_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_operating_system_operating_system_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_operating_system_operating_system_reader_pb.ListByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_operating_system_operating_system_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_operating_system_operating_system_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_operating_system_operating_system_reader_pb.ListByPageRequest, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_operating_system_operating_system_reader_pb.ListByPageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_operating_system_operating_system_reader_pb.ListByPageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    listByPrefix(request: protobuf_operating_system_operating_system_reader_pb.ListByPrefixRequest, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByPrefixResponse) => void): grpc.ClientUnaryCall;
    listByPrefix(request: protobuf_operating_system_operating_system_reader_pb.ListByPrefixRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByPrefixResponse) => void): grpc.ClientUnaryCall;
    listByPrefix(request: protobuf_operating_system_operating_system_reader_pb.ListByPrefixRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByPrefixResponse) => void): grpc.ClientUnaryCall;
}

export class OperatingSystemReaderClient extends grpc.Client implements IOperatingSystemReaderClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOneByID(request: protobuf_operating_system_operating_system_reader_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_operating_system_operating_system_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_operating_system_operating_system_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_operating_system_operating_system_reader_pb.GetManyByIDsRequest, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_operating_system_operating_system_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_operating_system_operating_system_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_operating_system_operating_system_reader_pb.ListByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_operating_system_operating_system_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_operating_system_operating_system_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_operating_system_operating_system_reader_pb.ListByPageRequest, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_operating_system_operating_system_reader_pb.ListByPageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_operating_system_operating_system_reader_pb.ListByPageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    public listByPrefix(request: protobuf_operating_system_operating_system_reader_pb.ListByPrefixRequest, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByPrefixResponse) => void): grpc.ClientUnaryCall;
    public listByPrefix(request: protobuf_operating_system_operating_system_reader_pb.ListByPrefixRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByPrefixResponse) => void): grpc.ClientUnaryCall;
    public listByPrefix(request: protobuf_operating_system_operating_system_reader_pb.ListByPrefixRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_reader_pb.ListByPrefixResponse) => void): grpc.ClientUnaryCall;
}
