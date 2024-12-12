// src/components/WineList.js
import React from 'react';
import WineCard from './WineCard';

function WineList({ wines }) {
    return (
      <div className="wine-list">
        {wines.map(wine => (
          <WineCard key={wine.id} wine={wine} />
        ))}
      </div>
    );
  }
  
  export default WineList;