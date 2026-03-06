import React, { useState } from "react";
import { Plus, Edit, Trash2, Shield, Users, Lock } from "lucide-react";
import AddRoleModal from "../../components/AddRoleModal";
import { motion } from "framer-motion";
import { Typography } from "antd";

export default function RolesPermissions() {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", users: 2, permissions: "Full Access" },
    { id: 2, name: "Sales Manager", users: 4, permissions: "Leads, Deals, Reports" },
    { id: 3, name: "Support Agent", users: 3, permissions: "Contacts, Tickets" },
    { id: 4, name: "Marketing Manager", users: 5, permissions: "Campaigns, Leads, Reports" },
    { id: 5, name: "HR Manager", users: 2, permissions: "Employees, Payroll" },
    { id: 6, name: "Finance Manager", users: 3, permissions: "Invoices, Payments, Reports" },
    { id: 7, name: "Product Manager", users: 4, permissions: "Products, Inventory" },
    { id: 8, name: "Customer Success", users: 2, permissions: "Customers, Support Tickets" }
  ]);
  
  const [showModal, setShowModal] = useState(false);
  const [editRole, setEditRole] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
const { Title, Text } = Typography;
  const handleAddRole = (newRole) => {
    if (isEdit) {
      setRoles(roles.map(r => r.id === editRole.id ? { ...r, ...newRole } : r));
      setIsEdit(false);
      setEditRole(null);
    } else {
      setRoles([...roles, { id: roles.length + 1, ...newRole }]);
    }
  };

  const handleDelete = (id) => {
    setRoles(roles.filter(r => r.id !== id));
  };

  const handleEdit = (role) => {
    setEditRole(role);
    setIsEdit(true);
    setShowModal(true);
  };

 
  const layoutAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.1 } }
  };

  const fontInter = { fontFamily: '"Inter", sans-serif' };

  return (
    <div className="p-4 md:p-6 bg-[#f8fafc] min-h-screen" style={fontInter}>

      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        
<div>
  <Title level={2} style={{ margin: 0 }}>
   Roles & Permissions
  </Title>

  <Text type="secondary">
     Manage user access and security levels
  </Text>
</div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#1677ff] hover:bg-[#0958d9] transition-colors text-white px-4 h-10 rounded-lg font-medium text-[14px] shadow-sm"
        >
          <Plus size={18}/>
          Add Role
        </button>
      </div>

      {/* ================= ROLES TABLE ================= */}
      <motion.div 
        variants={layoutAnimation} initial="hidden" animate="visible"
        className="bg-white rounded-[14px] shadow-[0_6px_18px_rgba(15,23,42,0.06)] border border-[#transparent] overflow-hidden"
      >
        <div className="p-5 border-b border-[#f0f0f0] flex items-center gap-2">
           <Shield size={18} className="text-[#1677ff]" />
           <span className="text-[16px] font-semibold text-[#111827]">Security Roles</span>
        </div>

        {/* DESKTOP TABLE */}
        <div className="block overflow-x-auto">
          <table className="w-full text-[14px]">
            <thead className="bg-[#fafafa] border-b border-[#f0f0f0] text-[#4b5563] text-left">
              <tr>
                <th className="py-4 px-6 font-medium">Role Name</th>
                <th className="py-4 px-4 font-medium text-center">Assigned Users</th>
                <th className="py-4 px-4 font-medium">Permissions Limit</th>
                <th className="py-4 px-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((r, idx) => (
                <tr key={r.id} className={`hover:bg-gray-50/50 transition-colors ${idx !== roles.length - 1 ? "border-b border-gray-100" : ""}`}>
                  
                  {/* ROLE NAME */}
                  <td className="py-4 px-6">
                    <span className="font-bold text-[#111827] text-[15px]">{r.name}</span>
                  </td>

                  {/* USERS */}
                  <td className="py-4 px-4 text-center">
                    <div className="inline-flex items-center justify-center gap-1.5 bg-[#f0f5ff] text-[#1677ff] px-3 py-1 rounded-[6px] font-bold text-[12px]">
                      <Users size={14} /> {r.users}
                    </div>
                  </td>

                  {/* PERMISSIONS */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-[#4b5563]">
                      <Lock size={14} className="text-[#9ca3af] shrink-0"/>
                      <span className="font-medium">{r.permissions}</span>
                    </div>
                  </td>

                  {/* ACTIONS */}
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-3 text-[#9ca3af]">
                      <button
                        onClick={() => handleEdit(r)}
                        className="flex items-center justify-center w-[32px] h-[32px] rounded-lg text-[#6b7280] hover:text-[#1677ff] hover:bg-blue-50 transition-colors"
                      >
                        <Edit size={16}/>
                      </button>

                      <button
                        onClick={() => {
                          if(window.confirm(`Are you sure you want to delete the ${r.name} role?`)){
                            handleDelete(r.id);
                          }
                        }}
                        className="flex items-center justify-center w-[32px] h-[32px] rounded-lg text-[#6b7280] hover:text-[#dc2626] hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={16}/>
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
          
          {roles.length === 0 && (
            <div className="text-center py-12">
               <p className="text-[#6b7280] font-medium text-[14px]">No security roles configured.</p>
            </div>
          )}
        </div>

        {/* MOBILE CARD VIEW */}
        <div className="md:hidden space-y-3 p-4 bg-[#f8fafc]">
          {roles.map((r) => (
            <div key={r.id} className="bg-white border border-[#e5e7eb] rounded-[12px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-[#111827] text-[16px] leading-tight">{r.name}</h3>
                
                <div className="flex gap-1 bg-gray-50 rounded-[8px] border border-gray-100 shrink-0">
                  <button onClick={() => handleEdit(r)} className="p-1.5 text-[#6b7280] hover:text-[#1677ff]">
                    <Edit size={16}/>
                  </button>
                  <div className="w-[1px] bg-gray-200 my-1"></div>
                  <button 
                    onClick={() => { if(window.confirm("Are you sure?")) handleDelete(r.id); }} 
                    className="p-1.5 text-[#6b7280] hover:text-[#dc2626]"
                  >
                    <Trash2 size={16}/>
                  </button>
                </div>
              </div>

              <div className="space-y-3 mt-4 pt-4 border-t border-[#f3f4f6]">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#6b7280] font-medium">Assigned Users</span>
                  <div className="inline-flex flex-row-reverse items-center justify-center gap-1.5 bg-[#f0f5ff] text-[#1677ff] px-2.5 py-0.5 rounded-[6px] font-bold text-[12px]">
                    <Users size={12} /> {r.users}
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-[13px]">
                  <span className="text-[#6b7280] font-medium">Permissions Level</span>
                  <div className="flex items-start gap-2 text-[#111827] font-medium bg-gray-50 p-2 rounded-[6px] border border-gray-100">
                    <Lock size={14} className="text-[#9ca3af] shrink-0 mt-0.5"/>
                    <span className="leading-snug">{r.permissions}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </motion.div>

      <AddRoleModal
        open={showModal}
        onClose={() => { setShowModal(false); setEditRole(null); }}
        onAdd={handleAddRole}
        editData={editRole}
      />
    </div>
  );
}
