import React from "react";
import Explore from "../components/explores/explore";
import Sidebar from "../components/sidebar";
import { explores } from "../components/explores/dummyExplores";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Search from "../components/search";

export default function page() {
  return (
    <div className="w-full flex md:flex-row bg-gray-100 overflow-y">
      {/* Sidebar */}

      <Sidebar activeLink="Explore" />
      <div className="ml-[17rem] w-1/2 flex-col bg-white border-x border-gray-200 items-center justify-center">
        <Search />
        <div className="block mx-auto">
          <h2 className="flex p-4 font-bold text-xl mb-4 border-b border-gray-200">
            Trends for you
          </h2>
        </div>

        {/* Notifications */}
        <div className="w-full p-2">
          {explores.map((explore, index) => (
            <div
              key={index}
              className="flex flex-col p-2 border-b rounded-lg hover:bg-slate-100 hover:ease-in duration-100 cursor-pointer "
            >
              <div className="flex justify-between">
                <div>
                  <h4 className="text-base text-slate-600 font-semibold">
                    {explore.trends}
                  </h4>
                  <p className="text-sm font-bold text-black">
                    {explore.topic}
                  </p>
                </div>
                <div>
                  <HiOutlineDotsHorizontal />
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400">{explore.posts}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
