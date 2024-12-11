// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/support">Customer Support</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
      <div className="newsletter">
        <p>Subscribe to our newsletter:</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
