import { Card, Row, Col, Button, Table, Avatar, Progress } from "antd";
import {
  UserOutlined,
  DollarOutlined,
  PhoneOutlined,
  RiseOutlined,
} from "@ant-design/icons";
//import { Progress } from "antd";
export default function Dashboard() {
  const columns = [
    { title: "Lead Name", dataIndex: "name" },
    { title: "Company", dataIndex: "company" },
    { title: "Stage", dataIndex: "stage" },
    { title: "Value", dataIndex: "value" },
  ];

  const data = [
    { key: 1, name: "John Doe", company: "ABC Pvt Ltd", stage: "Proposal", value: "₹45,000" },
    { key: 2, name: "Priya Sharma", company: "Tech Solutions", stage: "Negotiation", value: "₹78,000" },
    { key: 3, name: "Rahul Kumar", company: "Global CRM", stage: "New Lead", value: "₹25,000" },
  ];

  return (
    <div style={{ padding: 10 }}>

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>CRM Dashboard</h2>
          <p style={{ margin: 0, color: "gray" }}>Overview & Performance</p>
        </div>

        <Button type="primary">+ Add Lead</Button>
      </div>

      {/* KPI CARDS */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            bordered={false}
  className="dashboard-card"
  style={{ borderRadius: 16 ,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "white",
            }}
          >
            <PhoneOutlined style={{ fontSize: 22 }} />
            <h2>1.2K</h2>
            <p>Inbound Calls</p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
            bordered={false}
  className="dashboard-card"
  style={{ borderRadius: 16 ,
              background: "linear-gradient(135deg, #ec4899, #f43f5e)",
              color: "white",
            }}
          >
            <UserOutlined style={{ fontSize: 22 }} />
            <h2>427</h2>
            <p>Generated Leads</p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
           bordered={false}
  className="dashboard-card"
  style={{ borderRadius: 16 ,
              background: "linear-gradient(135deg, #10b981, #059669)",
              color: "white",
            }}
          >
            <DollarOutlined style={{ fontSize: 22 }} />
            <h2>₹4.8L</h2>
            <p>Revenue This Month</p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <Card
           bordered={false}
  className="dashboard-card"
  style={{ borderRadius: 16 ,
              background: "linear-gradient(135deg, #f97316, #f59e0b)",
              color: "white",
            }}
          >
            <RiseOutlined style={{ fontSize: 22 }} />
            <h2>68%</h2>
            <p>Conversion Rate</p>
          </Card>
        </Col>
      </Row>
      {/* SECOND ROW */}
      <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
        <Col xs={24} lg={14}>
          <Card
            title="Recent Deals"
            bordered={false}
  className="dashboard-card"
  style={{ borderRadius: 16  }}
          >
            <Table columns={columns} dataSource={data} pagination={false} />
          </Card>
        </Col>

        <Col xs={24} lg={10}>
          <Card
            title="Sales Performance"
           bordered={false}
  className="dashboard-card"
  style={{ borderRadius: 16  }}
          >
            <p>Monthly Target</p>
            <Progress percent={72} status="active" />
            <p style={{ marginTop: 20 }}>Customer Satisfaction</p>
            <Progress percent={85} strokeColor="#10b981" />
          </Card>
        </Col>
      </Row>

      {/* THIRD ROW */}
      <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
        <Col xs={24} md={12}>
          <Card title="Top Sales Agents" bordered={false}
  className="dashboard-card"
  style={{ borderRadius: 16  }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span><Avatar icon={<UserOutlined />} /> Priya Sharma</span>
              <span>₹1.2L</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span><Avatar icon={<UserOutlined />} /> Rahul Kumar</span>
              <span>₹98K</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span><Avatar icon={<UserOutlined />} /> John Mathew</span>
              <span>₹75K</span>
            </div>
          </Card>
        </Col>

        <Col xs={24} md={12}>
  <Card
    title="Today's Activities"
    bordered={false}
  className="dashboard-card"
  style={{ borderRadius: 16  }}
  >
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

      {/* Activity Item 1 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#f9fafb",
          padding: "12px 16px",
          borderRadius: 12,
          border: "1px solid #f1f5f9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              height: 36,
              width: 36,
              borderRadius: 10,
              background: "#fee2e2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            📞
          </div>
          <div>
            <div style={{ fontWeight: 500 }}>Call with ABC Pvt Ltd</div>
            <div style={{ fontSize: 12, color: "gray" }}>10:00 AM</div>
          </div>
        </div>
      </div>

      {/* Activity Item 2 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#f9fafb",
          padding: "12px 16px",
          borderRadius: 12,
          border: "1px solid #f1f5f9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              height: 36,
              width: 36,
              borderRadius: 10,
              background: "#e0f2fe",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            📧
          </div>
          <div>
            <div style={{ fontWeight: 500 }}>Send Proposal to Tech Solutions</div>
            <div style={{ fontSize: 12, color: "gray" }}>12:30 PM</div>
          </div>
        </div>
      </div>

      {/* Activity Item 3 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#f9fafb",
          padding: "12px 16px",
          borderRadius: 12,
          border: "1px solid #f1f5f9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              height: 36,
              width: 36,
              borderRadius: 10,
              background: "#fef9c3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            🤝
          </div>
          <div>
            <div style={{ fontWeight: 500 }}>Client Meeting</div>
            <div style={{ fontSize: 12, color: "gray" }}>4:00 PM</div>
          </div>
        </div>
      </div>

    </div>
  </Card>
</Col>
      </Row>
      {/* DEAL STAGE SUMMARY */}
<Row gutter={[16, 16]} style={{ marginTop: 20 }}>
  <Col xs={24} md={12}>
    <Card title="Deal Stage Overview" bordered={false} className="dashboard-card" style={{ borderRadius: 16 }}>
      <p>New Leads</p>
      <Progress percent={40} strokeColor="#3b82f6" />
      <p>Proposal Sent</p>
      <Progress percent={65} strokeColor="#8b5cf6" />
      <p>Negotiation</p>
      <Progress percent={55} strokeColor="#f97316" />
      <p>Closed Won</p>
      <Progress percent={72} strokeColor="#10b981" />
    </Card>
  </Col>

  <Col xs={24} md={12}>
  <Card
    title="Lead Sources"
    bordered={false}
    style={{ borderRadius: 16 }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 40 }}>

      {/* Donut Chart */}
      <Progress
        type="circle"
        percent={45}
        strokeWidth={10}
        strokeColor={{
          "0%": "#3b82f6",
          "100%": "#6366f1",
        }}
        format={() => ""}
        size={180}
      />

      {/* Legend */}
      <div style={{ lineHeight: "30px" }}>
        <div><span style={{ color: "#3b82f6" }}>●</span> Website - 45%</div>
        <div><span style={{ color: "#ec4899" }}>●</span> Social Media - 30%</div>
        <div><span style={{ color: "#6366f1" }}>●</span> Referral - 15%</div>
        <div><span style={{ color: "#f59e0b" }}>●</span> Email Campaign - 10%</div>
      </div>

    </div>
  </Card>
</Col>
</Row>
    </div>
  );
}