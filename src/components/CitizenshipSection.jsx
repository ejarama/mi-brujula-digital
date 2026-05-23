import React from 'react';
import { ShieldCheck, FileCheck, Search, Scale, AlertOctagon, HeartHandshake } from 'lucide-react';

export default function CitizenshipSection() {
  const pillars = [
    {
      title: 'Veracidad e Investigación',
      desc: 'No basta con acceder rápido a los datos; es crucial contrastar fuentes, verificar la información y mantener un criterio propio frente a lo que genera la IA.',
      icon: <Search size={22} />,
      color: 'var(--color-cyan)'
    },
    {
      title: 'Honestidad Académica',
      desc: 'Respetar con integridad los derechos de autor, reconocer el apoyo de tecnologías externas y garantizar la transparencia intelectual en cada trabajo.',
      icon: <FileCheck size={22} />,
      color: 'var(--color-primary)'
    },
    {
      title: 'Seguridad Digital',
      desc: 'Proteger la privacidad de mis datos personales, resguardar mi huella digital e interactuar de forma segura en las plataformas y redes del entorno académico.',
      icon: <ShieldCheck size={22} />,
      color: 'var(--color-secondary)'
    },
    {
      title: 'Ética y Pensamiento Crítico',
      desc: 'Emplear la tecnología no para delegar mi aprendizaje, sino para expandir mis capacidades bajo principios éticos, constructivos y socialmente responsables.',
      icon: <Scale size={22} />,
      color: '#22c55e'
    }
  ];

  return (
    <section id="ciudadania" className="citizenship-section">
      <div className="glow-spot glow-cyan" style={{ top: '15%', right: '10%', width: '320px', height: '320px' }}></div>

      <div className="container">
        <div className="section-header">
          <div className="section-pre">Principios y Ética</div>
          <h2 className="text-gradient">Ciudadanía digital responsable</h2>
          <div className="divider"></div>
        </div>

        {/* Central reflection highlighted box */}
        <div className="reflection-card glass-panel">
          <div className="reflection-decor-top">
            <HeartHandshake size={32} className="reflection-decor-icon" />
          </div>
          
          <span className="reflection-subtitle">MI REFLEXIÓN FINAL</span>
          
          <blockquote className="reflection-blockquote">
            "Como estudiante, considero que usar la IA y las TIC implica una gran responsabilidad. No basta con acceder a la información rápidamente; también debo verificar su veracidad, respetar los derechos de autor, proteger mis datos personales y actuar con honestidad académica. La tecnología puede potenciar mi aprendizaje, pero soy yo quien debe usarla con ética, pensamiento crítico y transparencia."
          </blockquote>
          
          <div className="reflection-author">
            <span className="author-bar"></span>
            <span className="author-name">Estudiante de Competencias Digitales</span>
          </div>
        </div>

        {/* Breakdown in pillars */}
        <div className="pillars-grid grid-2">
          {pillars.map((pillar, idx) => (
            <div key={pillar.title} className="pillar-card glass-card" style={{ '--pillar-glow': pillar.color }}>
              <div className="pillar-header">
                <div className="pillar-icon-box" style={{ color: pillar.color, backgroundColor: `${pillar.color}10` }}>
                  {pillar.icon}
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
              </div>
              <p className="pillar-desc">{pillar.desc}</p>
              <div className="pillar-border-glow"></div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .citizenship-section {
          background-position: center;
        }

        /* Central Reflection Card styling */
        .reflection-card {
          max-width: 900px;
          margin: 0 auto 4rem;
          padding: 3.5rem 3rem 3rem;
          position: relative;
          background: rgba(13, 10, 36, 0.35);
          border-color: rgba(168, 85, 247, 0.15);
          box-shadow: 0 20px 50px -10px rgba(168, 85, 247, 0.15);
          border-radius: 20px;
        }

        .reflection-decor-top {
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, var(--bg-deep) 0%, var(--bg-dark) 100%);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 50%;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4), 
                      0 0 15px rgba(168, 85, 247, 0.2);
        }

        .reflection-decor-icon {
          color: var(--color-cyan);
          animation: pulse 3s infinite;
        }

        .reflection-subtitle {
          font-family: var(--font-title);
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          color: var(--color-cyan);
          text-transform: uppercase;
          display: block;
          margin-bottom: 1.5rem;
        }

        .reflection-blockquote {
          font-family: var(--font-title);
          font-size: 1.35rem;
          line-height: 1.65;
          font-style: italic;
          color: var(--text-primary);
          font-weight: 500;
          margin-bottom: 2rem;
          letter-spacing: -0.01em;
        }

        .reflection-author {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          justify-content: center;
        }

        .author-bar {
          width: 25px;
          height: 2px;
          background: var(--color-primary);
        }

        .author-name {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
        }

        /* Pillars grid styling */
        .pillars-grid {
          gap: 1.8rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .pillar-card {
          padding: 2rem;
          text-align: left;
          position: relative;
          background: var(--bg-card);
          border-color: rgba(255, 255, 255, 0.04);
          overflow: hidden;
        }

        .pillar-card:hover {
          border-color: var(--pillar-glow);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5), 
                      0 0 15px rgba(255, 255, 255, 0.02);
        }

        .pillar-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .pillar-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-title {
          font-family: var(--font-title);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .pillar-desc {
          font-size: 0.98rem;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        .pillar-border-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--pillar-glow);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .pillar-card:hover .pillar-border-glow {
          transform: scaleX(1);
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }

        @media (max-width: 968px) {
          .reflection-card {
            padding: 2.5rem 1.5rem 2rem;
            margin-bottom: 2.5rem;
          }
          .reflection-blockquote {
            font-size: 1.1rem;
            line-height: 1.55;
          }
          .pillar-card {
            padding: 1.5rem;
          }
        }
      `}} />
    </section>
  );
}
