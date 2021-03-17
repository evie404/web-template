import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as protobuf_operating_system_operating_system_pb from '../../protobuf/operating_system/operating_system_pb';


export class App extends jspb.Message {
  getId(): number;
  setId(value: number): App;

  getName(): string;
  setName(value: string): App;

  getOperatingSystem(): protobuf_operating_system_operating_system_pb.OperatingSystem | undefined;
  setOperatingSystem(value?: protobuf_operating_system_operating_system_pb.OperatingSystem): App;
  hasOperatingSystem(): boolean;
  clearOperatingSystem(): App;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): App;
  hasCreatedAt(): boolean;
  clearCreatedAt(): App;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): App;
  hasModifiedAt(): boolean;
  clearModifiedAt(): App;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): App.AsObject;
  static toObject(includeInstance: boolean, msg: App): App.AsObject;
  static serializeBinaryToWriter(message: App, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): App;
  static deserializeBinaryFromReader(message: App, reader: jspb.BinaryReader): App;
}

export namespace App {
  export type AsObject = {
    id: number,
    name: string,
    operatingSystem?: protobuf_operating_system_operating_system_pb.OperatingSystem.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

