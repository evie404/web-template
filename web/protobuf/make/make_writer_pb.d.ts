import * as jspb from 'google-protobuf'

import * as protobuf_make_make_pb from '../../protobuf/make/make_pb';


export class CreateOneRequest extends jspb.Message {
  getRequest(): protobuf_make_make_pb.MakeRecord | undefined;
  setRequest(value?: protobuf_make_make_pb.MakeRecord): CreateOneRequest;
  hasRequest(): boolean;
  clearRequest(): CreateOneRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOneRequest): CreateOneRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOneRequest;
  static deserializeBinaryFromReader(message: CreateOneRequest, reader: jspb.BinaryReader): CreateOneRequest;
}

export namespace CreateOneRequest {
  export type AsObject = {
    request?: protobuf_make_make_pb.MakeRecord.AsObject,
  }
}

export class CreateOneResponse extends jspb.Message {
  getResult(): protobuf_make_make_pb.Make | undefined;
  setResult(value?: protobuf_make_make_pb.Make): CreateOneResponse;
  hasResult(): boolean;
  clearResult(): CreateOneResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOneResponse): CreateOneResponse.AsObject;
  static serializeBinaryToWriter(message: CreateOneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOneResponse;
  static deserializeBinaryFromReader(message: CreateOneResponse, reader: jspb.BinaryReader): CreateOneResponse;
}

export namespace CreateOneResponse {
  export type AsObject = {
    result?: protobuf_make_make_pb.Make.AsObject,
  }
}

