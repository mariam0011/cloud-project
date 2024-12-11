// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ onSelectView }) => {
  return (
    <header className="header">
      <div className="logo">FashionStore</div>
      <nav className="nav">
        {/* Home and Store Navigation */}
        <a href="#" onClick={() => onSelectView('home')}>Home</a>
        <a href="#" onClick={() => onSelectView('store')}>Store</a>

        {/* Other Navigation Links */}
        <a href="#" onClick={() => onSelectView('products')}>Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        
        
        
      </nav>

      <div className="header-icons">
        <input type="text" placeholder="Search..." className="search-bar" />
        <a href="/account">Account</a>
        <a href="/cart">Cart</a>
      </div>
    </header>
  );
};

export default Header; 
