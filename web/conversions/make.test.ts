import { MakeCreateRequest } from "../protobuf/make/make_pb";
import { toMakeCreateRequest } from "./make";

describe("toMakeCreateRequest", () => {
  it("converts make object to make proto message", () => {
    expect.assertions(1);

    const name = "lol";

    const expected = new MakeCreateRequest();
    const obj: MakeCreateRequest.AsObject = { name };

    expected.setName(name);

    const got = toMakeCreateRequest(obj);

    expect(got).toMatchObject(expected);
  });
});
