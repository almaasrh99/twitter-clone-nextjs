"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { HiOutlineUser, HiUser } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoSearchOutline, IoSearchSharp } from "react-icons/io5";
import { MdEmail, MdHomeFilled, MdMailOutline } from "react-icons/md";
import { PiBell, PiBellFill } from "react-icons/pi";
import Link from "next/link";

// type ProfileObj = {
//     email: string;
//     name: string;
//     imageUrl: string;
//   };

//   type SidebarProps = {
//     activeLink: string;
//     profileObj: ProfileObj;
//   };

export default function sidebar({ activeLink }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [imageUrl, setImageUrl] = useState(false);
  // const [setActiveLink] = useState(); // Remove the declaration of 'activeLink'
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Melakukan pengecekan apakah user sudah login atau belum
    const loggedIn =
      typeof window !== "undefined" && localStorage.getItem("loggedIn");
    const storedEmail =
      typeof window !== "undefined" && localStorage.getItem("email");
    // const storedToken = typeof window !== "undefined" && localStorage.getItem("tokenId");
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
      setEmail(storedEmail || "");
      // setEmail(storedToken || "");
      setImageUrl(imageUrl);
      setName(storedName || "");
    }
  }, []);

  const handleLogout = () => {
    //Logout menghapus data login di local storage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("email");
    //Redirect ke halaman login
    router.push("/");
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="justify-start h-screen fixed bg-white p-4 overflow-y">
      <div className="w-1/2 flex flex-col justify-center items-center pl-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
          className="p-2 lg:w-12 xs:w-32"
        />
      </div>

      <div className="flex flex-col items-center">
        <ul className="mt-4 flex flex-col items-start">
          <li
            className={`flex mb-2 justify-center items-center p-2  hover:bg-slate-200 rounded-full hover:p- ${
              activeLink === "Home"
                ? "hover:bg-slate-200 rounded-full p-2 font-bold"
                : ""
            }`}
          >
            <Link href="/home">
              <div className="flex items-center">
                {activeLink === "Home" ? (
                  <MdHomeFilled size={26} className="mr-2" />
                ) : (
                  <GoHome size={26} className="mr-2" />
                )}
                <span className="ml-2 text-[20px]">Home</span>
              </div>
            </Link>
          </li>

          <li
            className={`flex mb-2 justify-center items-center hover:bg-slate-200 rounded-full p-2  ${
              activeLink === "Explore"
                ? "hover:bg-slate-200 rounded-full p-2 font-bold"
                : ""
            }`}
          >
            <Link href="/explore">
              <div className="flex items-center">
                {activeLink === "Explore" ? (
                  <IoSearchSharp size={26} className="mr-2" />
                ) : (
                  <IoSearchOutline size={26} className="mr-2" />
                )}
                <span className="ml-2 text-[20px]">Explore</span>
              </div>
            </Link>
          </li>
          <li
            className={`flex mb-2 justify-center items-center hover:bg-slate-200 rounded-full p-2  ${
              activeLink === "Notifications"
                ? "hover:bg-slate-200 rounded-full p-2 font-bold"
                : ""
            }`}
          >
            <Link href="/notifications">
              <div className="flex items-center">
                {activeLink === "Notifications" ? (
                  <PiBellFill size={26} className="mr-2" />
                ) : (
                  <PiBell size={26} className="mr-2" />
                )}
                <span className="ml-2 text-[20px]">Notifications</span>
              </div>
            </Link>
          </li>
          <li
            className={`flex mb-2 justify-center items-center hover:bg-slate-200 rounded-full p-2  ${
              activeLink === "Messages"
                ? "hover:bg-slate-200 rounded-full p-2 font-bold"
                : ""
            }`}
          >
            <Link href="/messages">
              <div className="flex items-center">
                {activeLink === "Messages" ? (
                  <MdEmail size={26} className="mr-2" />
                ) : (
                  <HiOutlineEnvelope size={26} className="mr-2" />
                )}
                <span className="ml-2 text-[20px]">Messages</span>
              </div>
            </Link>
          </li>

          <li
            className={`flex mb-2 justify-center items-center hover:bg-slate-200 rounded-full p-2  ${
              activeLink === "Profile"
                ? "hover:bg-slate-200 rounded-full p-2 font-bold"
                : ""
            }`}
          >
            <Link href="/profile">
              <div className="flex items-center">
                {activeLink === "Profile" ? (
                  <HiUser size={26} className="mr-2" />
                ) : (
                  <HiOutlineUser size={26} className="mr-2" />
                )}
                <span className="ml-2 text-[20px]">Profile</span>
              </div>
            </Link>
          </li>
        </ul>
        <hr className="mt-4 w-full border border-gray-200 flex-grow mx-2" />
        <button
          type="submit"
          className="mx-auto mt-4 p-4 lg:text- rounded-full bg-[#1d9bf0] hover:bg-[#1d8af0] font-semibold text-white lg:w-3/4 xs:text-sm xs:w-1/2"
        >
          Post
        </button>
        <div
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="mt-4 flex items-center cursor-pointer hover:bg-slate-200 rounded-full"
        >
          {imageUrl && (
            <img
              src={String(imageUrl)} // Convert imageUrl to string
              alt="Profile Image"
              className="m-2 w-12 h-12 rounded-full ml-2"
            />
          )}
          <div className="relative">
            {dropdownOpen && (
              <div className="mb-10 absolute bottom-full w-80 bg-white border rounded-lg shadow-lg py-2 z-50">
                <button
                  onClick={handleLogout}
                  className="flex justify-center w-full text-left px-4 py-4 text-sm font-bold text-gray-700 hover:bg-gray-100"
                >
                  Keluar dari{" "}
                  <span className="pl-2">
                    {isLoggedIn && email ? ` ${email}` : " "}
                  </span>
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <h1 className="font-semibold text-md"> {name}</h1>
            <span className="font-base text-sm text-slate-400 cursor-pointer">
              {isLoggedIn && email ? ` ${email}` : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
