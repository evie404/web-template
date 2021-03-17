import { ManufacturerCreateRequest } from "../protobuf/manufacturer/manufacturer_pb";

export const toManufacturerCreateRequest = (
  obj: ManufacturerCreateRequest.AsObject
): ManufacturerCreateRequest => {
  // TODO: auto-populate fields
  const instance = new ManufacturerCreateRequest();
  instance.setName(obj.name);

  return instance;
};

export default toManufacturerCreateRequest;
