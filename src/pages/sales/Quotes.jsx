import { useState } from "react";
import { 
Search, Plus, Eye, Send, Download, FileText, 
Filter, Calendar, Package, IndianRupee,
FileBarChart, Clock, CheckCircle
} from "lucide-react";
import CreateQuoteModal from "../../components/CreateQuoteModal";
import { motion } from "framer-motion";
const quotesData = [
  {
    id: "QT-2026-001",
    customer: "Acme Corp",
    contact: "Sarah Johnson",
    amount: 45000,
    status: "Sent",
    date: "20/03/2026",
    items: 12
  },
  {
    id: "QT-2026-002",
    customer: "TechStart Inc",
    contact: "Michael Chen",
    amount: 32500,
    status: "Draft",
    date: "25/03/2026",
    items: 8
  },
  {
    id: "QT-2026-003",
    customer: "Global Solutions",
    contact: "David Park",
    amount: 67800,
    status: "Accepted",
    date: "15/03/2026",
    items: 15
  },
  {
    id: "QT-2026-004",
    customer: "Vista Enterprises",
    contact: "Emma Wilson",
    amount: 28900,
    status: "Sent",
    date: "18/03/2026",
    items: 6
  },
  {
    id: "QT-2026-005",
    customer: "Innovate Labs",
    contact: "James Brown",
    amount: 54200,
    status: "Accepted",
    date: "12/03/2026",
    items: 10
  },
  {
    id: "QT-2026-006",
    customer: "Digital Dynamics",
    contact: "Lisa Anderson",
    amount: 19500,
    status: "Rejected",
    date: "10/03/2026",
    items: 4
  },
  {
    id: "QT-2026-007",
    customer: "NextGen Tech",
    contact: "Daniel Smith",
    amount: 38500,
    status: "Sent",
    date: "22/03/2026",
    items: 9
  },
  {
    id: "QT-2026-008",
    customer: "Bright Solutions",
    contact: "Sophia Taylor",
    amount: 26000,
    status: "Draft",
    date: "26/03/2026",
    items: 5
  },
  {
    id: "QT-2026-009",
    customer: "Alpha Systems",
    contact: "Chris Martin",
    amount: 47000,
    status: "Accepted",
    date: "14/03/2026",
    items: 11
  },
  {
    id: "QT-2026-010",
    customer: "FutureSoft",
    contact: "Olivia White",
    amount: 32000,
    status: "Sent",
    date: "24/03/2026",
    items: 7
  }
];

export default function Quotes() {
const [currentPage, setCurrentPage] = useState(1);
const [showModal, setShowModal] = useState(false);
const rowsPerPage = 10;
const [selectedQuote, setSelectedQuote] = useState(null);
const [showViewModal, setShowViewModal] = useState(false);
const indexOfLast = currentPage * rowsPerPage;
const indexOfFirst = indexOfLast - rowsPerPage;
const [searchTerm, setSearchTerm] = useState("");
const filteredQuotes = quotesData.filter((q) =>
  q.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
  q.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
  q.contact.toLowerCase().includes(searchTerm.toLowerCase())
);

const currentRows = filteredQuotes.slice(indexOfFirst, indexOfLast);

const totalPages = Math.ceil(filteredQuotes.length / rowsPerPage);
//const totalPages = Math.ceil(quotesData.length / rowsPerPage);
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
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5
    }
  })
};
  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* HEADER */}

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold">Quotes</h1>
          <p className="text-gray-500">Create and manage sales quotations</p>
        </div>

       <button
onClick={() => setShowModal(true)}
className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg"
>
<Plus size={18}/>
New Quote
</button>

      </div>


     {/* SUMMARY CARDS */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

  {/* TOTAL QUOTES */}
  <motion.div
    custom={0}
    initial="hidden"
    animate="visible"
    variants={cardAnimation}
    className="bg-white p-5 rounded-xl shadow flex items-center gap-4"
  >

    <div className="bg-purple-100 p-3 rounded-lg">
      <FileText className="text-purple-600" size={22}/>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Total Quotes</p>
      <h2 className="text-2xl font-bold">48</h2>
    </div>

  </motion.div>


  {/* QUOTE VALUE */}
  <motion.div
    custom={1}
    initial="hidden"
    animate="visible"
    variants={cardAnimation}
    className="bg-white p-5 rounded-xl shadow flex items-center gap-4"
  >

    <div className="bg-green-100 p-3 rounded-lg">
      <IndianRupee className="text-green-600" size={22}/>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Quote Value</p>
      <h2 className="text-2xl font-bold">₹3,42,000</h2>
    </div>

  </motion.div>


  {/* PENDING */}
  <motion.div
    custom={2}
    initial="hidden"
    animate="visible"
    variants={cardAnimation}
    className="bg-white p-5 rounded-xl shadow flex items-center gap-4"
  >

    <div className="bg-orange-100 p-3 rounded-lg">
      <Calendar className="text-orange-600" size={22}/>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Pending</p>
      <h2 className="text-2xl font-bold">12</h2>
    </div>

  </motion.div>


  {/* ACCEPTANCE RATE */}
  <motion.div
    custom={3}
    initial="hidden"
    animate="visible"
    variants={cardAnimation}
    className="bg-white p-5 rounded-xl shadow flex items-center gap-4"
  >

    <div className="bg-blue-100 p-3 rounded-lg">
      <Package className="text-blue-600" size={22}/>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Acceptance Rate</p>
      <h2 className="text-2xl font-bold">68%</h2>
    </div>

  </motion.div>

</div>
      {/* SEARCH */}

      <div className="bg-white p-4 rounded-xl shadow mb-6 flex items-center justify-between gap-3">

  <div className="flex items-center gap-3 w-full">

    <Search size={18} className="text-gray-400" />

    <input
      placeholder="Search quotes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="outline-none w-full"
    />

  </div>

  <button className="flex items-center gap-2 text-gray-600 hover:text-black">
    <Filter size={18}/>
    Filters
  </button>

</div>

      {/* TABLE */}

     <div className="hidden md:block bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50 text-gray-600 text-left">

            <tr>
              <th className="p-4">Quote ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Valid Until</th>
              <th>Items</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {currentRows.map((q) => (

              <tr key={q.id} className="border-t">

                <td className="p-4 flex items-center gap-2">
                  <FileText size={18} className="text-purple-600" />
                  {q.id}
                </td>

                <td>
                  <div className="font-semibold">{q.customer}</div>
                  <div className="text-gray-500 text-sm">{q.contact}</div>
                </td>

                <td className="font-semibold text-purple-600">
                  ₹{q.amount.toLocaleString("en-IN")}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm
                    ${
                      q.status === "Accepted"
                        ? "bg-green-100 text-green-700"
                        : q.status === "Draft"
                        ? "bg-gray-200 text-gray-700"
                        : q.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {q.status}
                  </span>

                </td>

                <td>{q.date}</td>

                <td>{q.items} items</td>

                <td className="flex gap-3">

                 <Eye
  size={18}
  className="cursor-pointer"
  onClick={() => handleView(q)}
/>

<Send
  size={18}
  className="cursor-pointer"
  onClick={() => handleSend(q)}
/>

<Download
  size={18}
  className="cursor-pointer"
  onClick={() => handleDownload(q)}
/>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
      {/* MOBILE CARD VIEW */}

<div className="md:hidden space-y-4">

  {currentRows.map((q) => (

    <div key={q.id} className="bg-white rounded-xl shadow p-4">

      <div className="flex justify-between items-center mb-2">

        <div className="flex items-center gap-2">
          <FileText size={18} className="text-purple-600"/>
          <span className="font-semibold">{q.id}</span>
        </div>

        <span
          className={`px-2 py-1 text-xs rounded-full
          ${
            q.status === "Accepted"
              ? "bg-green-100 text-green-700"
              : q.status === "Draft"
              ? "bg-gray-200 text-gray-700"
              : q.status === "Rejected"
              ? "bg-red-100 text-red-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {q.status}
        </span>

      </div>

      <div className="text-sm text-gray-600">
        <p className="font-semibold">{q.customer}</p>
        <p>{q.contact}</p>
      </div>

      <div className="flex justify-between mt-3 text-sm">

        <span className="font-semibold text-purple-600">
          ₹{q.amount.toLocaleString("en-IN")}
        </span>

        <span>{q.items} items</span>

      </div>

      <div className="text-sm text-gray-500 mt-2">
        Valid Until: {q.date}
      </div>

      <div className="flex gap-4 mt-3">
        <Eye size={18}/>
        <Send size={18}/>
        <Download size={18}/>
      </div>

    </div>

  ))}

</div>

<div className="flex justify-end items-center gap-3 mt-6 pr-4">
<button
onClick={() => setCurrentPage(currentPage - 1)}
disabled={currentPage === 1}
className="p-2 border rounded-lg disabled:opacity-40"
>
‹
</button>

{Array.from({ length: totalPages }, (_, i) => (

<button
key={i}
onClick={() => setCurrentPage(i + 1)}
className={`px-4 py-2 rounded-lg border
${currentPage === i + 1
? "bg-blue-500 text-white"
: "bg-white"
}`}
>
{i + 1}
</button>

))}

<button
onClick={() => setCurrentPage(currentPage + 1)}
disabled={currentPage === totalPages}
className="p-2 border rounded-lg disabled:opacity-40"
>
›
</button>

</div>
{showModal && (
<CreateQuoteModal closeModal={() => setShowModal(false)} />
)}
{showViewModal && selectedQuote && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white p-6 rounded-xl shadow w-[500px]">

      <h2 className="text-xl font-bold mb-4">Quote Details</h2>

      <p><b>ID:</b> {selectedQuote.id}</p>
      <p><b>Customer:</b> {selectedQuote.customer}</p>
      <p><b>Contact:</b> {selectedQuote.contact}</p>
      <p><b>Amount:</b> ₹{selectedQuote.amount}</p>
      <p><b>Items:</b> {selectedQuote.items}</p>
      <p><b>Status:</b> {selectedQuote.status}</p>
      <p><b>Valid Until:</b> {selectedQuote.date}</p>

      <div className="flex justify-end mt-4">
        <button
          onClick={() => setShowViewModal(false)}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          Close
        </button>
      </div>

    </div>

  </div>
)}
    </div>
  );
}