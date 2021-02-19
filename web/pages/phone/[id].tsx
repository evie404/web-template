import React from "react";
import { Error, StatusCode } from "grpc-web";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Container from "../../components/container";
import SEO from "../../components/seo";
import Custom404 from "../404";
import { GetPhoneRequest, GetPhoneResponse } from "../../protobuf/phone/phone_service_pb";
import { Phone } from "../../protobuf/phone/phone_pb";
import Client from "../../clients/node_client";
import PhoneComponent from "../../components/phone";
import * as grpc from "@grpc/grpc-js";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<PhonePageProp>> => {
  let id: number;

  if (Array.isArray(context.params.id)) {
    id = parseInt(context.params.id[0], 10);
  } else {
    id = parseInt(context.params.id, 10);
  }

  const props: PhonePageProp = {
    id,
    phone: null,
    errorCode: null,
  };

  const metadata = new grpc.Metadata();
  // TODO: implement actual session token
  metadata.set('Authorization', 'Bearer legit');

  const request = new GetPhoneRequest();
  request.setId(id);
  const p = new Promise((resolve, reject) =>
    Client.getPhone(request, metadata, (err: Error, response: GetPhoneResponse) => {
      if (err) {
        return reject(err);
      }
      return resolve(response);
    })
  );

  // await (p);
  await p
    .then(
      (response: GetPhoneResponse) => {
        props.phone = response.getPhone().toObject();
      },
      (e: Error) => {
        props.errorCode = e.code;
      }
    )
    .catch(() => {
      props.errorCode = StatusCode.UNKNOWN;
    });

  return {
    props,
  };
};

interface PhonePageProp {
  id: number;
  phone?: Phone.AsObject;
  errorCode?: number;
}

const PhonePage = (props: PhonePageProp): JSX.Element => {
  if (props.phone) {
    return (
      <Container defKey="1">
        <SEO title={props.phone.name} />
        <PhoneComponent phone={props.phone} />
      </Container>
    );
  }

  if (props.errorCode === StatusCode.NOT_FOUND) {
    return (
      <Custom404
        defKey="1"
        title="Phone not found"
        message={`Phone with id ${props.id} not found.`}
      />
    );
  }

  if (props.errorCode === StatusCode.DEADLINE_EXCEEDED) {
    return (
      // <NotFoundPage
      //   code={503}
      //   title="Timeout"
      //   message={
      //     `Waited too long while fetching phone with id=${id}`
      //   }
      // />
      <Container defKey="1">
        <h1>503</h1>
      </Container>
    );
  }

  return (
    // <NotFoundPage
    //   code={500}
    //   title="Internal server error"
    //   message={`Error fetching phone with id=${id}`}
    // />
    <Container defKey="1">
      <h1>500</h1>
    </Container>
  );
};

export default PhonePage;
