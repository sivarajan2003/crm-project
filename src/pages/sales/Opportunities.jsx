import { Card, Row, Col, Table, Input, Select, Button } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Option } = Select;
export default function Opportunities() {
const [viewType, setViewType] = useState("all");
  const [stageFilter, setStageFilter] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  /* ================= TABLE ================= */

  const columns = [
  {
    title: "S.No",
    key: "serial",
    width: 80,
  render: (text, record, index) => index + 1,
  },
    {
      title: "Opportunity Name",
      dataIndex: "deal",
    },
    {
      title: "Account",
      dataIndex: "company",
    },
    {
      title: "Stage",
      dataIndex: "stage",
      render: (stage) => {
        const styleMap = {
          Negotiation: { background: "#e0f2fe", color: "#0284c7" },
          "Proposal Sent": { background: "#fef3c7", color: "#d97706" },
          Qualified: { background: "#dcfce7", color: "#16a34a" },
          "Closed Won": { background: "#dcfce7", color: "#15803d" },
        };
        return (
          <span
            style={{
              padding: "4px 10px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 500,
              ...styleMap[stage],
            }}
          >
            {stage}
          </span>
        );
      },
    },
    {
      title: "Value",
      dataIndex: "value",
      render: (value) => (
        <span style={{ fontWeight: 600 }}>${value}</span>
      ),
    },
    {
      title: "Close Date",
      dataIndex: "closeDate",
    },
    {
      title: "Owner",
      dataIndex: "owner",
    },
  ];

  const data = [
    {
      key: 1,
      deal: "Website Redesign",
      company: "Acme Corp",
      stage: "Negotiation",
      value: "75,000",
      closeDate: "Apr 28, 2024",
      owner: "John Smith",
    },
    {
      key: 2,
      deal: "Cloud Services Upgrade",
      company: "Beta Solutions",
      stage: "Proposal Sent",
      value: "120,000",
      closeDate: "May 5, 2024",
      owner: "Sarah Lee",
    },
    {
      key: 3,
      deal: "ERP Implementation",
      company: "Global Industries",
      stage: "Qualified",
      value: "200,000",
      closeDate: "May 10, 2024",
      owner: "David Brown",
    },
    {
      key: 3,
      deal: "ERP Implementation",
      company: "Global Industries",
      stage: "Qualified",
      value: "200,000",
      closeDate: "May 10, 2024",
      owner: "David Brown",
    },
    {
      key: 3,
      deal: "ERP Implementation",
      company: "Global Industries",
      stage: "Qualified",
      value: "200,000",
      closeDate: "May 10, 2024",
      owner: "David Brown",
    },
    
  ];
const filteredData = data.filter((item) => {

  const matchesView =
    viewType === "all"
      ? true
      : item.owner === "John Smith"; // Example: My Opportunities

  const matchesStage =
    stageFilter === "all"
      ? true
      : item.stage === stageFilter;

  const matchesSearch =
    item.deal.toLowerCase().includes(searchText.toLowerCase()) ||
    item.company.toLowerCase().includes(searchText.toLowerCase());

  return matchesView && matchesStage && matchesSearch;
});
  return (
    <div style={{ padding: 24, background: "#f3f4f6", minHeight: "100vh" }}>

      {/* ================= HEADER ================= */}

      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <div>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#111827" }}>
            Opportunities
          </div>
        </div>

        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ borderRadius: 8 }}
        >
          Add Opportunity
        </Button>
      </Row>

      {/* ================= FILTERS ================= */}

      <Row gutter={12} style={{ marginBottom: 20 }}>
  <Col>
    <Select
      value={viewType}
      style={{ width: 180 }}
      onChange={(value) => setViewType(value)}
    >
      <Option value="all">All Opportunities</Option>
      <Option value="mine">My Opportunities</Option>
    </Select>
  </Col>

  <Col>
    <Select
      value={stageFilter}
      style={{ width: 180 }}
      onChange={(value) => setStageFilter(value)}
    >
      <Option value="all">Stage: All</Option>
      <Option value="Negotiation">Negotiation</Option>
      <Option value="Proposal Sent">Proposal Sent</Option>
      <Option value="Qualified">Qualified</Option>
      <Option value="Closed Won">Closed Won</Option>
    </Select>
  </Col>

  <Col>
    <Input
      prefix={<SearchOutlined />}
      placeholder="Search..."
      style={{ width: 200 }}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  </Col>
</Row>
      {/* ================= SUMMARY CARDS ================= */}

      <Row gutter={16} style={{ marginBottom: 24 }}>
        {[
          { title: "Open Deals", count: 24, amount: "$580,000" },
          { title: "In Negotiation", count: 8, amount: "$150,000" },
          { title: "Proposal Sent", count: 5, amount: "$220,000" },
          { title: "Closed Won", count: 12, amount: "$340,000" },
        ].map((item, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              bordered={false}
              style={{
                borderRadius: 14,
                background: "#ffffff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ fontSize: 14, color: "#6b7280" }}>
                {item.title}
              </div>

              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  marginTop: 8,
                  color: "#111827",
                }}
              >
                {item.count}
              </div>

              <div style={{ marginTop: 6, fontSize: 14, color: "#374151" }}>
                {item.amount}
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* ================= TABLE SECTION ================= */}

      <Card
        bordered={false}
        style={{
          borderRadius: 16,
          background: "#ffffff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            marginBottom: 16,
            color: "#111827",
          }}
        >
          Opportunities Pipeline
        </div>

        <Table
  columns={columns}
  dataSource={filteredData}
  pagination={{
    current: currentPage,
    pageSize: 10,
    showSizeChanger: false,
    onChange: (page) => setCurrentPage(page),
  }}
/>
      </Card>

    </div>
  );
}