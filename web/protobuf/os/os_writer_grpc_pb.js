// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_os_os_writer_pb = require('../../protobuf/os/os_writer_pb.js');
var protobuf_os_os_pb = require('../../protobuf/os/os_pb.js');

function serialize_os_CreateOneRequest(arg) {
  if (!(arg instanceof protobuf_os_os_writer_pb.CreateOneRequest)) {
    throw new Error('Expected argument of type os.CreateOneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_CreateOneRequest(buffer_arg) {
  return protobuf_os_os_writer_pb.CreateOneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_os_CreateOneResponse(arg) {
  if (!(arg instanceof protobuf_os_os_writer_pb.CreateOneResponse)) {
    throw new Error('Expected argument of type os.CreateOneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_CreateOneResponse(buffer_arg) {
  return protobuf_os_os_writer_pb.CreateOneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OSWriterService = exports.OSWriterService = {
  createOne: {
    path: '/os.OSWriter/CreateOne',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_os_os_writer_pb.CreateOneRequest,
    responseType: protobuf_os_os_writer_pb.CreateOneResponse,
    requestSerialize: serialize_os_CreateOneRequest,
    requestDeserialize: deserialize_os_CreateOneRequest,
    responseSerialize: serialize_os_CreateOneResponse,
    responseDeserialize: deserialize_os_CreateOneResponse,
  },
};

exports.OSWriterClient = grpc.makeGenericClientConstructor(OSWriterService);
