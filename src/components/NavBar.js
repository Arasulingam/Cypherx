import React, { useState } from "react";
import "../css/NavBar.css";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <ul>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Products <span className="arrow">▼</span>
          {isDropdownOpen && (
            <ul className="dropdown">
              <li>Finance</li>
              <li>Sales</li>
              <li>Websites</li>
              <li>Inventory & MRP</li>
              <li>HR</li>
              <li>Marketing</li>
            </ul>
          )}
        </li>
        <li>Solutions</li>
        <li>Customer Stories</li>
        <li>Support</li>
        <li>Log in</li>
        <li className="demo">Schedule a Demo</li>
      </ul>
    </nav>
  );
};

export default NavBar;
