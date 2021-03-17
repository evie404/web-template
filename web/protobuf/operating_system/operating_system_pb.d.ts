import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class OperatingSystem extends jspb.Message {
  getId(): number;
  setId(value: number): OperatingSystem;

  getName(): string;
  setName(value: string): OperatingSystem;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OperatingSystem;
  hasCreatedAt(): boolean;
  clearCreatedAt(): OperatingSystem;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): OperatingSystem;
  hasModifiedAt(): boolean;
  clearModifiedAt(): OperatingSystem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperatingSystem.AsObject;
  static toObject(includeInstance: boolean, msg: OperatingSystem): OperatingSystem.AsObject;
  static serializeBinaryToWriter(message: OperatingSystem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperatingSystem;
  static deserializeBinaryFromReader(message: OperatingSystem, reader: jspb.BinaryReader): OperatingSystem;
}

export namespace OperatingSystem {
  export type AsObject = {
    id: number,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class OperatingSystemRecord extends jspb.Message {
  getId(): number;
  setId(value: number): OperatingSystemRecord;

  getName(): string;
  setName(value: string): OperatingSystemRecord;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OperatingSystemRecord;
  hasCreatedAt(): boolean;
  clearCreatedAt(): OperatingSystemRecord;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): OperatingSystemRecord;
  hasModifiedAt(): boolean;
  clearModifiedAt(): OperatingSystemRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperatingSystemRecord.AsObject;
  static toObject(includeInstance: boolean, msg: OperatingSystemRecord): OperatingSystemRecord.AsObject;
  static serializeBinaryToWriter(message: OperatingSystemRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperatingSystemRecord;
  static deserializeBinaryFromReader(message: OperatingSystemRecord, reader: jspb.BinaryReader): OperatingSystemRecord;
}

export namespace OperatingSystemRecord {
  export type AsObject = {
    id: number,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class OperatingSystemCreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): OperatingSystemCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperatingSystemCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OperatingSystemCreateRequest): OperatingSystemCreateRequest.AsObject;
  static serializeBinaryToWriter(message: OperatingSystemCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperatingSystemCreateRequest;
  static deserializeBinaryFromReader(message: OperatingSystemCreateRequest, reader: jspb.BinaryReader): OperatingSystemCreateRequest;
}

export namespace OperatingSystemCreateRequest {
  export type AsObject = {
    name: string,
  }
}

