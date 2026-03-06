import { useState } from "react";
import { Search, Plus, Mail, Phone, Building2, Filter } from "lucide-react";
import AddContactModal from "../../components/AddContactModal";
import { motion } from "framer-motion";

const contactsData = [
  { id: 1, name: "Rahul Sharma", email: "rahul@tcs.com", phone: "+91 9876543210", company: "TCS", role: "CEO", status: "Active" },
  { id: 2, name: "Priya Nair", email: "priya@infosys.com", phone: "+91 9123456780", company: "Infosys", role: "CTO", status: "Lead" },
  { id: 3, name: "Arjun Patel", email: "arjun@wipro.com", phone: "+91 9988776655", company: "Wipro", role: "VP Sales", status: "Active" },
  { id: 4, name: "Neha Gupta", email: "neha@hcl.com", phone: "+91 9001122334", company: "HCL", role: "CEO", status: "Active" },
  { id: 5, name: "Vikram Singh", email: "vikram@zoho.com", phone: "+91 8899001122", company: "Zoho", role: "CTO", status: "Lead" },
  { id: 6, name: "Ananya Reddy", email: "ananya@freshworks.com", phone: "+91 9345678910", company: "Freshworks", role: "VP Sales", status: "Active" },
  { id: 7, name: "Rohit Verma", email: "rohit@google.com", phone: "+91 9870012345", company: "Google India", role: "CEO", status: "Active" },
  { id: 8, name: "Sneha Iyer", email: "sneha@microsoft.com", phone: "+91 9765432100", company: "Microsoft India", role: "CTO", status: "Lead" },
  { id: 9, name: "Karan Malhotra", email: "karan@amazon.in", phone: "+91 9988007766", company: "Amazon India", role: "VP Sales", status: "Active" },
  { id: 10, name: "Pooja Kapoor", email: "pooja@flipkart.com", phone: "+91 9090909090", company: "Flipkart", role: "CEO", status: "Active" }
];

export default function Contact() {
  const [contacts, setContacts] = useState(contactsData);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [showFilter, setShowFilter] = useState(false);
  const [roleFilter, setRoleFilter] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 10;

  const filteredContacts = contacts.filter(c => {
    const searchMatch = c.name.toLowerCase().includes(search.toLowerCase());
    const roleMatch = roleFilter === "All" || c.role === roleFilter;
    return searchMatch && roleMatch;
  });

  const handleAddContact = (newContact) => {
    setContacts([
      ...contacts,
      {
        id: contacts.length + 1,
        ...newContact
      }
    ]);
  };
 
  const indexOfLast = currentPage * contactsPerPage;
  const indexOfFirst = indexOfLast - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

  // Dutch Animated Layout mapping
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
          <h1 className="text-[26px] tracking-[-0.5px] font-bold text-[#111827] leading-tight">
            Contacts Directory
          </h1>
          <p className="text-[14px] text-[#6b7280] mt-1">
            Manage your customer relationships
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#1677ff] hover:bg-[#0958d9] transition-colors text-white px-4 h-10 rounded-lg font-medium text-[14px] shadow-sm"
        >
          <Plus size={18}/>
          Add Contact
        </button>
      </div>

      {/* ================= SEARCH & FILTER ================= */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="bg-white p-4 lg:px-5 rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#e5e7eb] mb-6 flex flex-col md:flex-row md:items-center gap-3"
      >
        {/* Search */}
        <div className="flex items-center gap-3 bg-[#f9fafb] border border-[#d1d5db] px-3 py-2 rounded-[8px] w-full h-10">
          <Search size={18} className="text-[#9ca3af]"/>
          <input
            type="text"
            placeholder="Search contacts by name..."
            className="outline-none bg-transparent w-full text-[14px] text-[#111827]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={fontInter}
          />
        </div>

        {/* Filter Button Dropdown */}
        <div className="relative w-full md:w-auto">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center justify-center gap-2 border border-[#d1d5db] bg-white text-[#4b5563] px-4 rounded-[8px] h-10 hover:bg-gray-50 transition-colors w-full md:w-auto font-medium"
          >
            <Filter size={16}/>
            <span className="text-[13px]">{roleFilter === "All" ? "Filter" : roleFilter}</span>
          </button>

          {showFilter && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-[#e5e7eb] rounded-[10px] shadow-[0_10px_30px_rgba(2,6,23,0.1)] p-2 z-10">
              {["All", "CEO", "CTO", "VP Sales"].map(role => (
                <div
                  key={role}
                  onClick={() => { setRoleFilter(role); setShowFilter(false); }}
                  className={`px-3 py-2 text-[13px] rounded-md cursor-pointer transition-colors font-medium
                    ${roleFilter === role ? "bg-[#e6f4ff] text-[#1677ff]" : "text-[#4b5563] hover:bg-gray-50"}
                  `}
                >
                  {role === "All" ? "All Roles" : role}
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* ================= CONTACT TABLE ================= */}
      <motion.div 
        variants={layoutAnimation} initial="hidden" animate="visible"
        className="bg-white rounded-[14px] shadow-[0_6px_18px_rgba(15,23,42,0.06)] border border-[#transparent] overflow-hidden"
      >
        <div className="p-5 border-b border-[#f0f0f0]">
           <span className="text-[16px] font-semibold text-[#111827]">Active Contacts</span>
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block">
          <table className="w-full text-[14px]">
            <thead className="bg-[#fafafa] border-b border-[#f0f0f0] text-[#4b5563] text-left">
              <tr>
                <th className="py-4 px-6 font-medium">Name</th>
                <th className="py-4 px-4 font-medium">Contact Info</th>
                <th className="py-4 px-4 font-medium">Company</th>
                <th className="py-4 px-4 font-medium">Role</th>
                <th className="py-4 px-6 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentContacts.map((c, idx) => (
                <tr key={c.id} className={`hover:bg-gray-50/50 transition-colors ${idx !== currentContacts.length - 1 ? "border-b border-gray-100" : ""}`}>
                  
                  {/* NAME */}
                  <td className="py-4 px-6 flex items-center gap-3">
                    <div className="bg-[#f0f5ff] text-[#1677ff] min-w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[14px]">
                      {c.name.charAt(0)}
                    </div>
                    <span className="font-semibold text-[#111827]">{c.name}</span>
                  </td>

                  {/* CONTACT INFO */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-[#4b5563] mb-1.5">
                      <Mail size={14} className="text-[#9ca3af]"/> {c.email}
                    </div>
                    <div className="flex items-center gap-2 text-[#4b5563]">
                      <Phone size={14} className="text-[#9ca3af]"/> {c.phone}
                    </div>
                  </td>

                  {/* COMPANY */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-[#111827] font-medium">
                      <Building2 size={16} className="text-[#9ca3af]"/> {c.company}
                    </div>
                  </td>

                  {/* ROLE */}
                  <td className="py-4 px-4 text-[#4b5563]">{c.role}</td>

                  {/* STATUS */}
                  <td className="py-4 px-6 text-right">
                    <span className={`px-2.5 py-1 rounded-[6px] text-[11px] font-bold tracking-[0.5px] uppercase
                      ${c.status === "Active" ? "bg-[#d1fae5] text-[#059669]" : "bg-[#e0e7ff] text-[#4f46e5]"}
                    `}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {currentContacts.length === 0 && (
            <div className="text-center py-12">
               <p className="text-[#6b7280] font-medium text-[14px]">No contacts found matching your search.</p>
            </div>
          )}
        </div>

        {/* MOBILE CONTACT CARDS */}
        <div className="md:hidden space-y-3 p-4 bg-[#f8fafc]">
          {currentContacts.map((c) => (
            <div key={c.id} className="bg-white border border-[#e5e7eb] rounded-[12px] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[#f0f5ff] text-[#1677ff] w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[14px]">
                    {c.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827] text-[15px] leading-tight">{c.name}</div>
                    <div className="text-[#6b7280] text-[12px] mt-0.5">{c.role}</div>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-[6px] text-[10px] font-bold tracking-[0.5px] uppercase
                  ${c.status === "Active" ? "bg-[#d1fae5] text-[#059669]" : "bg-[#e0e7ff] text-[#4f46e5]"}
                `}>
                  {c.status}
                </span>
              </div>

              <div className="space-y-2 mt-4 pt-4 border-t border-[#f3f4f6]">
                <div className="text-[13px] text-[#4b5563] flex items-center gap-2">
                  <Mail size={14} className="text-[#9ca3af] shrink-0" /> <span className="truncate">{c.email}</span>
                </div>
                <div className="text-[13px] text-[#4b5563] flex items-center gap-2">
                  <Phone size={14} className="text-[#9ca3af] shrink-0" /> <span>{c.phone}</span>
                </div>
                <div className="text-[13px] font-medium text-[#111827] flex items-center gap-2 mt-1">
                  <Building2 size={14} className="text-[#9ca3af] shrink-0" /> <span>{c.company}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-end items-center gap-2 p-4 border-t border-[#f0f0f0] bg-white">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-8 w-8 flex items-center justify-center border border-[#d1d5db] rounded-md disabled:opacity-40 bg-white text-[#4b5563] hover:bg-gray-50"
          >
            ‹
          </button>
          
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-8 w-8 flex items-center justify-center rounded-md text-[13px] font-medium transition-colors border
                ${currentPage === page
                  ? "bg-[#1890ff] text-white border-[#1890ff]"
                  : "bg-white text-[#4b5563] border-[#d1d5db] hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="h-8 w-8 flex items-center justify-center border border-[#d1d5db] rounded-md disabled:opacity-40 bg-white text-[#4b5563] hover:bg-gray-50"
          >
            ›
          </button>
        </div>
      </motion.div>

      {/* MODAL */}
      <AddContactModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddContact}
      />
    </div>
  );
}
