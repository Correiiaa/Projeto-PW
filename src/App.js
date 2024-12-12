import React, { useState } from 'react';
import './App.css';
import WineList from './components/WineList';
import SearchBar from './components/SearchBar';
import wines from './data/wines';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const filteredWines = wines.filter(wine => 
    wine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (wine) => {
    setCart([...cart, wine]);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="Wines">
      <div className='header'>
        <img src='/img/logo.PNG' width={75} alt='Logo' />
        <button onClick={toggleSearch} className="search-icon">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
        <div className={`search-bar ${isSearchVisible ? 'visible' : ''}`}>
          {isSearchVisible && <SearchBar setSearchTerm={setSearchTerm} />}
        </div>
        <div className="cart-icon">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <span>{cart.length}</span>
        </div>  
      </div>
      <div className="WineList">
        <WineList wines={filteredWines} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
