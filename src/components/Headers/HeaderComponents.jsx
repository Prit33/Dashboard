import React from "react";

// components

import CardStats from "../Cards/CardStats";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative  md:pt-32 pt-12">
        <div className="m-2 -mt-8 ml-12">
          <select className="w-28 h-10 p-1 border-none rounded-md text-slate-900 outline-none cursor-pointer">
            <option value="Today">Today</option>
            <option value="Yesterday">
              <b>Yesterday</b>
            </option>
          </select>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            {/* w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4 */}
            <div className="flex flex-row md:flex-row ">
              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="Today Jobs"
                  value="1008"
                  statPercentColor="text-emerald-500"
                  iconName="fa-regular fa-calendar-days"
                  iconColor="bg-slate-800"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="Escalated Jobs"
                  value="23"
                  statPercentColor="text-red-500"
                  iconName="fa-solid fa-triangle-exclamation"
                  iconColor="bg-slate-800"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="Prioritize Jobs"
                  value="58"
                  statPercentColor="text-orange-500"
                  iconName="fa-solid fa-arrow-up-short-wide"
                  iconColor="bg-slate-800"
                />
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="New Jobs"
                  value="824"
                  statPercentColor="text-orange-500"
                  iconName="fa-solid fa-bomb"
                  iconColor="bg-slate-800"
                />
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="Open Jobs"
                  value="2502"
                  statPercentColor="text-orange-500"
                  iconName="fa-solid fa-door-open"
                  iconColor="bg-slate-800"
                />
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="Open Tickets"
                  value="44"
                  statPercentColor="text-orange-500"
                  iconName="fa-solid fa-ticket"
                  iconColor="bg-slate-800"
                />
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="Engineer Approval"
                  value="153"
                  statPercentColor="text-orange-500"
                  iconName="fa-solid fa-clipboard-list"
                  iconColor="bg-slate-800"
                />
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/8 px-4">
                <CardStats
                  title="Payment Request"
                  value="321"
                  statPercentColor="text-orange-500"
                  iconName="fa-solid fa-cash-register"
                  iconColor="bg-slate-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
