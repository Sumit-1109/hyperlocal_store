import React, { useState } from 'react';
import './SearchBar.scss';

function SearchBar({ placeholder, onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
    </div>
  );
}

export default SearchBar;
