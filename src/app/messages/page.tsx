"use client";
import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { messages } from "./dummyMessages";
import { LuDot } from "react-icons/lu";

export default function page() {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSelectMessage = (message: any) => {
    setSelectedMessage(message);
  };

  const [reply, setReply] = useState("");

  const handleReplyChange = (event: any) => {
    setReply(event.target.value);
  };

  const handleReplySubmit = (event: any) => {
    event.preventDefault();
    // Here you can handle the reply. For example, send it to an API or add it to an array of replies.
    console.log(reply);
    setReply("");
  };

  return (
    <div className="w-full flex md:flex-row bg-gray-100 overflow-y">
      {/* Sidebar */}
      <Sidebar activeLink="Messages" />
      <div className="ml-[17rem] w-full flex-col bg-white border-x border-gray-200 items-center justify-center">
        {/* Messages */}
        <div className="p-4 flex">
          <div className="w-[40%] border-r overflow-y-auto">
            <h2 className="flex flex-col p-2 font-bold text-xl mb-4 border-b border-gray-200">
              Messages
            </h2>
            {messages.map((message) => (
              <div
                key={message.id}
                className="flex items-center space-x-2 border-b py-2 cursor-pointer"
                onClick={() => handleSelectMessage(message)}
              >
                <img
                  src={message.avatar}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="flex">
                    <p className="font-bold">{message.name}</p>
                    <p className="ml-2 font-sm text-slate-400">
                      {message.username}
                    </p>
                    <div className="flex text-slate-400">
                      <LuDot size={16} />
                    </div>
                    <p className="font-sm text-slate-400">{message.date}</p>
                  </div>

                  <p className="font-base text-slate-500">{message.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Details */}
          {selectedMessage ? (
            <div className=" flex flex-col justify-center p-4 w-1/2">
              <div className="flex flex-col p-2 items-center border-b">
                {selectedMessage.avatar && (
                  <img
                    src={selectedMessage.avatar}
                    alt="User avatar"
                    className="w-16 h-16 rounded-full"
                  />
                )}
                {selectedMessage.name && (
                  <h2 className="font-bold text-xl">{selectedMessage.name}</h2>
                )}
                {selectedMessage.username && (
                  <p className=" text-sm text-slate-400 mb-4">
                    {selectedMessage.username}
                  </p>
                )}
                {selectedMessage.bio && (
                  <p className=" text-center text-sm">{selectedMessage.bio}</p>
                )}
              </div>

              {selectedMessage.message && (
                <p className="w-1/2 p-2 mt-4 bg-slate-200 rounded-tl-lg rounded-tr-lg rounded-br-lg">
                  {selectedMessage.message}
                </p>
              )}
              <form
                onSubmit={handleReplySubmit}
                className="mt-48 block bottom-0 left-0 right-0 bg-white p-4 border-t "
              >
                <input
                  type="text"
                  value={reply}
                  onChange={handleReplyChange}
                  className="border rounded p-2 w-80"
                  placeholder="Write a reply..."
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded p-2 ml-2"
                >
                  Reply
                </button>
              </form>
            </div>
          ) : (
            <div className="flex flex-col justify-center w-1/2 p-20 h-screen ">
              <p className="font-sans font-text-center font-bold text-3xl mb-2">
                Select a message
              </p>
              <p className="text-base text-slate-400">
                Choose from your existing conversations, start a new one, or
                just keep swimming.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
