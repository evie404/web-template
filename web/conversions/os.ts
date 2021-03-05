import { OS } from "../protobuf/os/os_pb";

export const toOSProto = (obj?: OS.AsObject): OS | null => {
  if (obj == null) {
    return null;
  }

  // TODO: auto-populate fields
  const instance = new OS();
  instance.setName(obj.name);

  return instance;
};

export default toOSProto;
