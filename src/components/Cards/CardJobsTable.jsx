import React from "react";

export default function CardJobsTable() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 -mt-8 shadow-lg rounded-md">
        {/* Prioritize Table Title  */}
        <div className="px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-2 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-slate-800">
                Prioritize Jobs
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-[#387f6b] text-white text-xs font-semibold px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                View all
              </button>
            </div>
          </div>
        </div>
        
          {/* table  */}
          <table className="items-center w-full">
            {/* header */}
            <thead>
              <tr className="bg-[#cdddd9] text-slate-900 ">
                <th className="p-4 align-middle border border-solid border-gray-400 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Customer Name
                </th>
                <th className="p-4 align-middle border border-solid border-gray-400 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Job Id
                </th>
                <th className="p-4 align-middle border border-solid border-gray-400 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Job Type
                </th>
                <th className="p-4 align-middle border border-solid border-gray-400 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Job Title
                </th>
                <th className="p-4 align-middle border border-solid border-gray-400 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Work Location
                </th>
                <th className="p-4 align-middle border border-solid border-gray-400 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Created On
                </th>
                <th className="p-4 align-middle border border-solid border-gray-400 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Starts On
                </th>
                <th className="p-4 align-middle border border-solid border-gray-400 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Ends On
                </th>
                <th className="p-4 align-middle border border-solid border-gray-400 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Project Name
                </th>
                <th className="p-4 align-middle border border-solid border-gray-400 py-3 text-xs  whitespace-nowrap font-semibold text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Contetn */}

              <tr className="bg-white text-slate-700 " >
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left">
                  HCL Technologies
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  TDM-WIR751
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Dispatch service
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Cloud Engineer
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Austin, TX
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  17-March-2024
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  18-March-24, 09:00am
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  18-March-24, 01:00pm
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Field Techy
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Unallocated
                </td>
              </tr>

              <tr className=" bg-white text-slate-700 ">
                <td className="p-4 align-middle border border-solid border-gray-400   text-xs whitespace-nowrap text-left">
                  HCL Technologies
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  TDM-WIR751
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Dispatch service
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Cloud Engineer
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Austin, TX
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  17-March-2024
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  18-March-24, 09:00am
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  18-March-24, 01:00pm
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Field Techy
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Unallocated
                </td>
              </tr>

              <tr className="bg-white text-slate-700 ">
                <td className="p-4 align-middle border border-solid border-gray-400   text-xs whitespace-nowrap text-left">
                  HCL Technologies
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  TDM-WIR751
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Dispatch service
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Cloud Engineer
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Austin, TX
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  17-March-2024
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  18-March-24, 09:00am
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  18-March-24, 01:00pm
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Field Techy
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Unallocated
                </td>
              </tr>

              <tr className="bg-white text-slate-700 ">
                <td className="p-4 align-middle border border-solid border-gray-400   text-xs whitespace-nowrap text-left">
                  HCL Technologies
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  TDM-WIR751
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Dispatch service
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Cloud Engineer
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Austin, TX
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  17-March-2024
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  18-March-24, 09:00am
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  18-March-24, 01:00pm
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
                  Field Techy
                </td>
                <td className="p-4 align-middle border border-solid border-gray-400  text-xs whitespace-nowrap text-left ">
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
