import AnimatedBorder from "@/components/commercial/AnimatedBorder";
import { ShoppingCart, Users, DollarSign } from "lucide-react";
import { BlocksIcon } from "lucide-react";
import { SalesDepartment } from "@/components/commercial/Searchbar";

export default function CommercialSalesPage() {
  // Sample data - replace with your API call;

  const summaryCards = [
    {
      title: "Total Sales", value: "4", icon: DollarSign,
      bg: "bg-gradient-to-r from-blue-300 to-blue-200",
      imagebg: "bg-blue-600",
    },
    {
      title: "Active Reps", value: "3", icon: ShoppingCart,
      bg: "bg-gradient-to-r from-purple-300 to-gray-200",
      imagebg: "bg-purple-600",
    },
    {
      title: "Total Deals", value: "78", icon: Users,
      bg: "bg-gradient-to-r from-green-300 to-gray-200",
      imagebg: "bg-green-600",
    },
    {
      title: "Total Revenue", value: "$1.6M", icon: DollarSign,
      bg: "bg-gradient-to-r from-orange-300 to-gray-200",
      imagebg: "bg-orange-600",
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen w-[80vw] absolute top-[65px] right-0 text-black">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex gap-2">
          <div className="bg-[#386fff] p-3.5 rounded-xl">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Sales Dashboard</h1>
            <p className="text-gray-600">Monitor and analyze your sales performance</p>
          </div>
        </div>
        <button className="bg-[#6c31f7] flex gap-2 py-2 px-4 cursor-pointer rounded-lg transition-all duration-200 hover:scale-[1.03] items-center whitespace-nowrap">
          <BlocksIcon className="w-4 h-4 text-white" />
          <span className="text-white text-sm md:text-base">Generate Report</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {summaryCards.map((card, index) => (
          <div key={index} className={`bg-white p-4 rounded-xl shadow-sm border relative border-gray-200 ${card.bg} hover:shadow-sm transition-all duration-200 cursor-pointer group hover:scale-[1.03] text-black`}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">{card.title}</p>
                <h3 className="text-2xl font-bold mt-1 text-gray-600">{card.value}</h3>
              </div>
              <div className={`p-2 rounded-lg ${card.imagebg}`}>
                <card.icon className="w-5 h-5 text-black" />
              </div>
            </div>
            <AnimatedBorder color={card.imagebg}/>
          </div>
        ))}
      </div>

      <SalesDepartment />
    </div>
  );
}
