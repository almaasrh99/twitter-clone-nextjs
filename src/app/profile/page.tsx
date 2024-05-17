import React from "react";
import Sidebar from "../components/sidebar";

export default function page() {
  return (
    <div className="w-full flex md:flex-row bg-gray-100 overflow-y">
      {/* Sidebar */}

      <Sidebar activeLink="Profile" />

      <div className="ml-[17rem] w-full flex-col bg-white border-x border-gray-200 items-center justify-center">
        <div className="block mx-auto">
          <h1 className="text-3xl text-slate-900 text-center">
            
            Ini adalah halaman Profile
          </h1>
        </div>
      </div>
    </div>
  );
}
