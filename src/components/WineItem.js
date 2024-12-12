// src/components/WineItem.js
import React from 'react';
import wines from './../data/wines';
import {useParams} from 'react-router-dom';

function WineItem() {
  let {id} = useParams();
  const wine = wines.filter(wine => wine.id == id);
  
  console.log(wine);
  if (wine.length==1)
  return (
    <div> 
      <h2>{wine[0].name}</h2>
      <img src={wine.image} alt='vinho'/>
      <p>Preço: ${wine[0].price}</p>
      <p>Estoque: {wine[0].stock}</p>
      <button disabled={wine[0].stock === 0}>Adicionar ao Carrinho</button>
    </div>
  );
  else {
     return (<h1>nop</h1>);
  }
}

export default WineItem;