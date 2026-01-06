import React, { useEffect } from 'react';
import './Services.css';

const Services = () => {
  useEffect(() => {
    // Initialize particles if available
    if (window.particlesJS) {
      window.particlesJS("services-particles", {
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
    <div className="services">
      <div id="services-particles"></div>
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="services-main-title">
            <span className="white-text">Service at </span>
            <span className="yellow-text">Hatchlab</span>
          </h1>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-description">
            The pace of economic change has accelerated dramatically. Digitalisation, geopolitics, and demographic shifts are reshaping industries, and both start-ups and mature corporations must innovate to survive. Hatchlab Innovations has been built as an integrated platform that addresses these needs through Enterprise Creation as a Service (ECaaS).
            <br /><br />
            By combining a start-up incubation studio, a diversified investment arm, and a modern consultancy under one roof, Hatchlab enables entrepreneurs, chief executives, and investors to create, finance, and scale ventures with confidence.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="services-cards section">
        <div className="container">
          
          {/* Hatchlab Inception */}
          <div className="service-card">
            <div className="service-image">
              <img src="/images/img1.jpg" alt="Hatchlab Inception" />
            </div>
            <div className="service-content">
              <h2 className="service-title">Hatchlab Inception</h2>
              <p className="service-description">
                Hatchlab Inception is the incubation and inception arm of Hatchlab Innovations, responsible for conceiving, validating, and launching new ventures.
                Through a structured process · Ideation, Validation, Build, and Scale · it nurtures early-stage ideas into successful enterprises. Hatchlab Inception supports founders, innovators, and corporations seeking to create spin-offs or test new markets. Techno India Group has launched academic initiatives through its leading institutions Meghnad Saha Institute of Technology (MSIT), Netaji Subhas Engineering College (NSEC), and Techno International New Town (TINT). These institutions promote holistic learning while cultivating technically skilled and managerially confident professionals, blending India's educational heritage with modern innovation. This synergy, backed by the strategic reinforcements of Hatchlab Innovation as a part of Inception initiatives, bridges academics and enterprise, preparing future-ready leaders to drive sustainable technological and economic growth.
                <br /><br />
                Have such an innovative project which needs a subtle push? Please reach out to us.
              </p>
            </div>
          </div>

          {/* Hatchlab Ventures */}
          <div className="service-card">
            <div className="service-image">
              <img src="/images/img1.jpg" alt="Hatchlab Ventures" />
            </div>
            <div className="service-content">
              <h2 className="service-title">Hatchlab Ventures</h2>
              <p className="service-description">
                Hatchlab Ventures serves as the investment arm of Hatchlab Innovations, deploying capital across venture capital, private equity, and institutional investment platforms.
                The division focuses on high-growth sectors, sustainable value creation, and strategic partnerships that drive measurable impact.
                With a disciplined approach to governance and value creation, Hatchlab Ventures bridges innovators and institutional investors effectively.
                <br /><br />
                We are passionate about supporting visionary founders and groundbreaking ideas. Our focus is on ventures that combine innovation, scalability, and a clear purpose, ideas that not only disrupt industries but also create a meaningful, lasting impact. If you're building something extraordinary and are ready to take it to the next level, we'd love to hear from you. Let's explore how we can grow together.
              </p>
            </div>
          </div>

          {/* Hatchlab One */}
          <div className="service-card">
            <div className="service-image">
              <img src="/images/img1.jpg" alt="Hatchlab One" />
            </div>
            <div className="service-content">
              <h2 className="service-title">Hatchlab One</h2>
              <p className="service-description">
                Hatchlab One is the consulting and advisory arm that transforms businesses through innovation, brand strategy, operational excellence, and leadership enablement. Its services include digital transformation, brand strategy, sales enablement, and managed services. By integrating insights from Hatchlab Inception and Hatchlab Ventures, Hatchlab One delivers end-to-end business excellence.
                <br /><br />
                Hatchlab One nurtures a vibrant ecosystem of incubation projects across diverse sectors. Its hospitality arm includes The Retreat, Darjeeling, The Aroma, and The Café House, ventures that blend culture, creativity, and experience. Hatchlab Innovations provides intricate marketing and operational support to these brands, helping them create meaningful experiences for the guests. Thoughtshop, Hatchlab's creative partner, transforms marketing and creative insights into impactful visual and narrative expressions. Extending its influence beyond hospitality, Hatchlab One has also been an integral part of the Techno India Manchester City Football School, a groundbreaking collaboration between Techno India Group and Manchester City Football Club, dedicated to nurturing young talent and driving innovation in sports education and management.
                <br /><br />
                At its core, Hatchlab One is more than a consultancy, it's a growth catalyst. By combining strategic insight, creative innovation, and operational excellence, it helps organizations evolve, adapt, and thrive in a rapidly changing world.
                If you have bold ideas and a vision for transformation, connect with us, let's bring them to life together.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;