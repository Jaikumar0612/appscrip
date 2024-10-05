import React, { useEffect, useState } from 'react';
import { FaSearch, FaHeart, FaStore, FaUserCircle, FaGlobe, FaBars } from 'react-icons/fa';
import ProductGrid from './pages/ProductGrid';
import Sidebar from './pages/Sidebar';
import Footer from './pages/Footer';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [isMobileView, setIsMobileView] = useState(false); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

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

  const toggleSidebar = () => {
    if (isMobileView) {
      setSidebarOpen(!sidebarOpen); 
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="App">
      
      <header className="header">
        <div className="hamburger-logo-container">
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

      

      {/* Heading placed above Sidebar and ProductGrid */}
      <div className="center-text">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>
          Welcome to our store! Explore a wide range of exciting products designed 
          to meet all your needs. Whether you're looking for the latest gadgets, 
          fashion items, or home decor, we have something for everyone.
        </p>
      </div>


      {isMobileView && (
        <div className="mobile-buttons">
          <button onClick={toggleSidebar} className="filter-button">
            {sidebarOpen ? 'Filter' : 'Filter'}
          </button>
          <button className="recommended-button">Recommended</button>
        </div>
      )}






      <div className="content">
        {isMobileView && sidebarOpen && <Sidebar />}
        {!isMobileView && <Sidebar />}

        <ProductGrid products={products} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
