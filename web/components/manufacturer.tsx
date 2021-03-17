import { Descriptions } from "antd";
import { Manufacturer } from "../protobuf/manufacturer/manufacturer_pb";

interface ManufacturerComponentProp {
  manufacturer: Manufacturer.AsObject;
}

const ManufacturerComponent = ({
  manufacturer,
}: ManufacturerComponentProp): JSX.Element => (
  <div>
    <h1>{manufacturer.name}</h1>
    <Descriptions
      bordered
      column={{
        xxl: 4,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1,
      }}
    >
      <Descriptions.Item label="Name">{manufacturer.name}</Descriptions.Item>
    </Descriptions>
  </div>
);

export default ManufacturerComponent;
