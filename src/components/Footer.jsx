import React from 'react';
import { ArrowUp, Compass } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="cierre" className="footer-section">
      <div className="glow-spot glow-purple" style={{ bottom: '0', right: '15%', width: '300px', height: '300px' }}></div>
      <div className="glow-spot glow-cyan" style={{ bottom: '5%', left: '10%', width: '250px', height: '250px' }}></div>

      <div className="container">
        {/* Closing reflection card */}
        <div className="cierre-card glass-panel">
          <div className="cierre-decor-left">
            <Compass size={40} className="cierre-compass-icon spin-slow" />
          </div>
          <div className="cierre-content">
            <h3>Cierre de Bitácora</h3>
            <p className="cierre-quote">
              "Mi brújula digital me recuerda que aprender con tecnología no significa depender de ella, sino usarla con criterio para crecer académica y profesionalmente."
            </p>
          </div>
        </div>

        {/* Scroll back to top action */}
        <div className="scroll-top-area">
          <a href="#inicio" className="scroll-top-btn glass-panel" onClick={scrollToTop} aria-label="Volver al inicio">
            <ArrowUp size={20} className="arrow-icon" />
            <span>Volver al inicio</span>
          </a>
        </div>

        {/* Course details & copyright links */}
        <div className="footer-bottom">
          <div className="footer-info">
            <h4 className="footer-title">Mi brújula para el aprendizaje digital</h4>
            <p>Aporte individual para la actividad del curso de Competencias Digitales</p>
            <p className="academic-term">Área de Tecnología e Innovación Educativa (TIC) • 2026</p>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-meta">
            <span className="copyright">© 2026 • Diseñado con pensamiento crítico, autonomía y responsabilidad ética.</span>
            <div className="footer-socials">
              <span className="social-badge glass-panel">React</span>
              <span className="social-badge glass-panel">Vite</span>
              <span className="social-badge glass-panel">Canva</span>
              <span className="social-badge glass-panel">Gemini IA</span>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-section {
          background: rgba(3, 1, 15, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 5rem 0 3rem;
          position: relative;
          overflow: hidden;
        }

        /* Closing reflection styling */
        .cierre-card {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          padding: 3rem;
          max-width: 900px;
          margin: 0 auto 3.5rem;
          text-align: left;
          border-color: rgba(6, 182, 212, 0.15);
          background: rgba(6, 182, 212, 0.02);
          box-shadow: 0 15px 40px -10px rgba(6, 182, 212, 0.1);
        }

        .cierre-decor-left {
          flex-shrink: 0;
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.2);
          width: 72px;
          height: 72px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .cierre-compass-icon {
          color: var(--color-cyan);
        }

        .cierre-content h3 {
          font-family: var(--font-title);
          font-size: 1.4rem;
          color: var(--color-cyan);
          margin-bottom: 0.5rem;
        }

        .cierre-quote {
          font-family: var(--font-title);
          font-size: 1.25rem;
          line-height: 1.6;
          font-weight: 500;
          font-style: italic;
          color: var(--text-primary);
        }

        /* Scroll to Top button styling */
        .scroll-top-area {
          display: flex;
          justify-content: center;
          margin-bottom: 4rem;
        }

        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.4rem;
          border-radius: 99px;
          text-decoration: none;
          color: var(--text-secondary);
          font-family: var(--font-title);
          font-weight: 600;
          font-size: 0.9rem;
          border-color: rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.02);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-top-btn:hover {
          color: var(--text-primary);
          border-color: var(--color-primary);
          background: rgba(168, 85, 247, 0.05);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px -5px rgba(168, 85, 247, 0.3);
        }

        .scroll-top-btn:hover .arrow-icon {
          animation: bounceUp 1s infinite alternate;
        }

        /* Footer Details styling */
        .footer-bottom {
          max-width: 900px;
          margin: 0 auto;
        }

        .footer-info {
          text-align: center;
          margin-bottom: 2rem;
        }

        .footer-title {
          font-family: var(--font-title);
          font-size: 1.3rem;
          color: var(--text-primary);
          margin-bottom: 0.3rem;
        }

        .footer-info p {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .academic-term {
          font-size: 0.85rem !important;
          color: var(--text-muted) !important;
          margin-top: 0.2rem;
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.06);
          margin-bottom: 2rem;
        }

        .footer-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
        }

        .copyright {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-align: left;
        }

        .footer-socials {
          display: flex;
          gap: 0.6rem;
        }

        .social-badge {
          font-family: var(--font-title);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-secondary);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          border-color: rgba(255, 255, 255, 0.04);
          background: rgba(255, 255, 255, 0.01);
        }

        @keyframes bounceUp {
          from { transform: translateY(0); }
          to { transform: translateY(-4px); }
        }

        @media (max-width: 768px) {
          .cierre-card {
            flex-direction: column;
            padding: 2rem 1.5rem;
            text-align: center;
            gap: 1.5rem;
          }
          .footer-meta {
            flex-direction: column;
            text-align: center;
          }
          .copyright {
            text-align: center;
          }
          .footer-socials {
            justify-content: center;
          }
        }
      `}} />
    </footer>
  );
}
