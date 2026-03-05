import {
  Card,
  Row,
  Col,
  Button,
  Input,
  Select,
  Avatar,
  Pagination
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  FilterOutlined,
  DownOutlined
} from "@ant-design/icons";
import { useState } from "react";
import { Grid } from "antd";
const { Option } = Select;

export default function Activities() {
const { useBreakpoint } = Grid;
const screens = useBreakpoint();
  const [searchText, setSearchText] = useState("");

  /* ================= DATA ================= */

  const activities = [
    {
      id: 1,
      section: "Today",
      type: "Call",
      title: "Phone Call",
      subtitle: "Website Redesign",
      time: "3:00 PM",
      owner: "John Smith"
    },
    {
      id: 2,
      section: "Today",
      type: "Email",
      title: "Follow-Up Email",
      subtitle: "CRM Software Deal",
      time: "Today",
      owner: "Sarah Lee"
    },
    {
      id: 3,
      section: "Yesterday",
      type: "Meeting",
      title: "Prepare proposal for Acme Corp",
      subtitle: "Website Redesign",
      time: "Apr 23, 2024",
      owner: "John Smith"
    },
    {
      id: 4,
      section: "Earlier",
      type: "Task",
      title: "Demo call with David Brown",
      subtitle: "Beta Solutions",
      time: "Apr 23, 2024",
      owner: "Michael Clark"
    }
  ];

  const iconMap = {
    Call: <PhoneOutlined style={{ color: "#10b981" }} />,
    Email: <MailOutlined style={{ color: "#3b82f6" }} />,
    Meeting: <CalendarOutlined style={{ color: "#6366f1" }} />,
    Task: <CheckCircleOutlined style={{ color: "#f59e0b" }} />
  };

  const filteredActivities = activities.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const grouped = ["Today", "Yesterday", "Earlier"];

  return (
    <div style={{ padding: 24, background: "#f5f7fb", minHeight: "100vh" }}>

      {/* ================= HEADER ================= */}

      <Row justify="space-between" align="middle" style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 26, fontWeight: 700 }}>
          Activities
        </div>

        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{
            borderRadius: 8,
            height: 38
          }}
        >
          Add Activity
        </Button>
      </Row>

      {/* ================= FILTER BAR ================= */}

      <Row gutter={[12,12]} style={{ marginBottom: 20 }}>
        <Col xs={24} sm={12} md={6}>
          <Button type="primary">
            All Activities <DownOutlined />
          </Button>
        </Col>

        <Col>
          <Button>
            My Activities <DownOutlined />
          </Button>
        </Col>

        <Col>
          <Button>
            Activity Type: All <DownOutlined />
          </Button>
        </Col>

        <Col>
          <Button>
            Due Date: All <DownOutlined />
          </Button>
        </Col>

        <Col>
          <Button icon={<FilterOutlined />}>
            Filter
          </Button>
        </Col>

        <Col flex="auto">
          <Input
  prefix={<SearchOutlined />}
  placeholder="Search activities..."
  style={{
    width: screens.xs ? "100%" : 260
  }}
/>
        </Col>
      </Row>

      {/* ================= SUMMARY CARDS ================= */}

      <Row gutter={[16,16]} style={{ marginBottom: 24 }}>
        {[
          { title: "Upcoming", count: 16, color: "#10b981" },
          { title: "Overdue", count: 5, color: "#ef4444" },
          { title: "Completed", count: 37, color: "#3b82f6" },
          { title: "Meetings Today", count: 2, color: "#8b5cf6" },
        ].map((item, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              style={{
                borderRadius: 14,
                background: "#ffffff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
              }}
            >
              <div style={{ fontSize: 14, color: "#6b7280" }}>
                {item.title}
              </div>

              <div
                style={{
                  fontSize: screens.xs ? 24 : 28,
                  fontWeight: 700,
                  marginTop: 8,
                  color: item.color
                }}
              >
                {item.count}
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* ================= TIMELINE CARD ================= */}

      <Card
        style={{
          borderRadius: 16,
          background: "#ffffff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>
          Activity Timeline
        </div>

        {grouped.map((section) => (
          <div key={section} style={{ marginBottom: 20 }}>
            <div
              style={{
                fontWeight: 600,
                marginBottom: 10,
                color: "#374151"
              }}
            >
              {section}
            </div>

            {filteredActivities
              .filter((item) => item.section === section)
              .map((item) => (
                <div
  style={{
    display: "flex",
    flexDirection: screens.xs ? "column" : "row",
    justifyContent: "space-between",
    alignItems: screens.xs ? "flex-start" : "center",
    gap: screens.xs ? 10 : 0,
                    padding: "14px 0",
                    borderBottom: "1px solid #f1f5f9"
                  }}
                >
                  {/* LEFT */}
                 <div style={{ display: "flex", gap: 16, width: "100%" }}>
                    <Avatar
                      size={42}
                      style={{
                        background: "#f3f4f6",
                        color: "#111827"
                      }}
                      icon={iconMap[item.type]}
                    />

                    <div>
                      <div style={{ fontWeight: 600 }}>
                        {item.title}
                      </div>

                      <div
                        style={{
                          fontSize: 13,
                          color: "#6b7280"
                        }}
                      >
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 14 }}>
                      {item.time}
                    </div>

                    <div
                      style={{
                        fontSize: 13,
                        color: "#6b7280"
                      }}
                    >
                      {item.owner}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}

        {/* ================= PAGINATION ================= */}

        <div style={{ textAlign: "right", marginTop: 20 }}>
          <Pagination defaultCurrent={1} total={20} pageSize={5} />
        </div>
      </Card>
    </div>
  );
}