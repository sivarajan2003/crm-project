import {
  Card,
  Row,
  Col,
  Button,
  Input,
  Select,
  Avatar,
  Pagination,
  Grid
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
import { motion } from "framer-motion";
import { Typography } from "antd";
const { Option } = Select;
const { Title, Text } = Typography;
export default function Activities() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const [searchText, setSearchText] = useState("");

  // Dutch specific styles mapping 
  const styles = {
    page: { padding: "8px 24px", minHeight: "100vh", width: "100%", background: "#f8fafc" },
    roundedCard: { borderRadius: 14, boxShadow: "0 6px 18px rgba(15,23,42,0.06)", border: "none" },
    filterCard: { borderRadius: 12, border: "1px solid #e5e7eb", background: "#ffffff", padding: "16px 20px", marginBottom: 20 },
    primaryBtn: { borderRadius: 8, fontWeight: 500, height: 40, fontFamily: '"Inter", sans-serif' },
    secondaryBtn: { borderRadius: 8, fontWeight: 500, height: 40, border: "1px solid #d1d5db", background: "#ffffff", fontFamily: '"Inter", sans-serif', color: "#4b5563" },
    kpiCard: { 
      borderRadius: 14, 
      background: "#ffffff", 
      boxShadow: "0 10px 30px rgba(2,6,23,0.06)", 
      padding: "20px",
      border: "none",
      cursor: "pointer"
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } }
  };

  /* ================= DATA ================= */
  const activities = [
    {
      id: 1, section: "Today", type: "Call", title: "Phone Call",
      subtitle: "Website Redesign", time: "3:00 PM", owner: "John Smith"
    },
    {
      id: 2, section: "Today", type: "Email", title: "Follow-Up Email",
      subtitle: "CRM Software Deal", time: "Today", owner: "Sarah Lee"
    },
    {
      id: 3, section: "Yesterday", type: "Meeting", title: "Prepare proposal for Acme Corp",
      subtitle: "Website Redesign", time: "Apr 23, 2024", owner: "John Smith"
    },
    {
      id: 4, section: "Earlier", type: "Task", title: "Demo call with David Brown",
      subtitle: "Beta Solutions", time: "Apr 23, 2024", owner: "Michael Clark"
    }
  ];

  const iconMap = {
    Call: <PhoneOutlined style={{ fontSize: 18, color: "#10b981" }} />,
    Email: <MailOutlined style={{ fontSize: 18, color: "#3b82f6" }} />,
    Meeting: <CalendarOutlined style={{ fontSize: 18, color: "#6366f1" }} />,
    Task: <CheckCircleOutlined style={{ fontSize: 18, color: "#f59e0b" }} />
  };

  const bgMap = {
    Call: "#d1fae5",
    Email: "#dbeafe",
    Meeting: "#e0e7ff",
    Task: "#fef3c7"
  };

  const filteredActivities = activities.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const grouped = ["Today", "Yesterday", "Earlier"];

  return (
    <div style={styles.page}>

      {/* ================= HEADER ================= */}
      
<Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
  <Col>
    <Title level={2} style={{ margin: 0 }}>
       Activities
    </Title>

    <Text type="secondary">
     Track and manage your daily tasks and meetings
    </Text>
  </Col>
        <Col>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={styles.primaryBtn}
          >
            Add Activity
          </Button>
        </Col>
      </Row>

      {/* ================= FILTER BAR ================= */}
      <Card bordered={false} style={styles.filterCard} bodyStyle={{ padding: 0 }}>
        <Row gutter={[12, 12]} align="middle">
          
          {/* Action Filters Group */}
          <Col xs={24} sm={24} lg={16}>
             <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <Button style={{ ...styles.secondaryBtn, color: "#1677ff", borderColor: "#1677ff", background: "#f0f5ff" }}>
                  All Activities <DownOutlined style={{ fontSize: 10 }}/>
                </Button>

                <Button style={styles.secondaryBtn}>
                  My Activities <DownOutlined style={{ fontSize: 10 }}/>
                </Button>

                <Button style={styles.secondaryBtn}>
                  Activity Type: All <DownOutlined style={{ fontSize: 10 }}/>
                </Button>

                <Button style={styles.secondaryBtn}>
                  Due Date: All <DownOutlined style={{ fontSize: 10 }}/>
                </Button>

                <Button icon={<FilterOutlined />} style={styles.secondaryBtn}>
                  Filter
                </Button>
             </div>
          </Col>

          {/* Search Box */}
          <Col xs={24} sm={24} lg={8} style={{ display: "flex", justifyContent: screens.lg ? "flex-end" : "flex-start" }}>
            <Input
              prefix={<SearchOutlined style={{ color: "#9ca3af" }} />}
              placeholder="Search activities..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{
                width: screens.xs ? "100%" : 280,
                height: 40,
                borderRadius: 8,
                fontFamily: '"Inter", sans-serif'
              }}
            />
          </Col>
        </Row>
      </Card>

      {/* ================= SUMMARY CARDS (Animated) ================= */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {[
          { title: "Upcoming", count: 16, color: "#10b981", bg: "#10b981" },
          { title: "Overdue", count: 5, color: "#ef4444", bg: "#ef4444" },
          { title: "Completed", count: 37, color: "#3b82f6", bg: "#3b82f6" },
          { title: "Meetings Today", count: 2, color: "#8b5cf6", bg: "#8b5cf6" },
        ].map((item, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <motion.div
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -6, boxShadow: "0 12px 35px rgba(2,6,23,0.12)" }}
              variants={cardAnimation}
              style={{ ...styles.kpiCard, borderTop: `4px solid ${item.bg}` }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.5px", fontFamily: '"Inter", sans-serif' }}>
                {item.title}
              </div>

              <div
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  marginTop: 10,
                  color: item.color,
                  lineHeight: 1,
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                {item.count}
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* ================= TIMELINE CARD ================= */}
      <motion.div variants={layoutAnimation} initial="hidden" animate="visible">
        <Card
          bordered={false}
          style={{ ...styles.roundedCard, padding: 0 }}
        >
          <div style={{ 
            padding: "20px 24px", 
            borderBottom: "1px solid #f0f0f0",
            fontSize: 16, 
            fontWeight: 600, 
            color: "#111827",
            fontFamily: '"Inter", sans-serif'
          }}>
            Activity Timeline
          </div>

          <div style={{ padding: "0 24px" }}>
            {grouped.map((section) => {
              const sectionActivities = filteredActivities.filter((item) => item.section === section);
              
              if (sectionActivities.length === 0) return null;

              return (
                <div key={section} style={{ paddingTop: 20 }}>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      marginBottom: 12,
                      color: "#111827",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      fontFamily: '"Inter", sans-serif'
                    }}
                  >
                    {section}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {sectionActivities.map((item, idx) => (
                      <div
                        key={item.id}
                        style={{
                          display: "flex",
                          flexDirection: screens.xs ? "column" : "row",
                          justifyContent: "space-between",
                          alignItems: screens.xs ? "flex-start" : "center",
                          gap: screens.xs ? 12 : 0,
                          padding: "16px",
                          borderRadius: 12,
                          border: "1px solid #f1f5f9",
                          background: "#ffffff",
                          transition: "all 0.2s ease",
                          cursor: "pointer",
                          marginBottom: idx === sectionActivities.length - 1 ? 20 : 0
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "#e2e8f0";
                          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.03)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "#f1f5f9";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        {/* LEFT (Icon + Titles) */}
                        <div style={{ display: "flex", gap: 16, width: "100%", alignItems: "center" }}>
                          <Avatar
                            size={48}
                            style={{
                              background: bgMap[item.type],
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center"
                            }}
                            icon={iconMap[item.type]}
                          />

                          <div>
                            <div style={{ fontWeight: 600, fontSize: 15, color: "#111827", fontFamily: '"Inter", sans-serif' }}>
                              {item.title}
                            </div>
                            <div style={{ fontSize: 13, color: "#6b7280", marginTop: 2, fontFamily: '"Inter", sans-serif' }}>
                              {item.subtitle}
                            </div>
                          </div>
                        </div>

                        {/* RIGHT (Time + Owner) */}
                        <div style={{ textAlign: screens.xs ? "left" : "right", width: screens.xs ? "100%" : "auto", paddingLeft: screens.xs ? 64 : 0 }}>
                          <div style={{ fontSize: 14, fontWeight: 500, color: "#374151", fontFamily: '"Inter", sans-serif' }}>
                            {item.time}
                          </div>
                          <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 2, fontFamily: '"Inter", sans-serif' }}>
                            {item.owner}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= PAGINATION ================= */}
          <div style={{ 
            padding: "20px 24px", 
            borderTop: "1px solid #f0f0f0", 
            display: "flex", 
            justifyContent: "flex-end" 
          }}>
            <Pagination defaultCurrent={1} total={20} pageSize={5} />
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
