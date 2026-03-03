import { Card, Row, Col, Table, Input, Select, Button, Tag } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import AddLeads from "../components/AddLeads";
import { FilterOutlined } from "@ant-design/icons";
const { Option } = Select;

export default function Product() {

  // 🔥 ORIGINAL DATA
const originalData = [
  {
    key: 1,
    name: "John Doe",
    company: "ABC Pvt Ltd",
    email: "john@abc.com",
    phone: "9876543210",
    status: "New",
    value: "₹45,000",
    assigned: "Priya Sharma",
  },
  {
    key: 2,
    name: "Rahul Kumar",
    company: "Tech Solutions",
    email: "rahul@tech.com",
    phone: "9123456789",
    status: "Qualified",
    value: "₹78,000",
    assigned: "Rahul Mehta",
  },
  {
    key: 3,
    name: "Anjali Verma",
    company: "NextGen Solutions",
    email: "anjali@nextgen.com",
    phone: "9012345678",
    status: "Contacted",
    value: "₹32,000",
    assigned: "Priya Sharma",
  },
  {
    key: 4,
    name: "Karthik Reddy",
    company: "Innovatech Pvt Ltd",
    email: "karthik@innovatech.com",
    phone: "8899776655",
    status: "New",
    value: "₹55,000",
    assigned: "Rahul Mehta",
  },
  {
    key: 5,
    name: "Sneha Iyer",
    company: "BlueWave Systems",
    email: "sneha@bluewave.com",
    phone: "9345678123",
    status: "Lost",
    value: "₹20,000",
    assigned: "Priya Sharma",
  },
  {
    key: 6,
    name: "Vikram Singh",
    company: "Skyline Technologies",
    email: "vikram@skyline.com",
    phone: "9786543210",
    status: "Qualified",
    value: "₹90,000",
    assigned: "Rahul Mehta",
  },
  {
    key: 7,
    name: "Meera Nair",
    company: "DigitalCore",
    email: "meera@digitalcore.com",
    phone: "9123987654",
    status: "Contacted",
    value: "₹60,000",
    assigned: "Priya Sharma",
  },
];
const [data, setData] = useState(originalData);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [repFilter, setRepFilter] = useState("all");

  // 🔥 FILTER LOGIC
  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.company.toLowerCase().includes(searchText.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;

    const matchesRep =
      repFilter === "all" || item.assigned === repFilter;

    return matchesSearch && matchesStatus && matchesRep;
  });

  const columns = [
  {
    title: "S. No",
    key: "serial",
    render: (text, record, index) => index + 1,
    width: 80,
  },
  { title: "Lead Name", dataIndex: "name" },
  { title: "Company", dataIndex: "company" },
  { title: "Email", dataIndex: "email" },
  { title: "Phone", dataIndex: "phone" },
  {
  title: "Status",
  dataIndex: "status",
  render: (status) => {
    const styleMap = {
      New: { background: "#e0f2fe", color: "#0284c7" },
      Contacted: { background: "#fef3c7", color: "#d97706" },
      Qualified: { background: "#dcfce7", color: "#16a34a" },
      Lost: { background: "#fee2e2", color: "#dc2626" },
    };

    return (
      <span
        style={{
          padding: "4px 10px",
          borderRadius: 8,
          fontSize: 12,
          fontWeight: 500,
          ...styleMap[status],
        }}
      >
        {status}
      </span>
    );
  },
},
  { title: "Value", dataIndex: "value" },
  { title: "Assigned To", dataIndex: "assigned" },
];
const [modalOpen, setModalOpen] = useState(false);
  return (
    <div style={{ padding: 10 }}>

      {/* HEADER */}
      <Row justify="space-between" align="middle" style={{ marginBottom: 20 }}>

  {/* LEFT SIDE */}
  <Col>
    {/* <h2 style={{ margin: 0 }}>Leads Management</h2>
    <p style={{ color: "gray", margin: 0 }}>
      Track and manage all leads
    </p> */}
    <div style={{ marginBottom: 24 }}>
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Leads Management
        </div>

        <div
          style={{
            fontSize: 14,
            color: "#6b7280",
            marginTop: 4,
          }}
        >
          Track and manage all leads
        </div>
      </div>
  </Col>

  {/* RIGHT SIDE BUTTONS */}
  <Col>
    <div style={{ display: "flex", gap: 12 }}>

      {/* FILTER BUTTON */}
      <Button
        icon={<FilterOutlined />}
        style={{
          borderRadius: 10,
          border: "1px solid #d1d5db",
          background: "#f9fafb",
          fontWeight: 500,
        }}
      >
        Filters
      </Button>

      {/* ADD LEAD BUTTON */}
      <Button
        type="primary"
        icon={<PlusOutlined />}
        style={{ borderRadius: 10 }}
        onClick={() => setModalOpen(true)}
      >
        Add Lead
      </Button>

    </div>
  </Col>

</Row>
      {/* FILTER BAR */}
      <Card bordered={false} style={{ borderRadius: 16, marginBottom: 20 }}>
        <Row gutter={[16, 16]}>

          {/* SEARCH */}
          <Col xs={24} md={8}>
            <Input
              placeholder="Search leads..."
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Col>

          {/* STATUS FILTER */}
          <Col xs={24} md={6}>
            <Select
              value={statusFilter}
              style={{ width: "100%" }}
              onChange={(value) => setStatusFilter(value)}
            >
              <Option value="all">All Status</Option>
              <Option value="New">New</Option>
              <Option value="Qualified">Qualified</Option>
              <Option value="Contacted">Contacted</Option>
              <Option value="Lost">Lost</Option>
            </Select>
          </Col>

          {/* SALES REP FILTER */}
          <Col xs={24} md={6}>
            <Select
              value={repFilter}
              style={{ width: "100%" }}
              onChange={(value) => setRepFilter(value)}
            >
              <Option value="all">All Sales Reps</Option>
              <Option value="Priya Sharma">Priya Sharma</Option>
              <Option value="Rahul Mehta">Rahul Mehta</Option>
            </Select>
          </Col>

          {/* RESET BUTTON */}
{/*         
<Col xs={12} md={2}>
  <Button type="primary" block>
    Apply
  </Button>
</Col>


<Col xs={12} md={2}>
  <Button
    block
    onClick={() => {
      setSearchText("");
      setStatusFilter("all");
      setRepFilter("all");
    }}
  >
    Reset
  </Button>
</Col> */}
        </Row>
      </Card>

      {/* TABLE */}
      <Card
  bordered={false}
  style={{
    borderRadius: 16,
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
  }}
>
  <Table
    columns={columns}
    dataSource={filteredData}
    pagination={{
      pageSize: 10,
      showSizeChanger: false,
    }}
    scroll={{ x: true }}
    className="custom-table"
  />
</Card>
      <AddLeads
  open={modalOpen}
  onClose={() => setModalOpen(false)}
  onSave={(newLead) => {
    setData([...data, newLead]);
    setModalOpen(false);
  }}
/>

    </div>
  );
}