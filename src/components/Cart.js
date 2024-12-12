// src/components/Cart.js
import React from 'react';

function Cart({ cart }) {
  return (
    <div>
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((wine, index) => (
            <li key={index}>{wine.name} - €{wine.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;