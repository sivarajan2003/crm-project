import { useState } from "react";
import { Search, Plus, Mail, Phone, Building2 } from "lucide-react";
import AddContactModal from "../../components/AddContactModal";

const contactsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@acmecorp.com",
    phone: "+1 (555) 123-4567",
    company: "Acme Corp",
    role: "CEO",
    status: "Active"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "mchen@techstart.io",
    phone: "+1 (555) 234-5678",
    company: "TechStart Inc",
    role: "CTO",
    status: "Lead"
  },
  {
    id: 3,
    name: "David Park",
    email: "dpark@globalsol.com",
    phone: "+1 (555) 345-6789",
    company: "Global Solutions",
    role: "VP Sales",
    status: "Active"
  }
];

export default function Contact() {

  const [contacts, setContacts] = useState(contactsData);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

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

      {/* SEARCH */}
      <div className="bg-white border rounded-xl p-5 mb-6">

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

      </div>


      {/* CONTACT TABLE */}

      <div className="bg-white border rounded-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100 text-gray-600 text-sm">

            <tr>
              <th className="text-left p-4">Name</th>
              <th>Contact Info</th>
              <th>Company</th>
              <th>Role</th>
              <th>Status</th>
            </tr>

          </thead>


          <tbody>

            {filteredContacts.map((c)=>(

              <tr key={c.id} className="border-t hover:bg-gray-50">

                {/* NAME */}
                <td className="p-4 flex items-center gap-3">

                  <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                    {c.name.charAt(0)}
                  </div>

                  <span className="font-medium">{c.name}</span>

                </td>


                {/* CONTACT INFO */}
                <td>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={16}/>
                    {c.email}
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <Phone size={16}/>
                    {c.phone}
                  </div>

                </td>


                {/* COMPANY */}
                <td>

                  <div className="flex items-center gap-2 text-gray-700">

                    <Building2 size={16}/>
                    {c.company}

                  </div>

                </td>


                {/* ROLE */}
                <td>{c.role}</td>


                {/* STATUS */}
                <td>

                  <span className={`px-3 py-1 rounded-full text-sm
                  
                  ${c.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : c.status === "Lead"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-200 text-gray-600"}

                  `}>
                    {c.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      {/* MODAL */}

      <AddContactModal
        open={showModal}
        onClose={()=>setShowModal(false)}
      />

    </div>
  );
}