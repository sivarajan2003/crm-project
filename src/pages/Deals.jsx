import { useState } from "react";
import { Search, Calendar, Plus } from "lucide-react";
import AddDealModal from "../components/AddDealModal";
import DealDetailsModal from "../components/DealDetailsModal";
const dealsData = [
  {
    id: 1,
    title: "Enterprise License - Acme Corp",
    company: "Acme Corp",
    owner: "Sarah Johnson",
    status: "Negotiation",
    value: "₹45,000",
    close: "3/15/2026",
  },
  {
    id: 2,
    title: "Cloud Migration Project",
    company: "TechStart Inc",
    owner: "Michael Chen",
    status: "Proposal",
    value: "₹78,000",
    close: "3/20/2026",
  },
  {
    id: 3,
    title: "Annual Support Package",
    company: "Global Solutions",
    owner: "David Park",
    status: "Qualified",
    value: "₹32,000",
    close: "3/25/2026",
  },
];
export default function Deals() {

  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
const [showModal, setShowModal] = useState(false);
const [deals, setDeals] = useState(dealsData);
const handleAddDeal = (newDeal) => {
const [selectedDeal, setSelectedDeal] = useState(null);
const [showDetails, setShowDetails] = useState(false);
  const formattedDeal = {
    id: Date.now(),
    title: newDeal.title,
    company: newDeal.company,
    owner: newDeal.owner,
    status: newDeal.status,
    value: `₹${newDeal.value}`,   // format value
    close: newDeal.close
  };

  setDeals([...deals, formattedDeal]);
};  const tabs = [
    "All",
    "Lead",
    "Qualified",
    "Proposal",
    "Negotiation",
    "Closed Won",
    "Closed Lost",
  ];

  const filteredDeals = deals.filter((deal) => {

    const statusMatch =
      activeTab === "All" || deal.status === activeTab;

    const searchMatch =
      deal.title.toLowerCase().includes(search.toLowerCase()) ||
      deal.company.toLowerCase().includes(search.toLowerCase());

    return statusMatch && searchMatch;
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Deals
          </h1>

          <p className="text-gray-500">
            Track your sales opportunities
          </p>
        </div>

        <button
onClick={() => setShowModal(true)}
className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-2 rounded-lg shadow"
>
<Plus size={16}/>
Add Deal
</button>

      </div>


      {/* SEARCH + FILTER AREA */}
      <div className="bg-white border rounded-xl p-6 mb-6">

        <div className="flex items-center gap-3 flex-wrap">

          {/* SEARCH */}
          <div className="flex items-center border rounded-lg px-4 py-2 w-[350px] bg-gray-50">

            <Search size={18} className="text-gray-400"/>

            <input
              type="text"
              placeholder="Search deals..."
              className="outline-none bg-transparent ml-2 w-full"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />

          </div>

          {/* TABS */}
          {tabs.map((tab)=>(
            <button
              key={tab}
              onClick={()=>setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium
              ${
                activeTab === tab
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}

        </div>

      </div>


      {/* DEAL LIST */}
      <div className="space-y-4">

        {filteredDeals.map((deal)=>(
          
          <div
            key={deal.id}
            className="bg-white border rounded-xl p-6 flex justify-between items-center"
          >

            {/* LEFT */}
            <div>

              <h3 className="text-lg font-semibold text-gray-900">
                {deal.title}
              </h3>

              <p className="text-gray-500 mt-1">
                {deal.company} · {deal.owner}
              </p>

              <div className="flex items-center gap-4 mt-3">

                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {deal.status}
                </span>

                <span className="flex items-center text-gray-500 text-sm">
                  <Calendar size={16} className="mr-1"/>
                  Close: {deal.close}
                </span>

              </div>

            </div>


            {/* RIGHT */}
            <div className="text-right">

              <div className="text-purple-600 font-bold text-xl mb-3">
                {deal.value}
              </div>

              <button
  onClick={() => {
    setSelectedDeal(deal);
    setShowDetails(true);
  }}
  className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-50"
>
  View Details
</button>

            </div>

          </div>

        ))}

      </div>
<AddDealModal
open={showModal}
onClose={() => setShowModal(false)}
onAdd={handleAddDeal}
/>
<button
  onClick={() => {
    setSelectedDeal(deal);
    setShowDetails(true);
  }}
  className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-50"
>
  View Details
</button>
    </div>
  );
}