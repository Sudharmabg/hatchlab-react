import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [animatedWords, setAnimatedWords] = useState(false);
  const [currentInitiative, setCurrentInitiative] = useState(0);
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const initiatives = [
    {
      id: 1,
      title: "Techno India Manchester City Football School",
      leftImage: "/images/initiative/mancity_leftside.png",
      rightImage: "/images/initiative/mancity_rightside.png",
      content: "TIMCFS is Hatchlab's game-changing sports incubation project in collab with Techno India Group and Manchester City. More than a school, it's a talent launchpad—blending world-class coaching, academic support, and a parent-friendly progress dashboard.",
      className: ""
    },
    {
      id: 2,
      title: "Thoughtshop",
      leftImage: "/images/initiative/thoughtshop_leftside.png",
      rightImage: "/images/initiative/thoughtshop_rightside.png",
      content: "Thoughtshop is the design and storytelling arm of Hatchlab—where raw ideas are refined into compelling brands with purpose, personality, and visual impact. For emerging startups, building a strong foundation goes beyond a logo—it's about having a clear identity, authentic storytelling, and a consistent social presence.",
      className: "thoughtshop"
    },
    {
      id: 3,
      title: "The Retreat Darjeeling",
      leftImage: "/images/initiative/_RAH3609.jpg",
      rightImage: "/images/initiative/retreat_rightside.png",
      content: "The Retreat Darjeeling is a boutique stay nestled in the Eastern Himalayas, offering stunning views and rich cultural experiences. Hatchlab partnered to reimagine the property as a living model of sustainable, community-driven hospitality.",
      className: ""
    }
  ];

  const nextInitiative = () => {
    setCurrentInitiative((prev) => (prev + 1) % initiatives.length);
  };

  const prevInitiative = () => {
    setCurrentInitiative((prev) => (prev - 1 + initiatives.length) % initiatives.length);
  };

  useEffect(() => {
    // Animate hero words
    setTimeout(() => {
      setAnimatedWords(true);
    }, 500);

    // Initialize particles if available
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          color: { value: "#ffffff" },
          line_linked: { enable: true, color: "#ffffff" },
          move: { enable: true, speed: 2 }
        }
      });

      window.particlesJS("gallery-particles", {
        particles: {
          number: { value: 120 },
          size: { value: 3 },
          color: { value: "#ffffff" },
          line_linked: { enable: true, color: "#ffffff", opacity: 0.3 },
          move: { enable: true, speed: 1.5 },
          opacity: { value: 0.5 }
        }
      });
    }

    // Gallery flip animation
    const cards = Array.from(document.querySelectorAll('.team-member-card'));
    const dotsContainer = document.querySelector('.team-gallery-dots');
    if (cards.length) {
      let currentSet = 0;
      const isMobile = window.innerWidth <= 768;
      const itemsPerSet = isMobile ? 1 : 3;
      const totalSets = Math.ceil(cards.length / itemsPerSet);
      
      for (let i = 0; i < totalSets; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.addEventListener('click', () => showSet(i));
        dotsContainer.appendChild(dot);
      }
      
      const dots = document.querySelectorAll('.dot');
      
      function showSet(setIndex) {
        currentSet = setIndex;
        const start = setIndex * itemsPerSet;
        const end = start + itemsPerSet;
        
        cards.forEach((card, i) => {
          if (i >= start && i < end) {
            card.classList.add('active');
          } else {
            card.classList.remove('active');
          }
        });
        
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === setIndex);
        });
      }
      
      function next() {
        currentSet = (currentSet + 1) % totalSets;
        showSet(currentSet);
      }
      
      showSet(0);
      const interval = setInterval(next, 6000);
      
      // Auto-rotate 6 times then stop
      let rotationCount = 0;
      const maxRotations = 6;
      
      const rotationInterval = setInterval(() => {
        if (rotationCount < maxRotations) {
          next();
          rotationCount++;
        } else {
          clearInterval(rotationInterval);
        }
      }, 6000);

    // Auto-rotate initiatives every 5 seconds
    const initiativeInterval = setInterval(() => {
      setCurrentInitiative((prev) => (prev + 1) % initiatives.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(rotationInterval);
      clearInterval(initiativeInterval);
    };
    }
  }, [initiatives.length]);

  const whyCards = [
    {
      icon: "fas fa-link",
      title: "Integrated Platform",
      description: "A unified ecosystem uniting incubation, investment, and advisory services. We eliminate silos to create a seamless journey from ideation to scale."
    },
    {
      icon: "fas fa-cogs",
      title: "ECaaS Model",
      description: "Enterprise Creation as a Service allows partners to leverage our full platform's capabilities, accelerating time-to-market at any lifecycle stage."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Institutional Governance",
      description: "Rigorous risk management, transparent processes, and robust investment committees de-risk growth and protect stakeholder value from day one."
    },
    {
      icon: "fas fa-gem",
      title: "Curated Deal Flow",
      description: "Proprietary access to high-quality, validated ventures emerging directly from our incubator studio, reducing early-stage investment blind spots."
    },
    {
      icon: "fas fa-chess-knight",
      title: "Strategy to Execution",
      description: "We don't just advise; we build. Hatchlab ONE bridges the gap between high-level strategy and on-the-ground operational reality."
    },
    {
      icon: "fas fa-coins",
      title: "Access to Capital",
      description: "A diversified financial backbone providing venture capital, private equity, and structured finance to fuel growth at every maturity level."
    }
  ];

  const pillars = [
    {
      icon: "fas fa-rocket",
      title: "HATCHLAB INCEPTION",
      description: "Conceives, validates, and launches new ventures through a structured ideation-to-scale process.",
      details: ["Ideation & Selection", "Validation & Prototyping", "Product Build", "Scale & Spin-out"]
    },
    {
      icon: "fas fa-chart-line",
      title: "HATCHLAB VENTURES",
      description: "Provides the financial backbone for ventures across VC, PE, and structured finance platforms.",
      details: ["Venture Capital", "Private Equity", "Institutional Investment", "Strategic Partnerships"]
    },
    {
      icon: "fas fa-cog",
      title: "HATCHLAB ONE",
      description: "Full-service consultancy driving growth through strategy, brand, and operational excellence.",
      details: ["Innovation Strategy", "Brand & Digital", "Operations Excellence", "Managed Services"]
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div id="particles-js"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <div className="line">
              <span className={`word white ${animatedWords ? 'bouncing' : ''}`}>Where</span>
              <span className={`word white ${animatedWords ? 'bouncing' : ''}`}>Big</span>
              <span className={`word yellow ${animatedWords ? 'bouncing' : ''}`}>Ideas</span>
              <span className={`word white ${animatedWords ? 'bouncing' : ''}`}>Meet</span>
            </div>
            <div className="line">
              <span className={`word white ${animatedWords ? 'bouncing' : ''}`}>Cool</span>
              <span className={`word yellow ${animatedWords ? 'bouncing' : ''}`}>Tech</span>
              <span className={`word white ${animatedWords ? 'bouncing' : ''}`}>&</span>
              <span className={`word yellow ${animatedWords ? 'bouncing' : ''}`}>Pro</span>
              <span className={`word white ${animatedWords ? 'bouncing' : ''}`}>Guidance</span>
            </div>
          </h1>
          <p className="hero-subtitle">Building the Future of Enterprises</p>
          <Link to="/contact" className="btn-primary hero-btn">
            Connect With Us
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section">
        <div className="container">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
            The pace of economic change has accelerated dramatically. Digitalisation, geopolitics, and demographic shifts are
            reshaping industries, and both start-ups and established corporations must innovate to survive. Yet innovation
            requires more than bright ideas; it demands structured execution, access to capital, strategic guidance, and
            operational excellence.<br /><br />
            Hatchlab Innovations is an integrated platform for enterprise creation. Through Enterprise Creation as a Service (ECaaS), we combine a start-up studio, a diversified investment arm, and a modern consultancy so entrepreneurs, executives, and investors can create, finance, and scale ventures with confidence.
            <Link to="/about" className="read-more"> Read More</Link>
          </p>
        </div>
      </section>

      {/* Why Hatchlab Section */}
      <section className="why-section section">
        <div className="container">
          <h2 className="section-title">Why Hatchlab?</h2>
          <p className="section-subtitle">Our strategic differentiators in enterprise creation.</p>
          <div className="grid-2">
            {whyCards.map((card, index) => (
              <div key={index} className="card why-card">
                <div className="why-card-icon">
                  <i className={card.icon} style={{color: '#FFFF00'}}></i>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="pillars-section section">
        <div className="container">
          <h2 className="section-title">Three Pillars of Hatchlab Innovations</h2>
          <p className="section-subtitle">Distinct verticals united under one organization.</p>
          
          <div className="grid-3">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="card pillar-card"
                style={{
                  backgroundImage: `url(/images/what-we-do/${index === 0 ? 'udyog.png' : index === 1 ? 'investment-arm.png' : 'business-consultancy.png'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
                onMouseEnter={() => setHoveredPillar(index)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                <div className="pillar-card-icon">
                  <i className={pillar.icon} style={{color: '#FFFF00'}}></i>
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
                <div className={`pillar-details ${hoveredPillar === index ? 'show' : ''}`}>
                  <ul>
                    {pillar.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <Link to={index === 0 ? "/inception" : "/services"} className="arrow-btn">➜</Link>
              </div>
            ))}
          </div>
          
          <div className="pillars-footer">
            <p>
              <strong>INTEGRATED BY ECaaS:</strong> Enterprise Creation as a Service is the operating framework that connects these pillars to accelerate value creation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Initiatives Section */}
      <section className="initiatives-section section">
        <div className="container">
          <div className="initiative-header">
            <h2 className="initiative-title">Our Initiatives</h2>
            <div className="initiative-nav">
              <button className="initiative-prev" onClick={prevInitiative} aria-label="Previous initiative">
                <i className="bi bi-arrow-left-square"></i>
              </button>
              <button className="initiative-next" onClick={nextInitiative} aria-label="Next initiative">
                <i className="bi bi-arrow-right-square"></i>
              </button>
            </div>
          </div>

          <div className="initiative-carousel">
            {initiatives.map((initiative, index) => (
              <div 
                key={initiative.id} 
                className={`initiative-item ${initiative.className} ${index === currentInitiative ? 'active' : ''}`}
              >
                <div className="initiative-image">
                  <h2 className="initiative-item-title main-initiative-heading">
                    {initiative.title}
                  </h2>
                  <div className="initiative-images">
                    <div className="card-image">
                      <img className="breathing-image" src={initiative.leftImage} alt={`${initiative.title} left side`} />
                    </div>
                  </div>
                </div>
                <div className="initiative-text">
                  <div className="initiative-second-box">
                    <div className="initiative-image initiative-right-img">
                      <img className="breathing-image" src={initiative.rightImage} alt={`${initiative.title} right side`} />
                    </div>
                    <div className="initiative-content">
                      {initiative.content}
                      <br />
                      <div className="initiative-button">
                        <Link to="#" className="initiative-btn">Explore More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="team-gallery">
        <div id="gallery-particles"></div>
        <h2 className="team-gallery-title">Gallery</h2>
        <div className="team-gallery-track">
          <div className="team-member-card"><img src="/images/gallery/gallery-1.jfif" alt="Team 1" /></div>
          <div className="team-member-card"><img src="/images/gallery/gallery-2.jfif" alt="Team 2" /></div>
          <div className="team-member-card"><img src="/images/gallery/gallery-3.jfif" alt="Team 3" /></div>
          <div className="team-member-card"><img src="/images/gallery/gallery-4.jfif" alt="Team 4" /></div>
          <div className="team-member-card"><img src="/images/gallery/gallery-5.jfif" alt="Team 5" /></div>
          <div className="team-member-card"><img src="/images/gallery/gallery-6.jfif" alt="Team 6" /></div>
        </div>
        <div className="team-gallery-dots"></div>
      </section>
    </div>
  );
};

export default Home;