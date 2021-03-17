import React from "react";
import { StatusCode } from "grpc-web";
import Container from "../../components/container";
import SEO from "../../components/seo";
import Custom404 from "../404";
import { GetOneByIDRequest } from "../../protobuf/manufacturer/manufacturer_reader_pb";
import { Manufacturer } from "../../protobuf/manufacturer/manufacturer_pb";
import ManufacturerReaderClient from "../../clients/nodejs/manufacturer_reader_client";
import ManufacturerComponent from "../../components/manufacturer";
import {
  GetOneByIDServerSide,
  GetServerSideFunc,
  GetOnePageProp,
} from "../../components/getOne";

export const getServerSideProps: GetServerSideFunc<Manufacturer.AsObject> = GetOneByIDServerSide<
  Manufacturer.AsObject,
  Manufacturer
>(new GetOneByIDRequest(), ManufacturerReaderClient, "legit");

const ManufacturerPage = (
  props: GetOnePageProp<Manufacturer.AsObject>
): JSX.Element => {
  if (props.result) {
    return (
      <Container menuKey="manufacturer">
        <SEO title={props.result.name} />
        <ManufacturerComponent manufacturer={props.result} />
      </Container>
    );
  }

  if (props.error.code === StatusCode.NOT_FOUND) {
    return (
      <Custom404
        menuKey="manufacturer"
        title="Manufacturer not found"
        message={`Manufacturer with id ${props.id} not found.`}
      />
    );
  }

  return (
    <Container menuKey="manufacturer">
      <h1>{props.httpStatusCode}</h1>
      <p>{props.error.message}</p>
    </Container>
  );
};

export default ManufacturerPage;
