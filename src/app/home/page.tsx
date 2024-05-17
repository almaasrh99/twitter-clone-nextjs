"use client";
import React from 'react'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from '../components/sidebar';
import Explore from '../components/explore';
import Post from '../components/post';



export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [imageUrl, setImageUrl] = useState(false);
  // const [activeLink, setActiveLink] = useState("Home");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeLink="Home"/>

      {/* Feed */}
      <div className="w-1/2 bg-gray-100 p-4">
        <h2 className="font-bold text-2xl mb-4">For You</h2>
        {/* Post */}
        <Post/>
        <div className="bg-white p-4 mb-4 rounded">
          <h3 className="font-bold">Username</h3>
          <p>Post content</p>
        </div>
        {/* Post */}
        <div className="bg-white p-4 mb-4 rounded">
          <h3 className="font-bold">Username</h3>
          <p>Post content</p>
        </div>
      </div>

      {/* Explore */}
      <Explore/>
      </div>
  );
}
  

