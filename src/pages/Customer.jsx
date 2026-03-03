import { Card, Row, Col, Table, Input, Select, Tag, Avatar } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import {
  
  TeamOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
const { Option } = Select;

export default function Customer() {

  const columns = [
    {
      title: "Customer",
      dataIndex: "name",
      render: (text) => (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Avatar icon={<UserOutlined />} />
          {text}
        </div>
      ),
    },
    { title: "Company", dataIndex: "company" },
    { title: "Phone", dataIndex: "phone" },
    { title: "Email", dataIndex: "email" },
    { title: "Country", dataIndex: "country" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "red"}>
          {status}
        </Tag>
      ),
    },
  ];

  const data = [
  {
    key: 1,
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "+91 6543212345",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    key: 2,
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "+91 8877662312",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    key: 3,
    name: "Ronald Richards",
    company: "Adobe",
    phone: "+91 9988776655",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Active",
  },
  {
    key: 4,
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "+91 7766554433",
    email: "marvin@tesla.com",
    country: "Canada",
    status: "Active",
  },
  {
    key: 5,
    name: "Jerome Bell",
    company: "Google",
    phone: "+91 8899001122",
    email: "jerome@google.com",
    country: "United Kingdom",
    status: "Inactive",
  },
  {
    key: 6,
    name: "Kathryn Murphy",
    company: "Amazon",
    phone: "+91 9123456780",
    email: "kathryn@amazon.com",
    country: "Australia",
    status: "Active",
  },
  {
    key: 7,
    name: "Jacob Jones",
    company: "Meta",
    phone: "+91 9012345678",
    email: "jacob@meta.com",
    country: "Germany",
    status: "Active",
  },
];
  return (
    <div style={{ padding: 10 }}>
        {/* PAGE HEADER */}
<Row
  justify="space-between"
  align="middle"
  style={{ marginBottom: 24 }}
>
  <Col>
    <div>
      <div
        style={{
          fontSize: 26,
          fontWeight: 700,
          color: "#111827",
          letterSpacing: "-0.5px",
        }}
      >
        Customers
      </div>

      <div
        style={{
          fontSize: 14,
          color: "#6b7280",
          marginTop: 4,
          fontWeight: 400,
        }}
      >
        Manage and track all customers
      </div>
    </div>
  </Col>
</Row>
      {/* TOP STATS */}
      <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>

  {/* TOTAL CUSTOMERS */}
  <Col xs={24} sm={12} lg={8}>
    <Card
      bordered={false}
      className="dashboard-card"
      style={{
        borderRadius: 16,
        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        color: "white",
      }}
    >
      <UserOutlined style={{ fontSize: 26 }} />
      <h2 style={{ marginTop: 10 }}>5,423</h2>
      <p>Total Customers</p>
      <span style={{ opacity: 0.8 }}>↑ 16% this month</span>
    </Card>
  </Col>

  {/* MEMBERS */}
  <Col xs={24} sm={12} lg={8}>
    <Card
      bordered={false}
      className="dashboard-card"
      style={{
        borderRadius: 16,
        background: "linear-gradient(135deg, #ec4899, #f43f5e)",
        color: "white",
      }}
    >
      <TeamOutlined style={{ fontSize: 26 }} />
      <h2 style={{ marginTop: 10 }}>1,893</h2>
      <p>Members</p>
      <span style={{ opacity: 0.8 }}>↓ 1% this month</span>
    </Card>
  </Col>

  {/* ACTIVE NOW */}
  <Col xs={24} sm={12} lg={8}>
    <Card
      bordered={false}
      className="dashboard-card"
      style={{
        borderRadius: 16,
        background: "linear-gradient(135deg, #10b981, #059669)",
        color: "white",
      }}
    >
      <LaptopOutlined style={{ fontSize: 26 }} />
      <h2 style={{ marginTop: 10 }}>893</h2>
      <p>Active Now</p>
      <span style={{ opacity: 0.8 }}>+10% this month</span>
    </Card>
  </Col>

</Row>
      {/* CUSTOMER TABLE */}
      <Card bordered={false} style={{ borderRadius: 16 }}>

        {/* SEARCH + FILTER */}
        <Row
          gutter={[16, 16]}
          justify="space-between"
          style={{ marginBottom: 20 }}
        >
          <Col xs={24} md={8}>
            <Input
              placeholder="Search customer..."
              prefix={<SearchOutlined />}
            />
          </Col>

          <Col xs={24} md={6}>
            <Select defaultValue="newest" style={{ width: "100%" }}>
              <Option value="newest">Sort by: Newest</Option>
              <Option value="oldest">Oldest</Option>
            </Select>
          </Col>
        </Row>

        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          scroll={{ x: true }}
        />
      </Card>
    </div>
  );
}