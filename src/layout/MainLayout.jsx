import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import AppHeader from "./Header";

const { Content } = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>

      {/* SIDEBAR */}
      <Sidebar collapsed={collapsed} />

      {/* RIGHT SIDE */}
       <Layout
  style={{
    marginLeft: collapsed ? 80 : 240,  // 👈 IMPORTANT
    transition: "all 0.2s",
    minHeight: "100vh",
    background: "#f5f6f8",
  }}
>

        {/* HEADER */}
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* CONTENT */}
        <Content
  className="hide-scrollbar"
  style={{
    margin: "24px 16px 24px 16px",
    background: "#ffffff",
    padding: 24,
    borderRadius: 12,
    height: "calc(100vh - 64px)",
    overflowY: "auto",
  }}
>

          <Outlet />
        </Content>

      </Layout>

    </Layout>
  );
}