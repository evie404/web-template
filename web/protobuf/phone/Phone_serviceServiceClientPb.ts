/**
 * @fileoverview gRPC-Web generated client stub for phone
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protobuf_phone_phone_service_pb from '../../protobuf/phone/phone_service_pb';


export class PhoneServiceClient {
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

  methodInfoGetOneByID = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_phone_phone_service_pb.GetOneByIDResponse,
    (request: protobuf_phone_phone_service_pb.GetOneByIDRequest) => {
      return request.serializeBinary();
    },
    protobuf_phone_phone_service_pb.GetOneByIDResponse.deserializeBinary
  );

  getOneByID(
    request: protobuf_phone_phone_service_pb.GetOneByIDRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_phone_phone_service_pb.GetOneByIDResponse>;

  getOneByID(
    request: protobuf_phone_phone_service_pb.GetOneByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_phone_phone_service_pb.GetOneByIDResponse) => void): grpcWeb.ClientReadableStream<protobuf_phone_phone_service_pb.GetOneByIDResponse>;

  getOneByID(
    request: protobuf_phone_phone_service_pb.GetOneByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_phone_phone_service_pb.GetOneByIDResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/phone.PhoneService/GetOneByID',
        request,
        metadata || {},
        this.methodInfoGetOneByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/phone.PhoneService/GetOneByID',
    request,
    metadata || {},
    this.methodInfoGetOneByID);
  }

  methodInfoGetPageByCursor = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_phone_phone_service_pb.GetPageByCursorResponse,
    (request: protobuf_phone_phone_service_pb.GetPageByCursorRequest) => {
      return request.serializeBinary();
    },
    protobuf_phone_phone_service_pb.GetPageByCursorResponse.deserializeBinary
  );

  getPageByCursor(
    request: protobuf_phone_phone_service_pb.GetPageByCursorRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_phone_phone_service_pb.GetPageByCursorResponse>;

  getPageByCursor(
    request: protobuf_phone_phone_service_pb.GetPageByCursorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_phone_phone_service_pb.GetPageByCursorResponse) => void): grpcWeb.ClientReadableStream<protobuf_phone_phone_service_pb.GetPageByCursorResponse>;

  getPageByCursor(
    request: protobuf_phone_phone_service_pb.GetPageByCursorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_phone_phone_service_pb.GetPageByCursorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/phone.PhoneService/GetPageByCursor',
        request,
        metadata || {},
        this.methodInfoGetPageByCursor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/phone.PhoneService/GetPageByCursor',
    request,
    metadata || {},
    this.methodInfoGetPageByCursor);
  }

}

