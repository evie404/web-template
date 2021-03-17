// package: manufacturer
// file: protobuf/manufacturer/manufacturer_writer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_manufacturer_manufacturer_writer_pb from "../../protobuf/manufacturer/manufacturer_writer_pb";
import * as protobuf_manufacturer_manufacturer_pb from "../../protobuf/manufacturer/manufacturer_pb";

interface IManufacturerWriterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOne: IManufacturerWriterService_ICreateOne;
}

interface IManufacturerWriterService_ICreateOne extends grpc.MethodDefinition<protobuf_manufacturer_manufacturer_writer_pb.CreateOneRequest, protobuf_manufacturer_manufacturer_writer_pb.CreateOneResponse> {
    path: "/manufacturer.ManufacturerWriter/CreateOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_manufacturer_manufacturer_writer_pb.CreateOneRequest>;
    requestDeserialize: grpc.deserialize<protobuf_manufacturer_manufacturer_writer_pb.CreateOneRequest>;
    responseSerialize: grpc.serialize<protobuf_manufacturer_manufacturer_writer_pb.CreateOneResponse>;
    responseDeserialize: grpc.deserialize<protobuf_manufacturer_manufacturer_writer_pb.CreateOneResponse>;
}

export const ManufacturerWriterService: IManufacturerWriterService;

export interface IManufacturerWriterServer {
    createOne: grpc.handleUnaryCall<protobuf_manufacturer_manufacturer_writer_pb.CreateOneRequest, protobuf_manufacturer_manufacturer_writer_pb.CreateOneResponse>;
}

export interface IManufacturerWriterClient {
    createOne(request: protobuf_manufacturer_manufacturer_writer_pb.CreateOneRequest, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    createOne(request: protobuf_manufacturer_manufacturer_writer_pb.CreateOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    createOne(request: protobuf_manufacturer_manufacturer_writer_pb.CreateOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
}

export class ManufacturerWriterClient extends grpc.Client implements IManufacturerWriterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createOne(request: protobuf_manufacturer_manufacturer_writer_pb.CreateOneRequest, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    public createOne(request: protobuf_manufacturer_manufacturer_writer_pb.CreateOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    public createOne(request: protobuf_manufacturer_manufacturer_writer_pb.CreateOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_manufacturer_manufacturer_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
}
