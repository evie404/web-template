import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class OS extends jspb.Message {
  getId(): number;
  setId(value: number): OS;

  getName(): string;
  setName(value: string): OS;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OS;
  hasCreatedAt(): boolean;
  clearCreatedAt(): OS;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): OS;
  hasModifiedAt(): boolean;
  clearModifiedAt(): OS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OS.AsObject;
  static toObject(includeInstance: boolean, msg: OS): OS.AsObject;
  static serializeBinaryToWriter(message: OS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OS;
  static deserializeBinaryFromReader(message: OS, reader: jspb.BinaryReader): OS;
}

export namespace OS {
  export type AsObject = {
    id: number,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class OSRecord extends jspb.Message {
  getId(): number;
  setId(value: number): OSRecord;

  getName(): string;
  setName(value: string): OSRecord;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OSRecord;
  hasCreatedAt(): boolean;
  clearCreatedAt(): OSRecord;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): OSRecord;
  hasModifiedAt(): boolean;
  clearModifiedAt(): OSRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OSRecord.AsObject;
  static toObject(includeInstance: boolean, msg: OSRecord): OSRecord.AsObject;
  static serializeBinaryToWriter(message: OSRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OSRecord;
  static deserializeBinaryFromReader(message: OSRecord, reader: jspb.BinaryReader): OSRecord;
}

export namespace OSRecord {
  export type AsObject = {
    id: number,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class OSCreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): OSCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OSCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OSCreateRequest): OSCreateRequest.AsObject;
  static serializeBinaryToWriter(message: OSCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OSCreateRequest;
  static deserializeBinaryFromReader(message: OSCreateRequest, reader: jspb.BinaryReader): OSCreateRequest;
}

export namespace OSCreateRequest {
  export type AsObject = {
    name: string,
  }
}

