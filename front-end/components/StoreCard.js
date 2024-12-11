// src/components/StoreCard.js

import React from 'react';
import './StoreCard.css';

const StoreCard = ({ store }) => {
  return (
    <div className="store-card">
      <div className="store-logo">
        <img src={store.logo} alt={`${store.name} Logo`} />
      </div>
      <div className="store-details">
        <h3 
          className="store-name" 
          onClick={() => alert(`Navigate to ${store.name} page`)} // Placeholder for navigation
        >
          {store.name}
        </h3>
        <p className="store-customers">Target: {store.customers}</p>
      </div>
    </div>
  );
};

export default StoreCard;

