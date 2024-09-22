import React, { useRef, useState } from "react";
import SearchInput from "./SearchInput";
import { IoSearch } from "react-icons/io5";
const Header = ({ setCity }) => {
  const inputRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");
  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = () => {
    if (searchInput.trim()) {
      setCity(searchInput.trim());
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4">
      <div className="font-sans font-semibold text-3xl italic mb-4 md:mb-0">
        Weather
      </div>
      <div className="bg-white w-[340px] md:w-auto flex items-center justify-between pl-2 md:pl-4 border border-white rounded-full gap-2 search">
        <IoSearch
          className="text-gray-500 h-5 w-5 cursor-pointer"
          onClick={handleSearch}
        />
        <SearchInput
          type="text"
          value={searchInput}
          placeholder="Search by city"
          onChange={handleInput}
        />
        <button
          onClick={handleSearch}
          className="bg-[#575aec] px-6 py-3 rounded-r-full hidden md:block"
        >
          Search
        </button>
        <button
          className="bg-[#575aec] px-6 py-3 rounded-r-full block md:hidden"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
