import { useState } from "react";
import { Search, Plus, Mail, Phone, Building2, Filter } from "lucide-react";
import AddContactModal from "../../components/AddContactModal";

const contactsData = [
{
id: 1,
name: "Rahul Sharma",
email: "rahul@tcs.com",
phone: "+91 9876543210",
company: "TCS",
role: "CEO",
status: "Active"
},
{
id: 2,
name: "Priya Nair",
email: "priya@infosys.com",
phone: "+91 9123456780",
company: "Infosys",
role: "CTO",
status: "Lead"
},
{
id: 3,
name: "Arjun Patel",
email: "arjun@wipro.com",
phone: "+91 9988776655",
company: "Wipro",
role: "VP Sales",
status: "Active"
},
{
id: 4,
name: "Neha Gupta",
email: "neha@hcl.com",
phone: "+91 9001122334",
company: "HCL",
role: "CEO",
status: "Active"
},
{
id: 5,
name: "Vikram Singh",
email: "vikram@zoho.com",
phone: "+91 8899001122",
company: "Zoho",
role: "CTO",
status: "Lead"
},
{
id: 6,
name: "Ananya Reddy",
email: "ananya@freshworks.com",
phone: "+91 9345678910",
company: "Freshworks",
role: "VP Sales",
status: "Active"
},
{
id: 7,
name: "Rohit Verma",
email: "rohit@google.com",
phone: "+91 9870012345",
company: "Google India",
role: "CEO",
status: "Active"
},
{
id: 8,
name: "Sneha Iyer",
email: "sneha@microsoft.com",
phone: "+91 9765432100",
company: "Microsoft India",
role: "CTO",
status: "Lead"
},
{
id: 9,
name: "Karan Malhotra",
email: "karan@amazon.in",
phone: "+91 9988007766",
company: "Amazon India",
role: "VP Sales",
status: "Active"
},
{
id: 10,
name: "Pooja Kapoor",
email: "pooja@flipkart.com",
phone: "+91 9090909090",
company: "Flipkart",
role: "CEO",
status: "Active"
}
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
  const searchMatch =
    c.name.toLowerCase().includes(search.toLowerCase());

  const roleMatch =
    roleFilter === "All" || c.role === roleFilter;

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

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
          <p className="text-gray-500">Manage your customer relationships</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-2 rounded-lg shadow"
        >
          <Plus size={16}/>
          Add Contact
        </button>

      </div>

<div className="bg-white border rounded-xl p-5 mb-6 flex items-center gap-3">

  {/* Search */}
  <div className="flex items-center border rounded-lg px-4 py-2 w-full bg-gray-50">

    <Search size={18} className="text-gray-400"/>

    <input
      type="text"
      placeholder="Search contacts..."
      className="outline-none bg-transparent ml-2 w-full"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
    />

  </div>

  {/* Filter Button */}
  <div className="relative">

    <button
      onClick={()=>setShowFilter(!showFilter)}
      className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-white hover:bg-gray-50"
    >
      <Filter size={16}/>
      Filters
    </button>

    {/* Filter Dropdown */}
    {showFilter && (
      <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg p-2">

        {["All","CEO","CTO","VP Sales"].map(role => (
          <div
            key={role}
            onClick={()=>{
              setRoleFilter(role);
              setShowFilter(false);
            }}
            className="px-3 py-2 text-sm hover:bg-gray-100 rounded cursor-pointer"
          >
            {role}
          </div>
        ))}

      </div>
    )}

  </div>

</div>

      {/* CONTACT TABLE */}

      <div className="bg-white border rounded-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100 text-gray-600 text-sm">
  <tr>
    <th className="text-left p-4">Name</th>
    <th className="text-left p-4">Contact Info</th>
    <th className="text-left p-4">Company</th>
    <th className="text-left p-4">Role</th>
    <th className="text-left p-4">Status</th>
  </tr>
</thead>
<tbody>
  {currentContacts.map((c) => (
    <tr key={c.id} className="border-t hover:bg-gray-50">

      {/* NAME */}
      <td className="p-4 flex items-center gap-3">
        <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
          {c.name.charAt(0)}
        </div>
        <span className="font-medium">{c.name}</span>
      </td>

      {/* CONTACT */}
      <td className="p-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Mail size={16} />
          {c.email}
        </div>
        <div className="flex items-center gap-2 text-gray-600 mt-1">
          <Phone size={16} />
          {c.phone}
        </div>
      </td>

      {/* COMPANY */}
      <td className="p-4">
        <div className="flex items-center gap-2 text-gray-700">
          <Building2 size={16} />
          {c.company}
        </div>
      </td>

      {/* ROLE */}
      <td className="p-4">{c.role}</td>

      {/* STATUS */}
      <td className="p-4">
        <span
          className={`px-3 py-1 rounded-full text-sm
          ${
            c.status === "Active"
              ? "bg-green-100 text-green-700"
              : c.status === "Lead"
              ? "bg-blue-100 text-blue-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {c.status}
        </span>
      </td>

    </tr>
  ))}
</tbody>

        </table>
      <div className="flex justify-end items-center gap-2 p-4 border-t">

  {/* Previous */}
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className="px-2 py-1 text-gray-500 disabled:opacity-40"
  >
    {"<"}
  </button>

  {/* Page Numbers */}
  {[...Array(totalPages)].map((_, i) => {
    const page = i + 1;
    return (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`w-8 h-8 rounded border text-sm
        ${
          currentPage === page
            ? "border-blue-500 text-blue-600 font-semibold"
            : "border-gray-300 text-gray-600"
        }`}
      >
        {page}
      </button>
    );
  })}

  {/* Next */}
  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="px-2 py-1 text-gray-500 disabled:opacity-40"
  >
    {">"}
  </button>

</div>

      </div>


      {/* MODAL */}

      <AddContactModal
  open={showModal}
  onClose={() => setShowModal(false)}
  onAdd={handleAddContact}
/>

    </div>
  );
}