import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3001/rooms/search`, {
        params: { query }
      });
      onSearchResults(response.data);
    } catch (error) {
      console.error('Error searching for rooms:', error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for rooms..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
