import { OperatingSystemCreateRequest } from "../protobuf/operating_system/operating_system_pb";

export const toOperatingSystemCreateRequest = (
  obj: OperatingSystemCreateRequest.AsObject
): OperatingSystemCreateRequest => {
  // TODO: auto-populate fields
  const instance = new OperatingSystemCreateRequest();
  instance.setName(obj.name);

  return instance;
};

export default toOperatingSystemCreateRequest;
