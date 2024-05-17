"use client"
import { SetStateAction, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="relative p-4 w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border rounded-full w-full bg-slate-100 py-2 px-5 pl-10 focus:outline-none focus:ring-1 hover:ring-blue-400 hover:bg-white "
        placeholder="Search"
      />
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
        <AiOutlineSearch size={20} />
      </div>
      {searchTerm && (
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={clearSearch}
        >
          <IoClose size={20} />
        </div>
      )}
    </div>
  );
};

export default Search;