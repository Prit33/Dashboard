import React from "react";
import CardLineChart from "../../components/Cards/CardLineChart";
import CardBarChart from "../../components/Cards/CardBarChart";
import CardPageTable from "../../components/Cards/CardJobsTable";
import CardPendingTasks from "../../components/Cards/CardPendingTasks";
export default function Dashboard() {
  return (
    <>
      
      <div className="grid grid-cols-2 justify-center items-baseline overflow-hidden mt-6 ">
        {/* Left side */}
        <div className="col-span-2 lg:col-span-1 ">
          <div className="m-4 ml-12 w-10/12">
            <CardPendingTasks />
          </div>
        </div>
        <div className="w-full p-4 -mx-10">
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
