/**
 * @fileoverview gRPC-Web generated client stub for make
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protobuf_make_make_service_pb from '../../protobuf/make/make_service_pb';


export class MakeReaderClient {
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
    protobuf_make_make_service_pb.GetOneByIDResponse,
    (request: protobuf_make_make_service_pb.GetOneByIDRequest) => {
      return request.serializeBinary();
    },
    protobuf_make_make_service_pb.GetOneByIDResponse.deserializeBinary
  );

  getOneByID(
    request: protobuf_make_make_service_pb.GetOneByIDRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_make_make_service_pb.GetOneByIDResponse>;

  getOneByID(
    request: protobuf_make_make_service_pb.GetOneByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_make_make_service_pb.GetOneByIDResponse) => void): grpcWeb.ClientReadableStream<protobuf_make_make_service_pb.GetOneByIDResponse>;

  getOneByID(
    request: protobuf_make_make_service_pb.GetOneByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_make_make_service_pb.GetOneByIDResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/make.MakeReader/GetOneByID',
        request,
        metadata || {},
        this.methodInfoGetOneByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/make.MakeReader/GetOneByID',
    request,
    metadata || {},
    this.methodInfoGetOneByID);
  }

  methodInfoGetManyByIDs = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_make_make_service_pb.GetManyByIDsResponse,
    (request: protobuf_make_make_service_pb.GetManyByIDsRequest) => {
      return request.serializeBinary();
    },
    protobuf_make_make_service_pb.GetManyByIDsResponse.deserializeBinary
  );

  getManyByIDs(
    request: protobuf_make_make_service_pb.GetManyByIDsRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_make_make_service_pb.GetManyByIDsResponse>;

  getManyByIDs(
    request: protobuf_make_make_service_pb.GetManyByIDsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_make_make_service_pb.GetManyByIDsResponse) => void): grpcWeb.ClientReadableStream<protobuf_make_make_service_pb.GetManyByIDsResponse>;

  getManyByIDs(
    request: protobuf_make_make_service_pb.GetManyByIDsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_make_make_service_pb.GetManyByIDsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/make.MakeReader/GetManyByIDs',
        request,
        metadata || {},
        this.methodInfoGetManyByIDs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/make.MakeReader/GetManyByIDs',
    request,
    metadata || {},
    this.methodInfoGetManyByIDs);
  }

  methodInfoListByCursor = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_make_make_service_pb.ListByCursorResponse,
    (request: protobuf_make_make_service_pb.ListByCursorRequest) => {
      return request.serializeBinary();
    },
    protobuf_make_make_service_pb.ListByCursorResponse.deserializeBinary
  );

  listByCursor(
    request: protobuf_make_make_service_pb.ListByCursorRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_make_make_service_pb.ListByCursorResponse>;

  listByCursor(
    request: protobuf_make_make_service_pb.ListByCursorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_make_make_service_pb.ListByCursorResponse) => void): grpcWeb.ClientReadableStream<protobuf_make_make_service_pb.ListByCursorResponse>;

  listByCursor(
    request: protobuf_make_make_service_pb.ListByCursorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_make_make_service_pb.ListByCursorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/make.MakeReader/ListByCursor',
        request,
        metadata || {},
        this.methodInfoListByCursor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/make.MakeReader/ListByCursor',
    request,
    metadata || {},
    this.methodInfoListByCursor);
  }

  methodInfoListByPage = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_make_make_service_pb.ListByPageResponse,
    (request: protobuf_make_make_service_pb.ListByPageRequest) => {
      return request.serializeBinary();
    },
    protobuf_make_make_service_pb.ListByPageResponse.deserializeBinary
  );

  listByPage(
    request: protobuf_make_make_service_pb.ListByPageRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_make_make_service_pb.ListByPageResponse>;

  listByPage(
    request: protobuf_make_make_service_pb.ListByPageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_make_make_service_pb.ListByPageResponse) => void): grpcWeb.ClientReadableStream<protobuf_make_make_service_pb.ListByPageResponse>;

  listByPage(
    request: protobuf_make_make_service_pb.ListByPageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_make_make_service_pb.ListByPageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/make.MakeReader/ListByPage',
        request,
        metadata || {},
        this.methodInfoListByPage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/make.MakeReader/ListByPage',
    request,
    metadata || {},
    this.methodInfoListByPage);
  }

}

