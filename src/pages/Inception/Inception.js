import React, { useEffect, useState } from 'react';
import './Inception.css';

const Inception = () => {
  const [animatedWords, setAnimatedWords] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

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

    // Auto-scroll services every 10 seconds
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => prev === 0 ? 3 : 0);
    }, 10000);

    return () => {
      clearInterval(serviceInterval);
    };
  }, []);

  const processSteps = [
    {
      number: "01",
      icon: "fas fa-lightbulb",
      title: "Ideation & Selection",
      description: "Sourcing ideas via research and corporate challenges. We apply a rigorous framework to assess market opportunity, regulatory feasibility, and strategic alignment before proceeding.",
      output: "Feasibility Report"
    },
    {
      number: "02",
      icon: "fas fa-search", 
      title: "Validation & Design",
      description: "Conducting intensive market testing, customer interviews, and prototype development. We validate assumptions, refine the value proposition, and design the business model prior to heavy investment.",
      output: "Validated Prototype"
    },
    {
      number: "03",
      icon: "fas fa-hammer",
      title: "Build & Launch", 
      description: "Deploying cross-functional agile squads to build the MVP. Centralized management of legal, IP, and compliance ensures speed and consistency during execution.",
      output: "Live Product (MVP)"
    },
    {
      number: "04",
      icon: "fas fa-rocket",
      title: "Scale & Spin-Out",
      description: "Transitioning successful ventures into independent entities. Hatchlab continues to provide strategic support and access to investment capital for scaling.",
      output: "Independent Entity"
    }
  ];

  const services = [
    {
      icon: "fas fa-building",
      title: "Corporate Venture Building",
      description: "Partnering with established organizations to build subsidiaries and test new business models while shielding core operations from risk.",
      features: ["Risk-shielded Experimentation", "Innovation Spin-offs", "New Market Entry"]
    },
    {
      icon: "fas fa-users",
      title: "Cross-Functional Teams", 
      description: "Assembling specialized agile squads to execute the 'Build' phase, ensuring rapid MVP development and product-market fit.",
      features: ["Engineers & Developers", "Product Managers & Designers", "Industry Specialists"]
    },
    {
      icon: "fas fa-chart-line",
      title: "GTM Strategy",
      description: "Designing and executing go-to-market roadmaps to validate commercial viability and acquire initial customers efficiently.",
      features: ["Sales Channel Development", "Pricing & Business Modeling", "Customer Acquisition"]
    },
    {
      icon: "fas fa-rocket",
      title: "Scale & Spin-Out",
      description: "Transitioning successful ventures into independent entities with continued strategic support and capital access.",
      features: ["Independent Entity Setup", "Fundraising Support", "Exit Strategy Planning"]
    },
    {
      icon: "fas fa-shield-alt",
      title: "Centralized Legal & IP",
      description: "A shared services backbone that manages critical governance tasks, ensuring speed and consistency from day one.",
      features: ["Legal & Compliance Mgmt", "IP Protection", "Brand Identity Management"]
    },
    {
      icon: "fas fa-lightbulb",
      title: "Ideation & Validation",
      description: "Sourcing ideas from internal research and corporate challenges, then rigorously testing for problem-solution fit.",
      features: ["Rigorous Selection Framework", "Market Size Assessment", "Prototype Testing"]
    }
  ];

  const nextService = () => {
    setCurrentServiceIndex((prev) => prev === 0 ? 3 : 0);
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => prev === 0 ? 3 : 0);
  };

  const valueProps = [
    {
      icon: "fas fa-user-tie",
      category: "FOUNDERS & ENTREPRENEURS",
      title: "Accelerate & Scale",
      description: "We remove the chaos of early-stage building. Founders get validated ideas, operational muscle, and a clear path to funding without the typical startup chaos.",
      benefits: ["Faster Validation", "Shared Services", "Capital Pathways"]
    },
    {
      icon: "fas fa-industry",
      category: "CORPORATES", 
      title: "Innovate & Expand",
      description: "We act as an external innovation engine. Corporates can experiment with disruptive business models and spin-offs while protecting their core brand equity.",
      benefits: ["De-risked R&D", "Agile Execution", "New Revenue Streams"]
    },
    {
      icon: "fas fa-university",
      category: "GOVERNMENT & ACADEMIA",
      title: "Impact & Growth", 
      description: "We bridge the gap between research and market. Universities and governments partner with us to commercialize IP and drive regional economic development.",
      benefits: ["IP Commercialization", "Job Creation", "Talent Retention"]
    }
  ];

  return (
    <div className="inception">
      <section className="hero-section">
        <div id="particles-js"></div>
        <div className="container">
          <p className="vertical-label">VERTICAL 01</p>
          <h1 className={`hero-title ${animatedWords ? 'animated' : ''}`}>
            <span className="word yellow">Hatchlab</span>
            <span className="word white">Inception</span>
          </h1>
          <p className="hero-subtitle">The Venture Studio Incubator</p>
        </div>
      </section>

      <section className="intro-section section">
        <div className="container">
          <h2 className="section-title">Hatchlab Inception</h2>
          <p className="intro-description">
            The engine room of enterprise creation. We transform raw concepts into scalable businesses through a rigorous, hands-on process of validation, building, and launching.
          </p>
          
          <div className="intro-cards">
            <div className="intro-card">
              <div className="intro-card-icon">
                <i className="fas fa-hammer"></i>
              </div>
              <div className="intro-card-content">
                <h3>Incubation & Build</h3>
                <p>Providing the full stack of resources, engineering, design, product management to build MVPs and validate product-market fit.</p>
              </div>
            </div>
            
            <div className="intro-card">
              <div className="intro-card-icon">
                <i className="fas fa-building"></i>
              </div>
              <div className="intro-card-content">
                <h3>Corporate Venturing</h3>
                <p>Enabling established organizations to launch new subsidiaries and test business models, shielding core operations from risk.</p>
              </div>
            </div>
            
            <div className="intro-card">
              <div className="intro-card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="intro-card-content">
                <h3>Centralized Governance</h3>
                <p>Managing legal, IP protection, compliance, and brand identity centrally to ensure consistency and speed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section section">
        <div className="container">
          <h2 className="section-title">The Venture Building Process</h2>
          <p className="section-subtitle">A disciplined framework transforming ideas into scalable enterprises.</p>
          
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-header">
                  <div className="step-icon">
                    <i className={step.icon}></i>
                  </div>
                  <div className="step-number">{step.number}</div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-output">
                  <p className="output-label">Key Output</p>
                  <p className="output-title">{step.output}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section section">
        <div className="container">
          <div className="services-header">
            <h2 className="section-title">Services & Offerings</h2>
            <div className="services-nav">
              <button className="services-prev" onClick={prevService} aria-label="Previous service">
                <i className="bi bi-arrow-left-square"></i>
              </button>
              <button className="services-next" onClick={nextService} aria-label="Next service">
                <i className="bi bi-arrow-right-square"></i>
              </button>
            </div>
          </div>
          <p className="section-subtitle">Comprehensive venture studio capabilities from ideation to scale.</p>
          
          <div className="services-carousel">
            {services.slice(currentServiceIndex, currentServiceIndex + 3).map((service, index) => (
              <div key={currentServiceIndex + index} className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="value-section section">
        <div className="container">
          <h2 className="section-title">Value Proposition</h2>
          <p className="section-subtitle">Delivering tailored strategic advantages to every stakeholder in the innovation ecosystem.</p>
          
          <div className="grid-3">
            {valueProps.map((value, index) => (
              <div key={index} className="card value-card">
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <div className="value-content">
                  <h3 className="value-category">{value.category}</h3>
                  <h4 className="value-title">{value.title}</h4>
                  <p>{value.description}</p>
                  <ul className="value-benefits">
                    {value.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="outputs-section section">
        <div className="container">
          <h2 className="section-title">Key Outputs & Benefits</h2>
          <p className="section-subtitle">Tangible results and strategic advantages of our model.</p>
          
          <div className="outputs-content">
            <div className="deliverables-section">
              <h3 className="deliverables-title">
                <i className="fas fa-cube"></i>
                DELIVERABLES BY PHASE
              </h3>
              <div className="deliverables-grid">
                <div className="deliverable-card">
                  <div className="deliverable-icon">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <h4>Feasibility Report</h4>
                </div>
                <div className="deliverable-card">
                  <div className="deliverable-icon">
                    <i className="fas fa-flask"></i>
                  </div>
                  <h4>Validated Prototype</h4>
                </div>
                <div className="deliverable-card">
                  <div className="deliverable-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h4>Live Product (MVP)</h4>
                </div>
                <div className="deliverable-card">
                  <div className="deliverable-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <h4>Independent Entity</h4>
                </div>
              </div>
            </div>
            
            <div className="benefits-section">
              <h3 className="benefits-title">
                <i className="fas fa-star"></i>
                WHY BUILD WITH US
              </h3>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  <h4>VELOCITY</h4>
                  <p>Rapid Ideation-to-Launch cycles leveraging shared resources and validated frameworks to move fast.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h4>GOVERNANCE</h4>
                  <p>Centralized Legal & IP management ensures compliance and consistency from day one.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <i className="fas fa-expand-arrows-alt"></i>
                  </div>
                  <h4>FLEXIBILITY</h4>
                  <p>Clear pathways for ventures to spin-out as independent entities or seek acquisition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inception;