import React from "react";

// components

import CardStats from "../Cards/CardStats";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative md:pt-24 ">
        <div className="m-2 -mt-2 ml-12 text-sm">
          <select className="w-28 h-8 p-1 border-none rounded-md text-slate-900 outline-none cursor-pointer">
            <option value="Today">Today</option>
            <option value="Yesterday">
              <b>Yesterday</b>
            </option>
          </select>
        </div>
        
        
        <div className="mt-6 md:px-10 mx-auto w-full ">
          <div>
            {/* Card stats */}
            {/* w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4 */}
            <div className="flex flex-row md:flex-row">
              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="Today Jobs"
                  value="1008"
                  statPercentColor="text-emerald-500"
                  iconName="fa-regular fa-calendar-days"
                  iconColor="bg-slate-800"
                  cardColor="bg-[#065f46]"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="Escalated Jobs"
                  value="23"
                  statPercentColor="text-red-500"
                  iconName="fa-solid fa-triangle-exclamation"
                  iconColor="bg-slate-800"
                  cardColor="bg-[#1f6f59]"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="Prioritize Jobs"
                  value="58"
                  statPercentColor="text-orange-500"
                  iconName="fa-solid fa-arrow-up-short-wide"
                  iconColor="bg-slate-800"
                  cardColor="bg-[#387f6b]"
                />
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="New Jobs"
                  value="824"
                  statPercentColor="text-orange-500"
                  iconName="fa-solid fa-bomb"
                  iconColor="bg-slate-800"
                  cardColor="bg-[#518f7e]"
                />
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="Open Jobs"
                  value="2502"
                  statPercentColor="text-orange-500"
                  iconName="fa-solid fa-door-open"
                  iconColor="bg-slate-800"
                  cardColor="bg-[#93B89D]"
                />
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="Open Tickets"
                  value="44"
                  statPercentColor="text-orange-500"
                  iconName="fa-solid fa-ticket"
                  iconColor="bg-slate-800"
                  cardColor="bg-[#B3CEAE]"
                />
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="Engineer Approval"
                  value="153"
                  statPercentColor="text-orange-500"
                  iconName="fa-solid fa-clipboard-list"
                  iconColor="bg-slate-800"
                  cardColor="bg-[#BDCAA8]"
                />
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="Payment Request"
                  value="321"
                  statPercentColor="text-orange-500"
                  iconName="fa-solid fa-cash-register"
                  iconColor="bg-slate-800"
                  cardColor="bg-[#9bbfb5]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
