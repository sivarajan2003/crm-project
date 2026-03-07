import { useState, useEffect } from "react";
import { Card, Row, Col, Table, Tag, Spin, message } from "antd";
import { UserOutlined, ShoppingOutlined, DollarOutlined, RiseOutlined } from "@ant-design/icons";
import { dashboardService } from "../services";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    setLoading(true);
    try {
      const response = await dashboardService.getStats();
      if (response.success) {
        setStats(response.data);
      }
    } catch (error) {
      message.error('Failed to load dashboard statistics');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Deal Name",
      dataIndex: "deal_name",
      key: "deal_name",
      render: (text) => <span style={{ fontWeight: 600 }}>{text}</span>
    },
    {
      title: "Customer",
      key: "customer",
      render: (_, record) => record.customer?.name || 'N/A'
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      render: (value) => `₹${(value || 0).toLocaleString('en-IN')}`
    },
    {
      title: "Stage",
      dataIndex: "stage",
      key: "stage",
      render: (stage) => {
        const colors = {
          'Lead': 'blue',
          'Qualified': 'cyan',
          'Proposal': 'orange',
          'Negotiation': 'purple',
          'Won': 'green',
          'Lost': 'red'
        };
        return <Tag color={colors[stage] || 'default'}>{stage}</Tag>;
      }
    },
    {
      title: "Assigned To",
      key: "assignedTo",
      render: (_, record) => record.assignedTo?.name || 'Unassigned'
    }
  ];

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!stats) {
    return (
      <div style={{ padding: 24 }}>
        <p>Failed to load dashboard data</p>
      </div>
    );
  }

  const cardData = [
    {
      title: "Total Customers",
      value: stats.overview?.totalCustomers || 0,
      icon: <UserOutlined style={{ fontSize: 24, color: "#1890ff" }} />,
      color: "#1890ff"
    },
    {
      title: "Total Leads",
      value: stats.overview?.totalLeads || 0,
      icon: <ShoppingOutlined style={{ fontSize: 24, color: "#52c41a" }} />,
      color: "#52c41a"
    },
    {
      title: "Total Deals",
      value: stats.overview?.totalDeals || 0,
      icon: <RiseOutlined style={{ fontSize: 24, color: "#faad14" }} />,
      color: "#faad14"
    },
    {
      title: "Total Revenue",
      value: `₹${(stats.revenue?.totalRevenue || 0).toLocaleString('en-IN')}`,
      icon: <DollarOutlined style={{ fontSize: 24, color: "#f5222d" }} />,
      color: "#f5222d"
    }
  ];

  return (
    <div style={{ padding: 24, background: "#f0f2f5", minHeight: "100vh" }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>Dashboard</h1>

      {/* Stats Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {cardData.map((card, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              style={{
                borderRadius: 8,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                borderLeft: `4px solid ${card.color}`
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ margin: 0, color: "#8c8c8c", fontSize: 14 }}>{card.title}</p>
                  <h2 style={{ margin: "8px 0 0 0", fontSize: 28, fontWeight: "bold" }}>
                    {card.value}
                  </h2>
                </div>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: `${card.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {card.icon}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Additional Stats Row */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card style={{ borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <p style={{ margin: 0, color: "#8c8c8c", fontSize: 14 }}>Pending Tasks</p>
            <h2 style={{ margin: "8px 0 0 0", fontSize: 28, fontWeight: "bold", color: "#faad14" }}>
              {stats.tasks?.pending || 0}
            </h2>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card style={{ borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <p style={{ margin: 0, color: "#8c8c8c", fontSize: 14 }}>Open Tickets</p>
            <h2 style={{ margin: "8px 0 0 0", fontSize: 28, fontWeight: "bold", color: "#f5222d" }}>
              {stats.breakdown?.ticketsByStatus?.find(t => t.status === 'Open')?.count || 0}
            </h2>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card style={{ borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <p style={{ margin: 0, color: "#8c8c8c", fontSize: 14 }}>Total Invoices</p>
            <h2 style={{ margin: "8px 0 0 0", fontSize: 28, fontWeight: "bold", color: "#722ed1" }}>
              {stats.overview?.totalInvoices || 0}
            </h2>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card style={{ borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <p style={{ margin: 0, color: "#8c8c8c", fontSize: 14 }}>Conversion Rate</p>
            <h2 style={{ margin: "8px 0 0 0", fontSize: 28, fontWeight: "bold", color: "#52c41a" }}>
              {stats.deals?.conversionRate || 0}%
            </h2>
          </Card>
        </Col>
      </Row>

      {/* Recent Deals Table */}
      <Card
        title="Recent Deals"
        style={{ borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      >
        <Table
          dataSource={stats.recent?.deals || []}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
}
