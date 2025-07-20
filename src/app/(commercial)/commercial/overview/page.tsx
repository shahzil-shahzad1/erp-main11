import React from 'react';
// Importing Lucide React icons
import { Building, DollarSign, Blocks, ShoppingCart, Package, LineChart } from 'lucide-react'; // Removed 'Wallet' as it was unused

// Main App component
export default function App() {
  const commercialOverviewCards = [
    {
      title: "Total Sales ",
      amount: "$328K",
      // Placeholder image URL for sales
      image: "https://placehold.co/20x20/e5a004/121111?text=S",
      lmprofit: "+22.3%",
      bg: "bg-[#1a1a1a]", // Very dark gray for primary cards
      imagebg: "bg-[#e5a004]", // Orange/Gold
      icon: DollarSign, // Using DollarSign icon for Sales
      items: [
        "• This month",
        "from last month"
      ]
    },
    {
      title: "Total Purchases ",
      amount: "$231K",
      // Placeholder image URL for purchase
      image: "https://placehold.co/20x20/b16a04/121111?text=P",
      lmprofit: "+22.3%",
      bg: "bg-[#1a1a1a]", // Very dark gray for primary cards
      imagebg: "bg-[#b16a04]", // Darker orange/gold
      icon: ShoppingCart, // Using ShoppingCart icon for Purchases
      items: [
        "• This month",
        "from last month"
      ]
    },
    {
      title: "Gross Profit",
      amount: " $97K",
      // Placeholder image URL for profit
      image: "https://placehold.co/20x20/e5a004/121111?text=G",
      lmprofit: "+22.3%",
      bg: "bg-[#1a1a1a]", // Very dark gray for primary cards
      imagebg: "bg-[#e5a004]", // Orange/Gold
      icon: LineChart, // Using LineChart icon for Gross Profit
      items: [
        "• This month",
        "from last month"
      ]
    },
    {
      title: "Active Orders ",
      amount: "$156K",
      // Placeholder image URL for orders
      image: "https://placehold.co/20x20/e5a004/121111?text=O",
      lmprofit: "-22.3%",
      bg: "bg-[#1a1a1a]", // Very dark gray for primary cards
      imagebg: "bg-[#e5a004]", // Orange/Gold
      icon: Package, // Using Package icon for Active Orders
      items: [
        "• In progress",
        "from last month"
      ]
    }
  ];

  return (
    // Tailwind CSS script for CDN - Note: In a Next.js project, Tailwind should be configured via build tools.
    // This CDN script is used here for simplicity in the Canvas environment.
    <>
      <div className="bg-[#121111] min-h-screen p-6 md:p-10 text-white font-sans">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex gap-3 items-center">
              <div className="bg-[#e5a004] p-2.5 rounded-xl">
                <Building className="w-6 h-6 text-[#121111]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Commercial Overview</h1>
                <p className="text-[#a0a0a0]">Monitor sales, purchases, and commercial operations</p>
              </div>
            </div>

            <button className="bg-[#b16a04] flex gap-2 py-2 px-4 cursor-pointer rounded-lg transition-all duration-200 hover:scale-[1.03] items-center whitespace-nowrap">
              <Blocks className="w-4 h-4 text-white" />
              <span className="text-white text-sm md:text-base">Generate Report</span>
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {commercialOverviewCards.map((card) => {
            const IconComponent = card.icon; // Get the icon component from card data
            return (
              <div
                className={`relative border border-gray-800 rounded-lg p-5 flex flex-col sm:flex-row justify-between items-start ${card.bg} hover:shadow-sm transition-all duration-200 cursor-pointer overflow-hidden group hover:scale-[1.03]`}
                key={card.title}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <h2 className="text-lg font-semibold mb-2 text-[#a0a0a0]">{card.title}</h2>
                  <div className="text-xl font-bold mb-3 text-white">{card.amount}</div>
                  <ul className="text-sm text-[#8a8a8a] space-y-1">
                    {card.items.map((item, index) => (
                      <li
                        key={index}
                        className={`flex gap-1 ${index === 0 ? 'font-medium' : ''}`}
                      >
                        {index === 1 && (
                          <div>
                            {card.lmprofit.startsWith("+") ? (
                              <span className="bg-green-700 text-green-300 rounded-3xl py-0.5 px-1 w-fit">
                                {card.lmprofit}
                              </span>
                            ) : (
                              <span className="bg-red-700 text-red-300 rounded-3xl py-0.5 px-1 w-fit mr-2">
                                {card.lmprofit}
                              </span>
                            )}
                          </div>
                        )}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`p-3 rounded-2xl ${card.imagebg} mt-3 sm:mt-0 self-end sm:self-auto`}>
                  {/* Render the Lucide React icon component */}
                  <IconComponent className="w-5 h-5 text-[#121111]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        <div className="flex flex-col gap-4 bg-[#212121] px-10 py-4 rounded-lg">
          {/* Header Section */}
          <div className="flex items-center gap-3">
            <div className="bg-[#b16a04] p-2 rounded-lg">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Quick Actions</h3>
              <p className="text-sm text-[#a0a0a0]">Common commercial operations</p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap gap-4">
            {commercialOverviewCards.map((card, index) => {
              const IconComponent = card.icon; // Get the icon component for Quick Actions
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-3 p-6 rounded-lg border-[1px] border-gray-800 transition-all hover:shadow-md bg-[#1a1a1a] w-full sm:w-[calc(40%-0.5rem)] md:w-[calc(22.33%-0.66rem)]  hover:scale-[1.05] duration-200 cursor-pointer`}
                >
                  <div className={`p-3 rounded-2xl ${card.imagebg}`}>
                    {/* Render the Lucide React icon component for Quick Actions */}
                    <IconComponent className="w-7 h-7 text-[#121111]" />
                  </div>
                  <div className="font-medium text-center text-[#a0a0a0]">{card.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
