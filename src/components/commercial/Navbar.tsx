"use client"
import { Menu, Bell, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#1e2640] text-white sticky top-0 z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between px-6 py-3">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-medium">Largify</h1>
          
          <div className="relative ml-4">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#353C53] text-sm rounded-md pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <button className="text-gray-300 hover:text-white">
            <Bell className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 bg-[#353C53] rounded-md px-3 py-1.5">
            <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
              JD
            </div>
            <span className="text-sm font-medium">John Doe</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
        
        <h1 className="text-xl font-medium">Largify</h1>
        
        <div className="flex items-center gap-4">
          <button className="text-gray-300">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
            JD
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1e2640] px-4 py-3 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#353C53] text-sm rounded-md pl-10 pr-4 py-2 w-full focus:outline-none"
            />
          </div>
          
          <div className="flex items-center gap-2 text-sm pt-2">
            <span className="font-medium">John Doe</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      )}
    </header>
  );
}