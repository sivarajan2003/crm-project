import { useState } from "react";
import { Card, Row, Col, Table, Input, Select, Tag, Avatar, Grid, Button, Modal, Form } from "antd";
import { SearchOutlined, UserOutlined, TeamOutlined, LaptopOutlined, DownOutlined, PlusOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
const { Option } = Select;

export default function Customer() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
const [open, setOpen] = useState(false);
const [form] = Form.useForm();
  // Dutch specific styles mapping 
  const styles = {
    page: { padding: "8px 24px", minHeight: "100vh", width: "100%", background: "#f8fafc", fontFamily: '"Inter", sans-serif' },
    roundedCard: { borderRadius: 14, boxShadow: "0 6px 18px rgba(15,23,42,0.06)", border: "none" },
    filterCard: { borderRadius: 12, border: "1px solid #e5e7eb", background: "#ffffff", padding: "16px 20px" },
    kpiCard: { 
      borderRadius: 14, 
      background: "#ffffff", 
      boxShadow: "0 10px 30px rgba(2,6,23,0.06)", 
      padding: "20px",
      border: "none",
      cursor: "pointer",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  };

  // Framer Motion Animation Variants
  const cardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  const layoutAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } }
  };

  const columns = [
    {
      title: "Customer",
      dataIndex: "name",
      render: (text) => (
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Avatar 
             style={{ backgroundColor: "#f3f4f6", color: "#6b7280" }} 
             icon={<UserOutlined />} 
          />
          <span style={{ fontWeight: 600, color: "#111827", fontFamily: '"Inter", sans-serif' }}>{text}</span>
        </div>
      ),
    },
    { 
      title: "Company", 
      dataIndex: "company",
      render: (text) => <span style={{ color: "#4b5563", fontFamily: '"Inter", sans-serif' }}>{text}</span> 
    },
    { 
      title: "Phone", 
      dataIndex: "phone",
      render: (text) => <span style={{ color: "#4b5563", fontFamily: '"Inter", sans-serif' }}>{text}</span>
    },
    { 
      title: "Email", 
      dataIndex: "email",
      render: (text) => <span style={{ color: "#4b5563", fontFamily: '"Inter", sans-serif' }}>{text}</span> 
    },
    { 
      title: "Country", 
      dataIndex: "country",
      render: (text) => <span style={{ color: "#4b5563", fontFamily: '"Inter", sans-serif' }}>{text}</span> 
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag 
          style={{ 
            borderRadius: 6, 
            padding: "4px 10px", 
            border: "none",
            fontWeight: 600,
            fontSize: 12,
            fontFamily: '"Inter", sans-serif',
            background: status === "Active" ? "#d1fae5" : "#fee2e2",
            color: status === "Active" ? "#059669" : "#dc2626"
          }}
        >
          {status}
        </Tag>
      ),
    },
  ];

  const data = [
    { key: 1, name: "Jane Cooper", company: "Microsoft", phone: "+91 6543212345", email: "jane@microsoft.com", country: "United States", status: "Active" },
    { key: 2, name: "Floyd Miles", company: "Yahoo", phone: "+91 8877662312", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
    { key: 3, name: "Ronald Richards", company: "Adobe", phone: "+91 9988776655", email: "ronald@adobe.com", country: "Israel", status: "Active" },
    { key: 4, name: "Marvin McKinney", company: "Tesla", phone: "+91 7766554433", email: "marvin@tesla.com", country: "Canada", status: "Active" },
    { key: 5, name: "Jerome Bell", company: "Google", phone: "+91 8899001122", email: "jerome@google.com", country: "United Kingdom", status: "Inactive" },
    { key: 6, name: "Kathryn Murphy", company: "Amazon", phone: "+91 9123456780", email: "kathryn@amazon.com", country: "Australia", status: "Active" },
    { key: 7, name: "Jacob Jones", company: "Meta", phone: "+91 9012345678", email: "jacob@meta.com", country: "Germany", status: "Active" },
  ];

  return (
    <div style={styles.page}>
      
      {/* ================= PAGE HEADER ================= */}
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
  <Col>
    <div style={{ fontSize: 26, fontWeight: 700 }}>Customers</div>
    <div style={{ fontSize: 14, color: "#6b7280" }}>
      Manage and track all customers
    </div>
  </Col>

  <Col>
    <Button
      type="primary"
      icon={<PlusOutlined />}
      style={{ height: 40, borderRadius: 8 }}
      onClick={() => setOpen(true)}
    >
      Add Customer
    </Button>
  </Col>
</Row>
      {/* ================= TOP STATS (Animated, Black Text) ================= */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {[
          { title: "Total Customers", count: "5,423", icon: <UserOutlined />, change: "↑ 16% this month", trendColor: "#10b981", iconBg: "#e0e7ff", iconColor: "#6366f1", borderTop: "#6366f1" },
          { title: "Members", count: "1,893", icon: <TeamOutlined />, change: "↓ 1% this month", trendColor: "#ef4444", iconBg: "#fce7f3", iconColor: "#ec4899", borderTop: "#ec4899" },
          { title: "Active Now", count: "893", icon: <LaptopOutlined />, change: "↑ 10% this month", trendColor: "#10b981", iconBg: "#d1fae5", iconColor: "#10b981", borderTop: "#10b981" },
        ].map((item, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <motion.div
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -6, boxShadow: "0 12px 35px rgba(2,6,23,0.12)" }}
              variants={cardAnimation}
              style={{ ...styles.kpiCard, borderTop: `4px solid ${item.borderTop}` }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.5px", fontFamily: '"Inter", sans-serif' }}>
                    {item.title}
                  </div>
                  {/* NUMBERS ARE NOW BLACK REQUSTED BY USER */}
                  <div style={{ fontSize: 32, fontWeight: 800, marginTop: 8, color: "#111827", lineHeight: 1, fontFamily: '"Inter", sans-serif' }}>
                    {item.count}
                  </div>
                  <div style={{ marginTop: 12, fontSize: 13, fontWeight: 500, color: item.trendColor, fontFamily: '"Inter", sans-serif' }}>
                    {item.change}
                  </div>
                </div>
                
                <div style={{ 
                  width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                  background: item.iconBg, color: item.iconColor, fontSize: 22
                }}>
                  {item.icon}
                </div>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* ================= SEARCH & CUSTOMER TABLE ================= */}
      <motion.div variants={layoutAnimation} initial="hidden" animate="visible">
        
        {/* Isolated Filter Section */}
        <Card variant="borderless" style={{ ...styles.filterCard, marginBottom: 20 }}>
          <Row gutter={[16, 16]} justify="space-between" align="middle">
            <Col xs={24} md={10}>
              <Input
                placeholder="Search customer..."
                prefix={<SearchOutlined style={{ color: "#9ca3af" }} />}
                style={{ height: 40, borderRadius: 8, fontFamily: '"Inter", sans-serif' }}
              />
            </Col>

            <Col xs={24} md={6}>
              <Select 
                defaultValue="newest" 
                style={{ width: "100%", height: 40 }}
                suffixIcon={<DownOutlined style={{ color: "#9ca3af" }}/>}
              >
                <Option value="newest">Sort by: Newest</Option>
                <Option value="oldest">Sort by: Oldest</Option>
              </Select>
            </Col>
          </Row>
        </Card>

        {/* Table Container */}
        <Card bordered={false} style={{ ...styles.roundedCard, padding: 0 }}>
          
          <div style={{ padding: "20px 24px", borderBottom: "1px solid #f0f0f0" }}>
             <span style={{ fontSize: 16, fontWeight: 600, color: "#111827", fontFamily: '"Inter", sans-serif' }}>
               Customer Directory
             </span>
          </div>

          {/* DESKTOP + TABLET TABLE */}
          {!screens.xs && (
             <Table
               columns={columns}
               dataSource={data}
               pagination={{ pageSize: 5 }}
               scroll={{ x: true }}
               size="middle"
             />
          )}

          {/* MOBILE CARD VIEW */}
          {screens.xs && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 16 }}>
              {data.map((item) => (
                <div 
                  key={item.key} 
                  style={{
                    border: "1px solid #e5e7eb",
                    padding: 16,
                    borderRadius: 12,
                    background: "#ffffff",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Avatar style={{ backgroundColor: "#f3f4f6", color: "#6b7280" }} icon={<UserOutlined />} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 15, color: "#111827", fontFamily: '"Inter", sans-serif' }}>{item.name}</div>
                        <div style={{ fontSize: 13, color: "#6b7280", fontFamily: '"Inter", sans-serif' }}>{item.company}</div>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <Tag style={{ 
                      margin: 0, borderRadius: 6, border: "none", fontWeight: 600, fontSize: 11,
                      background: item.status === "Active" ? "#d1fae5" : "#fee2e2",
                      color: item.status === "Active" ? "#059669" : "#dc2626"
                    }}>
                      {item.status}
                    </Tag>
                  </div>

                  <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 6, fontSize: 13, color: "#4b5563", fontFamily: '"Inter", sans-serif' }}>
                    <div>📞 {item.phone}</div>
                    <div>📧 {item.email}</div>
                  </div>

                  <div style={{ marginTop: 12, borderTop: "1px solid #f3f4f6", paddingTop: 12, display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#9ca3af", fontSize: 12, fontFamily: '"Inter", sans-serif' }}>Country:</span>
                    <span style={{ fontWeight: 500, color: "#374151", fontSize: 13, fontFamily: '"Inter", sans-serif' }}>{item.country}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </motion.div>
<Modal
  title="Add Customer"
  open={open}
  onCancel={() => setOpen(false)}
  footer={null}
  centered
  zIndex={2000}
>
    <Form form={form} layout="vertical">

    <Form.Item label="Customer Name" name="name" rules={[{ required: true }]}>
      <Input placeholder="Enter name" />
    </Form.Item>

    <Form.Item label="Company" name="company">
      <Input placeholder="Enter company" />
    </Form.Item>

    <Form.Item label="Phone" name="phone">
      <Input placeholder="Enter phone" />
    </Form.Item>

    <Form.Item label="Email" name="email">
      <Input placeholder="Enter email" />
    </Form.Item>

    <Form.Item label="Country" name="country">
      <Input placeholder="Enter country" />
    </Form.Item>

    <Form.Item label="Status" name="status">
      <Select>
        <Option value="Active">Active</Option>
        <Option value="Inactive">Inactive</Option>
      </Select>
    </Form.Item>

    <Row gutter={10}>
      <Col span={12}>
        <Button block onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Col>

      <Col span={12}>
        <Button
          type="primary"
          block
          onClick={() => {
            form.validateFields().then(values => {
              console.log(values);
              setOpen(false);
              form.resetFields();
            });
          }}
        >
          Save Customer
        </Button>
      </Col>
    </Row>

  </Form>
</Modal>
    </div>
  );
}
