import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    // Initialize particles if available
    if (window.particlesJS) {
      window.particlesJS("contact-particles", {
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          color: { value: "#ffffff" },
          line_linked: { enable: true, color: "#ffffff" },
          move: { enable: true, speed: 2 }
        }
      });
    }
  }, []);

  const closeModal = () => {
    setIsContactModalOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isContactModalOpen) {
        closeModal();
      }
    };

    if (isContactModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isContactModalOpen]);



  return (
    <div className="contact">
      <div id="contact-particles"></div>
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <p className="contact-subtitle-small">Hatchlab One</p>
          <h1 className="contact-main-title">
            <span className="white-text">Partner With </span>
            <span className="yellow-text">Hatchlab</span>
          </h1>
          <p className="contact-subtitle">
            Ready to build the future? Whether you are a founder, investor, or corporate leader, engage with our ecosystem today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Engagement Models */}
            <div className="engagement-models">
              <h2 className="section-heading">Engagement Models</h2>
              
              <div className="engagement-card">
                <div className="card-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="card-content">
                  <h3>Corporate Innovation</h3>
                  <p>Launch spin-offs, innovation sprints, or joint ventures.</p>
                </div>
              </div>
              
              <div className="engagement-card">
                <div className="card-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="card-content">
                  <h3>Investment Partners</h3>
                  <p>Co-invest in high-growth ventures or participate via structured funds.</p>
                </div>
              </div>
              
              <div className="engagement-card">
                <div className="card-icon">
                  <i className="fas fa-network-wired"></i>
                </div>
                <div className="card-content">
                  <h3>Ecosystem Development</h3>
                  <p>Collaborate on incubators, policy frameworks, and regional programs.</p>
                </div>
              </div>
            </div>
            
            {/* The Path Forward */}
            <div className="path-forward">
              <h2 className="section-heading">The Path Forward</h2>
              
              <div className="path-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Discovery Session</h3>
                  <p>Objective and alignment mapping</p>
                </div>
              </div>
              
              <div className="path-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Strategic Roadmap</h3>
                  <p>Engagement framework and resourcing</p>
                </div>
              </div>
              
              <div className="path-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Partnership Kick-off</h3>
                  <p>Formal launch of collaboration</p>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* CTA Button */}
          <div className="cta-content">
            <button 
              className="btn-primary cta-btn"
              onClick={() => setIsContactModalOpen(true)}
            >
              Let's Build Together
            </button>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Contact;