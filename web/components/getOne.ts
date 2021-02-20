import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import * as grpc from "@grpc/grpc-js";
import * as jspb from 'google-protobuf'
import { Error, StatusCode } from "grpc-web";
import { ParsedUrlQuery } from 'querystring'

interface Instance extends jspb.Message {
  getId: () => number;
  toObject: () => any;
}

interface getByIDRequest<T extends Instance> extends jspb.Message {
  setId: (id: number) => getByIDRequest<T>;
}

interface getByIDResponse<T extends Instance> extends jspb.Message {
  getResult: () => T;
}

interface getByIDClient<T extends Instance> {
  getOneByID(request: getByIDRequest<T>, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: getByIDResponse<T>) => void): grpc.ClientUnaryCall;
}

interface pageProp<T extends Instance> {
  id: number;
  result?: T; // TODO: this is not the most semantically correct since this is actually the AsObject representation of the protobuf message
  error?: Error;
  httpStatusCode: number;
}

interface QueryWithIDParam extends ParsedUrlQuery {
  id: string | string[]
}

export type GetServerSideFunc<T extends Instance> = (context: GetServerSidePropsContext) => Promise<GetServerSidePropsResult<pageProp<T>>>;

const httpStatusCodeFromGRPCError = (err: Error): number => {
  switch (err.code) {
    case StatusCode.OK:
      return 200
    case StatusCode.NOT_FOUND:
      return 404
    case StatusCode.DEADLINE_EXCEEDED:
      return 503
    default:
      return 500
  }
};

export const GetOneByID = <T extends Instance>(
  request: getByIDRequest<T>,
  client: getByIDClient<T>,
  authorizationToken?: string,
): GetServerSideFunc<T> => {
  return async (context: GetServerSidePropsContext<QueryWithIDParam>): Promise<GetServerSidePropsResult<pageProp<T>>> => {
    let id: number;

    if (Array.isArray(context.params.id)) {
      id = parseInt(context.params.id[0], 10);
    } else {
      id = parseInt(context.params.id, 10);
    }

    const props: pageProp<T> = {
      id,
      result: null,
      error: null,
      httpStatusCode: 200,
    };

    const metadata = new grpc.Metadata();

    if (authorizationToken) {
      metadata.set('Authorization', 'Bearer ' + authorizationToken);
    }

    request.setId(id);
    const p = new Promise((resolve, reject) =>
      client.getOneByID(request, metadata, (err: Error, response: getByIDResponse<T>) => {
        if (err) {
          return reject(err);
        }
        return resolve(response);
      })
    );

    await p
      .then(
        (response: getByIDResponse<T>) => {
          // we have to do this because the raw object is not serializable to json
          props.result = response.getResult().toObject();
        },
        (e: Error) => {
          props.error = {
            code: e.code,
            message: e.message,
          };
        }
      )
      .catch(() => {
        // we have to do this because the raw object is not serializable to json
        props.error = {
          code: StatusCode.UNKNOWN,
          message: "Unknown error",
        }
      });

    if (props.error) {
      const httpStatusCode = httpStatusCodeFromGRPCError(props.error)
      context.res.statusCode = httpStatusCode
      props.httpStatusCode = httpStatusCode
    }

    return {
      props,
    };
  }
};

export default GetOneByID;
