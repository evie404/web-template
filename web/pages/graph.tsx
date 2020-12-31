import { Layout, Menu, Breadcrumb } from "antd";
import dynamic from "next/dynamic";

const { Header, Content, Footer } = Layout;

// temp fix until https://github.com/ant-design/ant-design-charts/issues/215 is resolved.
const Line = dynamic(
  () => import("@ant-design/charts").then((mod) => mod.Line) as any,
  { ssr: false }
);

const data = [
  { time: "1991", value: 20 },
  { time: "1992", value: 20 },
];

const Graph: React.FC = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <h1>Content</h1>
        <Line data={data} xField="time" yField="value" />
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default Graph;
