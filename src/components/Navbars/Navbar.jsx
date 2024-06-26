import { useState } from "react";
import { InlineIcon } from "@iconify/react";
import NotificationPanel from "./NotificationPanel";

export default function Navbar() {
  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 bg-gray-800 shadow-lg">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <div className="hidden lg:inline-block text-white text-lg">Home</div>
          <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch font-primaryRegular">
              <select className="w-48 h-10 p-1 bg-gray-300 border-none cursor-pointer rounded-md text-sm text-slate-700 outline-none ">
                <option
                  value="Select Customer"
                  selected
                  disabled
                  style={{ color: "black" }}
                >
                  Select Customer
                </option>
                <option value="Customer1">Customer 1</option>
                <option value="Customer2">Customer 2</option>
                <option value="Customer3">Customer 3</option>
              </select>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center m-2 ">
            <div>
              <InlineIcon
                icon="mynaui:message-dots"
                style={{ color: "#059669", fontSize: "26px" }}
                className="mr-4 ml-4 cursor-pointer"
              />
            </div>

            <div onClick={toggleNotification}>
              <InlineIcon
                icon="clarity:notification-outline-badged"
                style={{ color: "#059669", fontSize: "24px" }}
                className="mr-4 ml-4 cursor-pointer "
              />
              {/*  Notification Panel */}
              {showNotification && <NotificationPanel showNotification={showNotification}/>}
            </div>
            <div>
              <div className="relative mr-4 ml-4">
                <InlineIcon
                  icon="clarity:wallet-line"
                  style={{ color: "#059669", fontSize: "24px" }}
                  className=" absolute cursor-pointer"
                />
                {/* wallet amount */}
                <span
                  className="opacity-0 hover:opacity-100 hover:translate-y-5 py-1
              inset-0 z-10 flex justify-center items-center text-xs text-slate-100 font-semibold cursor-pointer ase-in duration-300"
                >
                  $1000
                </span>
              </div>
            </div>
          </div>

          {/* User */}
          <div>
            <img
              className="w-10 rounded-full align-middle border-none shadow-lg ml-2 cursor-pointer "
              src="https://edug.in/panel/head_admin/School/school_head/first_photo/DEMO59167.jpg"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
