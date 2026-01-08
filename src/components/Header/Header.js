import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeModal = () => {
    setIsContactModalOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isContactModalOpen) {
        closeModal();
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.services-dropdown')) {
        setIsServicesDropdownOpen(false);
      }
    };

    if (isContactModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isContactModalOpen]);

  return (
    <>
      <header className="main-header">
        <div className="header-logo">
          <Link to="/" onClick={handleNavClick}>
            <img src="/images/logo.png" alt="Hatchlab Logo" />
          </Link>
          <Link to="/" className="brand-name" onClick={handleNavClick}>
            Hatchlab Innovations
          </Link>
        </div>
        
        <nav className="header-nav">
          <Link 
            to="/about" 
            className={isActive('/about') ? 'active' : ''}
            onClick={() => { handleNavClick(); setIsServicesDropdownOpen(false); }}
          >
            About
          </Link>
          <div className="services-dropdown">
            <button 
              className={`services-toggle ${isActive('/one') || isActive('/ventures') || isActive('/inception') ? 'active' : ''}`}
              onClick={toggleServicesDropdown}
            >
              Services <i className="fas fa-chevron-down"></i>
            </button>
            {isServicesDropdownOpen && (
              <div className="services-dropdown-menu">
                <Link to="/one" onClick={() => { handleNavClick(); setIsServicesDropdownOpen(false); }}>Hatchlab One</Link>
                <Link to="/ventures" onClick={() => { handleNavClick(); setIsServicesDropdownOpen(false); }}>Hatchlab Ventures</Link>
                <Link to="/inception" onClick={() => { handleNavClick(); setIsServicesDropdownOpen(false); }}>Hatchlab Inception</Link>
              </div>
            )}
          </div>
          <Link 
            to="/careers" 
            className={isActive('/careers') ? 'active' : ''}
            onClick={() => { handleNavClick(); setIsServicesDropdownOpen(false); }}
          >
            Career
          </Link>
          <Link 
            to="/contact" 
            className={isActive('/contact') ? 'active' : ''}
            onClick={() => { handleNavClick(); setIsServicesDropdownOpen(false); }}
          >
            Contact
          </Link>
          <button 
            className="get-in-touch-btn"
            onClick={() => setIsContactModalOpen(true)}
          >
            Get In Touch
          </button>
        </nav>
      </header>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="contact-modal" onClick={closeModal}>
          <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
            <span 
              className="close-contact-modal"
              onClick={closeModal}
            >
              &times;
            </span>
            <h3>Get In Touch</h3>
            <div className="contact-info-item">
              <a href="tel:+918276057111">
                <i className="fas fa-mobile-alt phone-icon"></i> +91 8276057111
              </a>
            </div>
            <div className="contact-info-item">
              <a href="mailto:info@hatchlabinnovations.com">
                <i className="fas fa-envelope email-icon"></i> info@hatchlabinnovations.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;