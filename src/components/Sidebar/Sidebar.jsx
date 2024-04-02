/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Fieldtechy-logo-Final.svg";
import { FiLogOut } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import {
  FaUserFriends,
  FaBriefcase,
  FaBorderAll,
  FaClipboardList,
  FaWallet,
  FaSignOutAlt,
} from "react-icons/fa";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-lg bg-emerald-800 text-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white p-1   py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}

          <Link
            className="md:block text-left md:pb-2  mr-0  whitespace-nowrap text-sm   p-4 px-0"
            to="/#home"
          >
            {/* for mobile */}
            <div className="md:hidden">
              <img className="w-10" src={Logo} alt="Fieldtechy"></img>
            </div>
            <div className="hidden md:block">
              {/* Render the larger logo only on non-mobile screens */}
              <img
                className="w-20 m-auto mb-8 py-6"
                src={Logo}
                alt="Fieldtechy"
              />
            </div>
          </Link>

          {/* Collapse */}
          <div
            className={
              "bg-emerald-800 md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 whitespace-nowrap p-4 px-0"
                    to="/"
                  >
                    <div className="w-14 h-5">
                      <img src={Logo} alt="Fieldtechy" />
                    </div>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <div className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border-solid border-blueGray-500 placeholder-blueGray-300 text-black bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </div>

            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}

            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none m-4 p-1">
              <li className="items-center p-1 hover:font-semibold ">
                <Link className="flex items-center text-base py-3" to="/#hire">
                  <FaUserFriends size={19} className="mr-2 " /> I want to hire
                </Link>
              </li>

              <li className="items-center p-1 font-thin hover:font-semibold">
                <Link className="flex items-center text-base py-3" to="/#engineers">
                  <FaUser size={16} className="mr-2" />
                  Engineers
                </Link>
              </li>

              <li className="items-center p-1 font-thin hover:font-semibold">
                <Link className="flex items-center text-base py-3" to="/#jobs">
                  <FaBriefcase size={16} className="mr-2" />
                  Job
                </Link>
              </li>

              <li className="items-center p-1 font-thin hover:font-semibold">
                <Link className="flex items-center text-base py-3" to="/#projects">
                  <FaBorderAll size={16} className="mr-2" /> Projects
                </Link>
              </li>

              <li className="items-center p-1 font-thin hover:font-semibold">
                <Link className="flex items-center text-base py-3" to="/#report">
                  <FaClipboardList size={16} className="mr-2" /> Report
                </Link>
              </li>

              <li className="items-center p-1 font-thin hover:font-semibold">
                <Link className="flex items-center text-base py-3" to="/#funds">
                  <FaWallet size={16} className="mr-2" /> Funds
                </Link>
              </li>
            </ul>

            {/* Divider */}
            {/* <hr className=" md:min-w-full text-white" /> */}
            {/* Heading */}

            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-1">
              <li className="items-center p-6">
                <Link className="flex font-thin hover:font-semibold " to="/#signout">
                  <FiLogOut size={20} className="mr-2 mt-1" />
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
