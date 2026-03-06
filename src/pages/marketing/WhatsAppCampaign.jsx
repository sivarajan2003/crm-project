import React, { useState, useEffect } from "react";
import {
  Table,
  Typography,
  Button,
  Space,
  Input,
  Card,
  message,
  Spin,
  Tag,
  Row,
  Col,
} from "antd";
import { motion } from "framer-motion";
import { Send, Users, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const { Title, Text } = Typography;

const WhatsAppCampaign = () => {
  const CRM_PRIMARY = "#1C2244";
  const WHATSAPP_GREEN = "#25D366";

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [campaignName, setCampaignName] = useState("");
  const [messageTemplate, setMessageTemplate] = useState("hello_world");

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    setLoading(true);

    try {
      const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

      const res = await fetch(`${API_URL}/marketing/whatsapp/customers`);
      const data = await res.json();

      if (data.success) {
        const formatted = data.data.map((c) => ({
          ...c,
          key: c.id,
        }));

        setCustomers(formatted);
      } else {
        message.error("Failed loading customers");
      }
    } catch (err) {
      message.error("Network Error");
    }

    setLoading(false);
  };

  const handleSendCampaign = async () => {
    if (!campaignName.trim()) {
      return message.warning("Enter Campaign Name");
    }

    if (selectedRowKeys.length === 0) {
      return message.warning("Select customers");
    }

    setSending(true);

    try {
      const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

      const res = await fetch(`${API_URL}/marketing/whatsapp/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          campaignName,
          messageTemplate,
          customerIds: selectedRowKeys,
        }),
      });

      const data = await res.json();

      if (data.success) {
        message.success(
          `Campaign sent to ${selectedRowKeys.length} customers`
        );

        setSelectedRowKeys([]);
        setCampaignName("");
      } else {
        message.error(data.message || "Campaign failed");
      }
    } catch (err) {
      message.error("Network error");
    }

    setSending(false);
  };

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customer_name",
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: "Phone Number",
      dataIndex: "customer_phone",
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys) => setSelectedRowKeys(keys),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ padding: 24 }}
    >
      {/* HEADER */}

      <div style={{ marginBottom: 24 }}>
        <Title level={2} style={{ margin: 0 }}>
          WhatsApp  Campaigns
        </Title>

        <Text type="secondary">
          Send bulk personalized WhatsApp messages directly to your billing
          customers.
        </Text>
      </div>

      <Row gutter={24}>
        {/* LEFT SIDE */}

        <Col xs={24} lg={10}>
          <Card
            style={{
              borderRadius: 16,
              boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
            }}
            bodyStyle={{ padding: 24 }}
            title={
              <Space>
                <MessageSquare size={18} color={CRM_PRIMARY} />
                <Text strong>Campaign Configuration</Text>
              </Space>
            }
          >
            {/* Campaign Name */}

            <div style={{ marginBottom: 20 }}>
              <Text strong>Campaign Name</Text>

              <Input
                size="large"
                placeholder="e.g. Diwali Weekend Promo"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                style={{ marginTop: 6, borderRadius: 8 }}
              />
            </div>

            {/* Template */}

            <div style={{ marginBottom: 20 }}>
              <Text strong>Meta Template Name</Text>

              <Text
                type="secondary"
                style={{
                  display: "block",
                  fontSize: 12,
                  marginTop: 4,
                }}
              >
                WhatsApp Cloud API requires exact template name (e.g.
                <Tag color="blue">diwali_promo</Tag>)
              </Text>

              <Input
                value={messageTemplate}
                onChange={(e) => setMessageTemplate(e.target.value)}
                style={{ marginTop: 6, borderRadius: 8 }}
              />
            </div>

            {/* SUMMARY */}

            <div
              style={{
                background: "#F4F6FA",
                padding: 16,
                borderRadius: 12,
                marginBottom: 20,
              }}
            >
              <Text strong style={{ display: "block", marginBottom: 8 }}>
                Summary
              </Text>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Text type="secondary">Target Audience</Text>
                <Text strong>{selectedRowKeys.length} Customers</Text>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 6,
                }}
              >
                <Text type="secondary">Platform</Text>

                <Space>
                  <FaWhatsapp color={WHATSAPP_GREEN} />
                  <Text strong>WhatsApp</Text>
                </Space>
              </div>
            </div>

            {/* BUTTON */}

            <Button
              type="primary"
              size="large"
              icon={<Send size={18} />}
              loading={sending}
              onClick={handleSendCampaign}
              style={{
                width: "100%",
                height: 48,
                borderRadius: 8,
                fontWeight: 600,
                background: WHATSAPP_GREEN,
                borderColor: WHATSAPP_GREEN,
              }}
            >
              Launch WhatsApp Campaign
            </Button>
          </Card>
        </Col>

        {/* RIGHT SIDE */}

        <Col xs={24} lg={14}>
          <Card
            style={{
              borderRadius: 16,
              boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
            }}
            title={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Space>
                  <Users size={18} color={CRM_PRIMARY} />
                  <Text strong>Select Target Audience</Text>
                </Space>

                <Button
                  size="small"
                  onClick={() =>
                    setSelectedRowKeys(customers.map((c) => c.key))
                  }
                >
                  Select All
                </Button>
              </div>
            }
          >
            {loading ? (
              <div
                style={{
                  height: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Spin size="large" />
              </div>
            ) : (
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={customers}
                pagination={{ pageSize: 8 }}
                scroll={{ y: 350 }}
              />
            )}
          </Card>
        </Col>
      </Row>
    </motion.div>
  );
};

export default WhatsAppCampaign;