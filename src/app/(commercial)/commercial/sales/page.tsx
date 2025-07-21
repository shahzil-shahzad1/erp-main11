// components/SalesDashboard.js
"use client";

import React, { useState } from 'react';
import { Search, Plus, Mail, Phone, User, CheckCircle, XCircle, Clock } from 'lucide-react'; // Lucide icons for search, add button, and card icons

// SalesRepresentativeCard component (now defined within this file)
const SalesRepresentativeCard = ({
  id,
  name,
  status, // "active", "inactive", "on leave"
  email,
  phone,
  totalSales, // e.g., "$425K"
  avatarUrl, // Optional: URL for a user avatar image
}) => {
  const avatarInitial = name ? name.charAt(0).toUpperCase() : '';

  // Determine status color and icon
  let statusColor = 'text-gray-500';
  let statusIcon = null;
  switch (status) {
    case 'active':
      statusColor = 'text-green-600'; // Slightly darker green for active status text
      statusIcon = <CheckCircle size={16} className="inline-block mr-1" />;
      break;
    case 'inactive':
      statusColor = 'text-red-600'; // Slightly darker red for inactive status text
      statusIcon = <XCircle size={16} className="inline-block mr-1" />;
      break;
    case 'on leave':
      statusColor = 'text-yellow-600'; // Slightly darker yellow for on leave status text
      statusIcon = <Clock size={16} className="inline-block mr-1" />;
      break;
    default:
      break;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto my-4 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {/* User Avatar */}
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="w-10 h-10 rounded-full object-cover mr-3" />
          ) : (
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
              {avatarInitial || <User size={24} />}
            </div>
          )}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg">{name}</h3>
            <p className={`text-sm capitalize ${statusColor}`}>
              {statusIcon}
              {status}
            </p>
          </div>
        </div>
        {/* "Active" status indicator on the right, as seen in the screenshot */}
        {status === 'active' && (
          <span className="text-green-600 text-xs font-semibold px-2 py-1 bg-green-100 rounded-full">
            Active
          </span>
        )}
      </div>

      {/* Contact Info */}
      <div className="mb-4 border-t border-gray-100 pt-4">
        <p className="text-gray-600 text-sm flex items-center mb-1">
          <Mail size={16} className="mr-2 text-gray-500" />
          {email}
        </p>
        <p className="text-gray-600 text-sm flex items-center">
          <Phone size={16} className="mr-2 text-gray-500" />
          {phone}
        </p>
      </div>

      {/* Total Sales */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <div>
          <p className="text-gray-700 text-lg font-bold">Total Sales</p>
          <p className="text-green-600 text-xl font-bold">{totalSales}</p>
        </div>
      </div>
    </div>
  );
};

// Dummy data for sales representatives
const salesRepresentativesData = [
  {
    id: 1,
    name: "John Smith",
    status: "active",
    email: "john.smith@largify.com",
    phone: "+1 (555) 123-4567",
    totalSales: "$425K",
    avatarUrl: "https://placehold.co/40x40/4299E1/ffffff?text=JS", // Blue
  },
  {
    id: 2,
    name: "Sarah Johnson",
    status: "active",
    email: "sarah.johnson@largify.com",
    phone: "+1 (555) 234-5678",
    totalSales: "$380K",
    avatarUrl: "https://placehold.co/40x40/38A169/ffffff?text=SJ", // Green
  },
  {
    id: 3,
    name: "Mike Chen",
    status: "inactive",
    email: "mike.chen@largify.com",
    phone: "+1 (555) 345-6789",
    totalSales: "$290K",
    avatarUrl: "https://placehold.co/40x40/E53E3E/ffffff?text=MC", // Red
  },
  {
    id: 4,
    name: "Emily Davis",
    status: "on leave",
    email: "emily.davis@largify.com",
    phone: "+1 (555) 456-7890",
    totalSales: "$210K",
    avatarUrl: "https://placehold.co/40x40/ECC94B/ffffff?text=ED", // Yellow
  },
  {
    id: 5,
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
    // Ensure the filter status is always stored in lowercase
    setFilterStatus(status.toLowerCase());
  };

  const handleAddSalesRep = () => {
    alert("Add Sales Rep button clicked!");
    // Implement logic to add a new sales representative (e.g., open a modal form)
  };

  const filteredSalesReps = salesRepresentativesData.filter(rep => {
    // Search is case-sensitive as requested
    const matchesSearch = rep.name.includes(searchTerm) ||
                          rep.email.includes(searchTerm) ||
                          rep.phone.includes(searchTerm);

    // Filter comparison is now consistent (lowercase status from data vs. lowercase filterStatus)
    const matchesFilter = filterStatus === 'all' || rep.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-gray-50 min-h-screen p-6 sm:p-8 lg:p-10">
      {/* Top Section: Dashboard Header and Add Sales Rep Button */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-gray-800 text-center md:text-left">
          <h1 className="text-3xl font-bold">Sales Department</h1>
          <p className="text-gray-600 text-sm">Manage sales representatives and performance</p>
        </div>
        <button
          onClick={handleAddSalesRep}
          className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-200"
        >
          <Plus size={20} className="mr-2" />
          Add Sales Rep
        </button>
      </div>

      {/* Overview Cards (Top Row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Sales Reps Card */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl shadow-lg p-5 flex items-center justify-between">
          <div>
            <p className="text-sm opacity-80">Total Sales Reps</p>
            <p className="text-2xl font-bold">{salesRepresentativesData.length}</p>
          </div>
          <div className="bg-blue-800 p-3 rounded-full">
            <User size={24} />
          </div>
        </div>

        {/* Active Reps Card */}
        <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl shadow-lg p-5 flex items-center justify-between">
          <div>
            <p className="text-sm opacity-80">Active Reps</p>
            <p className="text-2xl font-bold">{salesRepresentativesData.filter(rep => rep.status === 'active').length}</p>
          </div>
          <div className="bg-green-800 p-3 rounded-full">
            <CheckCircle size={24} />
          </div>
        </div>

        {/* Total Deals Card */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl shadow-lg p-5 flex items-center justify-between">
          <div>
            <p className="text-sm opacity-80">Total Deals</p>
            <p className="text-2xl font-bold">78</p> {/* Hardcoded as per screenshot */}
          </div>
          <div className="bg-purple-800 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </div>
        </div>

        {/* Total Revenue Card */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-xl shadow-lg p-5 flex items-center justify-between">
          <div>
            <p className="text-sm opacity-80">Total Revenue</p>
            <p className="text-2xl font-bold">$1.5M</p> {/* Hardcoded as per screenshot */}
          </div>
          <div className="bg-orange-800 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-xl shadow-lg p-4 mb-6 gap-4">
        <div className="relative flex items-center w-full sm:w-1/2 lg:w-1/3">
          <input
            type="text"
            placeholder="Search sales representatives"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 text-sm shadow-sm"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search size={18} className="absolute left-3 text-gray-500" />
        </div>
        <div className="flex space-x-2 text-sm w-full sm:w-auto justify-center">
          {/* Filter buttons */}
          {['All', 'Active', 'Inactive', 'On Leave'].map((status) => (
            <button
              key={status}
              // Convert button text to lowercase for comparison with filterStatus
              onClick={() => handleFilterClick(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200
                ${filterStatus === (status === 'All' ? 'all' : status.toLowerCase())
                  ? 'bg-blue-600 text-white shadow-md' // Active state button color
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300' // Inactive state button color
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
          <p className="text-gray-600 text-center col-span-full py-10">No matching sales representatives found.</p>
        )}
      </div>
    </div>
  );
};

export default SalesDashboard;
