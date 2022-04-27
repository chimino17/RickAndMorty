import React from "react";
import "./cardsContrainer.css";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="Search">
      <input
        className="input"
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        placeholder="Buscar personaje"
      />
    </div>
  );
};

export default Search;
