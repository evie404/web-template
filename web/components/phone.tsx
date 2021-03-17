import { Descriptions } from "antd";
import { Phone } from "../protobuf/phone/phone_pb";

interface PhoneComponentProp {
  phone: Phone.AsObject;
}

const PhoneComponent = ({ phone }: PhoneComponentProp): JSX.Element => (
  <div>
    <h1>{phone.name}</h1>
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
      <Descriptions.Item label="Name">{phone.name}</Descriptions.Item>
      <Descriptions.Item label="Manufacturer">
        <a href={`/manufacturer/${phone.manufacturer.id}`}>
          {phone.manufacturer.name}
        </a>
      </Descriptions.Item>
      <Descriptions.Item label="OperatingSystem">
        <a href={`/operating_system/${phone.operatingSystem.id}`}>
          {phone.operatingSystem.name}
        </a>
      </Descriptions.Item>
    </Descriptions>
  </div>
);

export default PhoneComponent;
