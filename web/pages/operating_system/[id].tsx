import React from "react";
import { StatusCode } from "grpc-web";
import Container from "../../components/container";
import SEO from "../../components/seo";
import Custom404 from "../404";
import { GetOneByIDRequest } from "../../protobuf/operating_system/operating_system_reader_pb";
import { OperatingSystem } from "../../protobuf/operating_system/operating_system_pb";
import OperatingSystemReaderClient from "../../clients/nodejs/operating_system_reader_client";
import OperatingSystemComponent from "../../components/operating_system";
import {
  GetOneByIDServerSide,
  GetServerSideFunc,
  GetOnePageProp,
} from "../../components/getOne";

export const getServerSideProps: GetServerSideFunc<OperatingSystem.AsObject> = GetOneByIDServerSide<
  OperatingSystem.AsObject,
  OperatingSystem
>(new GetOneByIDRequest(), OperatingSystemReaderClient, "legit");

const OperatingSystemPage = (
  props: GetOnePageProp<OperatingSystem.AsObject>
): JSX.Element => {
  if (props.result) {
    return (
      <Container menuKey="operating_system">
        <SEO title={props.result.name} />
        <OperatingSystemComponent operatingSystem={props.result} />
      </Container>
    );
  }

  if (props.error.code === StatusCode.NOT_FOUND) {
    return (
      <Custom404
        menuKey="operating_system"
        title="OperatingSystem not found"
        message={`OperatingSystem with id ${props.id} not found.`}
      />
    );
  }

  return (
    <Container menuKey="operating_system">
      <h1>{props.httpStatusCode}</h1>
      <p>{props.error.message}</p>
    </Container>
  );
};

export default OperatingSystemPage;
