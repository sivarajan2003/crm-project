import { useState } from "react";
import { Search, Download, Send, Eye, Plus, Filter, FileText } from "lucide-react";
import CreateInvoice from "../../components/CreateInvoice";
import { motion } from "framer-motion";
import { Typography } from "antd";

const invoicesData = [
  { id: "INV-2026-001", customer: "Acme Corp · Sarah Johnson", status: "Paid", amount: 45000, issued: "2/15/2026", due: "3/15/2026" },
  { id: "INV-2026-002", customer: "TechStart Inc · Michael Chen", status: "Pending", amount: 78000, issued: "2/20/2026", due: "3/20/2026" },
  { id: "INV-2026-003", customer: "Global Solutions · David Park", status: "Overdue", amount: 62000, issued: "1/10/2026", due: "2/10/2026" }
];

export default function Invoices() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
// View invoice
const handleView = (invoice) => {
  alert(`Viewing invoice: ${invoice.id}`);
};
const { Title, Text } = Typography;

// Send invoice
const handleSend = (invoice) => {
  alert(`Invoice ${invoice.id} sent to ${invoice.customer}`);
};

// Download invoice
const handleDownload = (invoice) => {
  alert(`Downloading invoice: ${invoice.id}`);
};
  const filteredInvoices = invoicesData.filter(inv => {
    const matchSearch =
      inv.id.toLowerCase().includes(search.toLowerCase()) ||
      inv.customer.toLowerCase().includes(search.toLowerCase()) ||
      inv.status.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filter === "All" || inv.status === filter;
    return matchSearch && matchStatus;
  });

  const total = invoicesData.reduce((a, b) => a + b.amount, 0);
  const paid = invoicesData.filter(i => i.status === "Paid").reduce((a, b) => a + b.amount, 0);
  const pending = invoicesData.filter(i => i.status === "Pending").reduce((a, b) => a + b.amount, 0);

  // Dutch Animated Styles mapping
  const cardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  const listAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: 0.2 + (i * 0.05), duration: 0.4, ease: "easeOut" }
    })
  };

  const fontInter = { fontFamily: '"Inter", sans-serif' };

  return (
    <div className="p-4 md:p-6 bg-[#f8fafc] min-h-screen" style={fontInter}>
      
      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        {/* <div>
          <h1 className="text-[26px] tracking-[-0.5px] font-bold text-[#111827] leading-tight">Invoices</h1>
          <p className="text-[14px] text-[#6b7280] mt-1">Manage your billing and payments</p>
        </div> */}
<div>
  <Title level={2} style={{ margin: 0 }}>
Invoices
  </Title>

  <Text type="secondary">
     Manage your billing and payments
  </Text>
</div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#1677ff] hover:bg-[#0958d9] transition-colors text-white px-4 h-10 rounded-lg font-medium text-[14px] shadow-sm"
        >
          <Plus size={18}/>
          Create Invoice
        </button>
      </div>

      {/* ================= SUMMARY CARDS (Animated) ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[
          { title: "Total Amount", amount: total, color: "#111827", bg: "#1677ff" },
          { title: "Paid", amount: paid, color: "#10b981", bg: "#10b981" },
          { title: "Pending", amount: pending, color: "#f59e0b", bg: "#f59e0b" }
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -6, boxShadow: "0 12px 35px rgba(2,6,23,0.12)" }}
            variants={cardAnimation}
            className={`bg-white p-5 rounded-[14px] shadow-[0_10px_30px_rgba(2,6,23,0.06)] flex flex-col justify-between cursor-pointer border-t-[4px]`}
            style={{ borderTopColor: item.bg }}
          >
            <p className="text-[#6b7280] text-[13px] font-semibold uppercase tracking-[0.5px]">
              {item.title}
            </p>
            <h2 className="text-[32px] font-[800] mt-2 leading-none" style={{ color: item.color }}>
              ₹{item.amount.toLocaleString("en-IN")}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* ================= SEARCH + FILTER ================= */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white p-4 lg:px-5 rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#e5e7eb] mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3 w-full lg:max-w-md bg-[#f9fafb] border border-[#d1d5db] px-3 h-10 rounded-lg">
          <Search size={18} className="text-[#9ca3af]"/>
          <input
            placeholder="Search invoices, customer, status..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none w-full bg-transparent text-[14px] text-[#111827]"
            style={fontInter}
          />
        </div>

        {/* Filter Navigation */}
        <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
          {["All", "Paid", "Pending", "Overdue"].map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 h-10 rounded-lg text-[13px] font-medium transition-all whitespace-nowrap
                ${filter === tab
                ? "bg-[#1890ff] text-white shadow-md shadow-blue-500/20 border-none"
                : "bg-white border text-[#4b5563] hover:bg-gray-50 hover:border-[#9ca3af]"}
              `}
              style={{ borderColor: filter === tab ? 'transparent' : '#d1d5db' }}
            >
              {tab}
            </button>
          ))}
          <button className="flex items-center justify-center gap-2 text-[#4b5563] font-medium border border-[#d1d5db] bg-white hover:bg-gray-50 px-4 h-10 rounded-lg transition-colors ml-auto sm:ml-0">
            <Filter size={16}/>
            Filter
          </button>
        </div>
      </motion.div>

      {/* ================= INVOICE LIST ================= */}
      <div className="space-y-4">
        {filteredInvoices.map((inv, i) => (
          <motion.div
            key={inv.id}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={listAnimation}
            className="bg-white p-5 rounded-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-[#f1f5f9] flex flex-col md:flex-row md:items-center justify-between gap-5 w-full hover:border-[#e2e8f0] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all"
          >
            {/* LEFT SIDE DETAILS */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-[#1677ff]" />
                  <h3 className="font-bold text-[16px] text-[#111827]">{inv.id}</h3>
                </div>
                
                <span className={`px-2.5 py-1 rounded-[6px] text-[11px] font-bold tracking-[0.5px] uppercase
                  ${
                    inv.status === "Paid" ? "bg-[#d1fae5] text-[#059669]" :
                    inv.status === "Pending" ? "bg-[#fef3c7] text-[#d97706]" :
                    "bg-[#fee2e2] text-[#dc2626]"
                  }
                `}>
                  {inv.status}
                </span>
              </div>

              <p className="text-[#4b5563] font-medium text-[14px] mb-[6px]">
                {inv.customer}
              </p>

              <p className="text-[12px] text-[#9ca3af] font-medium flex items-center gap-2">
                <span>Issued: <span className="text-[#6b7280]">{inv.issued}</span></span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>Due: <span className="text-[#6b7280]">{inv.due}</span></span>
              </p>
            </div>

            {/* RIGHT SIDE AMOUNTS & ACTIONS */}
            <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 sm:gap-8 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
              
              <div className="text-left md:text-right">
  <p className="text-[#9ca3af] text-[12px] uppercase tracking-wide font-semibold mb-0.5">
    Amount
  </p>

  <h2 className="text-[18px] font-bold text-[#111827]">
    ₹{inv.amount.toLocaleString("en-IN")}
  </h2>
</div>
<div className="flex items-center gap-4 text-gray-500">

  <button
    onClick={() => handleView(inv)}
    className="hover:text-gray-800 transition"
    title="View Invoice"
  >
    <Eye size={18} />
  </button>

  <button
    onClick={() => handleSend(inv)}
    className="hover:text-blue-600 transition"
    title="Send Invoice"
  >
    <Send size={18} />
  </button>

  <button
    onClick={() => handleDownload(inv)}
    className="hover:text-gray-800 transition"
    title="Download Invoice"
  >
    <Download size={18} />
  </button>

</div>         </div>
          </motion.div>
        ))}

        {filteredInvoices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-[12px] border border-dashed border-gray-300">
             <p className="text-[#6b7280] font-medium text-[14px]">No invoices found matching your criteria.</p>
          </div>
        )}
      </div>

      {showModal && (
        <CreateInvoice closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
}
