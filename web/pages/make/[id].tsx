import React from "react";
import { StatusCode } from "grpc-web";
import Container from "../../components/container";
import SEO from "../../components/seo";
import Custom404 from "../404";
import { GetOneByIDRequest } from "../../protobuf/make/make_reader_pb";
import { Make } from "../../protobuf/make/make_pb";
import MakeReaderClient from "../../clients/nodejs/make_reader_client";
import MakeComponent from "../../components/make";
import {
  GetOneByIDServerSide,
  GetServerSideFunc,
  GetOnePageProp,
} from "../../components/getOne";

export const getServerSideProps: GetServerSideFunc<Make.AsObject> = GetOneByIDServerSide<
  Make.AsObject,
  Make
>(new GetOneByIDRequest(), MakeReaderClient, "legit");

const MakePage = (props: GetOnePageProp<Make.AsObject>): JSX.Element => {
  if (props.result) {
    return (
      <Container defKey="make">
        <SEO title={props.result.name} />
        <MakeComponent make={props.result} />
      </Container>
    );
  }

  if (props.error.code === StatusCode.NOT_FOUND) {
    return (
      <Custom404
        defKey="make"
        title="Make not found"
        message={`Make with id ${props.id} not found.`}
      />
    );
  }

  return (
    <Container defKey="make">
      <h1>{props.httpStatusCode}</h1>
      <p>{props.error.message}</p>
    </Container>
  );
};

export default MakePage;
