// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_operating_system_operating_system_reader_pb = require('../../protobuf/operating_system/operating_system_reader_pb.js');
var protobuf_operating_system_operating_system_pb = require('../../protobuf/operating_system/operating_system_pb.js');

function serialize_operating_system_GetManyByIDsRequest(arg) {
  if (!(arg instanceof protobuf_operating_system_operating_system_reader_pb.GetManyByIDsRequest)) {
    throw new Error('Expected argument of type operating_system.GetManyByIDsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operating_system_GetManyByIDsRequest(buffer_arg) {
  return protobuf_operating_system_operating_system_reader_pb.GetManyByIDsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operating_system_GetManyByIDsResponse(arg) {
  if (!(arg instanceof protobuf_operating_system_operating_system_reader_pb.GetManyByIDsResponse)) {
    throw new Error('Expected argument of type operating_system.GetManyByIDsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operating_system_GetManyByIDsResponse(buffer_arg) {
  return protobuf_operating_system_operating_system_reader_pb.GetManyByIDsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operating_system_GetOneByIDRequest(arg) {
  if (!(arg instanceof protobuf_operating_system_operating_system_reader_pb.GetOneByIDRequest)) {
    throw new Error('Expected argument of type operating_system.GetOneByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operating_system_GetOneByIDRequest(buffer_arg) {
  return protobuf_operating_system_operating_system_reader_pb.GetOneByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operating_system_GetOneByIDResponse(arg) {
  if (!(arg instanceof protobuf_operating_system_operating_system_reader_pb.GetOneByIDResponse)) {
    throw new Error('Expected argument of type operating_system.GetOneByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operating_system_GetOneByIDResponse(buffer_arg) {
  return protobuf_operating_system_operating_system_reader_pb.GetOneByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operating_system_ListByCursorRequest(arg) {
  if (!(arg instanceof protobuf_operating_system_operating_system_reader_pb.ListByCursorRequest)) {
    throw new Error('Expected argument of type operating_system.ListByCursorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operating_system_ListByCursorRequest(buffer_arg) {
  return protobuf_operating_system_operating_system_reader_pb.ListByCursorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operating_system_ListByCursorResponse(arg) {
  if (!(arg instanceof protobuf_operating_system_operating_system_reader_pb.ListByCursorResponse)) {
    throw new Error('Expected argument of type operating_system.ListByCursorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operating_system_ListByCursorResponse(buffer_arg) {
  return protobuf_operating_system_operating_system_reader_pb.ListByCursorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operating_system_ListByPageRequest(arg) {
  if (!(arg instanceof protobuf_operating_system_operating_system_reader_pb.ListByPageRequest)) {
    throw new Error('Expected argument of type operating_system.ListByPageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operating_system_ListByPageRequest(buffer_arg) {
  return protobuf_operating_system_operating_system_reader_pb.ListByPageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operating_system_ListByPageResponse(arg) {
  if (!(arg instanceof protobuf_operating_system_operating_system_reader_pb.ListByPageResponse)) {
    throw new Error('Expected argument of type operating_system.ListByPageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operating_system_ListByPageResponse(buffer_arg) {
  return protobuf_operating_system_operating_system_reader_pb.ListByPageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operating_system_ListByPrefixRequest(arg) {
  if (!(arg instanceof protobuf_operating_system_operating_system_reader_pb.ListByPrefixRequest)) {
    throw new Error('Expected argument of type operating_system.ListByPrefixRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operating_system_ListByPrefixRequest(buffer_arg) {
  return protobuf_operating_system_operating_system_reader_pb.ListByPrefixRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operating_system_ListByPrefixResponse(arg) {
  if (!(arg instanceof protobuf_operating_system_operating_system_reader_pb.ListByPrefixResponse)) {
    throw new Error('Expected argument of type operating_system.ListByPrefixResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operating_system_ListByPrefixResponse(buffer_arg) {
  return protobuf_operating_system_operating_system_reader_pb.ListByPrefixResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OperatingSystemReaderService = exports.OperatingSystemReaderService = {
  getOneByID: {
    path: '/operating_system.OperatingSystemReader/GetOneByID',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_operating_system_operating_system_reader_pb.GetOneByIDRequest,
    responseType: protobuf_operating_system_operating_system_reader_pb.GetOneByIDResponse,
    requestSerialize: serialize_operating_system_GetOneByIDRequest,
    requestDeserialize: deserialize_operating_system_GetOneByIDRequest,
    responseSerialize: serialize_operating_system_GetOneByIDResponse,
    responseDeserialize: deserialize_operating_system_GetOneByIDResponse,
  },
  getManyByIDs: {
    path: '/operating_system.OperatingSystemReader/GetManyByIDs',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_operating_system_operating_system_reader_pb.GetManyByIDsRequest,
    responseType: protobuf_operating_system_operating_system_reader_pb.GetManyByIDsResponse,
    requestSerialize: serialize_operating_system_GetManyByIDsRequest,
    requestDeserialize: deserialize_operating_system_GetManyByIDsRequest,
    responseSerialize: serialize_operating_system_GetManyByIDsResponse,
    responseDeserialize: deserialize_operating_system_GetManyByIDsResponse,
  },
  listByCursor: {
    path: '/operating_system.OperatingSystemReader/ListByCursor',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_operating_system_operating_system_reader_pb.ListByCursorRequest,
    responseType: protobuf_operating_system_operating_system_reader_pb.ListByCursorResponse,
    requestSerialize: serialize_operating_system_ListByCursorRequest,
    requestDeserialize: deserialize_operating_system_ListByCursorRequest,
    responseSerialize: serialize_operating_system_ListByCursorResponse,
    responseDeserialize: deserialize_operating_system_ListByCursorResponse,
  },
  listByPage: {
    path: '/operating_system.OperatingSystemReader/ListByPage',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_operating_system_operating_system_reader_pb.ListByPageRequest,
    responseType: protobuf_operating_system_operating_system_reader_pb.ListByPageResponse,
    requestSerialize: serialize_operating_system_ListByPageRequest,
    requestDeserialize: deserialize_operating_system_ListByPageRequest,
    responseSerialize: serialize_operating_system_ListByPageResponse,
    responseDeserialize: deserialize_operating_system_ListByPageResponse,
  },
  listByPrefix: {
    path: '/operating_system.OperatingSystemReader/ListByPrefix',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_operating_system_operating_system_reader_pb.ListByPrefixRequest,
    responseType: protobuf_operating_system_operating_system_reader_pb.ListByPrefixResponse,
    requestSerialize: serialize_operating_system_ListByPrefixRequest,
    requestDeserialize: deserialize_operating_system_ListByPrefixRequest,
    responseSerialize: serialize_operating_system_ListByPrefixResponse,
    responseDeserialize: deserialize_operating_system_ListByPrefixResponse,
  },
};

exports.OperatingSystemReaderClient = grpc.makeGenericClientConstructor(OperatingSystemReaderService);
