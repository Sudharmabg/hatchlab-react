import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [animatedWords, setAnimatedWords] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedWords(true);
    }, 500);

    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          color: { value: "#ffffff" },
          line_linked: { enable: true, color: "#ffffff", opacity: 0.3 },
          move: { enable: true, speed: 2 }
        }
      });
    }
  }, []);

  const visionMission = [
    {
      icon: "fas fa-eye",
      title: "Our Vision",
      description: "To become the premier platform for building the next generation of global enterprises."
    },
    {
      icon: "fas fa-rocket",
      title: "Our Mission",
      description: "To empower innovators and institutions by providing the resources, capital and expertise required to transform ideas into successful businesses."
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="hero-section">
        <div id="particles-js"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className={`word yellow ${animatedWords ? 'bouncing' : ''}`}>About</span>
            <span className={`word white ${animatedWords ? 'bouncing' : ''}`}>Us</span>
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content section">
        <div className="container">
          <p className="about-description">
            Hatchlab Innovations is an integrated platform for enterprise creation. Through Enterprise Creation as a Service (ECaaS), we combine a start-up studio, a diversified investment arm, and a modern consultancy so entrepreneurs, executives, and investors can create, finance, and scale ventures with confidence.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission section">
        <div className="container">
          <h2 className="section-title">Vision & Mission</h2>
          <p className="section-subtitle">Guiding principles for the future of enterprise.</p>
          
          <div className="cards-grid">
            {visionMission.map((item, index) => (
              <div key={index} className="card vm-card">
                <div className="card-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="philosophy-section section">
        <div className="container">
          <h2 className="section-title">Our Core Philosophy</h2>
          <p className="section-subtitle">Guiding principles for the future of enterprises.</p>
          
          <div className="quote-container">
            <blockquote>
              "The future of enterprise creation lies in the seamless integration of innovation, finance, and advisory services."
            </blockquote>
            
            <p className="quote-description">
              Our ECaaS model embodies this philosophy, providing aligned incentives and comprehensive expertise to bridge the gap between concept and commercial reality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;