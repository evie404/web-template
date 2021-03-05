// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_make_make_writer_pb = require('../../protobuf/make/make_writer_pb.js');
var protobuf_make_make_pb = require('../../protobuf/make/make_pb.js');

function serialize_make_CreateOneRequest(arg) {
  if (!(arg instanceof protobuf_make_make_writer_pb.CreateOneRequest)) {
    throw new Error('Expected argument of type make.CreateOneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_make_CreateOneRequest(buffer_arg) {
  return protobuf_make_make_writer_pb.CreateOneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_make_CreateOneResponse(arg) {
  if (!(arg instanceof protobuf_make_make_writer_pb.CreateOneResponse)) {
    throw new Error('Expected argument of type make.CreateOneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_make_CreateOneResponse(buffer_arg) {
  return protobuf_make_make_writer_pb.CreateOneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MakeWriterService = exports.MakeWriterService = {
  createOne: {
    path: '/make.MakeWriter/CreateOne',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_make_make_writer_pb.CreateOneRequest,
    responseType: protobuf_make_make_writer_pb.CreateOneResponse,
    requestSerialize: serialize_make_CreateOneRequest,
    requestDeserialize: deserialize_make_CreateOneRequest,
    responseSerialize: serialize_make_CreateOneResponse,
    responseDeserialize: deserialize_make_CreateOneResponse,
  },
};

exports.MakeWriterClient = grpc.makeGenericClientConstructor(MakeWriterService);
