import React from "react";
import { Form, Input, Button } from "antd";
import Container from "../../components/container";
import {
  CreateOneRequest,
  CreateOneResponse,
} from "../../protobuf/operating_system/operating_system_writer_pb";
import { OperatingSystemCreateRequest } from "../../protobuf/operating_system/operating_system_pb";
import OperatingSystemWriterClient from "../../clients/grpc-web/operating_system_writer_client";
import { toOperatingSystemCreateRequest } from "../../conversions/operating_system";

const onFinish = (values: OperatingSystemCreateRequest.AsObject) => {
  let request = new CreateOneRequest();
  request.setRequest(toOperatingSystemCreateRequest(values));

  OperatingSystemWriterClient.createOne(request, {})
    .then((response: CreateOneResponse) => {
      // TODO: unified url generation
      window.location.replace(
        `/operating_system/${response.getResult().getId()}/`
      );
    })
    .catch((e: Error) => {
      console.log(e);
      // TODO: proper error handling
    });
};

const OperatingSystemNewPage = (): JSX.Element => (
  <Container menuKey="operating_system">
    <h1>New OperatingSystem</h1>
    <div>
      <Form<OperatingSystemCreateRequest.AsObject> onFinish={onFinish}>
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

export default OperatingSystemNewPage;
