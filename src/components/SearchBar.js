// src/components/SearchBar.js
// import React from 'react';

// function SearchBar({ setSearchTerm }) {
//   return (
//     <input 
//       type="text" 
//       className="search-input"
//       placeholder="Pesquise por vinhos..." 
//       onChange={(e) => setSearchTerm(e.target.value)} 
//     />
//   );
// }

// export default SearchBar;
import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

function SearchBar({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); // Chama a função de pesquisa se a tecla Enter for pressionada
    }
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        className="search-input"
        placeholder="Pesquise por vinhos..." 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        onKeyPress={handleKeyPress} // Adiciona o manipulador de eventos para a tecla
      />
    </div>
  );
}

export default SearchBar;