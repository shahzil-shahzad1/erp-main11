"use client"
import { Home, Users, Box, ShoppingCart, FileText, PieChart, Settings, ChevronRight, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Dashboard");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: "Overview", icon: Home, href: "/commercial/overview" },
    { name: "Sales", icon: Users, href: "/commercial/sales" },
    { name: "Purchase", icon: Box, href: "/commercial/purchase" },
    { name: "Invoices", icon: ShoppingCart, href: "/commercial/invoices" },
  ];

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button (fixed outside sidebar) */}
      <button 
        onClick={toggleSidebar}
        className="fixed md:hidden z-40 top-4 left-4 p-2 rounded-md bg-[#1e2640] text-white"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Sidebar */}
      <aside className={`
        bg-[#1e2640] text-white h-screen fixed top-0 transition-all duration-300 z-30
        ${isMobile ? 
          (mobileOpen ? "w-64 translate-x-0" : "-translate-x-full") : 
          (collapsed ? "w-20" : "w-64")
        }
      `}>
        {/* Logo and Collapse Button */}
        <div className="flex items-center justify-between p-4 border-b border-[#353C53]">
          {(!collapsed || isMobile) && <h1 className="text-xl font-medium">Largify</h1>}
          <button 
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-[#353C53]"
          >
            <ChevronRight className={`w-5 h-5 transition-transform ${
              isMobile ? (mobileOpen ? "rotate-180" : "") : 
              (collapsed ? "rotate-180" : "")
            }`} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-2">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    activeLink === link.name ? "bg-[#353C53] text-white" : "text-gray-400 hover:bg-[#353C53] hover:text-white"
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {(!collapsed || isMobile) && <span className="text-sm whitespace-nowrap">{link.name}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Profile Section */}
        {(!collapsed || isMobile) && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#353C53]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white">
                JD
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">John Doe</p>
                <p className="text-xs text-gray-400 truncate">Admin</p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Overlay for mobile */}
      {isMobile && mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
