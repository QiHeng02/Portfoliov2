import React from 'react';
import { Mail, Linkedin, Github, ExternalLink, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      width: '100%',
      background: 'linear-gradient(180deg, transparent 0%, rgba(46, 47, 48, 0.8) 100%)',
      color: '#ffffff',
      padding: '40px 40px 40px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '60px',
        alignItems: 'start',
        marginTop: '-20px'
      }}>
        
        {/* Thank You Message */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '0',
            color: '#ffffff'
          }}>
            Thanks for stopping by!
          </h3>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            margin: '0',
            color: '#cccccc'
          }}>
          </p>
        </div>

        {/* Quick Navigation */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h4 style={{
            fontSize: '1.2rem',
            fontWeight: '500',
            margin: '0',
            color: '#ffffff'
          }}>
            Navigation
          </h4>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <button
              onClick={() => scrollToSection('home')}
              style={{
                background: 'none',
                border: 'none',
                color: '#cccccc',
                fontSize: '1rem',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '0',
                transition: 'color 0.3s ease',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#cccccc'}
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection('gallery')}
              style={{
                background: 'none',
                border: 'none',
                color: '#cccccc',
                fontSize: '1rem',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '0',
                transition: 'color 0.3s ease',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#cccccc'}
            >
              Portfolio
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              style={{
                background: 'none',
                border: 'none',
                color: '#cccccc',
                fontSize: '1rem',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '0',
                transition: 'color 0.3s ease',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#cccccc'}
            >
              About
            </button>
            <button
              onClick={scrollToTop}
              style={{
                background: 'none',
                border: 'none',
                color: '#cccccc',
                fontSize: '1rem',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '0',
                paddingBottom: '10px',
                transition: 'color 0.3s ease',
                fontFamily: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#cccccc'}
            >
              <ArrowUp size={14} />
              Back to Top
            </button>
          </nav>
        </div>

        {/* Contact & Social Links */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h4 style={{
            fontSize: '1.2rem',
            fontWeight: '500',
            margin: '0',
            color: '#ffffff'
          }}>
            Let's Connect
          </h4>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <a
              href="mailto:awqi0002@e.ntu.edu.sg"
              style={{
                color: '#cccccc',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '1rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#cccccc'}
            >
              <Mail size={20} />
              Email
            </a>
            <a
              href="https://linkedin.com/in/aw-qi-heng-85188a274/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#cccccc',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '1rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#cccccc'}
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/QiHeng02"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#cccccc',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '1rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#cccccc'}
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#cccccc',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '1rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#cccccc'}
            >
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        maxWidth: '95vw',
        margin: 'auto 0',
        paddingTop: '30px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '0.9rem',
          color: '#888888',
          margin: '0'
        }}>
          © 2025 Qi Heng. All rights reserved.
        </p>
      </div>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 768px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          
          footer nav {
            align-items: center !important;
          }
          
          footer nav button {
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;