/**
 * @fileoverview gRPC-Web generated client stub for manufacturer
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protobuf_manufacturer_manufacturer_reader_pb from '../../protobuf/manufacturer/manufacturer_reader_pb';


export class ManufacturerReaderClient {
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
    protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse,
    (request: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest) => {
      return request.serializeBinary();
    },
    protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse.deserializeBinary
  );

  getOneByID(
    request: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse>;

  getOneByID(
    request: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse) => void): grpcWeb.ClientReadableStream<protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse>;

  getOneByID(
    request: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/manufacturer.ManufacturerReader/GetOneByID',
        request,
        metadata || {},
        this.methodInfoGetOneByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/manufacturer.ManufacturerReader/GetOneByID',
    request,
    metadata || {},
    this.methodInfoGetOneByID);
  }

  methodInfoGetManyByIDs = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse,
    (request: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest) => {
      return request.serializeBinary();
    },
    protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse.deserializeBinary
  );

  getManyByIDs(
    request: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse>;

  getManyByIDs(
    request: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse) => void): grpcWeb.ClientReadableStream<protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse>;

  getManyByIDs(
    request: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/manufacturer.ManufacturerReader/GetManyByIDs',
        request,
        metadata || {},
        this.methodInfoGetManyByIDs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/manufacturer.ManufacturerReader/GetManyByIDs',
    request,
    metadata || {},
    this.methodInfoGetManyByIDs);
  }

  methodInfoListByCursor = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse,
    (request: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest) => {
      return request.serializeBinary();
    },
    protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse.deserializeBinary
  );

  listByCursor(
    request: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse>;

  listByCursor(
    request: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse) => void): grpcWeb.ClientReadableStream<protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse>;

  listByCursor(
    request: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/manufacturer.ManufacturerReader/ListByCursor',
        request,
        metadata || {},
        this.methodInfoListByCursor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/manufacturer.ManufacturerReader/ListByCursor',
    request,
    metadata || {},
    this.methodInfoListByCursor);
  }

  methodInfoListByPage = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse,
    (request: protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest) => {
      return request.serializeBinary();
    },
    protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse.deserializeBinary
  );

  listByPage(
    request: protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse>;

  listByPage(
    request: protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse) => void): grpcWeb.ClientReadableStream<protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse>;

  listByPage(
    request: protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/manufacturer.ManufacturerReader/ListByPage',
        request,
        metadata || {},
        this.methodInfoListByPage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/manufacturer.ManufacturerReader/ListByPage',
    request,
    metadata || {},
    this.methodInfoListByPage);
  }

  methodInfoListByPrefix = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse,
    (request: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest) => {
      return request.serializeBinary();
    },
    protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse.deserializeBinary
  );

  listByPrefix(
    request: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse>;

  listByPrefix(
    request: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse) => void): grpcWeb.ClientReadableStream<protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse>;

  listByPrefix(
    request: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/manufacturer.ManufacturerReader/ListByPrefix',
        request,
        metadata || {},
        this.methodInfoListByPrefix,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/manufacturer.ManufacturerReader/ListByPrefix',
    request,
    metadata || {},
    this.methodInfoListByPrefix);
  }

}

