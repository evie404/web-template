import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Make extends jspb.Message {
  getId(): number;
  setId(value: number): Make;

  getName(): string;
  setName(value: string): Make;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Make;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Make;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Make;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Make;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Make.AsObject;
  static toObject(includeInstance: boolean, msg: Make): Make.AsObject;
  static serializeBinaryToWriter(message: Make, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Make;
  static deserializeBinaryFromReader(message: Make, reader: jspb.BinaryReader): Make;
}

export namespace Make {
  export type AsObject = {
    id: number,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class MakeRecord extends jspb.Message {
  getId(): number;
  setId(value: number): MakeRecord;

  getName(): string;
  setName(value: string): MakeRecord;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): MakeRecord;
  hasCreatedAt(): boolean;
  clearCreatedAt(): MakeRecord;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): MakeRecord;
  hasModifiedAt(): boolean;
  clearModifiedAt(): MakeRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MakeRecord.AsObject;
  static toObject(includeInstance: boolean, msg: MakeRecord): MakeRecord.AsObject;
  static serializeBinaryToWriter(message: MakeRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MakeRecord;
  static deserializeBinaryFromReader(message: MakeRecord, reader: jspb.BinaryReader): MakeRecord;
}

export namespace MakeRecord {
  export type AsObject = {
    id: number,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

