// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_manufacturer_manufacturer_writer_pb = require('../../protobuf/manufacturer/manufacturer_writer_pb.js');
var protobuf_manufacturer_manufacturer_pb = require('../../protobuf/manufacturer/manufacturer_pb.js');

function serialize_manufacturer_CreateOneRequest(arg) {
  if (!(arg instanceof protobuf_manufacturer_manufacturer_writer_pb.CreateOneRequest)) {
    throw new Error('Expected argument of type manufacturer.CreateOneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_manufacturer_CreateOneRequest(buffer_arg) {
  return protobuf_manufacturer_manufacturer_writer_pb.CreateOneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_manufacturer_CreateOneResponse(arg) {
  if (!(arg instanceof protobuf_manufacturer_manufacturer_writer_pb.CreateOneResponse)) {
    throw new Error('Expected argument of type manufacturer.CreateOneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_manufacturer_CreateOneResponse(buffer_arg) {
  return protobuf_manufacturer_manufacturer_writer_pb.CreateOneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ManufacturerWriterService = exports.ManufacturerWriterService = {
  createOne: {
    path: '/manufacturer.ManufacturerWriter/CreateOne',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_manufacturer_manufacturer_writer_pb.CreateOneRequest,
    responseType: protobuf_manufacturer_manufacturer_writer_pb.CreateOneResponse,
    requestSerialize: serialize_manufacturer_CreateOneRequest,
    requestDeserialize: deserialize_manufacturer_CreateOneRequest,
    responseSerialize: serialize_manufacturer_CreateOneResponse,
    responseDeserialize: deserialize_manufacturer_CreateOneResponse,
  },
};

exports.ManufacturerWriterClient = grpc.makeGenericClientConstructor(ManufacturerWriterService);
