import { useState } from "react";
import { Search, Download, Send, Plus } from "lucide-react";
import CreateInvoice from "../../components/CreateInvoice";
const invoicesData = [
{
id:"INV-2026-001",
customer:"Acme Corp · Sarah Johnson",
status:"Paid",
amount:45000,
issued:"2/15/2026",
due:"3/15/2026"
},
{
id:"INV-2026-002",
customer:"TechStart Inc · Michael Chen",
status:"Pending",
amount:78000,
issued:"2/20/2026",
due:"3/20/2026"
},
{
id:"INV-2026-003",
customer:"Global Solutions · David Park",
status:"Overdue",
amount:62000,
issued:"1/10/2026",
due:"2/10/2026"
}
];

export default function Invoices(){

const [search,setSearch] = useState("");
const [filter,setFilter] = useState("All");
const [showModal, setShowModal] = useState(false);
const filteredInvoices = invoicesData.filter(inv=>{

const matchSearch =
inv.id.toLowerCase().includes(search.toLowerCase()) ||
inv.customer.toLowerCase().includes(search.toLowerCase()) ||
inv.status.toLowerCase().includes(search.toLowerCase());
const matchStatus =
filter === "All" || inv.status === filter;

return matchSearch && matchStatus;

});

const total = invoicesData.reduce((a,b)=>a+b.amount,0);
const paid = invoicesData.filter(i=>i.status==="Paid")
.reduce((a,b)=>a+b.amount,0);
const pending = invoicesData.filter(i=>i.status==="Pending")
.reduce((a,b)=>a+b.amount,0);

return(

<div className="p-6 bg-gray-50 min-h-screen">

{/* HEADER */}

<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
<div>
<h1 className="text-3xl font-bold">Invoices</h1>
<p className="text-gray-500">
Manage your billing and payments
</p>
</div>

<button
onClick={()=>setShowModal(true)}
className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg"
>
<Plus size={16}/>
Create Invoice
</button>

</div>

{/* SUMMARY CARDS */}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">

<div className="bg-white p-5 rounded-xl shadow">
<p className="text-gray-500">Total Amount</p>
<h2 className="text-2xl font-bold">
₹{total.toLocaleString("en-IN")}
</h2>
</div>

<div className="bg-white p-5 rounded-xl shadow">
<p className="text-gray-500">Paid</p>
<h2 className="text-2xl font-bold text-green-600">
₹{paid.toLocaleString("en-IN")}
</h2>
</div>

<div className="bg-white p-5 rounded-xl shadow">
<p className="text-gray-500">Pending</p>
<h2 className="text-2xl font-bold text-orange-500">
₹{pending.toLocaleString("en-IN")}</h2>
</div>

</div>

{/* SEARCH + FILTER */}

<div className="bg-white p-5 rounded-xl shadow mb-6 flex flex-col md:flex-row md:items-center gap-4">
<div className="flex items-center border rounded-lg px-3 py-2 w-full md:w-[60%] lg:w-[40%]">
<Search size={18} className="text-gray-400"/>
<input
placeholder="Search invoices, customer, status..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="ml-2 outline-none w-full"
/>
</div>

<div className="flex gap-2 flex-nowrap">
{["All","Paid","Pending","Overdue"].map(tab=>(
<button
key={tab}
onClick={()=>setFilter(tab)}
className={`px-4 py-1 rounded-lg text-sm
${filter===tab
?"bg-purple-600 text-white"
:"border"}
`}
>
{tab}
</button>
))}

</div>

</div>

{/* INVOICE LIST */}

<div className="space-y-4">

{filteredInvoices.map(inv=>(

<div
key={inv.id}
className="bg-white p-5 rounded-xl shadow flex flex-col md:flex-row md:items-center justify-between gap-4 w-full"
>

{/* LEFT */}

<div>

<div className="flex items-center gap-3">

<h3 className="font-semibold text-lg">
{inv.id}
</h3>

<span className={`px-3 py-1 rounded-full text-sm
${inv.status==="Paid"
?"bg-green-100 text-green-700"
:inv.status==="Pending"
?"bg-orange-100 text-orange-700"
:"bg-red-100 text-red-700"}
`}>
{inv.status}
</span>

</div>

<p className="text-gray-500">
{inv.customer}
</p>

<p className="text-sm text-gray-400">
Issued: {inv.issued} · Due: {inv.due}
</p>

</div>

{/* RIGHT */}
<div className="flex items-center justify-between w-full md:w-auto gap-4">

<div className="text-right">

<p className="text-gray-400 text-sm">
Amount
</p>

<h2 className="text-xl font-bold text-purple-600">
₹{inv.amount.toLocaleString("en-IN")}
</h2>

</div>

<button className="border p-2 rounded-lg">
<Download size={18}/>
</button>

<button className="border p-2 rounded-lg">
<Send size={18}/>
</button>

</div>

</div>

))}

</div>
{showModal && (
<CreateInvoice
closeModal={()=>setShowModal(false)}
/>
)}
</div>

);

}