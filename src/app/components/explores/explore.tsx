import React from "react";
import Search from "../search";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { explores } from "./dummyExplores";

export default function explore() {
  return (
    <div className=" flex flex-col items-center w-full p-4 bg-white lg:w-1/2">
      <Search />
      <div className="w-[90%] justify-start p-4 border border-gray-300 rounded-xl">
        <h2 className="font-bold text-2xl mb-2 ml-1">Trends for you</h2>
        {explores.map((explore,index) => (
          <div key={index} className="flex flex-col p-2 border-1 border-b-gray-400 rounded-lg hover:bg-slate-100 hover:ease-in duration-100 cursor-pointer ">
            <div className="flex justify-between">
              <div>
                <h4 className="text-base text-slate-600 font-semibold">
                 {explore.trends}
                </h4>
                <p className="text-sm font-bold text-black">{explore.topic}</p>
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
  );
}
