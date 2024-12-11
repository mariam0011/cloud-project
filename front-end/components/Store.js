// src/components/Store.js
import React from 'react';
import './Store.css';

const Store = ({ store }) => {
  return (
    <div className="store-container">
      {/* Store Header (cover image, name, and collections count) */}
      <div className="store-header">
        <img
          src={store.coverImage}
          alt="Store Cover"
          className="store-cover-image"
        />
        <div className="store-info">
          <h1 className="store-name">{store.name}</h1>
          <p className="store-collections">{store.numCollections} Collections</p>
        </div>
      </div>

      {/* Store Content (additional details, products, etc.) */}
      <div className="store-description">
        <h2>Welcome to {store.name}!</h2>
        <p>{store.description}</p>
      </div>
    </div>
  );
};

export default Store;
