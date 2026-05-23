import React, { useState } from 'react';
import { MessageSquare, HardDrive, Palette, ZoomIn, X, Info, ExternalLink } from 'lucide-react';

export default function ToolsSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const tools = [
    {
      title: 'ChatGPT',
      icon: <MessageSquare size={26} />,
      colorClass: 'chatgpt-theme',
      accentColor: '#10a37f',
      why: 'Me ayuda a comprender temas complejos, organizar ideas y mejorar la redacción de mis trabajos.',
      how: 'La uso para aclarar dudas, resumir contenidos, crear esquemas de estudio y practicar preguntas antes de una evaluación. Para mí, es una herramienta de apoyo, pero siempre procuro verificar la información y mantener mi propio criterio.'
    },
    {
      title: 'Google Drive & Docs',
      icon: <HardDrive size={26} />,
      colorClass: 'drive-theme',
      accentColor: '#4285f4',
      why: 'Me permiten guardar mis archivos en la nube, acceder a ellos desde cualquier dispositivo y mantener mejor organizado mi material académico.',
      how: 'Los uso para redactar trabajos, almacenar apuntes, organizar evidencias de aprendizaje y hacer seguimiento a mis avances. También me facilitan compartir documentos cuando sea necesario y continuar trabajando sin depender de un solo equipo.'
    },
    {
      title: 'Canva',
      icon: <Palette size={26} />,
      colorClass: 'canva-theme',
      accentColor: '#00c4cc',
      why: 'Me ayuda a transformar la información en recursos visuales claros, creativos y fáciles de comprender.',
      how: 'La uso para diseñar infografías, presentaciones y resúmenes visuales que hacen más atractivos mis trabajos. También me permite comunicar mejor lo aprendido y fortalecer mi creatividad dentro del desarrollo de mis competencias digitales.'
    }
  ];

  return (
    <section id="herramientas" className="tools-section">
      <div className="glow-spot glow-cyan" style={{ top: '20%', left: '5%', width: '350px', height: '350px' }}></div>

      <div className="container">
        <div className="section-header">
          <div className="section-pre">Ecosistema Académico</div>
          <h2 className="text-gradient">Mis 3 herramientas estrella</h2>
          <p className="section-subtitle">
            Herramientas digitales que fortalecen mi proceso de estudio en el curso de Competencias Digitales
          </p>
          <div className="divider"></div>
        </div>

        {/* Layout split: cards on one side, infographic preview on the other */}
        <div className="grid-2 tools-layout">
          {/* Left: Interative cards */}
          <div className="tools-cards-panel">
            <div className="tools-grid-list">
              {tools.map((tool, idx) => (
                <div 
                  key={tool.title} 
                  className={`tool-card glass-panel ${tool.colorClass} ${activeCard === idx ? 'focused' : ''}`}
                  onClick={() => setActiveCard(idx)}
                >
                  <div className="card-top">
                    <div className="tool-icon-wrapper" style={{ color: tool.accentColor }}>
                      {tool.icon}
                    </div>
                    <h3 className="tool-title">{tool.title}</h3>
                  </div>

                  <div className="card-body">
                    <div className="info-block">
                      <span className="info-label">¿Por qué la elegí?</span>
                      <p className="info-content">{tool.why}</p>
                    </div>

                    <div className="info-block">
                      <span className="info-label">¿Cómo la uso?</span>
                      <p className="info-content">{tool.how}</p>
                    </div>
                  </div>
                  
                  <div className="card-focus-indicator" style={{ backgroundColor: tool.accentColor }}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Infographic device mock preview */}
          <div className="tools-infographic-panel">
            <div className="infographic-mockup glass-card">
              <div className="mockup-header">
                <div className="window-dots">
                  <span className="dot dot-r"></span>
                  <span className="dot dot-y"></span>
                  <span className="dot dot-g"></span>
                </div>
                <div className="window-title">infografia-herramientas.png</div>
              </div>
              
              <div className="mockup-display" onClick={() => setIsLightboxOpen(true)}>
                <img 
                  src={`${import.meta.env.BASE_URL}assets/infografia-herramientas.png`}
                  alt="Infografía: Mis 3 herramientas estrella para el aprendizaje digital" 
                  className="infographic-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    document.getElementById('infographic-fallback').style.display = 'flex';
                  }}
                />

                {/* Styled fallback in case the image fails to load or hasn't been replaced yet */}
                <div id="infographic-fallback" className="fallback-infographic" style={{ display: 'none' }}>
                  <Palette size={48} className="fallback-icon animate-float" />
                  <h4>Infografía de Canva</h4>
                  <p>Haga clic para previsualizar la infografía en alta resolución.</p>
                </div>

                <div className="mockup-overlay">
                  <ZoomIn size={36} className="zoom-icon" />
                  <span>Ampliar infografía</span>
                </div>
              </div>

              <div className="mockup-footer">
                <Info size={16} className="info-icon" />
                <span>Infografía creada en Canva con el apoyo y asistencia de Gemini IA para la síntesis conceptual.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal for Fullscreen Infographic */}
      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
          <div className="lightbox-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setIsLightboxOpen(false)} aria-label="Close lightbox">
              <X size={24} />
            </button>
            <div className="lightbox-body">
              <img 
                src={`${import.meta.env.BASE_URL}assets/infografia-herramientas.png`} 
                alt="Infografía Completa" 
                className="lightbox-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  document.getElementById('lightbox-fallback').style.display = 'flex';
                }}
              />
              <div id="lightbox-fallback" className="lightbox-fallback-display" style={{ display: 'none' }}>
                <Palette size={80} style={{ color: 'var(--color-cyan)', marginBottom: '1.5rem' }} className="animate-float" />
                <h2>Infografía Canva no encontrada</h2>
                <p>
                  Asegúrate de colocar tu infografía en <code>public/assets/infografia-herramientas.png</code>.
                </p>
                <div className="fallback-mock-infographic glass-card">
                  <h3>Mis 3 Herramientas Estrella</h3>
                  <div className="mini-grid">
                    <div><strong>ChatGPT</strong><p>Comprensión y síntesis intelectual.</p></div>
                    <div><strong>Google Drive</strong><p>Almacenamiento y edición colaborativa.</p></div>
                    <div><strong>Canva</strong><p>Diseño y comunicación visual.</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lightbox-footer">
              <h3>Infografía: Mis 3 herramientas estrella</h3>
              <p>Evidencia individual creada con Canva y Gemini IA para el fortalecimiento de competencias digitales.</p>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .tools-section {
          background-position: center;
        }

        .section-subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-top: 0.5rem;
        }

        .tools-layout {
          align-items: stretch;
        }

        .tools-cards-panel {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .tools-grid-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .tool-card {
          padding: 1.6rem;
          text-align: left;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          background: rgba(13, 10, 36, 0.25);
          border-color: rgba(255, 255, 255, 0.04);
        }

        .tool-card:hover,
        .tool-card.focused {
          border-color: rgba(255, 255, 255, 0.12);
          background: rgba(18, 14, 48, 0.6);
        }

        .card-top {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .tool-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .tool-card:hover .tool-icon-wrapper {
          background: rgba(255, 255, 255, 0.08);
          transform: scale(1.05);
        }

        .tool-title {
          font-family: var(--font-title);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .card-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tool-card.focused .card-body {
          max-height: 400px;
          opacity: 1;
          margin-top: 0.5rem;
        }

        .info-block {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .info-label {
          font-family: var(--font-title);
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .tool-card.focused .info-label {
          color: var(--color-cyan);
        }

        .chatgpt-theme.focused .info-label { color: #10a37f; }
        .drive-theme.focused .info-label { color: #4285f4; }
        .canva-theme.focused .info-label { color: #00c4cc; }

        .info-content {
          font-size: 0.98rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .card-focus-indicator {
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .tool-card.focused .card-focus-indicator {
          transform: scaleY(1);
        }

        /* Infographic mockup display styling */
        .infographic-mockup {
          border-radius: 16px;
          overflow: hidden;
          background: var(--bg-card);
          border-color: rgba(255, 255, 255, 0.06);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .mockup-header {
          display: flex;
          align-items: center;
          padding: 0.8rem 1.2rem;
          background: rgba(5, 5, 16, 0.4);
          border-bottom: 1px solid var(--border-glass);
          gap: 1rem;
        }

        .window-dots {
          display: flex;
          gap: 5px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .dot-r { background: #ff5f56; }
        .dot-y { background: #ffbd2e; }
        .dot-g { background: #27c93f; }

        .window-title {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          color: var(--text-muted);
          flex-grow: 1;
          text-align: left;
        }

        .mockup-display {
          flex-grow: 1;
          background: #030010;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: zoom-in;
          overflow: hidden;
          min-height: 380px;
        }

        .infographic-img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          transition: transform 0.5s ease;
        }

        .mockup-display:hover .infographic-img {
          transform: scale(1.03);
        }

        .mockup-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(5, 5, 20, 0.7);
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          transition: all 0.3s ease;
          color: #ffffff;
          font-family: var(--font-title);
          font-weight: 600;
        }

        .mockup-display:hover .mockup-overlay {
          opacity: 1;
        }

        .zoom-icon {
          color: var(--color-cyan);
          filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.5));
          animation: pulse 2s infinite;
        }

        .fallback-infographic {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-align: center;
        }

        .fallback-icon {
          color: var(--color-cyan);
          margin-bottom: 1rem;
        }

        .fallback-infographic h4 {
          font-family: var(--font-title);
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .fallback-infographic p {
          font-size: 0.9rem;
          max-width: 250px;
          color: var(--text-muted);
        }

        .mockup-footer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.2rem;
          background: rgba(5, 5, 16, 0.2);
          border-top: 1px solid var(--border-glass);
          font-size: 0.85rem;
          color: var(--text-muted);
          text-align: left;
        }

        .mockup-footer .info-icon {
          color: var(--color-cyan);
          flex-shrink: 0;
        }

        /* Lightbox styling */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(3, 1, 15, 0.85);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        .lightbox-content {
          position: relative;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(13, 10, 36, 0.85);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.8);
          display: flex;
          flex-direction: column;
        }

        .lightbox-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid var(--border-glass);
          color: #ffffff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .lightbox-close:hover {
          background: var(--color-primary);
          transform: rotate(90deg);
        }

        .lightbox-body {
          flex-grow: 1;
          overflow-y: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #010008;
          min-height: 450px;
        }

        .lightbox-img {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
        }

        .lightbox-footer {
          padding: 1.5rem 2rem;
          background: rgba(5, 5, 16, 0.8);
          border-top: 1px solid var(--border-glass);
          text-align: left;
        }

        .lightbox-footer h3 {
          font-family: var(--font-title);
          font-size: 1.25rem;
          color: var(--color-cyan);
          margin-bottom: 0.2rem;
        }

        .lightbox-footer p {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .lightbox-fallback-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          text-align: center;
        }

        .lightbox-fallback-display p {
          margin-bottom: 2rem;
          color: var(--text-secondary);
        }

        .fallback-mock-infographic {
          padding: 2rem;
          max-width: 600px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          border-color: rgba(255, 255, 255, 0.05);
        }

        .fallback-mock-infographic h3 {
          margin-bottom: 1.5rem;
          font-family: var(--font-title);
          font-size: 1.4rem;
          color: var(--color-cyan);
        }

        .mini-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          text-align: left;
        }

        .mini-grid div {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .mini-grid strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.3rem;
          font-family: var(--font-title);
        }

        .mini-grid p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 968px) {
          .mini-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .lightbox-fallback-display {
            padding: 1.5rem;
          }
        }
      `}} />
    </section>
  );
}
