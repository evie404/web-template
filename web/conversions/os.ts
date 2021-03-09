import { OSCreateRequest } from "../protobuf/os/os_pb";

export const toOSCreateRequest = (
  obj: OSCreateRequest.AsObject
): OSCreateRequest => {
  // TODO: auto-populate fields
  const instance = new OSCreateRequest();
  instance.setName(obj.name);

  return instance;
};

export default toOSCreateRequest;
