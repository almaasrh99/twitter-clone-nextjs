import React from 'react'
import Explore from '../components/explores/explore'
import Sidebar from '../components/sidebar'

export default function page() {
  return (
    <div className="w-full flex md:flex-row bg-gray-100 overflow-y">
      {/* Sidebar */}
      
      <Sidebar activeLink="Explore"/>

      {/* Feed */}
      <div className="ml-[17rem] w-full flex flex-col bg-white border-x border-gray-200 ">
        {/* Explore */}
        <Explore/>
      </div>
     
      
    </div>
  )
}
