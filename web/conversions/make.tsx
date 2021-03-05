import { Make } from "../protobuf/make/make_pb";

export const toMakeProto = (obj?: Make.AsObject): Make | null => {
  if (obj == null) {
    return null;
  }

  // TODO: auto-populate fields
  const instance = new Make();
  instance.setName(obj.name);

  return instance;
};

export default toMakeProto;
