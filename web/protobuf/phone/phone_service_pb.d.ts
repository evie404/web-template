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

export class GetPageByCursorRequest extends jspb.Message {
  getCursor(): number;
  setCursor(value: number): GetPageByCursorRequest;

  getCount(): number;
  setCount(value: number): GetPageByCursorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPageByCursorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPageByCursorRequest): GetPageByCursorRequest.AsObject;
  static serializeBinaryToWriter(message: GetPageByCursorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPageByCursorRequest;
  static deserializeBinaryFromReader(message: GetPageByCursorRequest, reader: jspb.BinaryReader): GetPageByCursorRequest;
}

export namespace GetPageByCursorRequest {
  export type AsObject = {
    cursor: number,
    count: number,
  }
}

export class GetPageByCursorResponse extends jspb.Message {
  getResultsList(): Array<protobuf_phone_phone_pb.Phone>;
  setResultsList(value: Array<protobuf_phone_phone_pb.Phone>): GetPageByCursorResponse;
  clearResultsList(): GetPageByCursorResponse;
  addResults(value?: protobuf_phone_phone_pb.Phone, index?: number): protobuf_phone_phone_pb.Phone;

  getCursor(): number;
  setCursor(value: number): GetPageByCursorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPageByCursorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPageByCursorResponse): GetPageByCursorResponse.AsObject;
  static serializeBinaryToWriter(message: GetPageByCursorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPageByCursorResponse;
  static deserializeBinaryFromReader(message: GetPageByCursorResponse, reader: jspb.BinaryReader): GetPageByCursorResponse;
}

export namespace GetPageByCursorResponse {
  export type AsObject = {
    resultsList: Array<protobuf_phone_phone_pb.Phone.AsObject>,
    cursor: number,
  }
}

