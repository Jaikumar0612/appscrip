import React, { useState, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa'; // Importing a different icon
import '../Styles/Sidebar.css';

function Sidebar() {
  const [itemCount, setItemCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setItemCount(data.length);
      });
  }, []);

  const toggleDropdown = (key) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <aside className="sidebar">
      <h2>{itemCount} Items</h2>
      <div className="filter">
        <label>
          <input type="checkbox" /> Customizable
        </label>
      </div>

      <div className="filter">
        <h3 onClick={() => toggleDropdown('idealFor')}>IDEAL FOR</h3>
        {dropdownOpen.idealFor && (
          <ul className="dropdown">
            <li>All</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        )}
      </div>

      <div className="filter">
        <h3 onClick={() => toggleDropdown('occasion')}>OCCASION <FaAngleDown /></h3>
        {dropdownOpen.occasion && (
          <ul className="dropdown">
            <li>All</li>
            <li>Casual</li>
            <li>Formal</li>
            <li>Party</li>
          </ul>
        )}
      </div>

      <div className="filter">
        <h3 onClick={() => toggleDropdown('work')}>WORK <FaAngleDown /></h3>
        {dropdownOpen.work && (
          <ul className="dropdown">
            <li>All</li>
            <li>Home</li>
            <li>Office</li>
            <li>Outdoor</li>
          </ul>
        )}
      </div>

      <div className="filter">
        <h3 onClick={() => toggleDropdown('fabric')}>FABRIC <FaAngleDown /></h3>
        {dropdownOpen.fabric && (
          <ul className="dropdown">
            <li>All</li>
            <li>Cotton</li>
            <li>Polyester</li>
            <li>Wool</li>
          </ul>
        )}
      </div>

      <div className="filter">
        <h3 onClick={() => toggleDropdown('segment')}>SEGMENT <FaAngleDown /></h3>
        {dropdownOpen.segment && (
          <ul className="dropdown">
            <li>All</li>
            <li>Luxury</li>
            <li>Regular</li>
            <li>Discount</li>
          </ul>
        )}
      </div>

      <div className="filter">
        <h3 onClick={() => toggleDropdown('suitableFor')}>SUITABLE FOR <FaAngleDown /></h3>
        {dropdownOpen.suitableFor && (
          <ul className="dropdown">
            <li>All</li>
            <li>Summer</li>
            <li>Winter</li>
            <li>Monsoon</li>
          </ul>
        )}
      </div>

      <div className="filter">
        <h3 onClick={() => toggleDropdown('rawMaterials')}>RAW MATERIALS <FaAngleDown /></h3>
        {dropdownOpen.rawMaterials && (
          <ul className="dropdown">
            <li>All</li>
            <li>Leather</li>
            <li>Denim</li>
            <li>Cotton</li>
          </ul>
        )}
      </div>

      <div className="filter">
        <h3 onClick={() => toggleDropdown('pattern')}>PATTERN <FaAngleDown /></h3>
        {dropdownOpen.pattern && (
          <ul className="dropdown">
            <li>All</li>
            <li>Striped</li>
            <li>Plain</li>
            <li>Floral</li>
          </ul>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
