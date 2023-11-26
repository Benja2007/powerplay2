// SearchBar.js
import React, { useState } from 'react';
import juegos from './Juegos';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = juegos.filter(juego =>
      juego.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar juegos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      <ul>
        {searchResults.map(juego => (
          <li key={juego.id}>{juego.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
