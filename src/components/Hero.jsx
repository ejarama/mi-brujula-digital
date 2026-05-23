import React from 'react';
import { Compass, ChevronDown, Cpu, Globe, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      {/* Background ambient spots */}
      <div className="glow-spot glow-purple animate-pulse-slow" style={{ top: '10%', left: '10%' }}></div>
      <div className="glow-spot glow-cyan animate-pulse-slow" style={{ bottom: '15%', right: '10%' }}></div>

      <div className="container hero-container grid-2">
        <div className="hero-content">
          <div className="badge glass-panel">
            <Award size={16} className="badge-icon" />
            <span>Curso de Competencias Digitales</span>
          </div>
          
          <h1 className="hero-title">
            Mi brújula para el <br />
            <span className="text-gradient font-black">aprendizaje digital</span>
          </h1>
          
          <p className="hero-description">
            En esta página comparto mi reflexión final sobre cómo las TIC, la inteligencia artificial y las herramientas digitales fortalecen mi proceso de aprendizaje, mi autonomía académica y mi capacidad de aprender a aprender.
          </p>

          <div className="hero-actions">
            <a href="#manifiesto" className="btn-primary">
              <span>Explorar mi brújula digital</span>
              <Compass size={18} className="spin-slow" />
            </a>
            
            <a href="#herramientas" className="btn-secondary">
              Ver herramientas
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="compass-wrapper animate-float">
            {/* Holographic glowing rings */}
            <div className="ring ring-outer"></div>
            <div className="ring ring-middle"></div>
            <div className="ring ring-inner"></div>

            <div className="compass-face glass-panel">
              {/* Compass Card markings */}
              <div className="mark mark-n">N</div>
              <div className="mark mark-e">E</div>
              <div className="mark mark-s">S</div>
              <div className="mark mark-w">O</div>

              {/* Digital grid/network inside */}
              <svg className="compass-svg" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(6, 182, 212, 0.05)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(168, 85, 247, 0.07)" strokeWidth="1.5" />
                
                {/* Crosshairs */}
                <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                
                {/* Tech dots */}
                <circle cx="100" cy="30" r="3" fill="#06b6d4" />
                <circle cx="170" cy="100" r="3" fill="#3b82f6" />
                <circle cx="100" cy="170" r="3" fill="#a855f7" />
                <circle cx="30" cy="100" r="3" fill="#6366f1" />
              </svg>

              {/* Glowing Arrow Needle */}
              <div className="compass-needle">
                <div className="needle-north"></div>
                <div className="needle-south"></div>
                <div className="needle-pivot"></div>
              </div>

              {/* Center icons representation */}
              <div className="center-icons">
                <Cpu size={14} className="icon-cpu" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <a href="#manifiesto" aria-label="Desplazarse hacia abajo">
          <span className="scroll-text">Desplázate para navegar</span>
          <ChevronDown size={20} className="bounce-animation" />
        </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 100px;
          padding-bottom: 80px;
          overflow: hidden;
        }

        .hero-container {
          align-items: center;
          z-index: 10;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          font-family: var(--font-title);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-cyan);
          border-radius: 9999px;
          margin-bottom: 1.5rem;
          border-color: rgba(6, 182, 212, 0.2);
          background: rgba(6, 182, 212, 0.05);
        }

        .badge-icon {
          animation: pulse 2s infinite;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.5rem;
        }

        .font-black {
          font-weight: 900;
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 580px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .spin-slow {
          animation: spin 8s linear infinite;
        }

        /* Compass Visual Component */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .compass-wrapper {
          position: relative;
          width: 320px;
          height: 320px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.03);
        }

        .ring-outer {
          width: 380px;
          height: 380px;
          border: 1px dashed rgba(6, 182, 212, 0.15);
          animation: spin 30s linear infinite;
        }

        .ring-middle {
          width: 345px;
          height: 345px;
          border: 1px solid rgba(168, 85, 247, 0.12);
          animation: spin 20s linear infinite reverse;
        }

        .ring-inner {
          width: 310px;
          height: 310px;
          border: 2px solid rgba(255, 255, 255, 0.02);
        }

        .compass-face {
          position: relative;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 
                      inset 0 0 20px rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.06);
          overflow: hidden;
        }

        .compass-svg {
          position: absolute;
          width: 90%;
          height: 90%;
          animation: spin 60s linear infinite;
        }

        .mark {
          position: absolute;
          font-family: var(--font-title);
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--text-muted);
          transition: all 0.3s ease;
        }

        .mark-n { top: 12px; color: var(--color-cyan); font-size: 1.1rem; }
        .mark-e { right: 15px; }
        .mark-s { bottom: 12px; }
        .mark-w { left: 15px; }

        .compass-wrapper:hover .mark-n {
          color: var(--color-primary);
          text-shadow: 0 0 8px rgba(168, 85, 247, 0.6);
        }

        /* Glowing Needle styling */
        .compass-needle {
          position: absolute;
          width: 12px;
          height: 70%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          animation: wiggle 4s ease-in-out infinite;
          transform-origin: center center;
          z-index: 5;
        }

        .needle-north {
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 90px solid var(--color-cyan);
          filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.6));
        }

        .needle-south {
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 90px solid rgba(168, 85, 247, 0.6);
        }

        .needle-pivot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 14px;
          height: 14px;
          background: #ffffff;
          border: 3px solid var(--bg-dark);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }

        .center-icons {
          position: absolute;
          z-index: 6;
          pointer-events: none;
        }
        
        .icon-cpu {
          color: var(--color-cyan);
          opacity: 0.15;
          animation: pulse 3s infinite;
        }

        /* Scroll Indicator */
        .hero-scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          z-index: 10;
        }

        .hero-scroll-indicator a {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          color: var(--text-muted);
          text-decoration: none;
          font-family: var(--font-title);
          font-size: 0.85rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .hero-scroll-indicator a:hover {
          color: var(--text-primary);
        }

        .scroll-text {
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .bounce-animation {
          animation: bounce 2s infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(12deg); }
          25% { transform: rotate(8deg); }
          50% { transform: rotate(18deg); }
          75% { transform: rotate(5deg); }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        @media (max-width: 968px) {
          .hero-section {
            padding-top: 110px;
            text-align: center;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions {
            justify-content: center;
          }
          .ring-outer, .ring-middle {
            display: none;
          }
          .compass-wrapper {
            margin-top: 2rem;
            width: 250px;
            height: 250px;
          }
          .compass-face {
            width: 220px;
            height: 220px;
          }
          .needle-north {
            border-bottom-width: 70px;
          }
          .needle-south {
            border-top-width: 70px;
          }
        }
      `}} />
    </section>
  );
}
