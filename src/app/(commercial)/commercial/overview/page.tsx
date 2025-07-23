import React from 'react';
// Importing Lucide React icons
import { SearchCheck, DollarSign, Blocks, ShoppingCart, Package, LineChart, Zap } from 'lucide-react';

// Main App component
export default function App() {

  const commercialOverviewCards = [
    {
      title: "Total Sales ",
      amount: "$328K. This month",
      lmprofit: "+22.3%",
      icon: DollarSign,
      items: ["from last month"],
      // Default (Light Mode) styles for the card, overridden by dark: classes
      bg: "bg-gradient-to-b from-zinc-100 to-white", // From image analysis
      imageBg: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50", // From image analysis
      iconColor: "text-yellow-600 dark:text-orange-500", // From image analysis
      textColor: "text-zinc-600 dark:text-zinc-200", // From image analysis
      subTextColor: "text-zinc-900 dark:text-white", // From image analysis
      borderColor: "border-gray-200" // From image analysis
    },
    {
      title: "Total Purchases ",
      amount: "$231K. This month",
      lmprofit: "+22.3%",
      icon: ShoppingCart,
      items: ["from last month"],
      // Default (Light Mode) styles for the card, overridden by dark: classes
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
      iconColor: "text-yellow-600 dark:text-orange-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-gray-200"
    },
    {
      title: "Gross Profit",
      amount: " $97K. This month",
      lmprofit: "+22.3%",
      icon: LineChart,
      items: ["from last month"],
      // Default (Light Mode) styles for the card, overridden by dark: classes
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
      iconColor: "text-yellow-600 dark:text-orange-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-gray-200"
    },
    {
      title: "Active Orders ",
      amount: "$156K. This month",
      lmprofit: "-22.3%",
      icon: Package,
      items: ["from last month"],
      // Default (Light Mode) styles for the card, overridden by dark: classes
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
      iconColor: "text-yellow-600 dark:text-orange-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-gray-200"
    }
  ];

  return (
    <>
      {/* The 'dark' class is expected to be managed by an external toggle (e.g., your navbar) on an ancestor element. */}
      {/* Styling now directly uses light-mode-class dark:dark-mode-class */}
      <div className="bg-gradient-to-br from-orange-500/[0.02] via-transparent to-blue-500/[0.02] dark:bg-[#121111] min-h-screen p-6 md:p-10 font-sans relative inset-0">

        {/* Header Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex gap-3 items-center">
              <div className="bg-gray-200 dark:bg-[#1a1a1a] p-2.5 rounded-xl"> {/* Uses bg-gray-200 for light, bg-card for dark */}
                <SearchCheck className="w-6 h-6 text-yellow-600 dark:text-orange-500" /> {/* Uses yellow for light, orange for dark */}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Commercial Overview</h1> {/* Uses gray-900 for light, foreground for dark */}
                <p className="text-zinc-800 dark:text-zinc-200">Monitor sales, purchases, and commercial operations</p> {/* Uses gray-600 for light, muted-foreground for dark */}
              </div>
            </div>

            <button className="bg-[#b16a04] text-white flex gap-2 py-2 px-4 cursor-pointer rounded-lg shadow-md transition-all duration-200 hover:scale-[1.03] items-center whitespace-nowrap">
              <Blocks className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm md:text-base">Generate Report</span>
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {commercialOverviewCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                className={`relative border ${card.borderColor} dark:border-zinc-900 rounded-lg p-5 flex flex-col sm:flex-row justify-between items-start ${card.bg} dark:bg-[#1a1a1a] hover:shadow-sm transition-all duration-200 cursor-pointer overflow-hidden group hover:scale-[1.03]`}
                key={card.title}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <h2 className={`text-lg font-semibold mb-2 ${card.subTextColor}`}>{card.title}</h2>
                  <div className={`text-xl font-bold mb-3 ${card.textColor}`}>{card.amount}</div>
                  <ul className={`text-sm text-gray-500 dark:text-[#8a8a8a] space-y-1`}>
                    {card.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={`flex`}
                      >
                          <div>
                            {card.lmprofit.startsWith("+") ? (
                              <span className="bg-green-700 text-green-300 rounded-3xl py-0.5 px-1 w-fit mr-2">
                                {card.lmprofit}
                              </span>
                            ) : (
                              <span className="bg-red-700 text-red-300 rounded-3xl py-0.5 px-1 w-fit mr-2">
                                {card.lmprofit}
                              </span>
                            )}
                          </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`p-3 rounded-2xl ${card.imageBg} mt-3 sm:mt-0 self-end sm:self-auto`}>
                  <IconComponent className={`w-5 h-5 ${card.iconColor} dark:text-orange-500`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className={`border-t border-gray-200 dark:border-zinc-900 my-6`}></div>

        <div className={`flex flex-col gap-4 bg-white dark:bg-card px-10 py-4 rounded-lg border border-gray-200 dark:border-border`}>
          {/* Header Section */}
          <div className="flex items-center gap-3">
            <div className="bg-gray-200 dark:bg-[#1a1a1a] p-2 rounded-lg">
              <Zap className={`w-5 h-5 text-yellow-600 dark:text-orange-500`} />
            </div>
            <div>
              <h3 className={`text-2xl font-bold  text-zinc-900 dark:text-zinc-100`}>Quick Actions</h3>
              <p className={`text-sm text-zinc-800 dark:text-zinc-200`}>Common commercial operations</p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap gap-4">
            {commercialOverviewCards.map((card, index) => { 
              const IconComponent = card.icon;
              return (
                <div
                  key={card.title} // Using card.title as key for consistency and uniqueness
                  className={`flex flex-col items-center gap-3 p-6 rounded-lg border-[1px] ${card.borderColor} dark:border-zinc-900 transition-all hover:shadow-md ${card.bg} dark:bg-card w-full sm:w-[calc(40%-0.5rem)] md:w-[calc(22.33%-0.66rem)]  hover:scale-[1.05] duration-200 cursor-pointer`}
                >
                  <div className={`p-3 rounded-2xl ${card.imageBg} dark:bg-accent`}>
                    <IconComponent className={`w-7 h-7 ${card.iconColor}`} />
                  </div>
                  <div className={`font-medium text-center ${card.subTextColor}`}>{card.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
