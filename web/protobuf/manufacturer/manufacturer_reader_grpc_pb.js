// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_manufacturer_manufacturer_reader_pb = require('../../protobuf/manufacturer/manufacturer_reader_pb.js');
var protobuf_manufacturer_manufacturer_pb = require('../../protobuf/manufacturer/manufacturer_pb.js');

function serialize_manufacturer_GetManyByIDsRequest(arg) {
  if (!(arg instanceof protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest)) {
    throw new Error('Expected argument of type manufacturer.GetManyByIDsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_manufacturer_GetManyByIDsRequest(buffer_arg) {
  return protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_manufacturer_GetManyByIDsResponse(arg) {
  if (!(arg instanceof protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse)) {
    throw new Error('Expected argument of type manufacturer.GetManyByIDsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_manufacturer_GetManyByIDsResponse(buffer_arg) {
  return protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_manufacturer_GetOneByIDRequest(arg) {
  if (!(arg instanceof protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest)) {
    throw new Error('Expected argument of type manufacturer.GetOneByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_manufacturer_GetOneByIDRequest(buffer_arg) {
  return protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_manufacturer_GetOneByIDResponse(arg) {
  if (!(arg instanceof protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse)) {
    throw new Error('Expected argument of type manufacturer.GetOneByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_manufacturer_GetOneByIDResponse(buffer_arg) {
  return protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_manufacturer_ListByCursorRequest(arg) {
  if (!(arg instanceof protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest)) {
    throw new Error('Expected argument of type manufacturer.ListByCursorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_manufacturer_ListByCursorRequest(buffer_arg) {
  return protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_manufacturer_ListByCursorResponse(arg) {
  if (!(arg instanceof protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse)) {
    throw new Error('Expected argument of type manufacturer.ListByCursorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_manufacturer_ListByCursorResponse(buffer_arg) {
  return protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_manufacturer_ListByPageRequest(arg) {
  if (!(arg instanceof protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest)) {
    throw new Error('Expected argument of type manufacturer.ListByPageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_manufacturer_ListByPageRequest(buffer_arg) {
  return protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_manufacturer_ListByPageResponse(arg) {
  if (!(arg instanceof protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse)) {
    throw new Error('Expected argument of type manufacturer.ListByPageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_manufacturer_ListByPageResponse(buffer_arg) {
  return protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_manufacturer_ListByPrefixRequest(arg) {
  if (!(arg instanceof protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest)) {
    throw new Error('Expected argument of type manufacturer.ListByPrefixRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_manufacturer_ListByPrefixRequest(buffer_arg) {
  return protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_manufacturer_ListByPrefixResponse(arg) {
  if (!(arg instanceof protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse)) {
    throw new Error('Expected argument of type manufacturer.ListByPrefixResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_manufacturer_ListByPrefixResponse(buffer_arg) {
  return protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ManufacturerReaderService = exports.ManufacturerReaderService = {
  getOneByID: {
    path: '/manufacturer.ManufacturerReader/GetOneByID',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDRequest,
    responseType: protobuf_manufacturer_manufacturer_reader_pb.GetOneByIDResponse,
    requestSerialize: serialize_manufacturer_GetOneByIDRequest,
    requestDeserialize: deserialize_manufacturer_GetOneByIDRequest,
    responseSerialize: serialize_manufacturer_GetOneByIDResponse,
    responseDeserialize: deserialize_manufacturer_GetOneByIDResponse,
  },
  getManyByIDs: {
    path: '/manufacturer.ManufacturerReader/GetManyByIDs',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsRequest,
    responseType: protobuf_manufacturer_manufacturer_reader_pb.GetManyByIDsResponse,
    requestSerialize: serialize_manufacturer_GetManyByIDsRequest,
    requestDeserialize: deserialize_manufacturer_GetManyByIDsRequest,
    responseSerialize: serialize_manufacturer_GetManyByIDsResponse,
    responseDeserialize: deserialize_manufacturer_GetManyByIDsResponse,
  },
  listByCursor: {
    path: '/manufacturer.ManufacturerReader/ListByCursor',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorRequest,
    responseType: protobuf_manufacturer_manufacturer_reader_pb.ListByCursorResponse,
    requestSerialize: serialize_manufacturer_ListByCursorRequest,
    requestDeserialize: deserialize_manufacturer_ListByCursorRequest,
    responseSerialize: serialize_manufacturer_ListByCursorResponse,
    responseDeserialize: deserialize_manufacturer_ListByCursorResponse,
  },
  listByPage: {
    path: '/manufacturer.ManufacturerReader/ListByPage',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_manufacturer_manufacturer_reader_pb.ListByPageRequest,
    responseType: protobuf_manufacturer_manufacturer_reader_pb.ListByPageResponse,
    requestSerialize: serialize_manufacturer_ListByPageRequest,
    requestDeserialize: deserialize_manufacturer_ListByPageRequest,
    responseSerialize: serialize_manufacturer_ListByPageResponse,
    responseDeserialize: deserialize_manufacturer_ListByPageResponse,
  },
  listByPrefix: {
    path: '/manufacturer.ManufacturerReader/ListByPrefix',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixRequest,
    responseType: protobuf_manufacturer_manufacturer_reader_pb.ListByPrefixResponse,
    requestSerialize: serialize_manufacturer_ListByPrefixRequest,
    requestDeserialize: deserialize_manufacturer_ListByPrefixRequest,
    responseSerialize: serialize_manufacturer_ListByPrefixResponse,
    responseDeserialize: deserialize_manufacturer_ListByPrefixResponse,
  },
};

exports.ManufacturerReaderClient = grpc.makeGenericClientConstructor(ManufacturerReaderService);
