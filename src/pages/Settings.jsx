import { Card, Row, Col, Input, Button, Switch, Divider } from "antd";
import { UserOutlined, LockOutlined, BellOutlined, HomeOutlined } from "@ant-design/icons";

export default function Settings() {
  return (
    <div style={{ padding: window.innerWidth < 768 ? 16 : 24, background: "#f3f4f6", minHeight: "100vh" }}>

      {/* ================= HEADER ================= */}

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 26, fontWeight: 700, color: "#111827" }}>
          Settings
        </div>
        <div style={{ fontSize: 14, color: "#6b7280", marginTop: 4 }}>
          Manage your account and system preferences
        </div>
      </div>

      <Row gutter={[24, 24]}>

        {/* ================= PROFILE SETTINGS ================= */}

        <Col xs={24} sm={24} md={12} lg={12}>
          <Card
            variant="borderless"
            style={{
              borderRadius: 16,
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
              <UserOutlined /> Profile Settings
            </div>

            <Input placeholder="Full Name" style={{ marginBottom: 12 }} />
            <Input placeholder="Email Address" style={{ marginBottom: 12 }} />
            <Input placeholder="Phone Number" />

           <Button
type="primary"
block
style={{ marginTop: 16, borderRadius: 8 }}
>
              Save Changes
            </Button>
          </Card>
        </Col>

        {/* ================= COMPANY SETTINGS ================= */}

        <Col xs={24} sm={24} md={12} lg={12}>
          <Card
            variant="borderless"
            style={{
              borderRadius: 16,
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
              <HomeOutlined /> Company Settings
            </div>

            <Input placeholder="Company Name" style={{ marginBottom: 12 }} />
            <Input placeholder="Company Address" style={{ marginBottom: 12 }} />
            <Input placeholder="GST / Tax ID" />

            <Button
type="primary"
block
style={{ marginTop: 16, borderRadius: 8 }}
>
              Update Company
            </Button>
          </Card>
        </Col>

        {/* ================= NOTIFICATIONS ================= */}

        <Col xs={24} sm={24} md={12} lg={12}>
          <Card
            variant="borderless"
            style={{
              borderRadius: 16,
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
              <BellOutlined /> Notifications
            </div>

            <Row justify="space-between" align="middle" style={{ marginBottom: 12 }}>
              <span>Email Notifications</span>
              <Switch defaultChecked />
            </Row>

            <Row justify="space-between" align="middle" style={{ marginBottom: 12 }}>
              <span>SMS Alerts</span>
              <Switch />
            </Row>

            <Row justify="space-between" align="middle">
              <span>Deal Updates</span>
              <Switch defaultChecked />
            </Row>
          </Card>
        </Col>

        {/* ================= SECURITY ================= */}

        <Col xs={24} sm={24} md={12} lg={12}>
          <Card
            variant="borderless"
            style={{
              borderRadius: 16,
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
              <LockOutlined /> Security
            </div>

            <Input.Password placeholder="Current Password" style={{ marginBottom: 12 }} />
            <Input.Password placeholder="New Password" style={{ marginBottom: 12 }} />
            <Input.Password placeholder="Confirm Password" />

            <Button
type="primary"
block
style={{ marginTop: 16, borderRadius: 8 }}
>
              Change Password
            </Button>
          </Card>
        </Col>

      </Row>
    </div>
  );
}