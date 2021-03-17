import { ManufacturerCreateRequest } from "../protobuf/manufacturer/manufacturer_pb";
import { toManufacturerCreateRequest } from "./manufacturer";

describe("toManufacturerCreateRequest", () => {
  it("converts manufacturer object to manufacturer proto message", () => {
    expect.assertions(1);

    const name = "lol";

    const expected = new ManufacturerCreateRequest();
    const obj: ManufacturerCreateRequest.AsObject = { name };

    expected.setName(name);

    const got = toManufacturerCreateRequest(obj);

    expect(got).toMatchObject(expected);
  });
});
