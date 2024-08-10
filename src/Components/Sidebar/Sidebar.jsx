// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <h2>Technician Details</h2>
      <ul>
        <li>Air Conditioner Repair</li>
        <li>Refrigerator Repair</li>
        <li>Washing Machine Repair</li>
        <li>Microwave Repair</li>
        <li>TV Repair</li>
        <li>Geyser Repairs</li>
        <li>Ceiling Fan Installation</li>
        <li>Light Switch Replacement</li>
      </ul>
    </div>
  );
};

export default Sidebar;
