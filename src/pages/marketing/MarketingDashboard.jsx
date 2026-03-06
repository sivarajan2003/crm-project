import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  MousePointerClick,
  Eye,
  Link as LinkIcon
} from "lucide-react";

import { Modal, Button, Card, Row, Col, Typography, Statistic, Alert } from "antd";

const { Title, Text } = Typography;

const CRM_PRIMARY = "#1C2244";
const CRM_SECONDARY = "#4F46E5";

const MarketingDashboard = () => {

  const [isConnectModalVisible, setIsConnectModalVisible] = useState(false);
  const [activePlatform, setActivePlatform] = useState(null);

  const summaryData = [
    {
      title: "Total Ad Spend",
      value: "₹0.00",
      icon: <DollarSign size={22} color={CRM_PRIMARY} />
    },
    {
      title: "Total Impressions",
      value: "0",
      icon: <Eye size={22} color={CRM_PRIMARY} />
    },
    {
      title: "Total Clicks",
      value: "0",
      icon: <MousePointerClick size={22} color={CRM_PRIMARY} />
    },
    {
      title: "Avg CPC",
      value: "₹0.00",
      icon: <TrendingUp size={22} color={CRM_PRIMARY} />
    }
  ];

  const handleConnect = (platform) => {
    setActivePlatform(platform);
    setIsConnectModalVisible(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ padding: 24 }}
    >

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24
        }}
      >

        <div>
          <Title level={2} style={{ margin: 0 }}>
            Marketing Overview
          </Title>
          <Text type="secondary">
            Monitor performance of your connected advertising platforms
          </Text>
        </div>

        <div style={{ display: "flex", gap: 12 }}>

          <Button
            type="primary"
            icon={<LinkIcon size={16} />}
            onClick={() => handleConnect("Meta")}
            style={{
              backgroundColor: CRM_PRIMARY,
              borderColor: CRM_PRIMARY,
              borderRadius: 8
            }}
          >
            Connect Meta
          </Button>

          <Button
            type="primary"
            icon={<LinkIcon size={16} />}
            onClick={() => handleConnect("Google")}
            style={{
              backgroundColor: CRM_SECONDARY,
              borderColor: CRM_SECONDARY,
              borderRadius: 8
            }}
          >
            Connect Google
          </Button>

        </div>
      </div>

      {/* ALERT */}
      <Alert
        message="No Ad Platforms Connected"
        description="Connect your Meta or Google advertising accounts to begin tracking campaign performance within your CRM."
        type="info"
        showIcon
        style={{
          borderRadius: 10,
          marginBottom: 24
        }}
      />

      {/* STAT CARDS */}
      <Row gutter={[20, 20]}>

        {summaryData.map((data, index) => (

          <Col xs={24} sm={12} lg={6} key={index}>

            <Card
              hoverable
              style={{
                borderRadius: 14,
                border: "1px solid #f1f1f1",
                boxShadow: "0 6px 18px rgba(0,0,0,0.04)"
              }}
              bodyStyle={{ padding: 22 }}
            >

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >

                <Statistic
                  title={
                    <Text style={{ color: "#6B7280" }}>
                      {data.title}
                    </Text>
                  }
                  value={data.value}
                  valueStyle={{
                    fontWeight: 700,
                    fontSize: 28,
                    color: "#111827"
                  }}
                />

                <div
                  style={{
                    backgroundColor: "#EEF2FF",
                    padding: 12,
                    borderRadius: 10
                  }}
                >
                  {data.icon}
                </div>

              </div>

            </Card>

          </Col>

        ))}

      </Row>

      {/* CONNECT MODAL */}

<Modal
  title={`Connect ${activePlatform} Ads`}
  open={isConnectModalVisible}
  onCancel={() => setIsConnectModalVisible(false)}
  footer={null}
  centered
  width={500}
  getContainer={document.body}
  maskStyle={{ backdropFilter: "blur(2px)" }}
  bodyStyle={{ padding: "24px" }}
>
        <div style={{ textAlign: "center", padding: 20 }}>

          <Title level={4}>
            Authenticate {activePlatform}
          </Title>

          <Text type="secondary">
            You will be redirected to {activePlatform} to grant secure access to your ad accounts.
          </Text>

          <Button
            type="primary"
            size="large"
            style={{
              marginTop: 20,
              width: "100%",
              height: 44,
              borderRadius: 8,
              backgroundColor: CRM_PRIMARY,
              borderColor: CRM_PRIMARY
            }}
          >
            Continue
          </Button>

        </div>

      </Modal>

    </motion.div>
  );
};

export default MarketingDashboard;