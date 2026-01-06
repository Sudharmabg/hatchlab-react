import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
  };

  return (
    <footer className="footer-section">
      <div className="footer-gradient"></div>
      
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="HatchLab Logo" />
          </div>
          <p className="footer-meta">
            <strong>© 2026 HatchLab Innovations Pvt. Ltd.</strong><br />
            All rights reserved.
          </p>
        </div>

        <div className="footer-column">
          <div className="footer-contact">
            <a href="tel:+918276057111">+91 8276057111</a>
            <a href="mailto:info@hatchlabinnovations.com">
              info@hatchlabinnovations.com
            </a>
          </div>
        </div>

        <div className="footer-column">
          <form className="footer-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
            />
            <button type="submit">Contact Us</button>
          </form>
        </div>
      </div>

      <div className="footer-social">
        <div className="social-icons">
          <a 
            href="https://www.linkedin.com/company/hatchlab-innovations/posts/?feedView=all" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a 
            href="https://www.instagram.com/hatchlabinnovations.official/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a 
            href="https://www.facebook.com/people/Hatchlab-Innovations/61558095073459/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;