import React from "react";
import { Form, Input, Button } from "antd";
import Container from "../../components/container";
import {
  CreateOneRequest,
  CreateOneResponse,
} from "../../protobuf/make/make_writer_pb";
import { MakeCreateRequest } from "../../protobuf/make/make_pb";
import MakeWriterClient from "../../clients/grpc-web/make_writer_client";
import { toMakeCreateRequest } from "../../conversions/make";

const onFinish = (values: MakeCreateRequest.AsObject) => {
  let request = new CreateOneRequest();
  request.setRequest(toMakeCreateRequest(values));

  MakeWriterClient.createOne(request, {})
    .then((response: CreateOneResponse) => {
      // TODO: unified url generation
      window.location.replace(`/make/${response.getResult().getId()}/`);
    })
    .catch((e: Error) => {
      console.log(e);
      // TODO: proper error handling
    });
};

const MakeNewPage = (): JSX.Element => (
  <Container menuKey="make">
    <h1>New Make</h1>
    <div>
      <Form<MakeCreateRequest.AsObject> onFinish={onFinish}>
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

export default MakeNewPage;
