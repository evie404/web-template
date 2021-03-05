import { OS } from "../protobuf/os/os_pb";
import { toOSProto } from "./os";

test("converts os object to os proto message", () => {
  const name = "lol";
  const id = 0;

  const expected = new OS();
  const obj: OS.AsObject = { id, name };

  expected.setName(name);

  const got = toOSProto(obj);

  expect(got).toMatchObject(expected);
});
