import { useState } from "react";
import { Search, Calendar } from "lucide-react";

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

  const tabs = [
    "All",
    "Lead",
    "Qualified",
    "Proposal",
    "Negotiation",
    "Closed Won",
    "Closed Lost",
  ];

  const filteredDeals = dealsData.filter((deal) => {
    const statusMatch =
      activeTab === "All" || deal.status === activeTab;

    const searchMatch =
      deal.title.toLowerCase().includes(search.toLowerCase()) ||
      deal.company.toLowerCase().includes(search.toLowerCase());

    return statusMatch && searchMatch;
  });

  return (
    <div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Deals</h1>
          <p className="text-gray-500">
            Track your sales opportunities
          </p>
        </div>

        <button className="bg-purple-600 text-white px-5 py-2 rounded-lg">
          + Add Deal
        </button>
      </div>


      {/* SEARCH + TABS */}
      <div className="bg-white border rounded-xl p-5 mb-6">

        <div className="flex items-center gap-3 overflow-x-auto">

          {/* SEARCH */}
          <div className="flex items-center border rounded-lg px-3 py-2 min-w-[300px]">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search deals..."
              className="outline-none ml-2 w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* TABS */}
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg border text-sm
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


      {/* DEAL CARDS */}
      <div className="space-y-4">

        {filteredDeals.map((deal) => (

          <div
            key={deal.id}
            className="bg-white border rounded-xl p-6 flex justify-between items-center"
          >

            <div>

              <h3 className="text-lg font-semibold">
                {deal.title}
              </h3>

              <p className="text-gray-500">
                {deal.company} · {deal.owner}
              </p>

              <div className="flex items-center gap-4 mt-3">

                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {deal.status}
                </span>

                <span className="flex items-center text-gray-500 text-sm">
                  <Calendar size={16} className="mr-1"/>
                  Close: {deal.close}
                </span>

              </div>

            </div>

            <div className="text-right">

              <div className="text-purple-600 font-bold text-lg mb-2">
                {deal.value}
              </div>

              <button className="border px-4 py-2 rounded-lg text-sm">
                View Details
              </button>

            </div>

          </div>

        ))}

        {filteredDeals.length === 0 && (
          <p className="text-gray-500 text-center py-10">
            No deals found
          </p>
        )}

      </div>

    </div>
  );
}