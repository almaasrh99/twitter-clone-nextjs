"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Explore from "../components/explores/explore";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { PiBalloon } from "react-icons/pi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { user } from "../../../public/dummyUsers";
import { AiOutlineRetweet } from "react-icons/ai";
import { LuDot } from "react-icons/lu";
import { BiMessageRounded } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { IoIosStats } from "react-icons/io";

export default function page() {
  const [imageUrl, setImageUrl] = useState(false);
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Melakukan pengecekan apakah user sudah login atau belum
    const loggedIn =
      typeof window !== "undefined" && localStorage.getItem("loggedIn");
    const imageUrl =
      typeof window !== "undefined" && localStorage.getItem("imageUrl");
    const storedName =
      typeof window !== "undefined" && localStorage.getItem("name");

    if (!loggedIn) {
      // Jika user tidak melakukan login dialihkan ke halaman login
      alert("Anda belum login");
      router.push("/");
    } else {
      setIsLoggedIn(true);
      setName(storedName || "");
      // setEmail(storedToken || "");
      setImageUrl(imageUrl);
    }
  }, []);

  if (!isLoggedIn) {
    return null;
  }
  return (
    <div className="w-full flex md:flex-row bg-gray-100 overflow-y">
      {/* Sidebar */}
      <Sidebar activeLink="Profile" />

      <div className="ml-[17rem] w-full flex-col bg-white border-x border-gray-200 items-center justify-center">
        <div className="fixed bg-white/50 backdrop-blur-lg z-10 flex p-2 h-12 w-full">
          <IoArrowBackOutline size={24} />
          <div className="flex flex-col ml-4">
            <h1 className="text-xl text-slate-900 font-bold">{user[0].name}</h1>
            <p className="text-sm text-slate-400 mt-1">{user[0].post} Posts</p>
          </div>
        </div>

        <div className="relative mt-20">
          <img
            src={user[0].banner}
            alt="User banner"
            className="w-full h-40 object-cover"
          />
          {imageUrl && (
            <img
              src={String(imageUrl)}
              alt="Profile Image"
              className="w-40 h-40 border-4 border-white rounded-full absolute bottom-0 left-0 ml-4 -mb-12"
            />
          )}
          {/* <img
            src={user.avatar}
            alt="User avatar"
            className="w-36 h-36 border-4 border-white rounded-full absolute bottom-0 left-0 ml-4 -mb-12"
          /> */}
          <div className="flex justify-end items-end">
            <button className="mr-4 mt-2 p-2 font-bold border border-slate-400 bg-white rounded-full hover:bg-slate-300">
              Edit Profile{" "}
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start p-4 mt-10">
          <div className="p-2 flex flex-col">
            <h1 className="font-bold text-xl"> {name}</h1>
            <p className="text-base text-slate-400">{user[0].username}</p>
          </div>
          <div className="flex ml-2">
            <p className="text-base"> {user[0].bio}</p>
          </div>
          <div className="flex justify-start items-center p-2 space-x-4">
            <div className="flex justify-center items-center text-slate-400">
              <PiBalloon />{" "}
              <span className="text-base">Born {user[0].born}</span>
            </div>
            <div className="flex justify-center items-center text-slate-400">
              <MdOutlineCalendarMonth />{" "}
              <span className="text-base">Joined {user[0].joined}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <p className="text-sm font-semibold">{user[0].following} </p>
            <span className="ml-1 text-slate-400"> following</span>
            <p className="text-sm font-semibold ml-2">{user[0].followers} </p>
            <span className="ml-1 text-slate-400"> followers</span>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold mb-2">Posts</h2>
            <div className="mt-4 flex flex-col items-start w-full border-t">
              {user[0].posts?.map((posts, id) => (
                <div
                  key={id}
                  className="w-full flex flex-col items-start m-t-2 bg-white p-4 mb-4 rounded border-b border-bg-gray-200 hover:bg-slate-100 cursor-pointer"
                >
                  <div className="flex items-start w-full">
                    <img
                      src={user[0].avatar}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div className="w-full flex flex-col items-start">
                      <div className="flex justify-start items-center ml-2">
                        <h3 className="font-bold">{user[0].name}</h3>
                        <p className="text-base ml-2 text-slate-400">
                          {user[0].username}{" "}
                        </p>
                        <div className="flex text-slate-400">
                          <LuDot size={16} />
                        </div>
                        <p className=" text-center text-base text-slate-400">
                          {" "}
                          {[posts.date]}
                        </p>
                      </div>
                      <p className="p-2 text-base text-justify text-slate-900">
                        {posts.content}
                      </p>
                      <div className="w-full flex items-center justify-between">
                        <div className="flex justify-center items-center p-1 ">
                          <div className="rounded-full hover:bg-sky-100">
                            <BiMessageRounded
                              size={20}
                              color="#808080"
                              className="cursor-pointer"
                              style={{ transition: "color 0.3s ease" }}
                              onMouseOver={(e) =>
                                (e.currentTarget.style.color = "#1d9bf0")
                              }
                              onMouseOut={(e) =>
                                (e.currentTarget.style.color = "")
                              }
                            />
                          </div>
                          <span className="text-sm p-1 text-gray-500 hover:text-[#1d9bf0]">
                            {posts.reply}
                          </span>
                        </div>
                        <div className="flex justify-center items-center p-1">
                          <div className="rounded-full hover:bg-green-100">
                            <AiOutlineRetweet
                              size={20}
                              color="#808080"
                              className="cursor-pointer"
                              style={{ transition: "color 0.3s ease" }}
                              onMouseOver={(e) =>
                                (e.currentTarget.style.color = "#1FCB5B")
                              }
                              onMouseOut={(e) =>
                                (e.currentTarget.style.color = "")
                              }
                            />
                          </div>
                          <span className="text-sm p-1 text-gray-500 hover:text-[#1FCB5B]">
                            {posts.repost}
                          </span>
                        </div>
                        <div className="flex justify-center items-center p-1">
                          <div className="rounded-full hover:bg-red-100">
                            <GoHeart
                              size={20}
                              color="#808080"
                              className="cursor-pointer"
                              style={{ transition: "color 0.3s ease" }}
                              onMouseOver={(e) =>
                                (e.currentTarget.style.color = "#DF3B6A")
                              }
                              onMouseOut={(e) =>
                                (e.currentTarget.style.color = "")
                              }
                            />
                          </div>
                          <span className="text-sm p-1 text-gray-500 hover:text-[#DF3B6A]">
                            {posts.like}
                          </span>
                        </div>
                        <div className="flex justify-center items-center p-1">
                          <div className="rounded-full hover:bg-sky-100">
                            <IoIosStats
                              size={20}
                              color="#808080"
                              className="cursor-pointer"
                              style={{ transition: "color 0.3s ease" }}
                              onMouseOver={(e) =>
                                (e.currentTarget.style.color = "#1d9bf0")
                              }
                              onMouseOut={(e) =>
                                (e.currentTarget.style.color = "")
                              }
                            />
                          </div>
                          <span className="text-sm p-1 text-gray-500 hover:text-[#1d9bf0]">
                            {posts.view}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Explore />
    </div>
  );
}
