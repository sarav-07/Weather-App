import React, { useState } from "react";

const SearchInput = ({ type, value, name, placeholder, onChange }) => {
  return (
    <div>
      <input
        className="outline-none bg-transparent text-gray-500 w-auto md:min-w-[250px] h-full"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
