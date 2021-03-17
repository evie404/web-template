// package: manufacturer
// file: protobuf/manufacturer/manufacturer_reader.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_manufacturer_manufacturer_reader_pb from "../../protobuf/manufacturer/manufacturer_reader_pb";
import * as protobuf_manufacturer_manufacturer_pb from "../../protobuf/manufacturer/manufacturer_pb";

interface IManufacturerReaderService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOneByID: IManufacturerReaderService_IGetOneByID;
    getManyByIDs: IManufacturerReaderService_IGetManyByIDs;
    listByCursor: IManufacturerReaderService_IListByCursor;
    listByPage: IManufacturerReaderService_IListByPage;
    listByPrefix: IManufacturerReaderService_IListByPrefix;
}

interface IManufacturerReaderService_IGetOneByID extends grpc.MethodDefinition<protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest, protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse> {
    path: "/manufacturer.ManufacturerReader/GetOneByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest>;
    requestDeserialize: grpc.deserialize<protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest>;
    responseSerialize: grpc.serialize<protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse>;
    responseDeserialize: grpc.deserialize<protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse>;
}
interface IManufacturerReaderService_IGetManyByIDs extends grpc.MethodDefinition<protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest, protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse> {
    path: "/manufacturer.ManufacturerReader/GetManyByIDs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest>;
    requestDeserialize: grpc.deserialize<protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest>;
    responseSerialize: grpc.serialize<protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse>;
    responseDeserialize: grpc.deserialize<protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse>;
}
interface IManufacturerReaderService_IListByCursor extends grpc.MethodDefinition<protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest, protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse> {
    path: "/manufacturer.ManufacturerReader/ListByCursor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest>;
    requestDeserialize: grpc.deserialize<protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest>;
    responseSerialize: grpc.serialize<protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse>;
    responseDeserialize: grpc.deserialize<protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse>;
}
interface IManufacturerReaderService_IListByPage extends grpc.MethodDefinition<protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest, protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse> {
    path: "/manufacturer.ManufacturerReader/ListByPage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest>;
    requestDeserialize: grpc.deserialize<protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest>;
    responseSerialize: grpc.serialize<protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse>;
    responseDeserialize: grpc.deserialize<protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse>;
}
interface IManufacturerReaderService_IListByPrefix extends grpc.MethodDefinition<protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest, protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse> {
    path: "/manufacturer.ManufacturerReader/ListByPrefix";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest>;
    requestDeserialize: grpc.deserialize<protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest>;
    responseSerialize: grpc.serialize<protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse>;
    responseDeserialize: grpc.deserialize<protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse>;
}

export const ManufacturerReaderService: IManufacturerReaderService;

export interface IManufacturerReaderServer {
    getOneByID: grpc.handleUnaryCall<protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest, protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse>;
    getManyByIDs: grpc.handleUnaryCall<protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest, protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse>;
    listByCursor: grpc.handleUnaryCall<protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest, protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse>;
    listByPage: grpc.handleUnaryCall<protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest, protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse>;
    listByPrefix: grpc.handleUnaryCall<protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest, protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse>;
}

export interface IManufacturerReaderClient {
    getOneByID(request: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    listByPrefix(request: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse) => void): grpc.ClientUnaryCall;
    listByPrefix(request: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse) => void): grpc.ClientUnaryCall;
    listByPrefix(request: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse) => void): grpc.ClientUnaryCall;
}

export class ManufacturerReaderClient extends grpc.Client implements IManufacturerReaderClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOneByID(request: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    public listByPrefix(request: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse) => void): grpc.ClientUnaryCall;
    public listByPrefix(request: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse) => void): grpc.ClientUnaryCall;
    public listByPrefix(request: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse) => void): grpc.ClientUnaryCall;
}
