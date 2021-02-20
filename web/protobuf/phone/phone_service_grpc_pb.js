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

function serialize_phone_GetPageByCursorRequest(arg) {
  if (!(arg instanceof protobuf_phone_phone_service_pb.GetPageByCursorRequest)) {
    throw new Error('Expected argument of type phone.GetPageByCursorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_phone_GetPageByCursorRequest(buffer_arg) {
  return protobuf_phone_phone_service_pb.GetPageByCursorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_phone_GetPageByCursorResponse(arg) {
  if (!(arg instanceof protobuf_phone_phone_service_pb.GetPageByCursorResponse)) {
    throw new Error('Expected argument of type phone.GetPageByCursorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_phone_GetPageByCursorResponse(buffer_arg) {
  return protobuf_phone_phone_service_pb.GetPageByCursorResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  getPageByCursor: {
    path: '/phone.PhoneService/GetPageByCursor',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_phone_phone_service_pb.GetPageByCursorRequest,
    responseType: protobuf_phone_phone_service_pb.GetPageByCursorResponse,
    requestSerialize: serialize_phone_GetPageByCursorRequest,
    requestDeserialize: deserialize_phone_GetPageByCursorRequest,
    responseSerialize: serialize_phone_GetPageByCursorResponse,
    responseDeserialize: deserialize_phone_GetPageByCursorResponse,
  },
};

exports.PhoneServiceClient = grpc.makeGenericClientConstructor(PhoneServiceService);
