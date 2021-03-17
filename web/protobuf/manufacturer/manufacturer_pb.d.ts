import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Manufacturer extends jspb.Message {
  getId(): number;
  setId(value: number): Manufacturer;

  getName(): string;
  setName(value: string): Manufacturer;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Manufacturer;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Manufacturer;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Manufacturer;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Manufacturer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Manufacturer.AsObject;
  static toObject(includeInstance: boolean, msg: Manufacturer): Manufacturer.AsObject;
  static serializeBinaryToWriter(message: Manufacturer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Manufacturer;
  static deserializeBinaryFromReader(message: Manufacturer, reader: jspb.BinaryReader): Manufacturer;
}

export namespace Manufacturer {
  export type AsObject = {
    id: number,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ManufacturerRecord extends jspb.Message {
  getId(): number;
  setId(value: number): ManufacturerRecord;

  getName(): string;
  setName(value: string): ManufacturerRecord;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ManufacturerRecord;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ManufacturerRecord;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): ManufacturerRecord;
  hasModifiedAt(): boolean;
  clearModifiedAt(): ManufacturerRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManufacturerRecord.AsObject;
  static toObject(includeInstance: boolean, msg: ManufacturerRecord): ManufacturerRecord.AsObject;
  static serializeBinaryToWriter(message: ManufacturerRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManufacturerRecord;
  static deserializeBinaryFromReader(message: ManufacturerRecord, reader: jspb.BinaryReader): ManufacturerRecord;
}

export namespace ManufacturerRecord {
  export type AsObject = {
    id: number,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ManufacturerCreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ManufacturerCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManufacturerCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManufacturerCreateRequest): ManufacturerCreateRequest.AsObject;
  static serializeBinaryToWriter(message: ManufacturerCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManufacturerCreateRequest;
  static deserializeBinaryFromReader(message: ManufacturerCreateRequest, reader: jspb.BinaryReader): ManufacturerCreateRequest;
}

export namespace ManufacturerCreateRequest {
  export type AsObject = {
    name: string,
  }
}

