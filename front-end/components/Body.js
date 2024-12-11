import React from 'react';
import { getProductData, getStoreData } from '../data';
import ProductCard from './ProductCard';
import StoreCard from './StoreCard';
import './Body.css';

const Body = ({ view }) => {
  const products = getProductData();
  const stores = getStoreData();

  return (
    <div className="body-container">
      {view === 'home' ? (
        /* Landing Page Content */
        <div className="landing-page">
          <section className="hero">
            <h1>Welcome to Our Store</h1>
            <p>Discover the latest trends, tailored just for you.</p>
            <button className="explore-button">Explore Products</button>
          </section>
          <section className="features">
            <div className="feature-card">
              <h2>Fast Shipping</h2>
              <p>Get your items delivered quickly with our reliable service.</p>
            </div>
            <div className="feature-card">
              <h2>Premium Quality</h2>
              <p>We ensure the best quality products for our customers.</p>
            </div>
            <div className="feature-card">
              <h2>Exclusive Deals</h2>
              <p>Enjoy special discounts and offers on top products.</p>
            </div>
          </section>
        </div>
      ) : view === 'store' ? (
        /* Store Page Content */
        <div className="store-grid">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      ) : (
        /* Default Product Grid or Other Content */
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
