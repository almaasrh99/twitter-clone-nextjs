"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlineGifBox, MdOutlineImage } from "react-icons/md";
import { RiCalendarScheduleLine, RiListRadio } from "react-icons/ri";
// import { posts } from "./dummyPosts";
import { user } from '../../../../public/dummyUsers';
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { IoIosStats } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import Link from "next/link";

export default function post({}) {
  const [imageUrl, setImageUrl] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Melakukan pengecekan apakah user sudah login atau belum
    const loggedIn =
      typeof window !== "undefined" && localStorage.getItem("loggedIn");
    const imageUrl =
      typeof window !== "undefined" && localStorage.getItem("imageUrl");
    if (!loggedIn) {
      // Jika user tidak melakukan login dialihkan ke halaman login
      alert("Anda belum login");
      router.push("/");
    } else {
      setIsLoggedIn(true);
      // setEmail(storedToken || "");
      setImageUrl(imageUrl); 
    }
  }, []);

  if (!isLoggedIn) {
    return null;
  }
  return (
    <div className="w-full flex h-full items-stretch ">
      <div className="text-center w-full">
        <div className="flex flex-col items-start justify-center bg-white mx-auto">
          <div className="flex items-center">
            <div className="ml-4 text-xl"></div>
          </div>
          <form className="flex flex-col w-full">
            <div className="w-full flex items-center space-x-2">
              {/* Profile Picture */}
              {imageUrl && (
                <img
                  src={String(imageUrl)}
                  alt="Profile Image"
                  className="m-2 w-12 h-12 rounded-full hidden lg:block"
                />
              )}
              {/* Text Input */}
              <input
                className="w-full text-start text-lg px-2 rounded-3xl focus:outline-none"
                name="content"
                type="text"
                placeholder="What is happening?"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center w-full">
              <div className="flex justify-end w-3/4 ml-12">
                <div className="flex justify-center items-center p-1">
                  {/* Upload Form Media */}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden cursor-pointer"
                    id="media-upload"
                  />
                  <label htmlFor="media-upload" title="Image">
                    <div className="rounded-full p-2 hover:bg-sky-100">
                      <MdOutlineImage
                        size={20}
                        color="#1D9BF9"
                        className="cursor-pointer"
                      />
                    </div>
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  {/* Upload Form Media */}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="media-upload"
                  />
                  <label htmlFor="media-upload" title="GIF">
                    <div className="rounded-full p-2 hover:bg-sky-100">
                      <MdOutlineGifBox
                        size={20}
                        color="#1D9BF9"
                        className="cursor-pointer"
                      />
                    </div>
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  {/* Upload Form Media */}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="media-upload"
                  />
                  <label htmlFor="media-upload" title="poll">
                    <div className="rounded-full p-2 hover:bg-sky-100">
                      <RiListRadio
                        size={20}
                        color="#1D9BF9"
                        className="cursor-pointer"
                      />
                    </div>
                  </label>
                </div>
                <div className="flex justify-center items-center p-1">
                  {/* Upload Form Media */}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="media-upload"
                  />
                  <label htmlFor="media-upload" title="Emoji">
                    <div className="rounded-full p-2 hover:bg-sky-100">
                      <BsEmojiSmile
                        size={20}
                        color="#1D9BF9"
                        className="cursor-pointer hover:text-blue-500"
                      />
                    </div>
                  </label>
                </div>
                <div className="flex justify-center items-center p-1">
                  {/* Upload Form Media */}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="media-upload"
                  />
                  <label htmlFor="media-upload" title="Schedule">
                    <div className="rounded-full p-2 hover:bg-sky-100">
                      <RiCalendarScheduleLine
                        size={20}
                        color="#1D9BF9"
                        className="cursor-pointer"
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="w-full justify-center flex flex-col items-end">
                <button
                  type="submit"
                  className="mr-4 p-2 rounded-full bg-[#1d9bf0] hover:bg-[#1d8af0] font-semibold text-white lg:w-1/4 xs:text-sm xs:w-1/2"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
          <hr className="w-full mt-2 border-b-gray-200 flex-grow mx-2" />
          <div className="mt-4 flex flex-col items-start w-full">
            {user.map((user, Id) => (
               user.posts.map((post, postIndex) => (
              <div
                key={`${Id}-${postIndex}`}
                className="w-full flex flex-col items-start m-t-2 bg-white p-4 mb-4 rounded border-b border-bg-gray-200"
              >
                <div className="flex items-start w-full">
                  <img
                    src={user.avatar} 
                    alt="Avatar"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div className="w-full flex flex-col items-start">
                    <div className="flex justify-start items-center ml-2">
                    <Link href={`/profile/${user.name}`}> <h3 className="font-bold">{user.name}</h3> </Link>
                    <p className="text-base ml-2 text-slate-400">{user.username} </p>
                    <div className="flex text-slate-400"><LuDot size={16}/></div>
                    <p className=" text-center text-base text-slate-400"> {[post.date]}</p>
                    </div>
                    <p className="p-2 text-base text-justify text-slate-900">
                      {post.content}
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
                          {post.reply}
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
                          {post.repost}
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
                          {post.like}
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
                          {post.view}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               ))
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
