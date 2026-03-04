import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  AppstoreOutlined,
  DollarOutlined,
  PercentageOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  DatabaseOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  LayoutDashboard,
  Package,
  Users,
  BarChart3,
  Handshake,
  ClipboardList,
  Phone,
  Settings
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { RiseOutlined } from "@ant-design/icons";
const { Sider } = Layout;

export default function Sidebar({ collapsed }) {
  const navigate = useNavigate();
  const location = useLocation();
const [openKeys, setOpenKeys] = useState([]);

const rootSubmenuKeys = ["sales", "admin"];
const onOpenChange = (keys) => {
  const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

  if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    setOpenKeys(keys);
  } else {
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  }
};
  const selectedKey = location.pathname.replace("/", "") || "dashboard";

  const menuItems = [
    
  {
    key: "dashboard",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },

  // SALES GROUP
  {
    key: "sales",
    icon: <RiseOutlined />,
    label: "Sales",
    children: [
      {
        key: "product", // your Leads page already
        icon: <AppstoreOutlined />,
        label: "Leads",
      },
      
      {
        key: "opportunities",
        icon: <DollarOutlined />,
        label: "Opportunities",
      },
      {
        key: "activities",
        icon: <PercentageOutlined />,
        label: "Activities",
      },
    ],
  },

  // CUSTOMER
  {
    key: "customer",
    icon: <UserOutlined />,
    label: "Customers",
  },
{
  key: "deals",
  icon: <DollarOutlined />,
  label: "Deals",
},
  // PRODUCTS
  {
    key: "products",
    icon: <ShoppingCartOutlined />,
    label: "Products",
  },

  // REPORTS
  {
    key: "reports",
    icon: <BarChartOutlined />,
    label: "Reports",
  },

  // ADMINISTRATION GROUP
  {
    key: "admin",
    icon: <DatabaseOutlined />,
    label: "Administration",
    children: [
      {
  key: "contact",
  icon: <UserOutlined />,
  label: "Contacts",
},
      {
        key: "users",
        icon: <UserOutlined />,
        label: "Users",
      },
      {
        key: "roles",
        icon: <PercentageOutlined />,
        label: "Roles & Permissions",
      },
    ],
  },

  {
    key: "settings",
    icon: <SettingOutlined />,
    label: "Settings",
  },
];

  return (
   <Sider
  width={240}
  collapsedWidth={80}
  collapsible
  collapsed={collapsed}
  trigger={null}
  style={{
  background: "#ffffff",
  borderRight: "1px solid #e5e7eb",
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  height: "100vh",
  display: "flex",
  flexDirection: "column"
}}
>
      {/* LOGO SECTION */}
<div
  style={{
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: collapsed ? "center" : "flex-start",
    paddingLeft: collapsed ? 0 : 20,
    borderBottom: "1px solid #e5e7eb",
  }}
>
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <div
      style={{
        background: "linear-gradient(135deg, #3b82f6, #6366f1)",
        padding: 10,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <RiseOutlined style={{ color: "#fff", fontSize: 20 }} />
    </div>

    {!collapsed && (
      <div>
        <div style={{ fontWeight: 700, fontSize: 18 }}>CRM</div>
        <div style={{ fontSize: 12, color: "#6b7280" }}>
          Management System
        </div>
      </div>
    )}
  </div>
</div>
     <Menu
  theme="light"
  mode="inline"
  selectedKeys={[selectedKey]}
  openKeys={openKeys}
  onOpenChange={onOpenChange}
  items={menuItems}
  onClick={(e) => {

  const adminMenu = ["contact", "users", "roles"];
  const salesMenu = ["product", "opportunities", "activities"];

  // Keep Administration open
  if (adminMenu.includes(e.key)) {
    setOpenKeys(["admin"]);
  }

  // Keep Sales open
  else if (salesMenu.includes(e.key)) {
    setOpenKeys(["sales"]);
  }

  // Close all menus
  else {
    setOpenKeys([]);
  }

  navigate(`/${e.key}`);
}}
  style={{
  borderRight: "none",
  marginTop: 15,
  fontSize: 15,
  fontWeight: 500,
}}
/>
    </Sider>
  );
}