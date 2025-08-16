import React, { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState({
    header: false,
    cards: false,
    values: false
  });

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(prev => ({...prev, header: true})), 300);
    const timer2 = setTimeout(() => setIsVisible(prev => ({...prev, cards: true})), 700);
    const timer3 = setTimeout(() => setIsVisible(prev => ({...prev, values: true})), 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const teamMembers = [
    {
      name: "Zain Khan",
      role: "Founder & Travel Guide",
      image: "/Assets/team member 3.avif",
      description: "With 10+ years exploring Pakistan's northern regions, Sarah founded Mountain Escape to share her passion for adventure tourism.",
      expertise: "Mountain Trekking, Local Culture"
    },
    {
      name: "Ahmed Ali",
      role: "Photography & Content",
      image: "/Assets/team member 7.jpg",
      description: "Professional photographer capturing the stunning landscapes and authentic moments of northern Pakistan's hidden gems.",
      expertise: "Landscape Photography, Storytelling"
    },
    {
      name: "Farhan Ahmed", 
      role: "Travel Coordinator",
      image: "/Assets/team member 5.jpg",
      description: "Expert in logistics and local connections, ensuring every journey is safe, comfortable, and unforgettable.",
      expertise: "Route Planning, Safety Management"
    },
    {
      name: "Hassan Malik",
      role: "Cultural Ambassador", 
      image: "/Assets/team member 6.jpg",
      description: "Born in Hunza Valley, Hassan bridges travelers with local communities, promoting sustainable and respectful tourism.",
      expertise: "Local Communities, Sustainable Tourism"
    }
  ];

  const coreValues = [
    {
      icon: '🏔️',
      title: 'Mountain Excellence',
      description: 'Expert-led expeditions to Pakistan\'s most spectacular peaks and valleys',
      color: 'gradient-blue'
    },
    {
      icon: '🌿',
      title: 'Eco-Responsible',
      description: 'Preserving natural beauty for future generations of adventurers',
      color: 'gradient-green'
    },
    {
      icon: '🤝',
      title: 'Local Partnership',
      description: 'Authentic connections with indigenous communities and local guides',
      color: 'gradient-orange'
    },
    {
      icon: '🛡️',
      title: 'Safety Priority',
      description: 'Comprehensive safety protocols and emergency preparedness systems',
      color: 'gradient-purple'
    }
  ];

  return (
    <div>
      <div className="abovepart">
        <div className="imagemain">
          <img src="/Assets/about main image.jpg" alt="Northern Wonders" />
        </div>
        <div id="maintext">
          We are a travel company focused on mountain adventures
        </div>
      </div>

      <div className="aboutsection">
        <div className="headingabout">
          <h1>About Us</h1>
        </div>
        <div className="aboutus">
          <div className="leftside">
            <div className="whowe">
              <h3>
                <strong>Who we are</strong>
              </h3>
              <p>
                We are a small, passionate team dedicated to showcasing the
                breathtaking beauty of Pakistan's Northern Areas, its rich local
                culture, and practical travel tips for safe and enjoyable
                journeys. Our mission is to inspire more people to discover
                these hidden gems — responsibly and respectfully.
              </p>
            </div>
            <div className="whatwedo">
              <div className="whowe">
                <h3>
                  <strong>What we do</strong>
                </h3>
              </div>
              <ul>
                <li>
                  Provide detailed travel guides (routes, permits, best seasons)
                </li>
                <li>
                  Share photo stories and practical tips (transportation,
                  accommodation, safety)
                </li>
                <li>
                  Highlight local communities and promote sustainable tourism
                </li>
              </ul>
            </div>
          </div>
          <div className="rightside">
            <img src="/Assets/Arang Kel.png" alt="Arang Kel" />
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="meetteam">
          <div className="headingabout">
            <h1>Meet the Team</h1>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-image"
                  />
                  <div className="team-overlay">
                    <div className="team-expertise">
                      <span>{member.expertise}</span>
                    </div>
                  </div>
                </div>
                
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <h4 className="team-role">{member.role}</h4>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

          <div className="mission-vision-container">
          <div className="headingabout">
            <h1>Mission & Vision</h1>
          </div>

          <div className="mission-vision-cards">
            <div className={`mv-card mission-card ${isVisible.cards ? 'animate-in' : ''}`}>
              <div className="card-header">
                <div className="card-icon mission-icon">
                  <div className="icon-inner">🚀</div>
                  <div className="icon-rings">
                    <div className="ring ring-1"></div>
                    <div className="ring ring-2"></div>
                    <div className="ring ring-3"></div>
                  </div>
                </div>
                <div className="card-badge">Mission</div>
              </div>
              
              <div className="card-body">
                <h2 className="card-title">Pioneering Pakistan's Northern Adventures</h2>
                <p className="card-description">
                  To showcase the breathtaking beauty of Pakistan's Northern Areas through safe, 
                  sustainable, and culturally respectful travel experiences that connect adventurers 
                  with the majestic landscapes of Hunza, Skardu, and Gilgit-Baltistan.
                </p>
                
                <div className="mission-highlights">
                  <div className="highlight-item">
                    <div className="highlight-icon">⭐</div>
                    <div className="highlight-text">
                      <h4>Expert Northern Expeditions</h4>
                      <p>Local guides with deep knowledge of K2, Nanga Parbat, and hidden valleys</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🌱</div>
                    <div className="highlight-text">
                      <h4>Preserve Mountain Beauty</h4>
                      <p>Eco-friendly tourism protecting pristine landscapes of Northern Pakistan</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🏘️</div>
                    <div className="highlight-text">
                      <h4>Support Local Communities</h4>
                      <p>Direct partnerships with Hunza, Baltistan, and Chitral communities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`mv-card vision-card ${isVisible.cards ? 'animate-in' : ''}`}>
              <div className="card-header">
                <div className="card-icon vision-icon">
                  <div className="icon-inner">🌟</div>
                  <div className="icon-particles">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                    <div className="particle particle-5"></div>
                  </div>
                </div>
                <div className="card-badge">Vision</div>
              </div>
              
              <div className="card-body">
                <h2 className="card-title">Pakistan's Northern Crown by 2030</h2>
                <p className="card-description">
                  To establish Pakistan's Northern Areas as the world's most sought-after mountain 
                  destination, making Hunza Valley, Fairy Meadows, and Deosai Plains household 
                  names among global adventure travelers.
                </p>
                
                <div className="vision-goals">
                  <div className="goal-stat">
                    <div className="stat-number">50K+</div>
                    <div className="stat-label">Annual Visitors</div>
                  </div>
                  <div className="goal-stat">
                    <div className="stat-number">25+</div>
                    <div className="stat-label">Northern Destinations</div>
                  </div>
                  <div className="goal-stat">
                    <div className="stat-number">100+</div>
                    <div className="stat-label">Local Partners</div>
                  </div>
                </div>
                
                <div className="vision-timeline">
                 <div className="timeline-item">
  <div className="timeline-year">2025</div>
  <div className="timeline-goal">Launch Hunza & Skardu Premium Packages</div>
</div>
<div className="timeline-item">
  <div className="timeline-year">2026</div>
  <div className="timeline-goal">Mobile App Development & Digital Marketing</div>
</div>
<div className="timeline-item">
  <div className="timeline-year">2027</div>
  <div className="timeline-goal">Expand to Chitral & Kalash Valleys</div>
</div>
<div className="timeline-item">
  <div className="timeline-year">2028</div>
  <div className="timeline-goal">Adventure Tourism & Corporate Packages</div>
</div>
<div className="timeline-item">
  <div className="timeline-year">2029</div>
  <div className="timeline-goal">International Partnerships</div>
</div>
<div className="timeline-item">
  <div className="timeline-year">2030</div>
  <div className="timeline-goal">Leading Northern Pakistan Tourism Brand</div>
</div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="core-values-section">
            <div className={`values-header ${isVisible.values ? 'animate-in' : ''}`}>
              <h2 className="values-title">
                <span className="title-decoration"></span>
                Core Values That Drive Us
                <span className="title-decoration"></span>
              </h2>
              <p className="values-subtitle">
                These principles guide every adventure we craft and every relationship we build
              </p>
            </div>
            
            <div className="values-grid">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  className={`value-card ${value.color} ${isVisible.values ? 'animate-in' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="value-icon-container">
                    <div className="value-icon">{value.icon}</div>
                    <div className="icon-ripple"></div>
                  </div>
                  
                  <div className="value-content">
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </div>
                  
                  <div className="value-hover-effect"></div>
                </div>
              ))}
            </div>
          </div>


          <div className="cta-section">
            <div className="cta-content">
              <h3 className="cta-title">Ready for Your Next Adventure?</h3>
              <p className="cta-subtitle">Join thousands of adventurers who've discovered Pakistan's hidden gems with us</p>
              
              <div className="cta-buttons">
                <button className="cta-primary">
                  <span className="btn-icon"></span>
                  <span className="btn-text">Explore Expeditions</span>
                  <div className="btn-shine"></div>
                </button>
                
                <button className="cta-secondary">
                  <span className="btn-icon"></span>
                  <span className="btn-text">Plan Your Journey</span>
                </button>
              </div>
            </div>
            
            <div className="cta-stats">
              <div className="stat-item">
                <div className="stat-value">15K+</div>
                <div className="stat-label">Happy Adventurers</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">98%</div>
                <div className="stat-label">Safety Record</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-value">200+</div>
                <div className="stat-label">Peaks Conquered</div>
              </div>
            </div>
          </div>  */}
        </div>
      </div> 
    </div>
  );
}