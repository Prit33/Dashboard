import React from "react";

// components

export default function CardSocialTraffic() {
  return (
    <>
      <div className="relative flex flex-col w-10/12 min-w-0 break-words bg-slate-800 shadow-lg rounded-lg">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold  text-white">Tasks Pending</h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-emerald-600 text-white text-xs font-semibold  mt-3 px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                View all
              </button>
            </div>
          </div>
        </div>

        {/* Companies */}
        <div className="flex flex-col bg-slate-700 ml-4 mr-4 rounded-md h-full">
          <div className="flex p-4 m-2 -mt-2">
            <div className="flex-shrink-0 mr-4">
              <img
                className="w-8 rounded-full align-middle border-none shadow-lg ml-2 cursor-pointer "
                src="https://edug.in/panel/head_admin/School/school_head/first_photo/DEMO59167.jpg"
              />
            </div>

            {/* Company name */}
            <div className="flex-1 ">
              <h5 className="text-xs font-bold text-gray-200">Infosys</h5>
              {/* Task details */}
              <div className="text-xs text-gray-200 flex flex-row">
                <div className="mr-4">
                  <i class="fa-regular fa-clock"></i> 1 day
                </div>
                <div className="mr-6">
                  <i class="fa-solid fa-location-dot"></i> New York, USA
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <span className=" bg-red-500 text-white rounded-md p-1">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Add more pending tasks in a similar structure */}
          <hr className="border-t border-gray-600 py-1" />

          <div className="flex items-center border-gray-200 bg-gray-00 p-4 m-2 -mt-2">
            <div className="flex-shrink-0 mr-4">
              <img
                className="w-8 rounded-full align-middle border-none shadow-lg ml-2 cursor-pointer "
                src="https://edug.in/panel/head_admin/School/school_head/first_photo/DEMO59167.jpg"
              />
            </div>
            {/* Company name */}
            <div className="flex-1 ">
              <h5 className="text-xs font-bold text-gray-200">Wipro</h5>
              {/* Task details */}
              <div className="text-xs text-gray-200 flex flex-row">
                <div className="mr-6 ">
                  <i class="fa-regular fa-clock"></i> 2 days
                </div>
                <div className="mr-6">
                  <i class="fa-solid fa-location-dot"></i> Lisbon, Portugal
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <span className=" bg-red-500 text-white rounded-md p-1">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-600 py-1" />

          <div className="flex items-center border-gray-200 bg-gray-00 p-4 m-2 -mt-2">
            <div className="flex-shrink-0 mr-4">
              <img
                className="w-8 rounded-full align-middle border-none shadow-lg ml-2 cursor-pointer "
                src="https://edug.in/panel/head_admin/School/school_head/first_photo/DEMO59167.jpg"
              />
            </div>
            {/* Company name */}
            <div className="flex-1 ">
              <h5 className="text-xs font-bold text-gray-200">Wipro</h5>
              {/* Task details */}
              <div className="text-xs text-gray-200 flex flex-row">
                <div className="mr-6 ">
                  <i class="fa-regular fa-clock"></i> 2 days
                </div>
                <div className="mr-6">
                  <i class="fa-solid fa-location-dot"></i> Lisbon, Portugal
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <span className=" bg-red-500 text-white rounded-md p-1">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-600 py-1" />

          <div className="flex items-center border-gray-200 bg-gray-00 p-4 m-2 -mt-2">
            <div className="flex-shrink-0 mr-4">
              <img
                className="w-8 rounded-full align-middle border-none shadow-lg ml-2 cursor-pointer "
                src="https://edug.in/panel/head_admin/School/school_head/first_photo/DEMO59167.jpg"
              />
            </div>
            {/* Company name */}
            <div className="flex-1 ">
              <h5 className="text-xs font-bold text-gray-200">Wipro</h5>
              {/* Task details */}
              <div className="text-xs text-gray-200 flex flex-row">
                <div className="mr-6 ">
                  <i class="fa-regular fa-clock"></i> 2 days
                </div>
                <div className="mr-6">
                  <i class="fa-solid fa-location-dot"></i> Lisbon, Portugal
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <span className=" bg-red-500 text-white rounded-md p-1">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-600 py-1" />

          <div className="flex items-center border-gray-200 bg-gray-00 p-4 m-2 -mt-2">
            <div className="flex-shrink-0 mr-4">
              <img
                className="w-8 rounded-full align-middle border-none shadow-lg ml-2 cursor-pointer "
                src="https://edug.in/panel/head_admin/School/school_head/first_photo/DEMO59167.jpg"
              />
            </div>
            {/* Company name */}
            <div className="flex-1 ">
              <h5 className="text-xs font-bold text-gray-200">Wipro</h5>
              {/* Task details */}
              <div className="text-xs text-gray-200 flex flex-row">
                <div className="mr-6 ">
                  <i class="fa-regular fa-clock"></i> 2 days
                </div>
                <div className="mr-6">
                  <i class="fa-solid fa-location-dot"></i> Lisbon, Portugal
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <span className=" bg-red-500 text-white rounded-md p-1">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-600 py-1" />

          <div className="flex items-center border-gray-200 bg-gray-00 p-4 m-2 -mt-2">
            <div className="flex-shrink-0 mr-4">
              <img
                className="w-8 rounded-full align-middle border-none shadow-lg ml-2 cursor-pointer "
                src="https://edug.in/panel/head_admin/School/school_head/first_photo/DEMO59167.jpg"
              />
            </div>
            {/* Company name */}
            <div className="flex-1 ">
              <h5 className="text-xs font-bold text-gray-200">Wipro</h5>
              {/* Task details */}
              <div className="text-xs text-gray-200 flex flex-row">
                <div className="mr-6 ">
                  <i class="fa-regular fa-clock"></i> 2 days
                </div>
                <div className="mr-6">
                  <i class="fa-solid fa-location-dot"></i> Lisbon, Portugal
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <span className=" bg-red-500 text-white rounded-md p-1">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
