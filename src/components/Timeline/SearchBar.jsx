import React, { useState } from "react";
import "./searchbar.css";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const ChangeInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     handleSearch();
  //   }
  // };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={ChangeInput}
        // onKeyPress={handleKeyPress}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
