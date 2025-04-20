import React, { useEffect, useState } from "react";
import "./SearchBar.scss";
import search from "../../assets/search.png";
import clear from "../../assets/clear.png";

function SearchBar({ placeholder, onSearch, onClear }) {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      return;
    }

    onSearch(query.trim());
    setSearched(true);
  };

  useEffect(() => {
    if (!query) {
      setSearched(false);
    }
  }, [query]);

  const handleClear = () => {
    setQuery("");
    setSearched(false);
    onClear?.();
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {searched ? (
          <button type="button" onClick={handleClear}>
            <img src={clear} alt="Clear" />
          </button>
        ) : (
          <button type="submit">
            <img src={search} alt="Search" />
          </button>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
