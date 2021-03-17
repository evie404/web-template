import React from "react";
import { Table, Alert } from "antd";
import { TablePaginationConfig } from "antd/lib/table";
import { SorterResult, TableCurrentDataSource } from "antd/lib/table/interface";
import Container from "../../components/container";
import SEO from "../../components/seo";
import OperatingSystemReaderClient from "../../clients/grpc-web/operating_system_reader_client";
import { OperatingSystem } from "../../protobuf/operating_system/operating_system_pb";
import { ListByPageRequest } from "../../protobuf/operating_system/operating_system_reader_pb";

import { ListByPageClientSide, PageResult } from "../../components/listPage";

const OperatingSystemLink = (
  text: string,
  record: OperatingSystem.AsObject,
  index: number
): JSX.Element => <a href={`/operating_system/${record.id}/`}>{text}</a>;

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: true,
    render: OperatingSystemLink,
    width: "20%",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: OperatingSystemLink,
    width: "20%",
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OperatingSystemIndexProps {}

interface OperatingSystemIndexState {
  data: Array<OperatingSystem.AsObject>;
  pagination: TablePaginationConfig;
  loading: boolean;
  error?: Error;
}

class OperatingSystemIndexPage extends React.Component<
  OperatingSystemIndexProps,
  OperatingSystemIndexState
> {
  constructor(props: OperatingSystemIndexProps) {
    super(props);

    this.state = {
      data: [],
      pagination: {
        current: 1,
        pageSize: 10,
      },
      loading: true,
    };
  }

  componentDidMount(): void {
    const { pagination } = this.state;
    this.fetchData(pagination);
  }

  fetchData = (pagination: TablePaginationConfig): void => {
    this.setState({ loading: true, error: null });

    ListByPageClientSide<OperatingSystem.AsObject, OperatingSystem>(
      new ListByPageRequest(),
      pagination,
      OperatingSystemReaderClient,
      "legit"
    )
      .then((response: PageResult<OperatingSystem.AsObject>) => {
        this.setState({
          loading: false,
          data: response.results,
          pagination: response.pagination,
        });
      })
      .catch((e: Error) => {
        this.setState({
          loading: false,
          error: e,
        });
        console.log(e);
      });
  };

  handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, (React.Key | boolean)[] | null>,
    sorter:
      | SorterResult<OperatingSystem.AsObject>
      | SorterResult<OperatingSystem.AsObject>[],
    extra: TableCurrentDataSource<OperatingSystem.AsObject>
  ): void => {
    this.fetchData(pagination);
  };

  render(): JSX.Element {
    const { data, pagination, loading } = this.state;
    return (
      <Container menuKey="operating_system">
        <SEO title="OperatingSystems" />
        {this.state.error ? (
          <Alert message={this.state.error.message} type="error" />
        ) : null}
        <h1>OperatingSystems</h1>
        <Table<OperatingSystem.AsObject>
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

export default OperatingSystemIndexPage;
