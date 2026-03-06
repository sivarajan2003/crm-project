import React, { useState } from "react";
import { Table, Tag, Typography, Button, Space, Input } from "antd";
import { motion } from "framer-motion";
import { Search, Filter, Facebook, Chrome } from "lucide-react";

const { Title, Text } = Typography;

const CampaignsList = () => {

  const [searchText, setSearchText] = useState("");

  const CRM_PRIMARY = "#1C2244";

  const data = [
    {
      key: "1",
      platform: "Meta",
      campaignName: "Retargeting_Website_Visitors_Q3",
      status: "Active",
      budget: "₹5,000 / day",
      spend: "₹42,300",
      roas: "3.4x",
    },
    {
      key: "2",
      platform: "Google",
      campaignName: "Search_Brand_Keywords",
      status: "Active",
      budget: "₹2,000 / day",
      spend: "₹14,500",
      roas: "5.1x",
    },
    {
      key: "3",
      platform: "Meta",
      campaignName: "Lead_Gen_Form_Promo",
      status: "Paused",
      budget: "₹1,500 / day",
      spend: "₹4,500",
      roas: "1.2x",
    },
  ];
const filteredData = data.filter((item) =>
  item.campaignName.toLowerCase().includes(searchText.toLowerCase()) ||
  item.platform.toLowerCase().includes(searchText.toLowerCase())
);
  const columns = [
    {
      title: "Platform",
      dataIndex: "platform",
      key: "platform",
      render: (platform) => {
        const isMeta = platform === "Meta";

        return (
          <Space>
            {isMeta ? (
              <Facebook size={18} color="#1877F2" />
            ) : (
              <Chrome size={18} color="#DB4437" />
            )}
            <Text>{platform}</Text>
          </Space>
        );
      },
    },

    {
      title: "Campaign Name",
      dataIndex: "campaignName",
      key: "campaignName",
      render: (text) => (
        <Text strong style={{ fontSize: "14px" }}>
          {text}
        </Text>
      ),
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const active = status === "Active";

        return (
          <Tag
            style={{
              borderRadius: 20,
              padding: "4px 14px",
              fontWeight: 500,
              border: active ? "1px solid #b7eb8f" : "1px solid #ffa39e",
              background: active ? "#f6ffed" : "#fff2f0",
              color: active ? "#389e0d" : "#cf1322"
            }}
          >
            {status.toUpperCase()}
          </Tag>
        );
      },
    },

    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
      render: (text) => <Text>{text}</Text>,
    },

    {
      title: "Spend",
      dataIndex: "spend",
      key: "spend",
      render: (text) => (
        <Text strong style={{ color: "#111827" }}>
          {text}
        </Text>
      ),
    },

    {
      title: "ROAS (Return on Ad Spend)",
      dataIndex: "roas",
      key: "roas",
      render: (roas) => (
        <Tag
          style={{
            borderRadius: 8,
            background: "#e6f4ff",
            border: "1px solid #91caff",
            color: "#0958d9",
            fontWeight: 600
          }}
        >
          {roas}
        </Tag>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ padding: "24px" }}
    >

      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div>
          <Title level={2} style={{ margin: 0 }}>
            Ad Campaigns
          </Title>

          <Text type="secondary">
            Manage and monitor your active marketing campaigns.
          </Text>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <Input
            prefix={<Search size={16} color="#9CA3AF" />}
            placeholder="Search campaigns..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              width: 260,
              borderRadius: 10,
              height: 38,
            }}
          />

          <Button
            icon={<Filter size={16} />}
            style={{
              borderRadius: 10,
              height: 38,
            }}
          >
            Filters
          </Button>
        </div>
      </div>

      {/* TABLE CARD */}

      <div
        style={{
          background: "#fff",
          padding: 20,
          borderRadius: 16,
          boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
        }}
      >
        <Table
          columns={columns}
         dataSource={filteredData}
          pagination={{
            pageSize: 5,
            position: ["bottomRight"],
          }}
          rowKey="key"
        />
      </div>

    </motion.div>
  );
};

export default CampaignsList;