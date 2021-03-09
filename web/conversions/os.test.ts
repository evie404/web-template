import { OSCreateRequest } from "../protobuf/os/os_pb";
import { toOSCreateRequest } from "./os";

describe("toOSCreateRequest", () => {
  it("converts os object to os proto message", () => {
    expect.assertions(1);

    const name = "lol";

    const expected = new OSCreateRequest();
    const obj: OSCreateRequest.AsObject = { name };

    expected.setName(name);

    const got = toOSCreateRequest(obj);

    expect(got).toMatchObject(expected);
  });
});
