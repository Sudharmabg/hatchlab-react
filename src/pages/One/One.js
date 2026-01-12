import React, { useEffect, useState } from 'react';
import './One.css';

const One = () => {
  const [animatedWords, setAnimatedWords] = useState(false);
  const [currentOfferingIndex, setCurrentOfferingIndex] = useState(0);

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

  const offerings = [
    {
      icon: "fas fa-lightbulb",
      title: "Innovation & digital transformation",
      description: "Reimagining business models and implementing digital platforms like AI and cloud to reengineer customer journeys.",
      features: ["Business Model Design", "Product Innovation", "Data Analytics & Insights"]
    },
    {
      icon: "fas fa-bullhorn",
      title: "Brand & market strategy",
      description: "Building compelling brand narratives and multi-channel marketing campaigns driven by behavioral insights.",
      features: ["Visual Identity & Positioning", "Strategic Communications", "Creative Direction"]
    },
    {
      icon: "fas fa-chart-line",
      title: "Business development & sales enablement",
      description: "Designing market strategies and enabling teams with tools, training, and performance metrics.",
      features: ["GTM Strategy & Execution", "Revenue Operations", "Sales Training & Tools"]
    },
    {
      icon: "fas fa-cogs",
      title: "Operational excellence",
      description: "Focusing on process optimization, supply chain resilience, and scalability using lean methodologies and automation.",
      features: ["Process Re-engineering", "Supply Chain Optimization", "Organizational Design"]
    },
    {
      icon: "fas fa-user-tie",
      title: "Executive assistance & managed services",
      description: "Providing executive support ranging from administrative management to stakeholder engagement and board reporting.",
      features: ["Executive Assistance", "Staff Augmentation", "Project Management Office"]
    }
  ];

  const nextOffering = () => {
    setCurrentOfferingIndex((prev) => prev === 0 ? 3 : 0);
  };

  const prevOffering = () => {
    setCurrentOfferingIndex((prev) => prev === 0 ? 3 : 0);
  };

  return (
    <div className="one">
      <section className="hero-section">
        <div id="particles-js"></div>
        <div className="container">
          <p className="vertical-label">VERTICAL 03</p>
          <h1 className={`hero-title ${animatedWords ? 'animated' : ''}`}>
            <span className="word yellow">Hatchlab</span>
            <span className="word white">One</span>
          </h1>
          <p className="hero-subtitle">Bridging Strategy & Execution</p>
        </div>
      </section>

      <section className="intro-section section">
        <div className="container">
          <h2 className="section-title">Hatchlab One</h2>
          <p className="intro-description">
            Great strategies often fail in execution due to operational silos and capability gaps. Hatchlab One is the consultancy arm designed to solve this by delivering end-to-end business excellence that bridges the gap between vision and reality.
          </p>
          
          <div className="services-grid">
            {offerings.slice(0, 3).map((offering, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <i className={offering.icon}></i>
                </div>
                <h3 className="service-title">{offering.title}</h3>
                <p className="service-description">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="offerings-section section">
        <div className="container">
          <div className="offerings-header">
            <h2 className="section-title">Services & Offerings</h2>
            <div className="offerings-nav">
              <button className="offerings-prev" onClick={prevOffering} aria-label="Previous offering">
                <i className="bi bi-arrow-left-square"></i>
              </button>
              <button className="offerings-next" onClick={nextOffering} aria-label="Next offering">
                <i className="bi bi-arrow-right-square"></i>
              </button>
            </div>
          </div>
          <p className="section-subtitle">End-to-end advisory driving growth through strategy, brand, and operational excellence.</p>
          
          <div className="offerings-carousel">
            {offerings.slice(currentOfferingIndex, currentOfferingIndex + 3).map((offering, index) => (
              <div key={currentOfferingIndex + index} className="offering-card">
                <div className="offering-icon">
                  <i className={offering.icon}></i>
                </div>
                <h3 className="offering-title">{offering.title}</h3>
                <p className="offering-description">{offering.description}</p>
                <ul className="offering-features">
                  {offering.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <p className="offerings-footer">* Integrated with Hatchlab Inception and Ventures for end-to-end enterprise support.</p>
        </div>
      </section>

      <section className="engagement-section section">
        <div className="container">
          <h2 className="section-title">Client Engagement Model</h2>
          <p className="section-subtitle">A collaborative, agile methodology designed to align strategy with execution, ensuring measurable impact and sustainable growth.</p>
          
          <div className="engagement-grid">
            <div className="engagement-phase">
              <div className="phase-number">01</div>
              <div className="phase-icon green">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="phase-title">Discover</h3>
              <p className="phase-description">Deep-dive workshops to understand core objectives, competitive landscape, and run diagnostic assessments to prioritize root causes.</p>
              <div className="phase-output">
                <span className="output-label">KEY OUTPUT</span>
                <span className="output-value">Diagnostic Report</span>
              </div>
            </div>
            
            <div className="engagement-phase">
              <div className="phase-number">02</div>
              <div className="phase-icon purple">
                <i className="fas fa-drafting-compass"></i>
              </div>
              <h3 className="phase-title">Design</h3>
              <p className="phase-description">Collaborative solutioning to architect tailored strategies, frameworks, and implementation roadmaps that fit the client's unique culture.</p>
              <div className="phase-output">
                <span className="output-label">KEY OUTPUT</span>
                <span className="output-value">Strategic Roadmap</span>
              </div>
            </div>
            
            <div className="engagement-phase">
              <div className="phase-number">03</div>
              <div className="phase-icon pink">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="phase-title">Deliver</h3>
              <p className="phase-description">Hands-on execution alongside client teams. We don't just advise; we roll up our sleeves, managing change and ensuring capability transfer.</p>
              <div className="phase-output">
                <span className="output-label">KEY OUTPUT</span>
                <span className="output-value">Implemented Solution</span>
              </div>
            </div>
            
            <div className="engagement-phase">
              <div className="phase-number">04</div>
              <div className="phase-icon orange">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h3 className="phase-title">Measure</h3>
              <p className="phase-description">Continuous monitoring of KPIs against baselines to validate outcomes, optimize performance, and scale successful initiatives across the organization.</p>
              <div className="phase-output">
                <span className="output-label">KEY OUTPUT</span>
                <span className="output-value">Impact Assessment</span>
              </div>
            </div>
          </div>
          
          <div className="engagement-features">
            <div className="feature-item">
              <i className="fas fa-users"></i>
              <span>Co-Creation Model</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-rocket"></i>
              <span>Rapid Deployment</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-bullseye"></i>
              <span>ROI Focused</span>
            </div>
          </div>
        </div>
      </section>

      <section className="value-proposition-section section">
        <div className="container">
          <h2 className="section-title">Value Proposition</h2>
          <p className="section-subtitle">Redefining consultancy by bridging the gap between strategy and execution.</p>
          
          <div className="value-prop-grid">
            <div className="value-prop-card">
              <div className="value-prop-icon">
                <i className="fas fa-chess-knight"></i>
              </div>
              <h3 className="value-prop-title">Integrated Strategy</h3>
              <p className="value-prop-subtitle">Strategy to Execution</p>
              <p className="value-prop-description">We eliminate the friction between planning and doing. Our consultants work alongside builders and investors, ensuring strategies are actionable from day one.</p>
              
              <div className="value-prop-features">
                <div className="feature-check">
                  <i className="fas fa-check"></i>
                  <span>Close Collaboration</span>
                </div>
                <div className="feature-check">
                  <i className="fas fa-check"></i>
                  <span>Unified Vision</span>
                </div>
                <div className="feature-check">
                  <i className="fas fa-check"></i>
                  <span>Shared Success</span>
                </div>
              </div>
            </div>
            
            <div className="value-prop-card">
              <div className="value-prop-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3 className="value-prop-title">Platform Leverage</h3>
              <p className="value-prop-subtitle">Speed to Impact</p>
              <p className="value-prop-description">Clients tap into the full Hatchlab ecosystem. We leverage insights from our venture studio and capital from our investment arm to accelerate client growth.</p>
              
              <div className="value-prop-features">
                <div className="feature-check">
                  <i className="fas fa-check"></i>
                  <span>Startup Agility</span>
                </div>
                <div className="feature-check">
                  <i className="fas fa-check"></i>
                  <span>Talent Access</span>
                </div>
                <div className="feature-check">
                  <i className="fas fa-check"></i>
                  <span>Market Insight</span>
                </div>
              </div>
            </div>
            
            <div className="value-prop-card">
              <div className="value-prop-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h3 className="value-prop-title">Measurable Outcomes</h3>
              <p className="value-prop-subtitle">De-risked Growth</p>
              <p className="value-prop-description">We prioritize practical implementation over theoretical frameworks. Our success is tied to tangible business outcomes, ensuring value throughout the transformation journey.</p>
              
              <div className="value-prop-features">
                <div className="feature-check">
                  <i className="fas fa-check"></i>
                  <span>ROI Focused</span>
                </div>
                <div className="feature-check">
                  <i className="fas fa-check"></i>
                  <span>Metrics Driven</span>
                </div>
                <div className="feature-check">
                  <i className="fas fa-check"></i>
                  <span>Outcome Oriented</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ecaas-section section">
        <div className="container">
          <h2 className="section-title">ECaaS Framework</h2>
          <p className="section-subtitle">Enterprise Creation as a Service: A Cohesive Ecosystem</p>
          
          <p className="ecaas-description">
            ECaaS integrates incubation, investment, and consultancy into a modular ecosystem. It enables partners to engage at any stage while accessing the full platform benefits.
          </p>
          
          <div className="ecaas-stages">
            <div className="ecaas-stage">
              <div className="stage-icon blue">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="stage-title">Start-ups</h3>
              <p className="stage-description">Begin in the studio, receive capital, and leverage consultancy to scale.</p>
            </div>
            
            <div className="ecaas-stage">
              <div className="stage-icon purple">
                <i className="fas fa-building"></i>
              </div>
              <h3 className="stage-title">Established Companies</h3>
              <p className="stage-description">Build new products, fund expansions, and improve operations.</p>
            </div>
            
            <div className="ecaas-stage">
              <div className="stage-icon green">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="stage-title">Investors</h3>
              <p className="stage-description">Access curated deal flow and diversified asset classes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default One;