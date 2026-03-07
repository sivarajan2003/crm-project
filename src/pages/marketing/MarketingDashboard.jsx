import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  MousePointerClick,
  Eye,
  Link as LinkIcon
} from "lucide-react";

import { Modal, Button, Card, Row, Col, Typography, Statistic, Alert, message, Spin } from "antd";
import { metaService } from "../../services";

const { Title, Text } = Typography;

const CRM_PRIMARY = "#1C2244";
const CRM_SECONDARY = "#4F46E5";

const MarketingDashboard = () => {
  const [isConnectModalVisible, setIsConnectModalVisible] = useState(false);
  const [activePlatform, setActivePlatform] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const response = await metaService.getDashboard();
      if (response.success) {
        setDashboardData(response.data);
        setIsConnected(response.data?.isConnected || false);
      }
    } catch (error) {
      console.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleConnect = (platform) => {
    setActivePlatform(platform);
    setIsConnectModalVisible(true);
  };

  const handleMetaConnect = async () => {
    try {
      // In production, this would redirect to Meta OAuth
      // For now, we'll simulate connection
      const response = await metaService.connect({
        access_token: 'demo_token',
        meta_user_id: 'demo_user_id',
        meta_user_name: 'Demo User'
      });
      
      if (response.success) {
        message.success('Meta account connected successfully');
        setIsConnectModalVisible(false);
        fetchDashboardData();
      }
    } catch (error) {
      message.error('Failed to connect Meta account');
    }
  };

  const summaryData = [
    {
      title: "Total Ad Spend",
      value: dashboardData?.totalSpend ? `₹${dashboardData.totalSpend.toLocaleString('en-IN')}` : "₹0.00",
      icon: <DollarSign size={22} color={CRM_PRIMARY} />
    },
    {
      title: "Total Impressions",
      value: dashboardData?.totalImpressions?.toLocaleString('en-IN') || "0",
      icon: <Eye size={22} color={CRM_PRIMARY} />
    },
    {
      title: "Total Clicks",
      value: dashboardData?.totalClicks?.toLocaleString('en-IN') || "0",
      icon: <MousePointerClick size={22} color={CRM_PRIMARY} />
    },
    {
      title: "Avg CPC",
      value: dashboardData?.avgCPC ? `₹${dashboardData.avgCPC.toFixed(2)}` : "₹0.00",
      icon: <TrendingUp size={22} color={CRM_PRIMARY} />
    }
  ];

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <Spin size="large" />
      </div>
    );
  }

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
            disabled={isConnected}
            style={{
              backgroundColor: isConnected ? '#52c41a' : CRM_PRIMARY,
              borderColor: isConnected ? '#52c41a' : CRM_PRIMARY,
              borderRadius: 8
            }}
          >
            {isConnected ? 'Meta Connected' : 'Connect Meta'}
          </Button>

          <Button
            type="primary"
            icon={<LinkIcon size={16} />}
            onClick={() => handleConnect("Google")}
            disabled
            style={{
              backgroundColor: CRM_SECONDARY,
              borderColor: CRM_SECONDARY,
              borderRadius: 8
            }}
          >
            Connect Google (Coming Soon)
          </Button>
        </div>
      </div>

      {/* ALERT */}
      {!isConnected && (
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
      )}

      {isConnected && (
        <Alert
          message="Meta Ads Connected"
          description={`Connected as ${dashboardData?.metaUserName || 'User'}. Your campaigns are being tracked.`}
          type="success"
          showIcon
          style={{
            borderRadius: 10,
            marginBottom: 24
          }}
        />
      )}

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

      {/* Additional Stats */}
      {isConnected && dashboardData && (
        <Row gutter={[20, 20]} style={{ marginTop: 20 }}>
          <Col xs={24} sm={12} lg={8}>
            <Card
              style={{
                borderRadius: 14,
                border: "1px solid #f1f1f1",
                boxShadow: "0 6px 18px rgba(0,0,0,0.04)"
              }}
            >
              <Statistic
                title="Total Campaigns"
                value={dashboardData.totalCampaigns || 0}
                valueStyle={{ color: '#1677ff' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card
              style={{
                borderRadius: 14,
                border: "1px solid #f1f1f1",
                boxShadow: "0 6px 18px rgba(0,0,0,0.04)"
              }}
            >
              <Statistic
                title="Active Campaigns"
                value={dashboardData.activeCampaigns || 0}
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card
              style={{
                borderRadius: 14,
                border: "1px solid #f1f1f1",
                boxShadow: "0 6px 18px rgba(0,0,0,0.04)"
              }}
            >
              <Statistic
                title="CTR (Click-Through Rate)"
                value={dashboardData.avgCTR ? `${dashboardData.avgCTR.toFixed(2)}%` : '0.00%'}
                valueStyle={{ color: '#f59e0b' }}
              />
            </Card>
          </Col>
        </Row>
      )}

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
            {activePlatform === 'Meta' 
              ? 'Click continue to connect your Meta Ads account. In production, you will be redirected to Meta for authentication.'
              : 'Google Ads integration coming soon!'
            }
          </Text>

          <Button
            type="primary"
            size="large"
            disabled={activePlatform !== 'Meta'}
            onClick={handleMetaConnect}
            style={{
              marginTop: 20,
              width: "100%",
              height: 44,
              borderRadius: 8,
              backgroundColor: CRM_PRIMARY,
              borderColor: CRM_PRIMARY
            }}
          >
            {activePlatform === 'Meta' ? 'Continue' : 'Coming Soon'}
          </Button>
        </div>
      </Modal>
    </motion.div>
  );
};

export default MarketingDashboard;
