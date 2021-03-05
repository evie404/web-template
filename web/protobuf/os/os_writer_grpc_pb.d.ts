// package: os
// file: protobuf/os/os_writer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_os_os_writer_pb from "../../protobuf/os/os_writer_pb";
import * as protobuf_os_os_pb from "../../protobuf/os/os_pb";

interface IOSWriterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOne: IOSWriterService_ICreateOne;
}

interface IOSWriterService_ICreateOne extends grpc.MethodDefinition<protobuf_os_os_writer_pb.CreateOneRequest, protobuf_os_os_writer_pb.CreateOneResponse> {
    path: "/os.OSWriter/CreateOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_os_os_writer_pb.CreateOneRequest>;
    requestDeserialize: grpc.deserialize<protobuf_os_os_writer_pb.CreateOneRequest>;
    responseSerialize: grpc.serialize<protobuf_os_os_writer_pb.CreateOneResponse>;
    responseDeserialize: grpc.deserialize<protobuf_os_os_writer_pb.CreateOneResponse>;
}

export const OSWriterService: IOSWriterService;

export interface IOSWriterServer {
    createOne: grpc.handleUnaryCall<protobuf_os_os_writer_pb.CreateOneRequest, protobuf_os_os_writer_pb.CreateOneResponse>;
}

export interface IOSWriterClient {
    createOne(request: protobuf_os_os_writer_pb.CreateOneRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    createOne(request: protobuf_os_os_writer_pb.CreateOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    createOne(request: protobuf_os_os_writer_pb.CreateOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
}

export class OSWriterClient extends grpc.Client implements IOSWriterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createOne(request: protobuf_os_os_writer_pb.CreateOneRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    public createOne(request: protobuf_os_os_writer_pb.CreateOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    public createOne(request: protobuf_os_os_writer_pb.CreateOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
}
