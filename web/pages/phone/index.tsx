import React from "react";
import { Table } from "antd";
import { TablePaginationConfig } from "antd/lib/table";
import { SorterResult, TableCurrentDataSource } from "antd/lib/table/interface";
import Container from "../../components/container";
import SEO from "../../components/seo";
import PhoneServiceClient from "../../clients/grpc-web/phone_service_client";
import { Phone } from "../../protobuf/phone/phone_pb";
import {
  ListByPageRequest,
  ListByPageResponse,
} from "../../protobuf/phone/phone_service_pb";
import { Make } from "../../protobuf/make/make_pb";
import { OS } from "../../protobuf/os/os_pb";

const PhoneLink = (text: number, record: Phone.AsObject): JSX.Element => (
  <a href={`/phone/${record.id}/`}>{text}</a>
);

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: true,
    render: PhoneLink,
    width: "20%",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: PhoneLink,
    width: "20%",
  },
  {
    title: "Make",
    dataIndex: "make",
    sorter: true,
    render: (make: Make.AsObject) => `${make.name}`,
    width: "20%",
  },
  {
    title: "OS",
    dataIndex: "os",
    sorter: true,
    render: (os: OS.AsObject) => `${os.name}`,
    width: "20%",
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PhoneIndexProps {}

interface PhoneIndexState {
  data: Array<Phone.AsObject>;
  pagination: TablePaginationConfig;
  loading: boolean;
}

class PhoneIndexPage extends React.Component<PhoneIndexProps, PhoneIndexState> {
  constructor(props: PhoneIndexProps) {
    super(props);

    this.state = {
      data: [],
      pagination: {
        current: 1,
        pageSize: 10,
      },
      loading: false,
    };
  }

  componentDidMount(): void {
    const { pagination } = this.state;
    this.fetch(pagination);
  }

  handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, (React.Key | boolean)[] | null>,
    sorter: SorterResult<Phone.AsObject> | SorterResult<Phone.AsObject>[],
    extra: TableCurrentDataSource<Phone.AsObject>
  ): void => {
    this.fetch(
      pagination
      // sortField: sorter.field,
      // sortOrder: sorter.order,
      // pagination,
      // ...filters,
    );
  };

  fetch = (pagination: TablePaginationConfig): void => {
    this.setState({ loading: true });
    this.ListByPage(pagination).then((response: ListByPageResponse) => {
      const data = response.getResultsList().map((p: Phone) => p.toObject());

      this.setState({
        loading: false,
        data,
        pagination: {
          total: response.getTotalPages(),
        },
      });
    });
  };

  ListByPage = (
    pagination: TablePaginationConfig
  ): Promise<ListByPageResponse> => {
    const request = new ListByPageRequest();
    let page = 0;

    if (pagination.current) {
      page = pagination.current - 1;
    }

    request.setPage(page);
    request.setSize(pagination.pageSize);

    return PhoneServiceClient.listByPage(request, {
      // TODO: implement actual session token
      Authorization: "Bearer legit",
    });
  };

  render(): JSX.Element {
    const { data, pagination, loading } = this.state;
    return (
      <Container defKey="1">
        <SEO title="Phones" />
        <h1>Phones</h1>
        <Table<Phone.AsObject>
          columns={columns}
          rowKey={(record) => record.id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
        />
      </Container>
    );
  }
}

export default PhoneIndexPage;
