import { Card, Row, Col, Button, Table, Avatar, Progress, Typography, Grid } from "antd";
import {
  UserOutlined,
  DollarOutlined,
  PhoneOutlined,
  RiseOutlined,
  RightOutlined
} from "@ant-design/icons";
import { motion } from "framer-motion";
import callIcon from "../assets/icons/d1.gif";
import leadIcon from "../assets/icons/d2.gif";
import revenueIcon from "../assets/icons/d3.gif";
import conversionIcon from "../assets/icons/d4.gif";
const { Title, Text } = Typography;

export default function Dashboard() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  // Dutch specific styles mapping
  const styles = {
    page: { padding: "8px 24px", minHeight: "100vh", width: "100%", background: "#f8fafc" },
    roundedCard: { borderRadius: 14, boxShadow: "0 6px 18px rgba(15,23,42,0.06)", border: "none" },
    statGridCardWrap: {
      borderRadius: 14, overflow: "hidden", minHeight: 96,
      boxShadow: "0 10px 30px rgba(2,6,23,0.06)",
      cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s",
      color: "#fff"
    },
    statInner: { padding: 18, display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff" },
    statLeft: { display: "flex", flexDirection: "column", gap: 6 },
    statTitle: { fontSize: 13, fontWeight: 700, opacity: 0.95 },
    statValue: { fontSize: 28, fontWeight: 900, lineHeight: 1 },
    statMeta: { fontSize: 12, opacity: 0.95 },
statIconCircle: {
  width: 40,
  height: 40,
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255,255,255,0.15)"
},    statChevron: { width: 44, height: 44, borderRadius: 10, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" },
  };
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const hoverEffect = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 }
};
  const columns = [
    { title: "Lead Name", dataIndex: "name", render: (text) => <Text strong>{text}</Text> },
    { title: "Company", dataIndex: "company", render: (text) => <Text type="secondary">{text}</Text> },
    { title: "Stage", dataIndex: "stage" },
    { title: "Value", dataIndex: "value", align: "right", render: (val) => <Text strong style={{ color: "#10b981" }}>{val}</Text> },
  ];

  const data = [
    { key: 1, name: "John Doe", company: "ABC Pvt Ltd", stage: "Proposal", value: "₹45,000" },
    { key: 2, name: "Priya Sharma", company: "Tech Solutions", stage: "Negotiation", value: "₹78,000" },
    { key: 3, name: "Rahul Kumar", company: "Global CRM", stage: "New Lead", value: "₹25,000" },
  ];

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <Row justify="space-between" align="middle" style={{ marginBottom: 20 }}>
        <Col>
          <Title level={4} style={{ margin: 0, fontWeight: 700 }}>
            CRM Dashboard
          </Title>
          <Text type="secondary">Overview & Performance</Text>
        </Col>
        <Col style={{ marginTop: screens.xs ? 10 : 0 }}>
          <Button type="primary" style={{ borderRadius: 6, fontWeight: 500 }}>
            + Add Lead
          </Button>
        </Col>
      </Row>

      {/* KPI CARDS */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <motion.div
  variants={cardAnimation}
  initial="hidden"
  animate="visible"
  whileHover={{ scale: 1.05 }}
  style={styles.statGridCardWrap}
>
            <div style={{ ...styles.statInner, background: "linear-gradient(135deg,#7c3aed,#a78bfa)" }}>
              <div style={styles.statLeft}>
                <div style={styles.statTitle}>Inbound Calls</div>
                <div style={styles.statValue}>1.2K</div>
                <div style={styles.statMeta}>Total tracked calls</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
              <div style={styles.statIconCircle}>
  <img 
  src={callIcon}
  style={{
    width: 36,
    height: 36,
    //objectFit: "contain",
    mixBlendMode: "multiply"
  }}
/>
</div>
                <div style={styles.statChevron}>
                  <RightOutlined style={{ color: "rgba(255,255,255,0.9)" }} />
                </div>
              </div>
            </div>
         </motion.div>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
          <motion.div
  variants={cardAnimation}
  initial="hidden"
  animate="visible"
  whileHover={{ scale: 1.05 }}
  style={styles.statGridCardWrap}
>
            <div style={{ ...styles.statInner, background: "linear-gradient(135deg,#ff8a00,#ff5e3a)" }}>
              <div style={styles.statLeft}>
                <div style={styles.statTitle}>Generated Leads</div>
                <div style={styles.statValue}>427</div>
                <div style={styles.statMeta}>Total created</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
                <div style={styles.statIconCircle}>
                  {/* <img src={leadIcon} style={{ width: 26, height: 26 }} /> */}
                  <div style={styles.statIconCircle}>
  <img 
  src={leadIcon}
  style={{
    width: 36,
    height: 36,
    //objectFit: "contain",
     mixBlendMode: "multiply"
  }}
/>
</div>
                </div>
                <div style={styles.statChevron}>
                  <RightOutlined style={{ color: "rgba(255,255,255,0.9)" }} />
                </div>
              </div>
            </div>
          </motion.div>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
             <motion.div
  variants={cardAnimation}
  initial="hidden"
  animate="visible"
  whileHover={{ scale: 1.05 }}
  style={styles.statGridCardWrap}
>
            <div style={{ ...styles.statInner, background: "linear-gradient(135deg,#1e3a8a,#3b82f6)" }}>
              <div style={styles.statLeft}>
                <div style={styles.statTitle}>Revenue This Month</div>
                <div style={styles.statValue}>₹4.8L</div>
                <div style={styles.statMeta}>Closed deals amount</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
                {/* <div style={styles.statIconCircle}>
                  <img src={revenueIcon} style={{ width: 26, height: 26 }} />
                </div> */}
                 <div style={styles.statIconCircle}>
 <img 
  src={revenueIcon}
  style={{
    width: 36,
    height: 36,
    //objectFit: "contain",
     mixBlendMode: "multiply"
  }}
/>
</div>
                <div style={styles.statChevron}>
                  <RightOutlined style={{ color: "rgba(255,255,255,0.9)" }} />
                </div>
              </div>
            </div>
         </motion.div>
        </Col>

        <Col xs={24} sm={12} md={12} lg={6}>
                   <motion.div
  variants={cardAnimation}
  initial="hidden"
  animate="visible"
  whileHover={{ scale: 1.05 }}
  style={styles.statGridCardWrap}
>
            <div style={{ ...styles.statInner, background: "linear-gradient(135deg,#059669,#34d399)" }}>
              <div style={styles.statLeft}>
                <div style={styles.statTitle}>Conversion Rate</div>
                <div style={styles.statValue}>68%</div>
                <div style={styles.statMeta}>Lead to customer</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
                {/* <div style={styles.statIconCircle}>
                  <img src={conversionIcon} style={{ width: 26, height: 26 }} />
                </div> */}
                <div style={styles.statIconCircle}>
  <img 
  src={conversionIcon}
  style={{
    width: 36,
    height: 36,
    //objectFit: "contain",
     mixBlendMode: "multiply"
  }}
/>
</div>
                <div style={styles.statChevron}>
                  <RightOutlined style={{ color: "rgba(255,255,255,0.9)" }} />
                </div>
              </div>
            </div>
          </motion.div>
        </Col>
      </Row>

      {/* SECOND ROW */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={14}>
  <motion.div
    variants={cardAnimation}
    initial="hidden"
    animate="visible"
    whileHover={{ y: -6 }}
  >
          <Card
            title={
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                 <span style={{ fontSize: 16, fontWeight: 600 }}>Recent Deals</span>
              </div>
            }
            bordered={false}
            style={styles.roundedCard}
            styles={{ header: { borderBottom: "1px solid #f0f0f0", padding: "16px 24px" } }}
          >
            {/* DESKTOP TABLE */}
            {!screens.xs && !screens.sm && (
              <Table 
                columns={columns} 
                dataSource={data} 
                pagination={false} 
                size="small"
              />
            )}

            {/* MOBILE CARD VIEW */}
            {(screens.xs || screens.sm) && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {data.map((item) => (
                  <div
                    key={item.key}
                    style={{
                      border: "1px solid #f1f5f9",
                      padding: 16,
                      borderRadius: 12,
                      background: "#fafafa",
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>{item.name}</div>
                    <div style={{ fontSize: 13, color: "#6b7280" }}>{item.company}</div>
                    <div style={{ marginTop: 8 }}>
                      <b>Stage:</b> {item.stage}
                    </div>
                    <div style={{ color: "#10b981", fontWeight: 600 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </motion.div>
</Col>

        <Col xs={24} lg={10}>
  <motion.div
    variants={cardAnimation}
    initial="hidden"
    animate="visible"
    whileHover={{ y: -6 }}
  >
  <Card
             title={<span style={{ fontSize: 16, fontWeight: 600 }}>Sales Performance</span>}
            bordered={false}
            style={styles.roundedCard}
            styles={{ header: { borderBottom: "1px solid #f0f0f0", padding: "16px 24px" } }}
          >
            <div style={{ marginBottom: 6 }}>
              <Text strong>Monthly Target</Text>
            </div>
            <Progress percent={72} status="active" />
            
            <div style={{ marginTop: 20, marginBottom: 6 }}>
              <Text strong>Customer Satisfaction</Text>
            </div>
            <Progress percent={85} strokeColor="#10b981" />
          </Card>
        </motion.div>
</Col>
      </Row>

      {/* THIRD ROW */}
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} md={12}>
  <motion.div
    variants={cardAnimation}
    initial="hidden"
    animate="visible"
    whileHover={{ y: -6 }}
  >
  <Card
            title={<span style={{ fontSize: 16, fontWeight: 600 }}>Top Sales Agents</span>}
            bordered={false}
            style={styles.roundedCard}
            styles={{ header: { borderBottom: "1px solid #f0f0f0", padding: "16px 24px" } }}
          >
            {/* Sales agents styling matching Dutch's mapping iterations */}
            {[
               { name: "Priya Sharma", val: "₹1.2L" },
               { name: "Rahul Kumar", val: "₹98K" },
               { name: "John Mathew", val: "₹75K" }
            ].map((agent, idx) => (
              <div key={idx} style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                padding: "12px 0",
                borderBottom: idx < 2 ? "1px solid #f0f0f0" : "none" 
              }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                   <Avatar style={{ backgroundColor: '#1890ff' }} icon={<UserOutlined />} />
                   <Text strong>{agent.name}</Text>
                </div>
                <Text strong>
                  {agent.val}
                </Text>
              </div>
            ))}
          </Card>
         </motion.div>
</Col>

        <Col xs={24} md={12}>
  <motion.div
    variants={cardAnimation}
    initial="hidden"
    animate="visible"
    whileHover={{ y: -6 }}
  >
  <Card
             title={<span style={{ fontSize: 16, fontWeight: 600 }}>Today's Activities</span>}
            bordered={false}
            style={styles.roundedCard}
            styles={{ header: { borderBottom: "1px solid #f0f0f0", padding: "16px 24px" } }}
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
                      height: 36, width: 36, borderRadius: 10,
                      background: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
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
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  background: "#f9fafb", padding: "12px 16px", borderRadius: 12, border: "1px solid #f1f5f9",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      height: 36, width: 36, borderRadius: 10,
                      background: "#e0f2fe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
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
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  background: "#f9fafb", padding: "12px 16px", borderRadius: 12, border: "1px solid #f1f5f9",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      height: 36, width: 36, borderRadius: 10,
                      background: "#fef9c3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
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
         </motion.div>
</Col>
      </Row>

      {/* DEAL STAGE SUMMARY */}
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
       <Col xs={24} md={12}>
  <motion.div
    variants={cardAnimation}
    initial="hidden"
    animate="visible"
    whileHover={{ y: -6 }}
  >
  
          <Card 
            title={<span style={{ fontSize: 16, fontWeight: 600 }}>Deal Stage Overview</span>} 
            bordered={false} 
            style={styles.roundedCard}
            styles={{ header: { borderBottom: "1px solid #f0f0f0", padding: "16px 24px" } }}
          >
            <div style={{ marginBottom: 6 }}><Text strong>New Leads</Text></div>
            <Progress percent={40} strokeColor="#3b82f6" />
            
            <div style={{ marginTop: 12, marginBottom: 6 }}><Text strong>Proposal Sent</Text></div>
            <Progress percent={65} strokeColor="#8b5cf6" />
            
            <div style={{ marginTop: 12, marginBottom: 6 }}><Text strong>Negotiation</Text></div>
            <Progress percent={55} strokeColor="#f97316" />
            
            <div style={{ marginTop: 12, marginBottom: 6 }}><Text strong>Closed Won</Text></div>
            <Progress percent={72} strokeColor="#10b981" />
          </Card>
        </motion.div>
</Col>

        <Col xs={24} md={12}>
  <motion.div
    variants={cardAnimation}
    initial="hidden"
    animate="visible"
    whileHover={{ y: -6 }}
  >
  <Card
            title={<span style={{ fontSize: 16, fontWeight: 600 }}>Lead Sources</span>}
            bordered={false}
            style={styles.roundedCard}
            styles={{ header: { borderBottom: "1px solid #f0f0f0", padding: "16px 24px" }, body: { display: 'flex', flexDirection: 'column', justifyContent: 'center'} }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: screens.xs ? "column" : "row",
                gap: 40,
                justifyContent: "center",
                padding: "20px 0"
              }}
            >
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
              <div style={{ lineHeight: "30px", fontSize: 14 }}>
                <div><span style={{ color: "#3b82f6", marginRight: 8, fontSize: 18 }}>●</span> Website (45%)</div>
                <div><span style={{ color: "#ec4899", marginRight: 8, fontSize: 18 }}>●</span> Social Media (30%)</div>
                <div><span style={{ color: "#6366f1", marginRight: 8, fontSize: 18 }}>●</span> Referral (15%)</div>
                <div><span style={{ color: "#f59e0b", marginRight: 8, fontSize: 18 }}>●</span> Email Campaign (10%)</div>
              </div>
            </div>
          </Card>
       </motion.div>
</Col>
      </Row>
    </div>
  );
}
