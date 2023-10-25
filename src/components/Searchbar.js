import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "../actions/search.actions";
const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    const searchResult = searchTerm.toLowerCase();
    dispatch(searchProduct(searchResult));
  };

  return (
    <div className="search-container">
      <input
        id="search-bar"
        type="text"
        placeholder="Rechercher un article"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button id="search-button" onClick={handleSearch}>
        Rechercher
      </button>
    </div>
  );
};

export default Searchbar;
