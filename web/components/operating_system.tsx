import { Descriptions } from "antd";
import { OperatingSystem } from "../protobuf/operating_system/operating_system_pb";

interface ManufacturerComponentProp {
  operatingSystem: OperatingSystem.AsObject;
}

const ManufacturerComponent = ({
  operatingSystem,
}: ManufacturerComponentProp): JSX.Element => (
  <div>
    <h1>{operatingSystem.name}</h1>
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
      <Descriptions.Item label="Name">{operatingSystem.name}</Descriptions.Item>
    </Descriptions>
  </div>
);

export default ManufacturerComponent;
