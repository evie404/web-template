import { MakeCreateRequest } from "../protobuf/make/make_pb";

export const toMakeCreateRequest = (
  obj: MakeCreateRequest.AsObject
): MakeCreateRequest => {
  // TODO: auto-populate fields
  const instance = new MakeCreateRequest();
  instance.setName(obj.name);

  return instance;
};

export default toMakeCreateRequest;
