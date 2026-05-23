import React, { useState, useRef } from 'react';
import { Play, Pause, AlertCircle, Info, Sparkles, BookOpen, Volume2 } from 'lucide-react';

export default function ManifestoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => {
          console.log("Video playback failed, using placeholder animation instead.");
          setVideoError(true);
        });
      }
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section id="manifiesto" className="manifesto-section">
      <div className="glow-spot glow-purple" style={{ top: '30%', right: '5%', width: '300px', height: '300px' }}></div>
      
      <div className="container">
        <div className="section-header">
          <div className="section-pre">Mi filosofía de aprendizaje</div>
          <h2 className="text-gradient">Mi manifiesto: Aprender a aprender</h2>
          <div className="divider"></div>
        </div>

        <div className="grid-2">
          {/* Left Column: Text content */}
          <div className="manifesto-text-container">
            <div className="manifesto-paragraph-card glass-panel">
              <div className="card-decoration-icon">
                <BookOpen size={24} className="decor-icon" />
              </div>
              <p className="manifesto-lead">
                Para mí, <strong>aprender a aprender</strong> es entender que mi formación no depende solo de memorizar conceptos o cumplir con una tarea, sino de aprender a buscar información, organizar mis ideas, hacer preguntas, reconocer en qué puedo mejorar y aplicar lo aprendido en diferentes situaciones.
              </p>
              <p className="manifesto-text">
                En la educación superior, esta habilidad es muy importante porque me ayuda a ser más autónoma, a encontrar mi propio ritmo de estudio y a prepararme mejor para los retos académicos y profesionales.
              </p>
            </div>

            <div className="manifesto-paragraph-card glass-panel secondary-card">
              <div className="card-decoration-icon">
                <Sparkles size={24} className="decor-icon text-cyan" />
              </div>
              <p className="manifesto-text">
                También considero que las tecnologías digitales y la inteligencia artificial han cambiado mucho la forma en que aprendemos. Hoy contamos con herramientas que nos ayudan a investigar, resumir, crear contenidos, aclarar dudas y estudiar de una manera más práctica.
              </p>
              <p className="manifesto-text">
                Sin embargo, creo que estas herramientas <strong>no reemplazan mi esfuerzo ni mi criterio</strong>. Al contrario, deben servirme como apoyo para aprender mejor, verificar la información, construir mis propias ideas y usar la tecnología con responsabilidad, ética y autonomía.
              </p>
            </div>

            {/* Transparency Note Banner */}
            <div className="transparency-note glass-panel">
              <Info size={20} className="info-icon" />
              <div className="transparency-content">
                <span className="note-title">Nota de transparencia académica:</span>
                <p className="note-text">
                  Audio generado con apoyo de herramienta digital de texto a voz / Inteligencia Artificial, a partir de un texto redactado y revisado enteramente por mí.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Audio / Video Media Player */}
          <div className="manifesto-media-container">
            <div className="player-card glass-card">
              <div className="player-header">
                <span className="player-badge">RECURSO MULTIMEDIA</span>
                <span className="player-title">manifiesto.mp4</span>
              </div>

              <div className="player-display">
                {!videoError ? (
                  <video
                    ref={videoRef}
                    src="/assets/manifiesto.mp4"
                    className="video-element"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={handleVideoError}
                    controls
                  />
                ) : (
                  // Elegant visual backup / interactive placeholder if video.mp4 is missing
                  <div className="player-placeholder">
                    <div className="placeholder-waves-bg">
                      <div className={`audio-waves-container ${isPlaying ? 'animating' : ''}`}>
                        {[...Array(12)].map((_, i) => (
                          <span key={i} className={`wave-bar wave-bar-${i+1}`}></span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="placeholder-details">
                      <Volume2 size={40} className="placeholder-icon animate-pulse" />
                      <h4>Audio Manifiesto</h4>
                      <p>
                        {isPlaying 
                          ? "Reproduciendo simulación del manifiesto..." 
                          : "Haz clic en el botón inferior para simular la reproducción del audio narrado por IA."}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="player-controls">
                <button className={`play-btn ${isPlaying ? 'playing' : ''}`} onClick={togglePlay}>
                  {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" style={{ marginLeft: '3px' }} />}
                </button>
                <div className="track-info">
                  <div className="track-meta">
                    <span className="track-name">Manifiesto Aprender a Aprender</span>
                    <span className="track-duration">{isPlaying ? '0:24 / 1:12' : '0:00 / 1:12'}</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: isPlaying ? '33%' : '0%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .manifesto-section {
          background-position: center;
        }

        .section-pre {
          font-family: var(--font-title);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-cyan);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .divider {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, var(--color-cyan), var(--color-primary));
          margin: 1.5rem auto 0;
          border-radius: 99px;
        }

        /* Texts styling */
        .manifesto-text-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: left;
        }

        .manifesto-paragraph-card {
          padding: 2rem;
          position: relative;
          border-color: rgba(255, 255, 255, 0.05);
          background: rgba(13, 10, 36, 0.3);
        }

        .secondary-card {
          border-left: 3px solid var(--color-cyan);
        }

        .card-decoration-icon {
          position: absolute;
          top: -15px;
          right: 25px;
          background: #0b081e;
          border: 1px solid var(--border-glass);
          border-radius: 50%;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .decor-icon {
          color: var(--color-primary);
        }

        .decor-icon.text-cyan {
          color: var(--color-cyan);
        }

        .manifesto-lead {
          font-size: 1.15rem;
          color: var(--text-primary);
          line-height: 1.65;
          margin-bottom: 1rem;
        }

        .manifesto-lead strong {
          color: var(--color-cyan);
          font-weight: 600;
        }

        .manifesto-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .manifesto-text strong {
          color: var(--color-primary);
          font-weight: 600;
        }

        /* Transparency banner styling */
        .transparency-note {
          display: flex;
          gap: 1rem;
          padding: 1.2rem;
          border-color: rgba(6, 182, 212, 0.15);
          background: rgba(6, 182, 212, 0.02);
          border-radius: 12px;
          align-items: flex-start;
        }

        .info-icon {
          color: var(--color-cyan);
          flex-shrink: 0;
          margin-top: 0.1rem;
          animation: pulse 2s infinite;
        }

        .transparency-content {
          text-align: left;
        }

        .note-title {
          font-family: var(--font-title);
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--color-cyan);
          display: block;
          margin-bottom: 0.2rem;
        }

        .note-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Media Player styling */
        .manifesto-media-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .player-card {
          width: 100%;
          max-width: 480px;
          border-radius: 20px;
          overflow: hidden;
          background: var(--bg-card);
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.6);
        }

        .player-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border-glass);
          background: rgba(5, 5, 16, 0.3);
        }

        .player-badge {
          font-family: var(--font-title);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.05em;
          border: 1px solid rgba(168, 85, 247, 0.3);
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
        }

        .player-title {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .player-display {
          height: 270px;
          background: #030014;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Visualizer Placeholder styling */
        .player-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          position: relative;
        }

        .placeholder-waves-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.15;
          z-index: 1;
        }

        .audio-waves-container {
          display: flex;
          align-items: center;
          gap: 6px;
          height: 120px;
        }

        .wave-bar {
          width: 4px;
          height: 20px;
          background: linear-gradient(180deg, var(--color-cyan) 0%, var(--color-primary) 100%);
          border-radius: 99px;
          transition: height 0.2s ease;
        }

        /* Responsive waveform heights */
        .wave-bar-1 { height: 30px; }
        .wave-bar-2 { height: 50px; }
        .wave-bar-3 { height: 80px; }
        .wave-bar-4 { height: 40px; }
        .wave-bar-5 { height: 60px; }
        .wave-bar-6 { height: 95px; }
        .wave-bar-7 { height: 75px; }
        .wave-bar-8 { height: 35px; }
        .wave-bar-9 { height: 85px; }
        .wave-bar-10 { height: 55px; }
        .wave-bar-11 { height: 70px; }
        .wave-bar-12 { height: 25px; }

        .audio-waves-container.animating .wave-bar-1 { animation: soundWave 1.2s infinite alternate ease-in-out; }
        .audio-waves-container.animating .wave-bar-2 { animation: soundWave 0.8s infinite alternate ease-in-out 0.1s; }
        .audio-waves-container.animating .wave-bar-3 { animation: soundWave 1.5s infinite alternate ease-in-out 0.2s; }
        .audio-waves-container.animating .wave-bar-4 { animation: soundWave 0.9s infinite alternate ease-in-out 0.05s; }
        .audio-waves-container.animating .wave-bar-5 { animation: soundWave 1.1s infinite alternate ease-in-out 0.15s; }
        .audio-waves-container.animating .wave-bar-6 { animation: soundWave 1.4s infinite alternate ease-in-out 0.25s; }
        .audio-waves-container.animating .wave-bar-7 { animation: soundWave 1.0s infinite alternate ease-in-out 0.3s; }
        .audio-waves-container.animating .wave-bar-8 { animation: soundWave 0.7s infinite alternate ease-in-out 0.08s; }
        .audio-waves-container.animating .wave-bar-9 { animation: soundWave 1.3s infinite alternate ease-in-out 0.12s; }
        .audio-waves-container.animating .wave-bar-10 { animation: soundWave 0.95s infinite alternate ease-in-out 0.18s; }
        .audio-waves-container.animating .wave-bar-11 { animation: soundWave 1.25s infinite alternate ease-in-out 0.22s; }
        .audio-waves-container.animating .wave-bar-12 { animation: soundWave 0.6s infinite alternate ease-in-out 0.03s; }

        @keyframes soundWave {
          0% { height: 15px; }
          100% { height: 110px; }
        }

        .placeholder-details {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .placeholder-icon {
          color: var(--color-cyan);
          margin-bottom: 0.8rem;
          filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.4));
        }

        .placeholder-details h4 {
          font-family: var(--font-title);
          font-size: 1.35rem;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .placeholder-details p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          max-width: 280px;
          margin: 0 auto;
        }

        /* Player Controls */
        .player-controls {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 1.2rem 1.5rem;
          background: rgba(5, 5, 16, 0.6);
          border-top: 1px solid var(--border-glass);
        }

        .play-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%);
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
          flex-shrink: 0;
        }

        .play-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(168, 85, 247, 0.5);
        }

        .play-btn.playing {
          background: linear-gradient(135deg, var(--color-cyan) 0%, var(--color-secondary) 100%);
          box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
        }

        .track-info {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: left;
        }

        .track-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }

        .track-name {
          font-family: var(--font-title);
          font-weight: 600;
          color: var(--text-primary);
        }

        .track-duration {
          color: var(--text-muted);
        }

        .progress-bar-container {
          width: 100%;
        }

        .progress-bar-bg {
          width: 100%;
          height: 5px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 99px;
          overflow: hidden;
          position: relative;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-cyan), var(--color-primary));
          border-radius: 99px;
          transition: width 0.2s ease;
        }

        @media (max-width: 968px) {
          .manifesto-paragraph-card {
            padding: 1.5rem;
          }
          .player-card {
            margin-top: 1rem;
            max-width: 100%;
          }
        }
      `}} />
    </section>
  );
}
