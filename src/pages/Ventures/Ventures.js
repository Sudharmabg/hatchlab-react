import React, { useEffect, useState } from 'react';
import './Ventures.css';

const Ventures = () => {
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

  const investmentVehicles = [
    {
      icon: "fas fa-rocket",
      title: "Venture Capital",
      subtitle: "Innovation & Transformation",
      description: "Backing early-stage, high-growth technology companies with the potential to disrupt industries. We focus on operational excellence and strategic guidance.",
      stage: "Seed to Series B",
      focus: "Tech-enabled / Digital",
      valueAdd: "Active Studio Support"
    },
    {
      icon: "fas fa-chart-line", 
      title: "Private Equity",
      subtitle: "Growth & Transformation",
      description: "Investing in established companies with proven business models. We focus on scaling operations, optimizing governance, and driving sustainable growth.",
      stage: "Growth Equity & Buyouts",
      focus: "Mature / Cash-flow +",
      valueAdd: "Operational Excellence"
    },
    {
      icon: "fas fa-university",
      title: "Structured Finance",
      subtitle: "Infrastructure & Real Assets",
      description: "Tailored financial solutions for large-scale projects and infrastructure. We structure complex deals to align long-term capital with sustainable returns.",
      stage: "Late stage / Infra",
      focus: "Real Assets & Credit",
      valueAdd: "Risk Structuring"
    }
  ];

  return (
    <div className="ventures">
      <section className="hero-section">
        <div id="particles-js"></div>
        <div className="container">
          <p className="vertical-label" style={{color: '#e6e61e'}}>VERTICAL 02</p>
          <h1 className={`hero-title ${animatedWords ? 'animated' : ''}`}>
            <span className="word yellow" style={{color: '#e6e61e'}}>Hatchlab</span>
            <span className="word white">Ventures</span>
          </h1>
          <p className="hero-subtitle">Investing in Innovation, Powering Growth</p>
        </div>
      </section>

      <section className="intro-section section">
        <div className="container">
          <h2 className="section-title">Hatchlab Ventures</h2>
          <p className="intro-description">
            We focus on high-growth sectors where we can drive sustainable value creation. Hatchlab Ventures backs companies that combine innovation, scalability, and purpose. Ideas that not only disrupt industries but create meaningful, lasting impact.
          </p>
          
          <div className="intro-cards">
            <div className="intro-card">
              <div className="intro-card-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="intro-card-content">
                <h3>Venture Capital</h3>
                <p>Backing high-growth, technology-enabled businesses with scalable economics from seed to series B.</p>
              </div>
            </div>
            
            <div className="intro-card">
              <div className="intro-card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="intro-card-content">
                <h3>Private Equity</h3>
                <p>Growth equity and buyouts for mature companies requiring operational transformation and governance improvements.</p>
              </div>
            </div>
            
            <div className="intro-card">
              <div className="intro-card-icon">
                <i className="fas fa-university"></i>
              </div>
              <div className="intro-card-content">
                <h3>Structured Finance</h3>
                <p>Investments in infrastructure and real assets offering stable, long-term risk-adjusted returns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vehicles-section section">
        <div className="container">
          <h2 className="section-title">Investment Vehicles</h2>
          <p className="section-subtitle">Deploying capital across the maturity spectrum through three specialized platforms tailored to risk profiles and growth stages.</p>
          
          <div className="vehicles-grid">
            {investmentVehicles.map((vehicle, index) => (
              <div key={index} className="vehicle-card">
                <div className="vehicle-icon">
                  <i className={vehicle.icon}></i>
                </div>
                <h3 className="vehicle-title">{vehicle.title}</h3>
                <p className="vehicle-subtitle">{vehicle.subtitle}</p>
                <p className="vehicle-description">{vehicle.description}</p>
                
                <div className="vehicle-details">
                  <div className="detail-item">
                    <span className="detail-label">STAGE</span>
                    <span className="detail-value">{vehicle.stage}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">FOCUS</span>
                    <span className="detail-value">{vehicle.focus}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">VALUE ADD</span>
                    <span className="detail-value">{vehicle.valueAdd}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="governance-section section">
        <div className="container">
          <h2 className="section-title">Portfolio Strategy & Governance</h2>
          <p className="section-subtitle">A rigorous institutional framework combining active ownership, disciplined oversight, and transparent reporting to maximize risk-adjusted returns.</p>
          
          <div className="governance-grid">
            <div className="governance-column">
              <h3 className="governance-column-title">
                <i className="fas fa-shield-alt"></i>
                Governance Framework
              </h3>
              <div className="governance-items">
                <div className="governance-item">
                  <div className="governance-item-header">
                    <i className="fas fa-users"></i>
                    <h4>Investment Committee (IC)</h4>
                  </div>
                  <p>Independent oversight for all capital deployment decisions ensuring rigorous evaluation and strategic alignment with veto power.</p>
                </div>
                <div className="governance-item">
                  <div className="governance-item-header">
                    <i className="fas fa-handshake"></i>
                    <h4>Board Representation</h4>
                  </div>
                  <p>Active board seats in portfolio companies to drive strategy, monitor performance, and ensure compliance standards are met.</p>
                </div>
                <div className="governance-item">
                  <div className="governance-item-header">
                    <i className="fas fa-chart-bar"></i>
                    <h4>Compliance & Reporting</h4>
                  </div>
                  <p>Standardized monthly financial reporting and ESG compliance monitoring to ensure transparency for all stakeholders.</p>
                </div>
              </div>
            </div>
            
            <div className="governance-column">
              <h3 className="governance-column-title">
                <i className="fas fa-hands-helping"></i>
                Active Ownership Support
              </h3>
              <div className="governance-items">
                <div className="governance-item">
                  <div className="governance-item-header">
                    <i className="fas fa-rocket"></i>
                    <h4>Growth Acceleration</h4>
                  </div>
                  <p>Go-to-market strategy refinement, sales channel optimization, and international expansion support.</p>
                </div>
                <div className="governance-item">
                  <div className="governance-item-header">
                    <i className="fas fa-cogs"></i>
                    <h4>Operational Excellence</h4>
                  </div>
                  <p>Digital transformation, cost structure optimization, and supply chain efficiency improvements.</p>
                </div>
                <div className="governance-item">
                  <div className="governance-item-header">
                    <i className="fas fa-user-tie"></i>
                    <h4>Talent & Culture</h4>
                  </div>
                  <p>Executive search assistance, compensation structuring, and organizational design support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="value-creation-section section">
        <div className="container">
          <h2 className="section-title">Value Creation Approach</h2>
          <p className="section-subtitle">Systematically driving multiple expansion through three core pillars of operational improvement.</p>
          
          <div className="value-creation-grid">
            <div className="value-creation-card">
              <div className="value-creation-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="value-creation-title">Operational Excellence</h3>
              <p className="value-creation-subtitle">OPTIMIZING THE CORE</p>
              <p className="value-creation-description">Driving efficiency and margin improvement through rigorous process optimization and organizational restructuring.</p>
              
              <div className="value-creation-details">
                <div className="detail-point">
                  <span>Sales Acceleration:</span> Pipeline hygiene & GTM strategy refinement.
                </div>
                <div className="detail-point">
                  <span>Cost Discipline:</span> Zero-based budgeting & strategic procurement.
                </div>
                <div className="detail-point">
                  <span>Org Design:</span> Talent density & incentive alignment.
                </div>
              </div>
            </div>
            
            <div className="value-creation-card">
              <div className="value-creation-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3 className="value-creation-title">Governance Framework</h3>
              <p className="value-creation-subtitle">RISK & CONTROL</p>
              <p className="value-creation-description">Implementing institutional-grade controls to protect value, ensure compliance, and prepare for premium exit.</p>
              
              <div className="value-creation-details">
                <div className="detail-point">
                  <span>Board Formalization:</span> Independent directors & structured committees.
                </div>
                <div className="detail-point">
                  <span>Reporting Cadence:</span> Monthly KPI tracking & financial audits.
                </div>
                <div className="detail-point">
                  <span>Risk Management:</span> Compliance & robust legal structuring.
                </div>
              </div>
            </div>
            
            <div className="value-creation-card">
              <div className="value-creation-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="value-creation-title">Digital Leverage</h3>
              <p className="value-creation-subtitle">TECH ENABLEMENT</p>
              <p className="value-creation-description">Transforming traditional business models through technology adoption, data analytics, and automation.</p>
              
              <div className="value-creation-details">
                <div className="detail-point">
                  <span>Data Analytics:</span> Real-time dashboards & actionable insights.
                </div>
                <div className="detail-point">
                  <span>Automation:</span> RPA implementation & workflow digitization.
                </div>
                <div className="detail-point">
                  <span>Platform Integration:</span> Connecting ecosystem silos for efficiency.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ecosystem-section section">
        <div className="container">
          <h2 className="section-title">Ecosystem Advantage</h2>
          <p className="section-subtitle">Why we win: Leveraging the integrated platform to de-risk investment and accelerate growth.</p>
          
          <div className="ecosystem-diagram">
            <div className="ecosystem-item source">
              <div className="ecosystem-badge">SOURCE</div>
              <div className="ecosystem-circle green">
                <i className="fas fa-search"></i>
              </div>
              <h3>Curated Deal Flow</h3>
              <p>Proprietary access to validated ventures emerging directly from the incubator studio pipeline, eliminating early-stage blind spots.</p>
            </div>
            
            <div className="ecosystem-center">
              <div className="ecosystem-hub">
                <div className="hub-content">
                  <h3>Hatchlab</h3>
                  <p>INTEGRATED PLATFORM</p>
                </div>
              </div>
            </div>
            
            <div className="ecosystem-item growth">
              <div className="ecosystem-badge">GROWTH</div>
              <div className="ecosystem-circle purple">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Value Creation</h3>
              <p>Hands-on operational support from studio resources, consultancy expertise, and professional networks growth early in the lifecycle.</p>
            </div>
            
            <div className="ecosystem-item exit">
              <div className="ecosystem-badge">EXIT</div>
              <div className="ecosystem-circle orange">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Strategic Exit</h3>
              <p>Leveraging our corporate and institutional networks to structure premium exits and maximize returns for investors.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ventures;