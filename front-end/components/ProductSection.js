// src/components/ProductSection.js
import React from 'react';
import ProductCard from './ProductCard';
import './ProductSection.css';

const ProductSection = ({ products }) => {
  return (
    <section className="product-section">
      <h2 className="section-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
