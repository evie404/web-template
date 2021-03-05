import React from "react";
import { Form, Input, Button } from "antd";
import Container from "../../components/container";
import {
  CreateOneRequest,
  CreateOneResponse,
} from "../../protobuf/os/os_writer_pb";
import { OS } from "../../protobuf/os/os_pb";
import OSWriterClient from "../../clients/grpc-web/os_writer_client";

const onFinish = (values: OS.AsObject) => {
  let request = new CreateOneRequest();
  let instance = new OS();
  // TODO: auto populate fields
  instance.setName(values.name);
  request.setRequest(instance);

  OSWriterClient.createOne(request, {})
    .then((response: CreateOneResponse) => {
      // TODO: unified url generation
      window.location.replace(`/os/${response.getResult().getId()}/`);
    })
    .catch((e: Error) => {
      console.log(e);
      // TODO: proper error handling
    });
};

const OSNewPage = (): JSX.Element => (
  <Container defKey="3">
    <h1>New OS</h1>
    <div>
      <Form<OS.AsObject> onFinish={onFinish}>
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

export default OSNewPage;
