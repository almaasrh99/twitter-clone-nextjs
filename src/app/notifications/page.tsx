import React from 'react'
import Sidebar from '../components/sidebar'
import { notifications } from './dummyNotifications';
import Explore from '../components/explores/explore';



export default function page() {
  return (
    <div className="w-full flex md:flex-row bg-gray-100 overflow-y">
      {/* Sidebar */}
      <Sidebar activeLink="Notifications"/>

      <div className="ml-[17rem] w-full flex-col bg-white border-x border-gray-200 items-center justify-center">
        <div className='block mx-auto'>
        <h2 className="flex p-2 font-bold text-xl mb-4 border-b border-gray-200">Notifications</h2>
        </div>

        {/* Notifications */}
        <div className="w-full">
          {notifications.map((notification, index) => (
            <div key={index} className="w-full flex items-start p-4 space-x-2 border-b hover:bg-slate-200 cursor-pointer">
              <div className='flex flex-col p-2'>
              <div className='flex items-start'>
              <img src={notification.img_act} alt="Image Action" className="w-7 h-7 items-start" />
              <img src={notification.avatar} alt="User avatar" className="w-8 h-8 rounded-full ml-2" />
                </div>
            <div className='ml-8 p-2'>
              <div className='flex'>
              <p className="font-bold">{notification.name}</p>
                <p className='ml-2 text-base'>{notification.action}</p>
              </div>

                <p className="text-gray-500">{notification.tweet}</p>
            </div>
              </div>
            </div>
          ))}
        </div>
        </div>
          {/* Explore */}
      <Explore/>
      </div>
 
  )
}