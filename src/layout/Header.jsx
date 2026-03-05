import { Layout, Dropdown, Avatar, Select } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
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
      style={{
        background: "#ffffff",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #e5e7eb", // thin line
        height: 64,
      }}
    >
      {/* LEFT SIDE */}
      <div>
        {collapsed ? (
          <MenuUnfoldOutlined
            onClick={() => setCollapsed(false)}
            style={{ fontSize: 18, cursor: "pointer" }}
          />
        ) : (
          <MenuFoldOutlined
            onClick={() => setCollapsed(true)}
            style={{ fontSize: 18, cursor: "pointer" }}
          />
        )}
      </div>

      {/* RIGHT SIDE */}
      <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  }}
>
        <Select
  defaultValue="all"
  style={{ width: window.innerWidth < 768 ? 120 : 150 }}
>
          <Option value="all">All Branches</Option>
          <Option value="chennai">Chennai</Option>
          <Option value="salem">Salem</Option>
        </Select>

        <Dropdown
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
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
            }}
          >
            <Avatar icon={<UserOutlined />} />
            <span style={{ fontWeight: 500 }}>Admin</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
}