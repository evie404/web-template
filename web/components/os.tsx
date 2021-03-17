import { Descriptions } from "antd";
import { OS } from "../protobuf/os/os_pb";

interface ManufacturerComponentProp {
  os: OS.AsObject;
}

const ManufacturerComponent = ({ os }: ManufacturerComponentProp): JSX.Element => (
  <div>
    <h1>{os.name}</h1>
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
      <Descriptions.Item label="Name">{os.name}</Descriptions.Item>
    </Descriptions>
  </div>
);

export default ManufacturerComponent;
