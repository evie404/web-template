import * as jspb from 'google-protobuf'

import * as protobuf_operating_system_operating_system_pb from '../../protobuf/operating_system/operating_system_pb';


export class CreateOneRequest extends jspb.Message {
  getRequest(): protobuf_operating_system_operating_system_pb.OperatingSystemCreateRequest | undefined;
  setRequest(value?: protobuf_operating_system_operating_system_pb.OperatingSystemCreateRequest): CreateOneRequest;
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
    request?: protobuf_operating_system_operating_system_pb.OperatingSystemCreateRequest.AsObject,
  }
}

export class CreateOneResponse extends jspb.Message {
  getResult(): protobuf_operating_system_operating_system_pb.OperatingSystem | undefined;
  setResult(value?: protobuf_operating_system_operating_system_pb.OperatingSystem): CreateOneResponse;
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
    result?: protobuf_operating_system_operating_system_pb.OperatingSystem.AsObject,
  }
}

