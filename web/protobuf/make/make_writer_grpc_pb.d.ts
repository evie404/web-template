// package: make
// file: protobuf/make/make_writer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_make_make_writer_pb from "../../protobuf/make/make_writer_pb";
import * as protobuf_make_make_pb from "../../protobuf/make/make_pb";

interface IMakeWriterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOne: IMakeWriterService_ICreateOne;
}

interface IMakeWriterService_ICreateOne extends grpc.MethodDefinition<protobuf_make_make_writer_pb.CreateOneRequest, protobuf_make_make_writer_pb.CreateOneResponse> {
    path: "/make.MakeWriter/CreateOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_make_make_writer_pb.CreateOneRequest>;
    requestDeserialize: grpc.deserialize<protobuf_make_make_writer_pb.CreateOneRequest>;
    responseSerialize: grpc.serialize<protobuf_make_make_writer_pb.CreateOneResponse>;
    responseDeserialize: grpc.deserialize<protobuf_make_make_writer_pb.CreateOneResponse>;
}

export const MakeWriterService: IMakeWriterService;

export interface IMakeWriterServer {
    createOne: grpc.handleUnaryCall<protobuf_make_make_writer_pb.CreateOneRequest, protobuf_make_make_writer_pb.CreateOneResponse>;
}

export interface IMakeWriterClient {
    createOne(request: protobuf_make_make_writer_pb.CreateOneRequest, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    createOne(request: protobuf_make_make_writer_pb.CreateOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    createOne(request: protobuf_make_make_writer_pb.CreateOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
}

export class MakeWriterClient extends grpc.Client implements IMakeWriterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createOne(request: protobuf_make_make_writer_pb.CreateOneRequest, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    public createOne(request: protobuf_make_make_writer_pb.CreateOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    public createOne(request: protobuf_make_make_writer_pb.CreateOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
}
