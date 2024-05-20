"use client";
import React from 'react'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from '../components/sidebar';
import Explore from '../components/explores/explore';
import Post from '../components/post/post';



export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [imageUrl, setImageUrl] = useState(false);
  // const [activeLink, setActiveLink] = useState("Home");

  return (
    <div className="w-full flex md:flex-row h-screen bg-gray-100 overflow-y">
      {/* Sidebar */}
      
      <Sidebar activeLink="Home"/>

      {/* Feed */}
      <div className="ml-[17rem] w-full flex-col bg-white border-x border-gray-200 items-center justify-center">
        <h2 className="flex p-2 font-bold text-lg mb-4 border-b border-gray-200">For You</h2>
        {/* Post */}
        <Post user={undefined}/>
      </div>
      {/* Explore */}
      <Explore/>
    </div>
  );
}
  

