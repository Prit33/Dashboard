import React from "react";
import AdminNavbar from "../components/Navbars/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderComponents from "../components/Headers/HeaderComponents";
import Footer from "../components/Footers/Footer";
// views
import Dashboard from "../views/admin/Dashboard";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-[#EEEEEE]">
        <AdminNavbar />
        <HeaderComponents />
        <hr className="border-t-1 border-slate-300 my-6 -mb-4" />
        <Dashboard />
        {/* Header */}
        <Footer/>
        
      </div>
    </>
  );
}
