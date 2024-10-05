import React, { useEffect, useState } from 'react';
import { FaSearch, FaHeart, FaStore, FaUserCircle, FaGlobe, FaBars } from 'react-icons/fa'; // Add FaBars for the hamburger icon
import ProductGrid from './pages/ProductGrid';
import Sidebar from './pages/Sidebar';
import Footer from './pages/Footer';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle state
  const [isMobileView, setIsMobileView] = useState(false); // Mobile or Desktop view state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile navigation menu

  // Fetch products data from API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  // Check if the screen is mobile or desktop view
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    checkMobileView();
    window.addEventListener('resize', checkMobileView);

    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);

  // Toggle sidebar visibility in mobile view
  const toggleSidebar = () => {
    if (isMobileView) {
      setSidebarOpen(!sidebarOpen); // Toggle sidebar state
    }
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="hamburger-logo-container">
          {/* Hamburger icon for mobile view */}
          {isMobileView && (
            <FaBars className="hamburger-icon" onClick={toggleMobileMenu} />
          )}
          <div className="logo">
            <img src="/logo.svg" alt="logo" width={30} height={30} />
          </div>
          <div className="text-logo">
            <h1>LOGO</h1>
          </div>
        </div>
        <div className="icons">
          <FaSearch />
          <FaHeart />
          <FaStore />
          <FaUserCircle />
          <div className="language-dropdown">
            <FaGlobe />
            <select>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileView && mobileMenuOpen && (
        <nav className="mobile-nav">
          <ul>
            <li>Shop</li>
            <li>Skills</li>
            <li>Stories</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      )}

      {/* Desktop Navigation */}
      {!isMobileView && (
        <nav className="nav">
          <ul>
            <li>Shop</li>
            <li>Skills</li>
            <li>Stories</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      )}

      {/* Mobile View Buttons */}
      {isMobileView && (
        <div className="mobile-buttons">
          <button onClick={toggleSidebar} className="filter-button">
            {sidebarOpen ? 'Filter' : 'Filter'}
          </button>
          <button className="recommended-button">Recommended</button>
        </div>
      )}

      {/* Content Area */}
      <div className="content">
        {/* Show sidebar in mobile view only if sidebarOpen is true */}
        {isMobileView && sidebarOpen && <Sidebar />}

        {/* Sidebar always visible in desktop view */}
        {!isMobileView && <Sidebar />}

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
