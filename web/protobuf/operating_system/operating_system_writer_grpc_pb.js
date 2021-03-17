// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_operating_system_operating_system_writer_pb = require('../../protobuf/operating_system/operating_system_writer_pb.js');
var protobuf_operating_system_operating_system_pb = require('../../protobuf/operating_system/operating_system_pb.js');

function serialize_operating_system_CreateOneRequest(arg) {
  if (!(arg instanceof protobuf_operating_system_operating_system_writer_pb.CreateOneRequest)) {
    throw new Error('Expected argument of type operating_system.CreateOneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operating_system_CreateOneRequest(buffer_arg) {
  return protobuf_operating_system_operating_system_writer_pb.CreateOneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operating_system_CreateOneResponse(arg) {
  if (!(arg instanceof protobuf_operating_system_operating_system_writer_pb.CreateOneResponse)) {
    throw new Error('Expected argument of type operating_system.CreateOneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operating_system_CreateOneResponse(buffer_arg) {
  return protobuf_operating_system_operating_system_writer_pb.CreateOneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OperatingSystemWriterService = exports.OperatingSystemWriterService = {
  createOne: {
    path: '/operating_system.OperatingSystemWriter/CreateOne',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_operating_system_operating_system_writer_pb.CreateOneRequest,
    responseType: protobuf_operating_system_operating_system_writer_pb.CreateOneResponse,
    requestSerialize: serialize_operating_system_CreateOneRequest,
    requestDeserialize: deserialize_operating_system_CreateOneRequest,
    responseSerialize: serialize_operating_system_CreateOneResponse,
    responseDeserialize: deserialize_operating_system_CreateOneResponse,
  },
};

exports.OperatingSystemWriterClient = grpc.makeGenericClientConstructor(OperatingSystemWriterService);
