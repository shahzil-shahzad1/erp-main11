// app/commercial-overview/page.tsx
import Image from "next/image"
import { Building } from "lucide-react";
import { DollarSignIcon } from "lucide-react";
import { BlocksIcon } from "lucide-react";
import AnimatedBorder from "@/components/commercial/AnimatedBorder";
export default function CommercialOverview() {

  const commercialOverviewCards = [
    {
      title: "Total Sales ",
      amount: "$328K",
      image: "/sales.png",
      lmprofit: "+22.3%",
      bg: "bg-gradient-to-r from-blue-300 to-blue-200",
      imagebg: "bg-blue-600",
      items: [
        "• This month",
        "from last month"
      ]
    },
    {
      title: "Total Purchases ",
      amount: "$231K",
      image: "/purchase.png",
      lmprofit: "+22.3%",
      bg: "bg-gradient-to-r from-purple-300 to-gray-200",
      imagebg: "bg-purple-600",
      items: [
        "• This month",
        "from last month"
      ]
    },
    {
      title: "Gross Profit",
      amount: " $97K",
      image: "/profit.png",
      lmprofit: "+22.3%",
      bg: "bg-gradient-to-r from-green-300 to-gray-200",
      imagebg: "bg-green-600",
      items: [
        "• This month",
        "from last month"
      ]
    },
    {
      title: "Active Orders ",
      amount: "$156K",
      image: "/orders.png",
      lmprofit: "-22.3%",
      bg: "bg-gradient-to-r from-orange-300 to-gray-200",
      imagebg: "bg-orange-600",
      items: [
        "• In progress",
        "from last month"
      ]
    }
  ]

  return (
    <div className="bg-gray-300 rounded-tl-lg shadow-sm py-6 px-10 w-[80vw] absolute right-0">
      {/* Header Section */}
<div className="mb-6 text-black">
  <div className="flex justify-between items-center flex-wrap gap-4">
    <div className="flex gap-3 items-center">
      <div className="bg-[#386fff] p-2.5 rounded-xl">
        <Building className="w-6 h-6 text-white" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">Commercial Overview</h1>
        <p className="text-gray-600">Monitor sales, purchases, and commercial operations</p>
      </div>
    </div>

    <button className="bg-[#6c31f7] flex gap-2 py-2 px-4 cursor-pointer rounded-lg transition-all duration-200 hover:scale-[1.03] items-center whitespace-nowrap">
      <BlocksIcon className="w-4 h-4 text-white" />
      <span className="text-white text-sm md:text-base">Generate Report</span>
    </button>
  </div>
</div>

{/* Metrics Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
{commercialOverviewCards.map((card) => (
  <div
    className={`relative border border-gray-200 rounded-lg p-5 flex sm:flex-row justify-between items-start text-black ${card.bg} hover:shadow-sm transition-all duration-200 cursor-pointer overflow-hidden group hover:scale-[1.03]`}
    key={card.title}
  >
    {/* Content (unchanged layout) */}
    <div className="flex-1 w-full">
      <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
      <div className="text-xl font-bold mb-3">{card.amount}</div>
      <ul className="text-sm text-gray-600 space-y-1">
        {card.items.map((item, index) => (
          <li
            key={index}
            className={`${!item.startsWith('•') ? '' : ''} flex gap-1 ${index === 0 ? 'font-medium' : ''}`}
          >
            {index == 1 && <div> {card.lmprofit.startsWith("+") ?  <span className="bg-green-200 text-green-600 rounded-3xl py-0.5 px-1 w-fit">
              {card.lmprofit}</span> : 
              <span className="bg-red-200 text-red-600 rounded-3xl py-0.5 px-1 w-fit mr-2">
              {card.lmprofit}</span>}
              </div>
              }
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className={`p-3 rounded-2xl ${card.imagebg} mt-3 sm:mt-0 self-end sm:self-auto`}>
      <Image
        src={card.image}
        height={20}
        width={20}
        className="object-contain invert"
        alt={card.title}
      />
    </div>

    <AnimatedBorder color={card.imagebg}/>
  </div>
))}
</div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6"></div>

      <div className="flex flex-col text-black gap-4 bg-white px-10 py-4 rounded-lg">
        {/* Header Section */}
        <div className="flex items-center gap-3">
          <div className="bg-[#4b45f8] p-2 rounded-lg">
            <DollarSignIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Quick Actions</h3>
            <p className="text-sm text-gray-600">Common commercial operations</p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap gap-4">
          {commercialOverviewCards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-3 p-6 rounded-lg border-[1px] border-gray-200 transition-all hover:shadow-md bg-gray-200 w-full sm:w-[calc(40%-0.5rem)] md:w-[calc(22.33%-0.66rem)]  hover:scale-[1.05] duration-200 cursor-pointer`}
            >
              <div className={`p-3 rounded-2xl ${card.imagebg}`}>
                <Image
                  src={card.image}
                  height={30}
                  width={30}
                  className="object-contain invert"
                  alt={card.title}
                />
              </div>
              <div className="font-medium text-center">{card.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}