// src/components/WineCard.js
import React from 'react';
import {Link} from 'react-router-dom';



function WineCard({ wine }) {
  return ( 
    <div className="wine-card">
      <Link to={"wine/"+wine.id}>
         <h2>{wine.name}</h2>
      </Link>
      <img src={wine.image} alt='vinho'/>        
      <p>Preço: €{wine.price}</p>
      <p>Estoque: {wine.stock}</p>    
      <button disabled={wine.stock === 0}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default WineCard;