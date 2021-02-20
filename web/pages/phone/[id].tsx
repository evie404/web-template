import React from "react";
import { Error, StatusCode } from "grpc-web";
import Container from "../../components/container";
import SEO from "../../components/seo";
import Custom404 from "../404";
import { GetOneByIDRequest } from "../../protobuf/phone/phone_service_pb";
import { Phone } from "../../protobuf/phone/phone_pb";
import PhoneServiceClient from "../../clients/nodejs/phone_service_client";
import PhoneComponent from "../../components/phone";
import { GetOneByIDServerSide, GetServerSideFunc, PageProp } from "../../components/getOne";

export const getServerSideProps: GetServerSideFunc<Phone.AsObject> = GetOneByIDServerSide<Phone.AsObject, Phone>(
  new GetOneByIDRequest(),
  PhoneServiceClient,
  "legit",
);

const PhonePage = (props: PageProp<Phone.AsObject>): JSX.Element => {
  if (props.result) {
    return (
      <Container defKey="1">
        <SEO title={props.result.name} />
        <PhoneComponent phone={props.result} />
      </Container>
    );
  }

  if (props.error.code === StatusCode.NOT_FOUND) {
    return (
      <Custom404
        defKey="1"
        title="Phone not found"
        message={`Phone with id ${props.id} not found.`}
      />
    );
  }

  if (props.error.code === StatusCode.DEADLINE_EXCEEDED) {
    return (
      <Container defKey="1">
        <h1>503</h1>
      </Container>
    );
  }

  return (
    <Container defKey="1">
      <h1>500</h1>
    </Container>
  );
};

export default PhonePage;
