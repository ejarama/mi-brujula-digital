import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Manifiesto', href: '#manifiesto' },
    { label: 'Herramientas', href: '#herramientas' },
    { label: 'Desafío', href: '#desafio' },
    { label: 'Ciudadanía', href: '#ciudadania' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      
      for (const item of navItems) {
        const element = document.getElementById(item.href.substring(1));
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.href.substring(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <Compass className="logo-icon animated" />
          <span className="logo-text">Brújula<span className="highlight">Digital</span></span>
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="mobile-menu glass-panel">
          <ul className="mobile-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`mobile-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 70px;
          background: rgba(5, 5, 16, 0.75);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        .navbar-container {
          max-width: 1200px;
          height: 100%;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          color: var(--text-primary);
          font-family: var(--font-title);
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: -0.02em;
        }

        .logo-icon {
          color: var(--color-cyan);
          transition: all 0.5s ease;
        }

        .navbar-logo:hover .logo-icon {
          transform: rotate(360deg);
          color: var(--color-primary);
        }

        .logo-text .highlight {
          color: var(--color-primary);
          font-weight: 400;
        }

        .navbar-links {
          display: flex;
          list-style: none;
          gap: 1.8rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-family: var(--font-title);
          font-size: 1rem;
          font-weight: 500;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--color-cyan), var(--color-primary));
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 80%;
        }

        .nav-link.active {
          color: var(--color-cyan);
        }

        .navbar-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.4rem;
        }

        .mobile-menu {
          position: absolute;
          top: 70px;
          left: 0;
          width: 100%;
          border-radius: 0 0 16px 16px;
          border-top: none;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          animation: slideDown 0.3s ease-out forwards;
        }

        .mobile-links {
          list-style: none;
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .mobile-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-family: var(--font-title);
          font-size: 1.1rem;
          font-weight: 600;
          display: block;
          padding: 0.5rem 0;
          transition: all 0.2s ease;
        }

        .mobile-link.active {
          color: var(--color-cyan);
          padding-left: 0.5rem;
          border-left: 3px solid var(--color-primary);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }
          .navbar-toggle {
            display: block;
          }
        }
      `}} />
    </nav>
  );
}
