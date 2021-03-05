import { Make } from "../protobuf/make/make_pb";
import { toMakeProto } from "./make";

test("converts make object to make proto message", () => {
  const name = "lol";
  const id = 0;

  const expected = new Make();
  const obj: Make.AsObject = { id, name };

  expected.setName(name);

  const got = toMakeProto(obj);

  expect(got).toMatchObject(expected);
});
