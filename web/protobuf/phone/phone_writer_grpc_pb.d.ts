// package: phone
// file: protobuf/phone/phone_writer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_phone_phone_writer_pb from "../../protobuf/phone/phone_writer_pb";
import * as protobuf_phone_phone_pb from "../../protobuf/phone/phone_pb";

interface IPhoneWriterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOne: IPhoneWriterService_ICreateOne;
}

interface IPhoneWriterService_ICreateOne extends grpc.MethodDefinition<protobuf_phone_phone_writer_pb.CreateOneRequest, protobuf_phone_phone_writer_pb.CreateOneResponse> {
    path: "/phone.PhoneWriter/CreateOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_phone_phone_writer_pb.CreateOneRequest>;
    requestDeserialize: grpc.deserialize<protobuf_phone_phone_writer_pb.CreateOneRequest>;
    responseSerialize: grpc.serialize<protobuf_phone_phone_writer_pb.CreateOneResponse>;
    responseDeserialize: grpc.deserialize<protobuf_phone_phone_writer_pb.CreateOneResponse>;
}

export const PhoneWriterService: IPhoneWriterService;

export interface IPhoneWriterServer {
    createOne: grpc.handleUnaryCall<protobuf_phone_phone_writer_pb.CreateOneRequest, protobuf_phone_phone_writer_pb.CreateOneResponse>;
}

export interface IPhoneWriterClient {
    createOne(request: protobuf_phone_phone_writer_pb.CreateOneRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    createOne(request: protobuf_phone_phone_writer_pb.CreateOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    createOne(request: protobuf_phone_phone_writer_pb.CreateOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
}

export class PhoneWriterClient extends grpc.Client implements IPhoneWriterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createOne(request: protobuf_phone_phone_writer_pb.CreateOneRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    public createOne(request: protobuf_phone_phone_writer_pb.CreateOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
    public createOne(request: protobuf_phone_phone_writer_pb.CreateOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_writer_pb.CreateOneResponse) => void): grpc.ClientUnaryCall;
}
