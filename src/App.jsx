
import React, { useState, useEffect } from 'react'
import './App.css'
import codeVaultLogo from './my-assets/Code-Vault-Logo.png'
import tcsLogo from './my-assets/TCS.png'
import kdemLogo from './my-assets/KDEM.png'
import csbsLogo from './my-assets/CSBS-Logo.png'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalStep, setModalStep] = useState('college') // 'college' or 'registration'
  const [selectedCollege, setSelectedCollege] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const openModal = () => {
    setIsModalOpen(true)
    setModalStep('college')
    setSelectedCollege('')
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalStep('college')
    setSelectedCollege('')
  }

  const handleCollegeSelection = (college) => {
    setSelectedCollege(college)
    setModalStep('registration')
  }

  const goBackToCollegeSelection = () => {
    setModalStep('college')
    setSelectedCollege('')
  }

  return (
    <div className="App">
      {/* Background Animation */}
      <div className="background-animation">
        <div className="circuit-lines"></div>
        <div className="floating-shape circle"></div>
        <div className="floating-shape square"></div>
        <div className="floating-shape circle"></div>
        <div className="floating-shape square"></div>
        <div className="floating-shape circle"></div>
        <div className="floating-shape triangle"></div>
        <div className="code-particles">{'{ }'}</div>
        <div className="code-particles">{'console.log()'}</div>
        <div className="code-particles">{'AI.predict()'}</div>
        <div className="code-particles">{'[...array]'}</div>
        <div className="orbit-container">
          <div className="orbit-particle"></div>
          <div className="orbit-particle"></div>
          <div className="orbit-particle"></div>
        </div>
        <div className="ai-elements">AI.train()</div>
        <div className="ai-elements">model.predict()</div>
        <div className="ai-elements">neural_network()</div>
        <div className="ai-elements">deep_learning</div>
        <div className="neural-network">
          <div className="neural-node" style={{ top: '10px', left: '10px' }}></div>
          <div className="neural-node" style={{ top: '30px', left: '5px' }}></div>
          <div className="neural-node" style={{ top: '50px', left: '15px' }}></div>
          <div className="neural-node" style={{ top: '15px', left: '60px' }}></div>
          <div className="neural-node" style={{ top: '35px', left: '65px' }}></div>
          <div className="neural-node" style={{ top: '55px', left: '70px' }}></div>
          <div className="neural-node" style={{ top: '25px', right: '10px' }}></div>
          <div className="neural-node" style={{ top: '45px', right: '5px' }}></div>
          <div className="neural-connection" style={{ top: '15px', left: '18px', width: '42px', transform: 'rotate(5deg)' }}></div>
          <div className="neural-connection" style={{ top: '35px', left: '13px', width: '52px', transform: 'rotate(-10deg)' }}></div>
          <div className="neural-connection" style={{ top: '55px', left: '23px', width: '47px', transform: 'rotate(15deg)' }}></div>
          <div className="neural-connection" style={{ top: '20px', left: '68px', width: '42px', transform: 'rotate(-5deg)' }}></div>
          <div className="neural-connection" style={{ top: '40px', left: '73px', width: '32px', transform: 'rotate(10deg)' }}></div>
        </div>
        <div className="neural-network">
          <div className="neural-node" style={{ top: '20px', left: '15px' }}></div>
          <div className="neural-node" style={{ top: '40px', left: '10px' }}></div>
          <div className="neural-node" style={{ top: '60px', left: '20px' }}></div>
          <div className="neural-node" style={{ top: '25px', left: '70px' }}></div>
          <div className="neural-node" style={{ top: '45px', left: '75px' }}></div>
          <div className="neural-node" style={{ top: '35px', right: '15px' }}></div>
          <div className="neural-connection" style={{ top: '25px', left: '23px', width: '47px', transform: 'rotate(-8deg)' }}></div>
          <div className="neural-connection" style={{ top: '45px', left: '18px', width: '57px', transform: 'rotate(12deg)' }}></div>
          <div className="neural-connection" style={{ top: '30px', left: '78px', width: '27px', transform: 'rotate(-15deg)' }}></div>
        </div>
        <div className="data-stream">01101001 01100001</div>
        <div className="data-stream">tensorflow.keras</div>
        <div className="data-stream">numpy.array([...])</div>
        <div className="ml-symbols">🤖</div>
        <div className="ml-symbols">⚡</div>
        <div className="ml-symbols">🧠</div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={codeVaultLogo} alt="Code Vault Logo" className="logo-icon-img" />
            <span className="logo-text">Code Vault</span>
          </div>
          <div className="nav-links desktop-nav">
            <a href="#about">About</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#instructions">Instructions</a>
            <a href="#guidelines">Guidelines</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="mobile-nav">
            <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              ☰
            </button>
            <div className={`mobile-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#sponsors" onClick={() => setIsMobileMenuOpen(false)}>Sponsors</a>
              <a href="#instructions" onClick={() => setIsMobileMenuOpen(false)}>Instructions</a>
              <a href="#guidelines" onClick={() => setIsMobileMenuOpen(false)}>Guidelines</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className={`hero-logo ${isVisible.hero ? 'fade-in' : ''}`}>
            <img src={codeVaultLogo} alt="Code Vault Logo" className="hero-icon-img" />
          </div>
          <h1 className={`hero-title ${isVisible.hero ? 'fade-in-up' : ''}`}>
            Code Vault
          </h1>
          <p className={`hero-tagline ${isVisible.hero ? 'fade-in-up delay-1' : ''}`}>
            Unlock the Future of AI Innovation
          </p>
          <div className={`hero-details ${isVisible.hero ? 'fade-in-up delay-2' : ''}`}>
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <span>19th & 20th September 2025</span>
            </div>
            <div className="detail-item prize-pool">
              <span className="detail-icon">💰</span>
              <span>Prize Pool: ₹50,000</span>
            </div>
          </div>
          <button className={`cta-button ${isVisible.hero ? 'fade-in-up delay-3' : ''}`} onClick={openModal}>
            Register Now
          </button>
          <p className={`limited-seats-hero ${isVisible.hero ? 'fade-in-up delay-4' : ''}`}>
            ⚡ Limited seats available!
          </p>
        </div>
      </section>

      {/* Sponsors Preview */}
      <section className="sponsors-preview" id="sponsors-preview">
        <div className="container">
          <h3 style={{ fontWeight: 'bold' }}>Powered By</h3>
          <div className="sponsors-grid">
            <div className="sponsor-card floating">
              <div className="sponsor-logo-container">
                <img src={tcsLogo} alt="TCS Logo" className="sponsor-logo-img" />
                <div className="sponsor-logo">Tata Consultancy Services</div>
              </div>
            </div>
            <div className="sponsor-card floating delay-1">
              <div className="sponsor-logo-container">
                <img src={kdemLogo} alt="KDEM Logo" className="sponsor-logo-img" />
                <div className="sponsor-logo">Karnataka Digital Economy Mission</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className={`section-title scroll-fade-in ${isVisible.about ? 'visible' : ''}`}>
            About
          </h2>
          <div className={`about-content scroll-fade-in ${isVisible.about ? 'visible' : ''}`}>
            <p>
              Code Vault is a premier AI-themed hackathon designed to bring together the brightest minds
              in technology. Over 24 hours, participants will tackle real-world challenges using cutting-edge
              artificial intelligence and machine learning technologies.
            </p>
            <p>
              Whether you're a seasoned developer or just starting your coding journey, Code Vault provides
              the perfect platform to innovate, learn, and compete for amazing prizes while networking with
              industry professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="register-cta" id="register">
        <div className="container">
          <h2 className={`cta-title ${isVisible.register ? 'fade-in-up' : ''}`}>
            Ready to Code the Future?
          </h2>
          <button className={`cta-button large ${isVisible.register ? 'fade-in-up delay-1' : ''}`} onClick={openModal}>
            Register Now
          </button>
          <div className={`pricing-info ${isVisible.register ? 'fade-in-up delay-2' : ''}`}>
            <p className="pricing-amount">₹ 1,200 per team</p>
            <p className="limited-seats">⚡ Limited seats only!</p>
            <p className="meals-info">🍽️ Full meals and snacks provided throughout the event</p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors" id="sponsors">
        <div className="container">
          <h2 className={`section-title scroll-fade-in ${isVisible.sponsors ? 'visible' : ''}`}>
            Our Sponsors
          </h2>
          <div className="sponsors-grid">
            <div className={`sponsor-card large scroll-fade-in-left ${isVisible.sponsors ? 'visible' : ''}`}>
              <div className="sponsor-logo-container">
                <img src={tcsLogo} alt="TCS Logo" className="sponsor-logo-img large" />
                <div className="sponsor-logo">Tata Consultancy Services</div>
              </div>
              <p>Global IT Services & Consulting</p>
              <div className="sponsor-details">
                <p>A global powerhouse in IT and consulting, delivering cutting-edge solutions that empower enterprises worldwide.</p>
              </div>
            </div>
            <div className={`sponsor-card large scroll-fade-in-right ${isVisible.sponsors ? 'visible' : ''}`}>
              <div className="sponsor-logo-container">
                <img src={kdemLogo} alt="KDEM Logo" className="sponsor-logo-img large" />
                <div className="sponsor-logo">Karnataka Digital Economy Mission</div>
              </div>
              <p>Digital Innovation & Economic Growth</p>
              <div className="sponsor-details">
                <p>Catalyst for Karnataka's growth as a global hub for technology, startups, and digital transformation.</p>
              </div>
            </div>
          </div>
          <div className={`become-sponsor scroll-scale-in ${isVisible.sponsors ? 'visible' : ''}`}>
            <h3>Want to Sponsor?</h3>
            <a href="https://forms.gle/nyEmBiYBCwm62Erm9" className="sponsor-button" target="_blank" rel="noopener noreferrer">
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>

      {/* Event Instructions Section */}
      <section className="instructions" id="instructions">
        <div className="container">
          <h2 className={`section-title scroll-fade-in ${isVisible.instructions ? 'visible' : ''}`}>
            Event Instructions
          </h2>
          <div className="instructions-grid">
            <div className={`instruction-card scroll-fade-in ${isVisible.instructions ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="instruction-icon">📋</div>
              <h4>Registration</h4>
              <p>To confirm your team's entry, complete the online registration process by filling in your team details, paying the fee of ₹1,200 per team, and uploading the payment receipt. Registration is strictly available only through this website.</p>
            </div>
            <div className={`instruction-card scroll-fade-in ${isVisible.instructions ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="instruction-icon">👥</div>
              <h4>Team Setup</h4>
              <p>Team formation is mandatory with a minimum of 2 and a maximum of 4 members. Solo registrations are not allowed.</p>
            </div>
            <div className={`instruction-card scroll-fade-in ${isVisible.instructions ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <div className="instruction-icon">✅</div>
              <h4>Check-in</h4>
              <p>All participants must be present by 9:00 AM on September 19th, with a valid college ID (mandatory), laptop, and the required chargers.</p>
            </div>
            <div className={`instruction-card scroll-fade-in ${isVisible.instructions ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="instruction-icon">🎯</div>
              <h4>Problem Release</h4>
              <p>The hackathon's AI-based problem statements will be disclosed at the start of the event, and teams will pick the challenge they want to pursue.</p>
            </div>
            <div className={`instruction-card scroll-fade-in ${isVisible.instructions ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
              <div className="instruction-icon">⚡</div>
              <h4>Coding Marathon</h4>
              <p>24-hour development phase with mentorship available. Meals, snacks, and refreshments provided throughout.</p>
            </div>
            <div className={`instruction-card scroll-fade-in ${isVisible.instructions ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
              <div className="instruction-icon">📝</div>
              <h4>Original Work</h4>
              <p>Projects must be original work created during the hackathon. Using pre-built solutions is not allowed.</p>
            </div>
            <div className={`instruction-card scroll-fade-in ${isVisible.instructions ? 'visible' : ''}`} style={{ transitionDelay: '0.7s' }}>
              <div className="instruction-icon">⚠️</div>
              <h4>Disciplinary Clause</h4>
              <p>All participants are expected to maintain professionalism at all times. Any form of harassment or violation of rules will lead to immediate disqualification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Guidelines Section */}
      <section className="guidelines" id="guidelines">
        <div className="container">
          <h2 className={`section-title scroll-fade-in ${isVisible.guidelines ? 'visible' : ''}`}>
            Rules & Guidelines
          </h2>

          <div className="rules-section">
            <div className={`rules-card scroll-fade-in-left ${isVisible.guidelines ? 'visible' : ''}`}>
              <h3>🔧 Allowed Technologies</h3>
              <ul>
                <li>Any programming language</li>
                <li>Open-source libraries & frameworks</li>
                <li>Pre-existing datasets</li>
                <li>Cloud services</li>
              </ul>
            </div>

            <div className={`rules-card scroll-fade-in-right ${isVisible.guidelines ? 'visible' : ''}`}>
              <h3>📊 Evaluation Criteria</h3>
              <ul>
                <li><strong>Innovation & Creativity</strong></li>
                <li><strong>Technical Implementation</strong></li>
                <li><strong>Problem-solving Approach</strong></li>
                <li><strong>Presentation Quality</strong></li>
              </ul>
            </div>
          </div>


        </div>
      </section>

      {/* Location Section */}
      <section className="location" id="location">
        <div className="container">
          <h2 className={`section-title scroll-fade-in ${isVisible.location ? 'visible' : ''}`}>
            Event Location
          </h2>
          <div className="location-content">
            <div className={`map-container scroll-fade-in-left ${isVisible.location ? 'visible' : ''}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.246846517663!2d76.6887613!3d12.366390599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf71273625ff79%3A0xe21bc942801a6077!2sMaharaja%20Institute%20of%20Technology%20Mysore!5e0!3m2!1sen!2sin!4v1755758376777!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Location"
              ></iframe>
            </div>
            <div className={`location-details scroll-fade-in-right ${isVisible.location ? 'visible' : ''}`}>
              <h4>📍 Venue Details</h4>
              <p>MIT Mysore Campus<br />Dept. of CS & BS<br />Mysore, Karnataka</p>
              <a href="https://maps.app.goo.gl/4FbkurwRPMw5TFEJ7?g_st=aw" className="directions-button" target="_blank" rel="noopener noreferrer">
                🗺️ Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className={`section-title scroll-fade-in ${isVisible.contact ? 'visible' : ''}`}>
            Contact Us
          </h2>
          <div className={`contact-intro scroll-fade-in ${isVisible.contact ? 'visible' : ''}`}>
            <p>Have questions? Need assistance? We're here to help you unlock your potential.</p>
          </div>
          <div className="contact-grid">
            <div className={`contact-card scroll-fade-in-left ${isVisible.contact ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="contact-card-header">
                <div className="contact-icon-wrapper">
                  <span className="contact-icon">📧</span>
                </div>
                <h4>Email Us</h4>
              </div>
              <div className="contact-card-content">
                <a href="mailto:codevault2025.csbs@gmail.com">codevault2025.csbs@gmail.com</a>
              </div>
            </div>

            <div className={`contact-card scroll-fade-in ${isVisible.contact ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="contact-card-header">
                <div className="contact-icon-wrapper">
                  <span className="contact-icon">📱</span>
                </div>
                <h4>Call Us</h4>
              </div>
              <div className="contact-card-content">
                <div className="contact-person">
                  <a href="tel:+918867174310">+91 8867174310</a>
                  <p className="contact-name">Shubham Singh</p>
                </div>
                <div className="contact-person">
                  <a href="tel:+919019109045">+91 9019109045</a>
                  <p className="contact-name">Vaibhav N</p>
                </div>
              </div>
            </div>


          </div>

          <div className={`contact-cta scroll-scale-in ${isVisible.contact ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <div className="contact-cta-content">
              <h3>Ready to Join the Revolution?</h3>
              <p>Don't miss out on this incredible opportunity to showcase your skills and network with industry leaders.</p>
              <button className="cta-button" onClick={openModal}>
                Register for Code Vault
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="dept-logo">
                <img src={csbsLogo} alt="CSBS Logo" className="dept-logo-img" />
                <div className="dept-info">
                  <h4>Department of Computer Science & Business System</h4>
                  <p>MIT Mysore</p>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="footer-social">
                <a href="https://www.instagram.com/csbs_fam" className="footer-social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
                <a href="https://www.linkedin.com/company/csbs-mitm/" className="footer-social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Code Vault. All rights reserved.</p>
            <p className='footer-dept-name'>Department of Computer Science & Business System - MIT Mysore </p>
          </div>
        </div>
      </footer>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>

            {modalStep === 'college' && (
              <>
                <h3>Registration</h3>
                <p>We're excited to have participants from various colleges join us. Students from MIT Mysore will have a separate registration process.</p>
                <p><strong>Are you from:</strong></p>
                <div className="modal-buttons">
                  <button className="modal-button" onClick={() => handleCollegeSelection('MIT Mysore')}>
                    MIT Mysore
                  </button>
                  <button className="modal-button" onClick={() => handleCollegeSelection('Other College')}>
                    Other College
                  </button>
                </div>
              </>
            )}

            {modalStep === 'registration' && (
              <>
                <button className="modal-back" onClick={goBackToCollegeSelection}>← Back</button>
                <h3>Registration - {selectedCollege}</h3>
                <p>
                  {selectedCollege === 'MIT Mysore'
                    ? "Great! As an MIT Mysore student, you'll have a streamlined registration process."
                    : "Welcome! We're excited to have participants from various colleges join us for this amazing hackathon experience."
                  }
                </p>
                <div className="modal-buttons">
                  <a
                    href={selectedCollege === 'MIT Mysore'
                      ? "https://forms.gle/hMhbduqnxqSRh2p16"
                      : "https://forms.gle/H894EhMXrZu69LAbA"
                    }
                    className="modal-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Registration Form
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
