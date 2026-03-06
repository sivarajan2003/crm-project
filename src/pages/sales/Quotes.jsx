import { useState } from "react";
import { 
  Search, Plus, Eye, Send, Download, FileText, 
  Filter, Calendar, Package, IndianRupee 
} from "lucide-react";
import CreateQuoteModal from "../../components/CreateQuoteModal";
import { motion } from "framer-motion";

const quotesData = [
  { id: "QT-2026-001", customer: "Acme Corp", contact: "Sarah Johnson", amount: 45000, status: "Sent", date: "20/03/2026", items: 12 },
  { id: "QT-2026-002", customer: "TechStart Inc", contact: "Michael Chen", amount: 32500, status: "Draft", date: "25/03/2026", items: 8 },
  { id: "QT-2026-003", customer: "Global Solutions", contact: "David Park", amount: 67800, status: "Accepted", date: "15/03/2026", items: 15 },
  { id: "QT-2026-004", customer: "Vista Enterprises", contact: "Emma Wilson", amount: 28900, status: "Sent", date: "18/03/2026", items: 6 },
  { id: "QT-2026-005", customer: "Innovate Labs", contact: "James Brown", amount: 54200, status: "Accepted", date: "12/03/2026", items: 10 },
  { id: "QT-2026-006", customer: "Digital Dynamics", contact: "Lisa Anderson", amount: 19500, status: "Rejected", date: "10/03/2026", items: 4 },
  { id: "QT-2026-007", customer: "NextGen Tech", contact: "Daniel Smith", amount: 38500, status: "Sent", date: "22/03/2026", items: 9 },
  { id: "QT-2026-008", customer: "Bright Solutions", contact: "Sophia Taylor", amount: 26000, status: "Draft", date: "26/03/2026", items: 5 },
  { id: "QT-2026-009", customer: "Alpha Systems", contact: "Chris Martin", amount: 47000, status: "Accepted", date: "14/03/2026", items: 11 },
  { id: "QT-2026-010", customer: "FutureSoft", contact: "Olivia White", amount: 32000, status: "Sent", date: "24/03/2026", items: 7 }
];

export default function Quotes() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const rowsPerPage = 10;
  
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuotes = quotesData.filter((q) =>
    q.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = filteredQuotes.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredQuotes.length / rowsPerPage);

  const handleView = (quote) => {
    setSelectedQuote(quote);
    setShowViewModal(true);
  };

  const handleDownload = (quote) => {
    const content = `
    Quote ID: ${quote.id}
    Customer: ${quote.customer}
    Contact: ${quote.contact}
    Amount: ₹${quote.amount}
    Items: ${quote.items}
    Valid Until: ${quote.date}
    Status: ${quote.status}
    `;
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${quote.id}.txt`;
    link.click();
  };

  const handleSend = (quote) => {
    const email = prompt("Enter email to send quote:");
    if (email) {
      alert(`Quote ${quote.id} sent to ${email}`);
    }
  };

  // Dutch Animated Styles mapping
  const cardAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  const tableAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } }
  };

  // Add global font style string utility
  const fontInter = { fontFamily: '"Inter", sans-serif' };

  return (
    <div className="p-4 md:p-6 bg-[#f8fafc] min-h-screen" style={fontInter}>
      
      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-[26px] tracking-[-0.5px] font-bold text-[#111827]">Quotes Management</h1>
          <p className="text-[14px] text-[#6b7280] mt-1">Create and manage sales quotations</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#1677ff] hover:bg-[#0958d9] transition-colors text-white px-4 h-10 rounded-lg font-medium text-[14px] shadow-sm"
        >
          <Plus size={18}/>
          New Quote
        </button>
      </div>

      {/* ================= SUMMARY CARDS (Animated) ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { title: "Total Quotes", count: "48", icon: <FileText size={20} className="text-[#7c3aed]"/>, bg: "bg-[#7c3aed]/10", color: "#111827" },
          { title: "Quote Value", count: "₹3.4L", icon: <IndianRupee size={20} className="text-[#10b981]"/>, bg: "bg-[#10b981]/10", color: "#10b981" },
          { title: "Pending", count: "12", icon: <Calendar size={20} className="text-[#f59e0b]"/>, bg: "bg-[#f59e0b]/10", color: "#f59e0b" },
          { title: "Acceptance Rate", count: "68%", icon: <Package size={20} className="text-[#3b82f6]"/>, bg: "bg-[#3b82f6]/10", color: "#3b82f6" },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -6, boxShadow: "0 12px 35px rgba(2,6,23,0.12)" }}
            variants={cardAnimation}
            className="bg-white p-5 rounded-[14px] shadow-[0_10px_30px_rgba(2,6,23,0.06)] flex items-center gap-4 cursor-pointer transition-shadow"
          >
            <div className={`${item.bg} p-3 rounded-[10px]`}>
              {item.icon}
            </div>
            <div>
              <p className="text-[#6b7280] text-[13px] font-semibold uppercase tracking-[0.5px]">{item.title}</p>
              <h2 className={`text-[28px] font-[800] mt-1 leading-none`} style={{ color: item.color }}>
                {item.count}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= SEARCH & FILTERS ================= */}
      <div className="bg-white p-4 lg:px-6 rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#e5e7eb] mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:max-w-md bg-[#f9fafb] border border-[#e5e7eb] px-3 h-10 rounded-lg">
          <Search size={18} className="text-[#9ca3af]" />
          <input
            placeholder="Search quotes or customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none w-full bg-transparent text-[14px] text-[#111827]"
            style={fontInter}
          />
        </div>

        <button className="flex items-center justify-center gap-2 text-[#4b5563] font-medium border border-[#d1d5db] bg-white hover:bg-gray-50 px-4 h-10 rounded-lg w-full sm:w-auto transition-colors">
          <Filter size={18}/>
          Filters
        </button>
      </div>

      {/* ================= MAIN TABLE (Desktop) ================= */}
      <motion.div 
        variants={tableAnimation}
        initial="hidden"
        animate="visible"
        className="hidden lg:block bg-white rounded-[14px] shadow-[0_6px_18px_rgba(15,23,42,0.06)] overflow-hidden"
      >
        <div className="p-5 border-b border-[#f0f0f0]">
           <span className="text-[16px] font-semibold text-[#111827]">Latest Quotations</span>
        </div>
        <table className="w-full text-[14px]">
          <thead className="bg-[#fafafa] border-b border-[#f0f0f0] text-[#4b5563] text-left">
            <tr>
              <th className="py-4 px-6 font-medium">Quote ID</th>
              <th className="py-4 px-4 font-medium">Customer</th>
              <th className="py-4 px-4 font-medium text-right">Amount</th>
              <th className="py-4 px-4 font-medium">Status</th>
              <th className="py-4 px-4 font-medium">Valid Until</th>
              <th className="py-4 px-4 font-medium">Items</th>
              <th className="py-4 px-6 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((q, idx) => (
              <tr key={q.id} className={`hover:bg-gray-50/50 transition-colors ${idx !== currentRows.length -1 ? "border-b border-gray-100" : ""}`}>
                <td className="py-4 px-6">
                  <span className="font-semibold text-[#111827]">{q.id}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="font-semibold text-[#111827]">{q.customer}</div>
                  <div className="text-[#6b7280] text-[13px]">{q.contact}</div>
                </td>
                <td className="py-4 px-4 font-bold text-[#10b981] text-right">
                  ₹{q.amount.toLocaleString("en-IN")}
                </td>
                <td className="py-4 px-4">
                  <span className={`px-2.5 py-1 rounded-md text-[12px] font-semibold
                    ${
                      q.status === "Accepted" ? "bg-[#dcfce7] text-[#16a34a]" : 
                      q.status === "Draft" ? "bg-[#f1f5f9] text-[#475569]" : 
                      q.status === "Rejected" ? "bg-[#fee2e2] text-[#dc2626]" : 
                      "bg-[#e0f2fe] text-[#0284c7]"
                    }`}
                  >
                    {q.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-[#4b5563]">{q.date}</td>
                <td className="py-4 px-4 text-[#4b5563]">{q.items}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-3 text-[#9ca3af]">
                    <Eye size={18} className="cursor-pointer hover:text-[#1890ff] transition-colors" onClick={() => handleView(q)} />
                    <Send size={18} className="cursor-pointer hover:text-[#10b981] transition-colors" onClick={() => handleSend(q)} />
                    <Download size={18} className="cursor-pointer hover:text-[#7c3aed] transition-colors" onClick={() => handleDownload(q)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* ================= MOBILE CARD VIEW ================= */}
      <motion.div 
        variants={tableAnimation}
        initial="hidden"
        animate="visible"
        className="lg:hidden space-y-4"
      >
        {currentRows.map((q) => (
          <div key={q.id} className="bg-white rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-[#e5e7eb] p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="font-semibold text-[16px] text-[#111827]">{q.customer}</div>
                <div className="text-[13px] text-[#6b7280]">{q.id} • {q.contact}</div>
              </div>
              <span className={`px-2 py-1 text-[11px] font-semibold rounded-md
                ${
                  q.status === "Accepted" ? "bg-[#dcfce7] text-[#16a34a]" : 
                  q.status === "Draft" ? "bg-[#f1f5f9] text-[#475569]" : 
                  q.status === "Rejected" ? "bg-[#fee2e2] text-[#dc2626]" : 
                  "bg-[#e0f2fe] text-[#0284c7]"
                }`}
              >
                {q.status}
              </span>
            </div>

            <div className="border-t border-[#f3f4f6] pt-3 mt-1 flex justify-between items-end">
              <div className="flex flex-col gap-1 text-[12px] text-[#6b7280]">
                <span>Valid: <strong className="text-[#4b5563]">{q.date}</strong></span>
                <span>Items: <strong className="text-[#4b5563]">{q.items}</strong></span>
              </div>
              <div className="text-right">
                <span className="text-[#9ca3af] text-[12px]">Amount:</span>
                <div className="font-bold text-[#10b981] text-[15px]">₹{q.amount.toLocaleString("en-IN")}</div>
              </div>
            </div>

            <div className="flex grid-cols-3 divide-x divide-gray-100 border-t border-[#f3f4f6] mt-4 pt-3 text-[#6b7280]">
               <div className="flex-1 flex justify-center items-center gap-2 cursor-pointer hover:text-[#1890ff]" onClick={() => handleView(q)}><Eye size={16}/> View</div>
               <div className="flex-1 flex justify-center items-center gap-2 cursor-pointer hover:text-[#10b981]" onClick={() => handleSend(q)}><Send size={16}/> Send</div>
               <div className="flex-1 flex justify-center items-center gap-2 cursor-pointer hover:text-[#7c3aed]" onClick={() => handleDownload(q)}><Download size={16}/> Save</div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* ================= PAGINATION ================= */}
      <div className="flex justify-end items-center gap-2 mt-6">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-8 w-8 flex items-center justify-center border border-[#d1d5db] rounded-md disabled:opacity-40 bg-white text-[#4b5563] hover:bg-gray-50"
        >
          ‹
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`h-8 w-8 flex items-center justify-center rounded-md text-[13px] font-medium transition-colors border
              ${currentPage === i + 1
              ? "bg-[#1890ff] text-white border-[#1890ff]"
              : "bg-white text-[#4b5563] border-[#d1d5db] hover:bg-gray-50"
              }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="h-8 w-8 flex items-center justify-center border border-[#d1d5db] rounded-md disabled:opacity-40 bg-white text-[#4b5563] hover:bg-gray-50"
        >
          ›
        </button>
      </div>

      {/* ================= MODALS ================= */}
      {showModal && (
        <CreateQuoteModal closeModal={() => setShowModal(false)} />
      )}
      
      {showViewModal && selectedQuote && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded-[16px] shadow-2xl w-full max-w-md font-inter"
            style={fontInter}
          >
            <h2 className="text-[20px] font-bold mb-6 text-[#111827]">Quote Details</h2>
            <div className="space-y-4 text-[14px]">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">ID:</span>
                <span className="font-semibold text-gray-900">{selectedQuote.id}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Customer:</span>
                <span className="font-medium text-gray-900">{selectedQuote.customer}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Contact:</span>
                <span className="font-medium text-gray-900">{selectedQuote.contact}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Amount:</span>
                <span className="font-bold text-[#10b981]">₹{selectedQuote.amount.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Status:</span>
                <span className="font-medium text-gray-900">{selectedQuote.status}</span>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button
                onClick={() => setShowViewModal(false)}
                className="px-5 py-2 bg-[#111827] hover:bg-black transition-colors text-white text-[14px] font-medium rounded-lg"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
