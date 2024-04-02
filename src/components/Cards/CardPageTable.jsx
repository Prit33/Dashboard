import React from "react";

// components

export default function CardPageVisits() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-slate-800 w-full mb-6 mt-4 shadow-lg rounded-md">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-white">
                Prioritize Jobs
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                View all
              </button>
            </div>
          </div>
        </div>
        
          {/* Projects table */}
          <table className="items-center w-full">
            <thead>
              <tr className="bg-slate-700 text-white ">
                <th className="p-4 align-middle border border-solid border-gray-500 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Customer Name
                </th>
                <th className="p-4 align-middle border border-solid border-gray-500 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Job Id
                </th>
                <th className="p-4 align-middle border border-solid border-gray-500 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Job Type
                </th>
                <th className="p-4 align-middle border border-solid border-gray-500 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Job Title
                </th>
                <th className="p-4 align-middle border border-solid border-gray-500 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Work Location
                </th>
                <th className="p-4 align-middle border border-solid border-gray-500 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Created On
                </th>
                <th className="p-4 align-middle border border-solid border-gray-500 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Starts On
                </th>
                <th className="p-4 align-middle border border-solid border-gray-500 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Ends On
                </th>
                <th className="p-4 align-middle border border-solid border-gray-500 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Project Name
                </th>
                <th className="p-4 align-middle border border-solid border-gray-500 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Status
                </th>
              </tr>
            </thead>
{/*  */}
            <tbody>
              <tr className="bg-slate-700 text-slate-200" >
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left">
                  HCL Technologies
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  TDM-WIR751
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Dispatch service
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Cloud Engineer
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Austin, TX
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  17-March-2024
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  18-March-24, 09:00am
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  18-March-24, 01:00pm
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Field Techy
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Unallocated
                </td>
              </tr>

              <tr className=" bg-slate-700 text-slate-200">
                <td className="p-4 align-middle border border-solid border-gray-500   text-xs whitespace-nowrap text-left">
                  HCL Technologies
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  TDM-WIR751
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Dispatch service
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Cloud Engineer
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Austin, TX
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  17-March-2024
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  18-March-24, 09:00am
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  18-March-24, 01:00pm
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Field Techy
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Unallocated
                </td>
              </tr>

              <tr className="bg-slate-700 text-slate-200">
                <td className="p-4 align-middle border border-solid border-gray-500   text-xs whitespace-nowrap text-left">
                  HCL Technologies
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  TDM-WIR751
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Dispatch service
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Cloud Engineer
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Austin, TX
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  17-March-2024
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  18-March-24, 09:00am
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  18-March-24, 01:00pm
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Field Techy
                </td>
                <td className="p-4 align-middle border border-solid border-gray-500  text-xs whitespace-nowrap text-left ">
                  Unallocated
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      {/* </div> */}
    </>
  );
}
