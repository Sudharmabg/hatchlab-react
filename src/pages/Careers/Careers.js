import React, { useEffect } from 'react';
import './Careers.css';

const Careers = () => {
  useEffect(() => {
    // Initialize particles if available
    if (window.particlesJS) {
      window.particlesJS("careers-particles", {
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

  return (
    <div className="careers">
      <div id="careers-particles"></div>
      
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <h1 className="careers-main-title">
            <span className="white-text">Careers at </span>
            <span className="yellow-text" style={{color: '#e6e61e'}}>Hatchlab</span>
          </h1>
        </div>
      </section>

      {/* Internships Section */}
      <section className="internships-section">
        <div className="container">
          <h2 className="internships-title">Internships at Hatchlab</h2>
          <div className="internships-card">
            <h3 className="card-subtitle">Grow and Build with us. Let's start here.</h3>
            <ul className="benefits-list">
              <li>Hands-on experience with real projects</li>
              <li>Learn from industry experts</li>
              <li>Build skills that shape your future</li>
            </ul>
            <div className="contact-section">
              <p className="drop-text">Drop Your CV at</p>
              <a href="mailto:hrd@hatchlabinnovations.com" className="email-button">
                hrd@hatchlabinnovations.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="join-team-section">
        <div className="container">
          <h2 className="join-title">Join Our Team</h2>
          <div className="join-team-card">
            <h3 className="card-subtitle">Come, Build the Future With Us</h3>
            <ul className="benefits-list">
              <li>Explore Open Roles</li>
              <li>Work on cutting-edge projects</li>
              <li>Collaborate with innovative minds</li>
            </ul>
            <div className="contact-section">
              <p className="drop-text">Drop Your CV at</p>
              <a href="mailto:hrd@hatchlabinnovations.com" className="email-button">
                hrd@hatchlabinnovations.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;