// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="wishlist">♥</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
