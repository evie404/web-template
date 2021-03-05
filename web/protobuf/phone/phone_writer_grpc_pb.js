// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_phone_phone_writer_pb = require('../../protobuf/phone/phone_writer_pb.js');
var protobuf_phone_phone_pb = require('../../protobuf/phone/phone_pb.js');

function serialize_phone_CreateOneRequest(arg) {
  if (!(arg instanceof protobuf_phone_phone_writer_pb.CreateOneRequest)) {
    throw new Error('Expected argument of type phone.CreateOneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_phone_CreateOneRequest(buffer_arg) {
  return protobuf_phone_phone_writer_pb.CreateOneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_phone_CreateOneResponse(arg) {
  if (!(arg instanceof protobuf_phone_phone_writer_pb.CreateOneResponse)) {
    throw new Error('Expected argument of type phone.CreateOneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_phone_CreateOneResponse(buffer_arg) {
  return protobuf_phone_phone_writer_pb.CreateOneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PhoneWriterService = exports.PhoneWriterService = {
  createOne: {
    path: '/phone.PhoneWriter/CreateOne',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_phone_phone_writer_pb.CreateOneRequest,
    responseType: protobuf_phone_phone_writer_pb.CreateOneResponse,
    requestSerialize: serialize_phone_CreateOneRequest,
    requestDeserialize: deserialize_phone_CreateOneRequest,
    responseSerialize: serialize_phone_CreateOneResponse,
    responseDeserialize: deserialize_phone_CreateOneResponse,
  },
};

exports.PhoneWriterClient = grpc.makeGenericClientConstructor(PhoneWriterService);
