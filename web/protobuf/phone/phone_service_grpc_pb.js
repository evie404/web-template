// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_phone_phone_service_pb = require('../../protobuf/phone/phone_service_pb.js');
var protobuf_phone_phone_pb = require('../../protobuf/phone/phone_pb.js');

function serialize_phone_GetOneByIDRequest(arg) {
  if (!(arg instanceof protobuf_phone_phone_service_pb.GetOneByIDRequest)) {
    throw new Error('Expected argument of type phone.GetOneByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_phone_GetOneByIDRequest(buffer_arg) {
  return protobuf_phone_phone_service_pb.GetOneByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_phone_GetOneByIDResponse(arg) {
  if (!(arg instanceof protobuf_phone_phone_service_pb.GetOneByIDResponse)) {
    throw new Error('Expected argument of type phone.GetOneByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_phone_GetOneByIDResponse(buffer_arg) {
  return protobuf_phone_phone_service_pb.GetOneByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_phone_ListByCursorRequest(arg) {
  if (!(arg instanceof protobuf_phone_phone_service_pb.ListByCursorRequest)) {
    throw new Error('Expected argument of type phone.ListByCursorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_phone_ListByCursorRequest(buffer_arg) {
  return protobuf_phone_phone_service_pb.ListByCursorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_phone_ListByCursorResponse(arg) {
  if (!(arg instanceof protobuf_phone_phone_service_pb.ListByCursorResponse)) {
    throw new Error('Expected argument of type phone.ListByCursorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_phone_ListByCursorResponse(buffer_arg) {
  return protobuf_phone_phone_service_pb.ListByCursorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PhoneServiceService = exports.PhoneServiceService = {
  getOneByID: {
    path: '/phone.PhoneService/GetOneByID',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_phone_phone_service_pb.GetOneByIDRequest,
    responseType: protobuf_phone_phone_service_pb.GetOneByIDResponse,
    requestSerialize: serialize_phone_GetOneByIDRequest,
    requestDeserialize: deserialize_phone_GetOneByIDRequest,
    responseSerialize: serialize_phone_GetOneByIDResponse,
    responseDeserialize: deserialize_phone_GetOneByIDResponse,
  },
  listByCursor: {
    path: '/phone.PhoneService/ListByCursor',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_phone_phone_service_pb.ListByCursorRequest,
    responseType: protobuf_phone_phone_service_pb.ListByCursorResponse,
    requestSerialize: serialize_phone_ListByCursorRequest,
    requestDeserialize: deserialize_phone_ListByCursorRequest,
    responseSerialize: serialize_phone_ListByCursorResponse,
    responseDeserialize: deserialize_phone_ListByCursorResponse,
  },
};

exports.PhoneServiceClient = grpc.makeGenericClientConstructor(PhoneServiceService);
