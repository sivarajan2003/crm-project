import { Layout, Dropdown, Select } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DownOutlined, // <-- Added this icon to match the Dutch dropdown arrow
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const { Option } = Select;

export default function AppHeader({ collapsed, setCollapsed }) {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/";
  };

  return (
    <Header
      className="flex justify-between items-center px-6 transition-all duration-300"
      style={{
        background: "#ffffff",
        padding: "0 24px",
        height: 64,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        borderBottom: "1px solid #f3f4f6", 
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* LEFT SIDE - Sidebar Toggle */}
      <div
        className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setCollapsed(!collapsed)}
        style={{ color: "#000", display: "flex", alignItems: "center" }}
      >
        {collapsed ? (
          <MenuUnfoldOutlined style={{ fontSize: 20 }} />
        ) : (
          <MenuFoldOutlined style={{ fontSize: 20 }} />
        )}
      </div>

      {/* RIGHT SIDE - Select & Profile Dropdown */}
      <div className="flex items-center gap-2 sm:gap-6">
        <Select
          defaultValue="all"
          style={{ width: window.innerWidth < 768 ? 120 : 150 }}
        >
          <Option value="all">All Branches</Option>
          <Option value="chennai">Chennai</Option>
          <Option value="salem">Salem</Option>
        </Select>

        <Dropdown
          placement="bottomRight"
          trigger={["click"]}
          menu={{
            items: [
              { key: "1", label: "Profile" },
              { key: "logout", label: "Logout" },
            ],
            onClick: ({ key }) => {
              if (key === "logout") {
                handleLogout();
              }
            }
          }}
        >
          <div
            className="cursor-pointer flex items-center gap-3 p-1 pr-3 rounded-full border border-transparent hover:border-gray-200 transition-all duration-200"
            style={{
              background: "#ffffff",
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
            }}
          >
            {/* Dutch style Indigo user icon circle (replaces AntD Avatar) */}
            <div
              className="rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600"
              style={{ width: 36, height: 36 }}
            >
              <UserOutlined style={{ fontSize: 18 }} />
            </div>
            <span className="text-sm font-medium hidden sm:block" style={{ color: "#000" }}>
              Admin
            </span>
            <DownOutlined style={{ fontSize: 10, color: "#9CA3AF" }} />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
}
