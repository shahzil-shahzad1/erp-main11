// components/SalesDashboard.js
"use client";

import React, { useState } from 'react';
import { Search, Plus, Mail, Phone, CheckCircle, XCircle, Clock, DollarSign, UsersRound, HeartHandshake  } from 'lucide-react';

// Define the interface for SalesRepresentativeCard props
interface SalesRepresentativeCardProps {
  id: number; // Added id to props interface as it's used for key
  name: string;
  status: 'active' | 'inactive' | 'on leave'; // Explicitly define possible string literal values
  email: string;
  phone: string;
  totalSales: string;
  avatarUrl?: string; // Optional prop
}

// SalesRepresentativeCard component (now defined within this file)
const SalesRepresentativeCard = ({
  name,
  status, // "active", "inactive", "on leave"
  email,
  phone,
  totalSales, // e.g., "$425K"
  avatarUrl, // Optional: URL for a user avatar image
}: SalesRepresentativeCardProps) => { // Apply the interface here
  const avatarInitial = name ? name.charAt(0).toUpperCase() : '';

  // Determine status color and icon
  let statusColor = 'text-gray-500'; // Default
  let statusIcon = null;
  switch (status) {
    case 'active':
      statusColor = 'text-green-500'; // Adjusted to match the green on the reference site more closely
      statusIcon = <CheckCircle size={16} className="inline-block mr-1" />;
      break;
    case 'inactive':
      statusColor = 'text-red-500'; // Adjusted
      statusIcon = <XCircle size={16} className="inline-block mr-1" />;
      break;
    case 'on leave':
      statusColor = 'text-yellow-500';
      statusIcon = <Clock size={16} className="inline-block mr-1" />;
      break;
    default:
      break;
  }

  return (
    <div className="bg-[#1a1a1a] rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto my-4 border border-gray-800 hover:shadow-xl transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="w-10 h-10 rounded-full object-cover mr-3" />
          ) : (
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
              {avatarInitial || <User size={24} />}
            </div>
          )}
          <div>
            <h3 className="text-white font-semibold text-lg">{name}</h3>
            <p className={`text-sm capitalize ${statusColor}`}>
              {statusIcon}
              {status}
            </p>
          </div>
        </div>
        {/* "Active" status indicator on the right, as seen in the screenshot */}
        {status === 'active' && (
          <span className="text-green-500 text-xs font-semibold px-2 py-1 bg-green-100 rounded-full">
            Active
          </span>
        )}
      </div>

      {/* Contact Info */}
      <div className="mb-4 border-t border-gray-800 pt-4">
        <p className="text-[#a0a0a0] text-sm flex items-center mb-1">
          <Mail size={16} className="mr-2 text-[#a0a0a0]" />
          {email}
        </p>
        <p className="text-[#a0a0a0] text-sm flex items-center">
          <Phone size={16} className="mr-2 text-[#a0a0a0]" />
          {phone}
        </p>
      </div>

      {/* Total Sales */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-800">
        <div>
          <p className="text-[#a0a0a0] text-lg font-bold">Total Sales</p>
          <p className="text-green-500 text-xl font-bold">{totalSales}</p>
        </div>
      </div>
    </div>
  );
};

const salesRepresentativesData: SalesRepresentativeCardProps[] = [
  {
    id: 1, // Added unique id
    name: "John Smith",
    status: "active",
    email: "john.smith@largify.com",
    phone: "+1 (555) 123-4567",
    totalSales: "$425K",
    avatarUrl: "https://placehold.co/40x40/4299E1/ffffff?text=JS",
  },
  {
    id: 2, // Added unique id
    name: "Sarah Johnson",
    status: "active",
    email: "sarah.johnson@largify.com",
    phone: "+1 (555) 234-5678",
    totalSales: "$380K",
    avatarUrl: "https://placehold.co/40x40/38A169/ffffff?text=SJ",
  },
  {
    id: 3, // Added unique id
    name: "Mike Chen",
    status: "inactive",
    email: "mike.chen@largify.com",
    phone: "+1 (555) 345-6789",
    totalSales: "$290K",
    avatarUrl: "https://placehold.co/40x40/E53E3E/ffffff?text=MC",
  },
  {
    id: 4, // Added unique id
    name: "Emily Davis",
    status: "on leave",
    email: "emily.davis@largify.com",
    phone: "+1 (555) 456-7890",
    totalSales: "$210K",
    avatarUrl: "https://placehold.co/40x40/ECC94B/ffffff?text=ED", 
  },
  {
    id: 5, // Added unique id
    name: "David Lee",
    status: "active",
    email: "david.lee@largify.com",
    phone: "+1 (555) 567-8901",
    totalSales: "$510K",
    avatarUrl: "https://placehold.co/40x40/4299E1/ffffff?text=DL", 
  },
];

const cards = [
  {title: "Sales Representatives", value: "5", icon: UsersRound},
  {title: "Active Representatives", value: "3", icon: CheckCircle},
  {title: "Total Deals", value: "78", icon: HeartHandshake},
  {title: "Total Reveneue", value: "$1.5M", icon: DollarSign},
]

const SalesDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); 
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterClick = (status: string) => {
    setFilterStatus(status.toLowerCase());
  };

  const handleAddSalesRep = () => {
    alert("Add Sales Rep button clicked!");
  };

  const filteredSalesReps = salesRepresentativesData.filter(rep => {
    const matchesSearch = rep.name.includes(searchTerm) ||
                          rep.email.includes(searchTerm) ||
                          rep.phone.includes(searchTerm);

    const matchesFilter = filterStatus === 'all' || rep.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-[#121111] min-h-screen p-6 sm:p-8 lg:p-10 text-white font-sans">
      {/* Top Section: Dashboard Header and Add Sales Rep Button */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-white text-center md:text-left">
          <h1 className="text-3xl font-bold">Sales Department</h1>
          <p className="text-[#a0a0a0] text-sm">Manage sales representatives and performance</p>
        </div>
        <button
          onClick={handleAddSalesRep}
          className="flex items-center px-6 py-2 bg-[#b16a04] text-white rounded-lg shadow-md hover:bg-[#e5a004] focus:outline-none focus:ring-2 focus:ring-[#e5a504] focus:ring-opacity-75 transition-all duration-200"
        >
          <Plus size={20} className="mr-2" />
          Add Sales Rep
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card, index)=>{
          const IconComponent = card.icon;
          return (
        <div className="bg-[#1a1a1a] relative cursor-pointer text-white rounded-xl shadow-lg p-5 flex items-center justify-between border border-gray-800 hover:scale-[1.03] transition-all duration-200" key={card.title}> {/* Added key prop here */}
          <div>
            <p className="text-sm text-[#a0a0a0]">{card.title}</p>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
          <div className="p-3 rounded-2xl bg-orange-900/30 hover:bg-orange-800/50 transition-all duration-200">
            <IconComponent size={24} className="text-orange-500" />
          </div>
        </div>
        )}
        )}
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-[#1a1a1a] rounded-xl shadow-lg p-4 mb-6 gap-4 border border-gray-800">
        <div className="relative flex items-center w-full sm:w-1/2 lg:w-1/3">
          <input
            type="text"
            placeholder="Search sales representatives"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#212121] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:border-transparent text-white text-sm shadow-sm"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search size={18} className="absolute left-3 text-[#a0a0a0]" />
        </div>
        <div className="flex space-x-2 text-sm w-full sm:w-auto justify-center">
          {/* Filter buttons */}
          {['All', 'Active', 'Inactive', 'On Leave'].map((status) => (
            <button
              key={status}
              onClick={() => handleFilterClick(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200
                ${filterStatus === (status === 'All' ? 'all' : status.toLowerCase())
                  ? 'bg-[#e5a004] text-[#121111] shadow-md'
                  : 'bg-[#212121] text-[#a0a0a0] hover:bg-[#2a2a2a]'
                }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Sales Representative Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSalesReps.length > 0 ? (
          filteredSalesReps.map((rep, index) => (
            <SalesRepresentativeCard key={rep.id} {...rep} /> // Changed key to rep.id
          ))
        ) : (
          <p className="text-[#a0a0a0] text-center col-span-full py-10">No matching sales representatives found.</p>
        )}
      </div>
    </div>
  );
};

export default SalesDashboard;
