'use client'
import { Search, Plus, Filter, ChevronDown } from "lucide-react";
import { useState } from "react";

export function SalesDepartment() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const salesReps = [
    {
      name: "Emily Davis",
      region: "South America",
      duals: 23,
      revenue: "$425K",
      target: "$400K target",
      email: "emily.davis@largify.com",
      phone: "+1 (555) 456-7890",
      status: "Active"
    },
    // ... other salesReps data
  ];

  const filteredReps = salesReps.filter(rep => 
    (activeFilter === "All" || rep.status.includes(activeFilter)) &&
    (searchQuery === "" || 
     rep.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     rep.region.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="text-black">
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Type here to search"
            className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-100"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveFilter("All")}
            className={`px-4 py-2 border rounded-lg flex items-center gap-2 ${
              activeFilter === "All" ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>All</span>
          </button>
          <button 
            onClick={() => setActiveFilter("Active")}
            className={`px-4 py-2 border rounded-lg ${
              activeFilter === "Active" ? 'bg-green-50 text-green-600 border-green-200' : 'text-gray-600'
            }`}
          >
            Active
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            <span>Add Rep</span>
          </button>
        </div>
      </div>

      {/* Sales Reps Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredReps.map((rep, index) => (
          <div key={index} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
            {/* ... rest of your card rendering code ... */}
          </div>
        ))}
      </div>
    </div>
  );
}