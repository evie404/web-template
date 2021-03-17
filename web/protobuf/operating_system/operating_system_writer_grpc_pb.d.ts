// package: operating_system
// file: protobuf/operating_system/operating_system_writer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_operating_system_operating_system_writer_pb from "../../protobuf/operating_system/operating_system_writer_pb";
import * as protobuf_operating_system_operating_system_pb from "../../protobuf/operating_system/operating_system_pb";

interface IOperatingSystemWriterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOne: IOperatingSystemWriterService_ICreateOne;
}

interface IOperatingSystemWriterService_ICreateOne extends grpc.MethodDefinition<protobuf_operating_system_operating_system_writer_pb.CreateOneRequest, protobuf_operating_system_operating_system_writer_pb.CreateOneResponse> {
    path: "/operating_system.OperatingSystemWriter/CreateOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_operating_system_operating_system_writer_pb.CreateOneRequest>;
    requestDeserialize: grpc.deserialize<protobuf_operating_system_operating_system_writer_pb.CreateOneRequest>;
    responseSerialize: grpc.serialize<protobuf_operating_system_operating_system_writer_pb.CreateOneResponse>;
    responseDeserialize: grpc.deserialize<protobuf_operating_system_operating_system_writer_pb.CreateOneResponse>;
}

export const OperatingSystemWriterService: IOperatingSystemWriterService;

export interface IOperatingSystemWriterServer {
    createOne: grpc.handleUnaryCall<protobuf_operating_system_operating_system_writer_pb.CreateOneRequest, protobuf_operating_system_operating_system_writer_pb.CreateOneResponse>;
}

export interface IOperatingSystemWriterClient {
    createOne(request: protobuf_operating_system_operating_system_writer_pb.CreateOneRequest, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    createOne(request: protobuf_operating_system_operating_system_writer_pb.CreateOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    createOne(request: protobuf_operating_system_operating_system_writer_pb.CreateOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
}

export class OperatingSystemWriterClient extends grpc.Client implements IOperatingSystemWriterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createOne(request: protobuf_operating_system_operating_system_writer_pb.CreateOneRequest, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    public createOne(request: protobuf_operating_system_operating_system_writer_pb.CreateOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    public createOne(request: protobuf_operating_system_operating_system_writer_pb.CreateOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_operating_system_operating_system_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
}
