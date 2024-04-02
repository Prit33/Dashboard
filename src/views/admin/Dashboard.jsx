import React from "react";
import CardLineChart from "../../components/Cards/CardLineChart";
import CardBarChart from "../../components/Cards/CardBarChart";
import CardPageTable from "../../components/Cards/CardPageTable";
import CardPendingTasks from "../../components/Cards/CardPendingTasks";
export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 justify-center items-baseline overflow-hidden mt-4">
        {/* Left side */}
        <div className="col-span-2 lg:col-span-1 ">
          <div className="m-6 ml-24 w-full">
          <CardPendingTasks />
          </div>
        </div>
        <div className="w-10/12">
          <CardBarChart />
          <CardLineChart />
        </div>
      </div>
        {/* Right side */}
        <div>
        <div className="m-4 mb-4 xl:mb-0 px-4 rounded-lg">
          <CardPageTable />
        </div>

        
        </div>
    </>
  );
}
