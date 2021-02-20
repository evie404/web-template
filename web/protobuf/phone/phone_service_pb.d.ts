import * as jspb from 'google-protobuf'

import * as protobuf_phone_phone_pb from '../../protobuf/phone/phone_pb';


export class GetOneByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetOneByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOneByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOneByIDRequest): GetOneByIDRequest.AsObject;
  static serializeBinaryToWriter(message: GetOneByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOneByIDRequest;
  static deserializeBinaryFromReader(message: GetOneByIDRequest, reader: jspb.BinaryReader): GetOneByIDRequest;
}

export namespace GetOneByIDRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetOneByIDResponse extends jspb.Message {
  getResult(): protobuf_phone_phone_pb.Phone | undefined;
  setResult(value?: protobuf_phone_phone_pb.Phone): GetOneByIDResponse;
  hasResult(): boolean;
  clearResult(): GetOneByIDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOneByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOneByIDResponse): GetOneByIDResponse.AsObject;
  static serializeBinaryToWriter(message: GetOneByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOneByIDResponse;
  static deserializeBinaryFromReader(message: GetOneByIDResponse, reader: jspb.BinaryReader): GetOneByIDResponse;
}

export namespace GetOneByIDResponse {
  export type AsObject = {
    result?: protobuf_phone_phone_pb.Phone.AsObject,
  }
}

export class ListByCursorRequest extends jspb.Message {
  getCursor(): number;
  setCursor(value: number): ListByCursorRequest;

  getCount(): number;
  setCount(value: number): ListByCursorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListByCursorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListByCursorRequest): ListByCursorRequest.AsObject;
  static serializeBinaryToWriter(message: ListByCursorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListByCursorRequest;
  static deserializeBinaryFromReader(message: ListByCursorRequest, reader: jspb.BinaryReader): ListByCursorRequest;
}

export namespace ListByCursorRequest {
  export type AsObject = {
    cursor: number,
    count: number,
  }
}

export class ListByCursorResponse extends jspb.Message {
  getResultsList(): Array<protobuf_phone_phone_pb.Phone>;
  setResultsList(value: Array<protobuf_phone_phone_pb.Phone>): ListByCursorResponse;
  clearResultsList(): ListByCursorResponse;
  addResults(value?: protobuf_phone_phone_pb.Phone, index?: number): protobuf_phone_phone_pb.Phone;

  getCursor(): number;
  setCursor(value: number): ListByCursorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListByCursorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListByCursorResponse): ListByCursorResponse.AsObject;
  static serializeBinaryToWriter(message: ListByCursorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListByCursorResponse;
  static deserializeBinaryFromReader(message: ListByCursorResponse, reader: jspb.BinaryReader): ListByCursorResponse;
}

export namespace ListByCursorResponse {
  export type AsObject = {
    resultsList: Array<protobuf_phone_phone_pb.Phone.AsObject>,
    cursor: number,
  }
}

