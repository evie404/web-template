import React from "react";
import { Form, Input, Button } from "antd";
import Container from "../../components/container";
import {
  CreateOneRequest,
  CreateOneResponse,
} from "../../protobuf/manufacturer/manufacturer_writer_pb";
import { ManufacturerCreateRequest } from "../../protobuf/manufacturer/manufacturer_pb";
import ManufacturerWriterClient from "../../clients/grpc-web/manufacturer_writer_client";
import { toManufacturerCreateRequest } from "../../conversions/manufacturer";

const onFinish = (values: ManufacturerCreateRequest.AsObject) => {
  let request = new CreateOneRequest();
  request.setRequest(toManufacturerCreateRequest(values));

  ManufacturerWriterClient.createOne(request, {})
    .then((response: CreateOneResponse) => {
      // TODO: unified url generation
      window.location.replace(`/manufacturer/${response.getResult().getId()}/`);
    })
    .catch((e: Error) => {
      console.log(e);
      // TODO: proper error handling
    });
};

const ManufacturerNewPage = (): JSX.Element => (
  <Container menuKey="manufacturer">
    <h1>New Manufacturer</h1>
    <div>
      <Form<ManufacturerCreateRequest.AsObject> onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </Container>
);

export default ManufacturerNewPage;
