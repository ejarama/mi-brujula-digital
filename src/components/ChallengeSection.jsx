import React, { useState } from 'react';
import { Calendar, MessageSquare, BookOpen, HardDrive, CheckCircle, AlertTriangle, ChevronRight, ChevronLeft, Image, Activity, ZoomIn, X, Compass, Info } from 'lucide-react';

export default function ChallengeSection() {
  const [activeTab, setActiveTab] = useState('visual'); // 'visual' or 'flow'
  const [currentStep, setCurrentStep] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const challengeInfo = {
    problem: 'Organizar mi tiempo de estudio y prepararme para evaluaciones sin sentirme saturada.',
    solution: 'Combinar Google Calendar, ChatGPT, NotebookLM y Google Drive para planear el estudio, comprender contenidos, crear recursos de repaso y organizar materiales académicos.'
  };

  const steps = [
    {
      num: 1,
      title: 'El Caos Inicial',
      icon: <AlertTriangle size={24} />,
      desc: 'Tengo acumulados múltiples trabajos, lecturas pesadas y una evaluación importante a la vista. La sobrecarga de información me hace sentir saturada y estresada.',
      tool: 'Sensación de saturación académica',
      color: '#ef4444'
    },
    {
      num: 2,
      title: 'Planificación de Tiempos',
      icon: <Calendar size={24} />,
      desc: 'Decido tomar las riendas. Utilizo Google Calendar para programar mis bloques de estudio, registrar las fechas límite y configurar recordatorios automáticos en el móvil.',
      tool: 'Google Calendar',
      color: '#3b82f6'
    },
    {
      num: 3,
      title: 'Aclarando Conceptos',
      icon: <MessageSquare size={24} />,
      desc: 'Me siento a estudiar. Uso ChatGPT para desglosar y comprender los temas más abstractos, resumir extensos capítulos de lectura y estructurar esquemas visuales iniciales.',
      tool: 'ChatGPT',
      color: '#10a37f'
    },
    {
      num: 4,
      title: 'Estudio Activo',
      icon: <Compass size={24} />,
      desc: 'Para consolidar lo aprendido, empleo NotebookLM de Google. Genero cuestionarios automáticos interactivos, tarjetas de estudio (flashcards) y mapas mentales conceptuales.',
      tool: 'NotebookLM',
      color: '#a855f7'
    },
    {
      num: 5,
      title: 'Organización Centralizada',
      icon: <HardDrive size={24} />,
      desc: 'Guardo todos mis apuntes, esquemas, resúmenes e infografías de repaso en carpetas bien estructuradas dentro de Google Drive para acceder a ellos desde cualquier lugar.',
      tool: 'Google Drive',
      color: '#eab308'
    },
    {
      num: 6,
      title: 'Resultados y Autonomía',
      icon: <CheckCircle size={24} />,
      desc: '¡Meta alcanzada! Logro estudiar con absoluto orden, nulo estrés, mayor rendimiento académico y una autonomía fortalecida a través del uso responsable de herramientas digitales.',
      tool: 'Estudio inteligente y autónomo',
      color: '#22c55e'
    }
  ];

  return (
    <section id="desafio" className="challenge-section">
      <div className="glow-spot glow-purple" style={{ bottom: '10%', left: '5%', width: '380px', height: '380px' }}></div>

      <div className="container">
        <div className="section-header">
          <div className="section-pre">Resolución de Problemas</div>
          <h2 className="text-gradient">Un desafío, una solución digital</h2>
          <div className="divider"></div>
        </div>

        {/* Challenge Introduction Brief */}
        <div className="challenge-brief glass-panel">
          <div className="brief-box problem-box">
            <span className="brief-label text-gradient-purple">EL DESAFÍO</span>
            <p>"{challengeInfo.problem}"</p>
          </div>
          <div className="brief-box-divider"></div>
          <div className="brief-box solution-box">
            <span className="brief-label text-gradient">LA SOLUCIÓN DIGITAL</span>
            <p>{challengeInfo.solution}</p>
          </div>
        </div>

        {/* View Switcher / Tabs */}
        <div className="tab-switcher glass-panel">
          <button 
            className={`tab-btn ${activeTab === 'visual' ? 'active' : ''}`}
            onClick={() => setActiveTab('visual')}
          >
            <Image size={18} />
            <span>Historieta Visual</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'flow' ? 'active' : ''}`}
            onClick={() => setActiveTab('flow')}
          >
            <Activity size={18} />
            <span>Flujo Interactivo (Paso a Paso)</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="tab-contents-container">
          {activeTab === 'visual' ? (
            /* Tab: Visual Storyboard Display */
            <div className="visual-tab-content">
              <div className="storyboard-mockup glass-card animate-fadeIn">
                <div className="mockup-header">
                  <div className="window-dots">
                    <span className="dot dot-r"></span>
                    <span className="dot dot-y"></span>
                    <span className="dot dot-g"></span>
                  </div>
                  <div className="window-title">historieta-solucion-digital.png</div>
                </div>

                <div className="storyboard-display-area" onClick={() => setIsLightboxOpen(true)}>
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/historieta-solucion-digital.png`}
                    alt="Historieta: Un desafío, una solución digital" 
                    className="storyboard-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      document.getElementById('storyboard-fallback').style.display = 'flex';
                    }}
                  />

                  {/* Fallback mockup in case the file hasn't been put in public/assets yet */}
                  <div id="storyboard-fallback" className="fallback-storyboard" style={{ display: 'none' }}>
                    <Image size={56} className="fallback-icon animate-float" />
                    <h4>Historieta de Gemini</h4>
                    <p>Haga clic para previsualizar el storyboard en pantalla completa.</p>
                  </div>

                  <div className="storyboard-overlay">
                    <ZoomIn size={36} className="zoom-icon" />
                    <span>Ampliar historieta</span>
                  </div>
                </div>
                <div className="mockup-footer">
                  <Info size={16} className="info-icon" />
                  <span>Historieta cocreada con Gemini IA para ilustrar la superación del estrés académico.</span>
                </div>
              </div>
            </div>
          ) : (
            /* Tab: Interactive Timeline */
            <div className="flow-tab-content glass-card animate-fadeIn">
              <div className="timeline-interactive">
                {/* Steps indicator */}
                <div className="steps-indicator-bar">
                  {steps.map((step, idx) => (
                    <button
                      key={step.num}
                      className={`step-dot-btn ${currentStep === idx ? 'active' : ''} ${currentStep > idx ? 'completed' : ''}`}
                      onClick={() => setCurrentStep(idx)}
                      style={{ '--step-color': step.color }}
                    >
                      <span className="dot-num">{step.num}</span>
                    </button>
                  ))}
                </div>

                {/* Main step content */}
                <div className="step-viewer-card glass-panel" style={{ borderLeft: `4px solid ${steps[currentStep].color}` }}>
                  <div className="step-card-header">
                    <div className="step-icon-circle" style={{ backgroundColor: `${steps[currentStep].color}15`, color: steps[currentStep].color }}>
                      {steps[currentStep].icon}
                    </div>
                    <div className="step-card-meta">
                      <span className="step-badge" style={{ color: steps[currentStep].color }}>PASO {steps[currentStep].num} DE 6</span>
                      <h3 className="step-title">{steps[currentStep].title}</h3>
                    </div>
                  </div>
                  
                  <p className="step-desc">{steps[currentStep].desc}</p>

                  <div className="step-tool-badge" style={{ backgroundColor: `${steps[currentStep].color}12`, borderColor: `${steps[currentStep].color}30` }}>
                    <span className="tool-badge-label">Mecanismo / Recurso:</span>
                    <strong style={{ color: steps[currentStep].color }}>{steps[currentStep].tool}</strong>
                  </div>
                </div>

                {/* Step controls */}
                <div className="step-controls-row">
                  <button 
                    className="btn-secondary font-bold"
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                  >
                    <ChevronLeft size={18} />
                    <span>Anterior</span>
                  </button>

                  <span className="timeline-prog-text">Paso {currentStep + 1} de 6</span>

                  <button 
                    className="btn-primary font-bold"
                    onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                    disabled={currentStep === steps.length - 1}
                  >
                    <span>Siguiente</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal for Storyboard */}
      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
          <div className="lightbox-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setIsLightboxOpen(false)} aria-label="Cerrar ventana">
              <X size={24} />
            </button>
            <div className="lightbox-body">
              <img 
                src="/assets/historieta-solucion-digital.png" 
                alt="Historieta Completa" 
                className="lightbox-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  document.getElementById('storyboard-lightbox-fallback').style.display = 'flex';
                }}
              />
              <div id="storyboard-lightbox-fallback" className="lightbox-fallback-display" style={{ display: 'none' }}>
                <Image size={80} style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }} className="animate-float" />
                <h2>Storyboard no encontrado</h2>
                <p>
                  Asegúrate de colocar tu historieta en <code>public/assets/historieta-solucion-digital.png</code>.
                </p>
                
                {/* Horizontal steps display fallback */}
                <div className="fallback-storyboard-grid glass-card">
                  {steps.map(step => (
                    <div key={step.num} className="fallback-storyboard-panel">
                      <div className="fb-panel-num" style={{ background: step.color }}>{step.num}</div>
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lightbox-footer">
              <h3>Historieta: Un desafío, una solución digital</h3>
              <p>Evidencia individual cocreada con Gemini IA para ilustrar la superación académica aplicando competencias digitales.</p>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .challenge-section {
          background-position: center;
        }

        .challenge-brief {
          display: flex;
          padding: 2.5rem;
          margin-bottom: 3.5rem;
          text-align: left;
          gap: 2.5rem;
          border-color: rgba(255, 255, 255, 0.05);
          background: rgba(13, 10, 36, 0.2);
        }

        .brief-box {
          flex: 1;
        }

        .brief-label {
          font-family: var(--font-title);
          font-weight: 900;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.6rem;
        }

        .brief-box p {
          font-size: 1.1rem;
          line-height: 1.55;
          color: var(--text-primary);
        }

        .problem-box p {
          font-style: italic;
          color: var(--text-secondary);
        }

        .brief-box-divider {
          width: 1px;
          background: rgba(255, 255, 255, 0.07);
        }

        /* View switcher tabs styling */
        .tab-switcher {
          display: inline-flex;
          padding: 4px;
          border-radius: 99px;
          margin-bottom: 2.5rem;
          background: rgba(5, 5, 16, 0.5);
          border-color: rgba(255, 255, 255, 0.06);
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.6rem;
          border-radius: 99px;
          border: none;
          background: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-family: var(--font-title);
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tab-btn:hover {
          color: var(--text-primary);
        }

        .tab-btn.active {
          background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(168, 85, 247, 0.25);
        }

        /* Storyboard mock container */
        .storyboard-mockup {
          border-radius: 16px;
          overflow: hidden;
          background: var(--bg-card);
          border-color: rgba(255, 255, 255, 0.06);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
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

        .storyboard-display-area {
          height: 480px;
          background: #030010;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: zoom-in;
          overflow: hidden;
        }

        .storyboard-img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          transition: transform 0.5s ease;
        }

        .storyboard-display-area:hover .storyboard-img {
          transform: scale(1.02);
        }

        .storyboard-overlay {
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

        .storyboard-display-area:hover .storyboard-overlay {
          opacity: 1;
        }

        .fallback-storyboard {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-align: center;
        }

        .fallback-storyboard h4 {
          font-family: var(--font-title);
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .fallback-storyboard p {
          font-size: 0.9rem;
          max-width: 250px;
          color: var(--text-muted);
        }

        /* Flow / Timeline layout styling */
        .timeline-interactive {
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .steps-indicator-bar {
          display: flex;
          justify-content: space-between;
          position: relative;
          padding: 0 1rem;
        }

        .steps-indicator-bar::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-50%);
          z-index: 1;
        }

        .step-dot-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #0b081e;
          border: 2px solid rgba(255, 255, 255, 0.15);
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          font-family: var(--font-title);
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-dot-btn:hover {
          border-color: var(--step-color);
          color: var(--text-primary);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
        }

        .step-dot-btn.completed {
          background: var(--step-color);
          border-color: var(--step-color);
          color: #ffffff;
        }

        .step-dot-btn.active {
          background: #0b081e;
          border-color: var(--step-color);
          color: var(--step-color);
          transform: scale(1.15);
          box-shadow: 0 0 20px var(--step-color);
        }

        .step-viewer-card {
          padding: 2.5rem;
          background: rgba(13, 10, 36, 0.25);
          border-color: rgba(255, 255, 255, 0.04);
          text-align: left;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .step-card-header {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 1.2rem;
        }

        .step-icon-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-card-meta {
          display: flex;
          flex-direction: column;
        }

        .step-badge {
          font-family: var(--font-title);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.05em;
        }

        .step-title {
          font-family: var(--font-title);
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        .step-desc {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .step-tool-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1.2rem;
          border-radius: 8px;
          border: 1px solid;
          width: fit-content;
        }

        .tool-badge-label {
          font-size: 0.88rem;
          color: var(--text-muted);
          font-family: var(--font-title);
          font-weight: 600;
        }

        .step-tool-badge strong {
          font-family: var(--font-title);
          font-weight: 700;
          font-size: 0.95rem;
        }

        .step-controls-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
        }

        .timeline-prog-text {
          font-family: var(--font-title);
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .btn-secondary:disabled, .btn-primary:disabled {
          opacity: 0.3;
          cursor: not-allowed;
          pointer-events: none;
        }

        /* Lightbox grid fallback */
        .fallback-storyboard-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding: 2.5rem;
          max-width: 900px;
          text-align: left;
        }

        .fallback-storyboard-panel {
          padding: 1.2rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          position: relative;
        }

        .fb-panel-num {
          position: absolute;
          top: -12px;
          left: 15px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 800;
          font-family: var(--font-title);
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        .fallback-storyboard-panel h4 {
          font-family: var(--font-title);
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          margin-top: 0.5rem;
        }

        .fallback-storyboard-panel p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        /* Animation utilities */
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 968px) {
          .challenge-brief {
            flex-direction: column;
            gap: 1.5rem;
            padding: 1.5rem;
          }
          .brief-box-divider {
            height: 1px;
            width: 100%;
          }
          .storyboard-display-area {
            height: 300px;
          }
          .fallback-storyboard-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 1rem;
          }
          .timeline-interactive {
            padding: 1.5rem 1rem;
          }
          .steps-indicator-bar {
            overflow-x: auto;
            padding-bottom: 1rem;
            justify-content: flex-start;
            gap: 1rem;
          }
          .steps-indicator-bar::before {
            display: none;
          }
          .step-viewer-card {
            padding: 1.5rem;
            min-height: 280px;
          }
          .step-card-header {
            gap: 0.8rem;
          }
          .step-title {
            font-size: 1.25rem;
          }
        }
      `}} />
    </section>
  );
}
