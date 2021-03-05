/**
 * @fileoverview gRPC-Web generated client stub for phone
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protobuf_phone_phone_writer_pb from '../../protobuf/phone/phone_writer_pb';


export class PhoneWriterClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateOne = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_phone_phone_writer_pb.CreateOneResponse,
    (request: protobuf_phone_phone_writer_pb.CreateOneRequest) => {
      return request.serializeBinary();
    },
    protobuf_phone_phone_writer_pb.CreateOneResponse.deserializeBinary
  );

  createOne(
    request: protobuf_phone_phone_writer_pb.CreateOneRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_phone_phone_writer_pb.CreateOneResponse>;

  createOne(
    request: protobuf_phone_phone_writer_pb.CreateOneRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_phone_phone_writer_pb.CreateOneResponse) => void): grpcWeb.ClientReadableStream<protobuf_phone_phone_writer_pb.CreateOneResponse>;

  createOne(
    request: protobuf_phone_phone_writer_pb.CreateOneRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_phone_phone_writer_pb.CreateOneResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/phone.PhoneWriter/CreateOne',
        request,
        metadata || {},
        this.methodInfoCreateOne,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/phone.PhoneWriter/CreateOne',
    request,
    metadata || {},
    this.methodInfoCreateOne);
  }

}

