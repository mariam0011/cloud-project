// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="sidebar-container">
      <button className="toggle-button" onClick={toggleSidebar}>
        {isVisible ? 'Hide Filters' : 'Show Filters'}
      </button>
      {isVisible && (
        <aside className="sidebar">
          <h3>Filter By</h3>
          <div className="filter-group">
            <h4>Category</h4>
            <input type="checkbox" id="shirts" /> <label htmlFor="shirts">Shirts</label><br />
            <input type="checkbox" id="pants" /> <label htmlFor="pants">Pants</label><br />
          </div>
          <div className="filter-group">
            <h4>Price Range</h4>
            <input type="range" min="0" max="500" />
          </div>
        </aside>
      )}
    </div>
  );
};

export default Sidebar;
