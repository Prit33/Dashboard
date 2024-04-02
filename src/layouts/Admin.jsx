import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderComponents from "../components/Headers/HeaderComponents";
import FooterAdmin from "../components/Footers/FooterAdmin";
// views
import Dashboard from "../views/admin/Dashboard";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />

        <HeaderComponents />
        <Dashboard />
        {/* Header */}
        
      </div>
    </>
  );
}
