import React from "react";
import { Table, Alert } from "antd";
import { TablePaginationConfig } from "antd/lib/table";
import { SorterResult, TableCurrentDataSource } from "antd/lib/table/interface";
import Container from "../../components/container";
import SEO from "../../components/seo";
import ManufacturerReaderClient from "../../clients/grpc-web/manufacturer_reader_client";
import { Manufacturer } from "../../protobuf/manufacturer/manufacturer_pb";
import { ListByPageRequest } from "../../protobuf/manufacturer/manufacturer_reader_pb";

import { ListByPageClientSide, PageResult } from "../../components/listPage";

const ManufacturerLink = (
  text: string,
  record: Manufacturer.AsObject,
  index: number
): JSX.Element => <a href={`/manufacturer/${record.id}/`}>{text}</a>;

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: true,
    render: ManufacturerLink,
    width: "20%",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: ManufacturerLink,
    width: "20%",
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ManufacturerIndexProps {}

interface ManufacturerIndexState {
  data: Array<Manufacturer.AsObject>;
  pagination: TablePaginationConfig;
  loading: boolean;
  error?: Error;
}

class ManufacturerIndexPage extends React.Component<
  ManufacturerIndexProps,
  ManufacturerIndexState
> {
  constructor(props: ManufacturerIndexProps) {
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

    ListByPageClientSide<Manufacturer.AsObject, Manufacturer>(
      new ListByPageRequest(),
      pagination,
      ManufacturerReaderClient,
      "legit"
    )
      .then((response: PageResult<Manufacturer.AsObject>) => {
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
      | SorterResult<Manufacturer.AsObject>
      | SorterResult<Manufacturer.AsObject>[],
    extra: TableCurrentDataSource<Manufacturer.AsObject>
  ): void => {
    this.fetchData(pagination);
  };

  render(): JSX.Element {
    const { data, pagination, loading } = this.state;
    return (
      <Container menuKey="manufacturer">
        <SEO title="Manufacturers" />
        {this.state.error ? (
          <Alert message={this.state.error.message} type="error" />
        ) : null}
        <h1>Manufacturers</h1>
        <Table<Manufacturer.AsObject>
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

export default ManufacturerIndexPage;
