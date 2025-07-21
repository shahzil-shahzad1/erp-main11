// components/SalesDashboard.js
"use client";

import React, { useState } from 'react';
// Removed unused Lucide icons to resolve compilation errors/warnings
import { Search, Plus, Mail, Phone, User, CheckCircle, XCircle, Clock } from 'lucide-react';

// SalesRepresentativeCard component (now defined within this file)
const SalesRepresentativeCard = ({
  name,
  status, // "active", "inactive", "on leave"
  email,
  phone,
  totalSales, // e.g., "$425K"
  avatarUrl, // Optional: URL for a user avatar image
}) => {
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
      statusColor = 'text-yellow-500'; // Adjusted
      statusIcon = <Clock size={16} className="inline-block mr-1" />;
      break;
    default:
      break;
  }

  return (
    <div className="bg-[#1a1a1a] rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto my-4 border border-gray-800 hover:shadow-xl transition-shadow duration-200">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {/* User Avatar */}
          {avatarUrl ? (
            // Warning: Using `<img>` could result in slower LCP and higher bandwidth.
            // Consider using `<Image />` from `next/image` for optimization if layout allows.
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

// Dummy data for sales representatives
const salesRepresentativesData = [
  {
    name: "John Smith",
    status: "active",
    email: "john.smith@largify.com",
    phone: "+1 (555) 123-4567",
    totalSales: "$425K",
    avatarUrl: "https://placehold.co/40x40/4299E1/ffffff?text=JS", // Blue
  },
  {
    name: "Sarah Johnson",
    status: "active",
    email: "sarah.johnson@largify.com",
    phone: "+1 (555) 234-5678",
    totalSales: "$380K",
    avatarUrl: "https://placehold.co/40x40/38A169/ffffff?text=SJ", // Green
  },
  {
    name: "Mike Chen",
    status: "inactive",
    email: "mike.chen@largify.com",
    phone: "+1 (555) 345-6789",
    totalSales: "$290K",
    avatarUrl: "https://placehold.co/40x40/E53E3E/ffffff?text=MC", // Red
  },
  {
    name: "Emily Davis",
    status: "on leave",
    email: "emily.davis@largify.com",
    phone: "+1 (555) 456-7890",
    totalSales: "$210K",
    avatarUrl: "https://placehold.co/40x40/ECC94B/ffffff?text=ED", // Yellow
  },
  {
    name: "David Lee",
    status: "active",
    email: "david.lee@largify.com",
    phone: "+1 (555) 567-8901",
    totalSales: "$510K",
    avatarUrl: "https://placehold.co/40x40/4299E1/ffffff?text=DL", // Blue
  },
];

const SalesDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'active', 'inactive', 'on leave'

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterClick = (status) => {
    setFilterStatus(status.toLowerCase());
  };

  const handleAddSalesRep = () => {
    alert("Add Sales Rep button clicked!");
    // Implement logic to add a new sales representative (e.g., open a modal form)
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
          className="flex items-center px-6 py-2 bg-[#b16a04] text-white rounded-lg shadow-md hover:bg-[#e5a004] focus:outline-none focus:ring-2 focus:ring-[#e5a004] focus:ring-opacity-75 transition-all duration-200"
        >
          <Plus size={20} className="mr-2" />
          Add Sales Rep
        </button>
      </div>

      {/* Overview Cards (Top Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Sales Reps Card */}
        <div className="bg-[#1a1a1a] text-white rounded-xl shadow-lg p-5 flex items-center justify-between border border-gray-800">
          <div>
            <p className="text-sm text-[#a0a0a0]">Total Sales Reps</p>
            <p className="text-2xl font-bold">{salesRepresentativesData.length}</p>
          </div>
          <div className="bg-[#e5a004] p-3 rounded-full">
            <User size={24} className="text-[#121111]" />
          </div>
        </div>

        {/* Active Reps Card */}
        <div className="bg-[#1a1a1a] text-white rounded-xl shadow-lg p-5 flex items-center justify-between border border-gray-800">
          <div>
            <p className="text-sm text-[#a0a0a0]">Active Reps</p>
            <p className="text-2xl font-bold">{salesRepresentativesData.filter(rep => rep.status === 'active').length}</p>
          </div>
          <div className="bg-[#e5a004] p-3 rounded-full">
            <CheckCircle size={24} className="text-[#121111]" />
          </div>
        </div>

        {/* Total Deals Card */}
        <div className="bg-[#1a1a1a] text-white rounded-xl shadow-lg p-5 flex items-center justify-between border border-gray-800">
          <div>
            <p className="text-sm text-[#a0a0a0]">Total Deals</p>
            <p className="text-2xl font-bold">78</p>
          </div>
          <div className="bg-[#e5a004] p-3 rounded-full">
            {/* Inline SVG for trending-up icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-[#121111]"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </div>
        </div>

        {/* Total Revenue Card */}
        <div className="bg-[#1a1a1a] text-white rounded-xl shadow-lg p-5 flex items-center justify-between border border-gray-800">
          <div>
            <p className="text-sm text-[#a0a0a0]">Total Revenue</p>
            <p className="text-2xl font-bold">$1.5M</p>
          </div>
          <div className="bg-[#e5a004] p-3 rounded-full">
            {/* Inline SVG for dollar-sign icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign text-[#121111]"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
        </div>
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
          filteredSalesReps.map((rep) => (
            <SalesRepresentativeCard key={rep.id} {...rep} />
          ))
        ) : (
          <p className="text-[#a0a0a0] text-center col-span-full py-10">No matching sales representatives found.</p>
        )}
      </div>
    </div>
  );
};

export default SalesDashboard;
