import { OperatingSystemCreateRequest } from "../protobuf/operating_system/operating_system_pb";
import { toOperatingSystemCreateRequest } from "./operating_system";

describe("toOperatingSystemCreateRequest", () => {
  it("converts operating_system object to operating_system proto message", () => {
    expect.assertions(1);

    const name = "lol";

    const expected = new OperatingSystemCreateRequest();
    const obj: OperatingSystemCreateRequest.AsObject = { name };

    expected.setName(name);

    const got = toOperatingSystemCreateRequest(obj);

    expect(got).toMatchObject(expected);
  });
});
