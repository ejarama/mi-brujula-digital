import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ManifestoSection from './components/ManifestoSection';
import ToolsSection from './components/ToolsSection';
import ChallengeSection from './components/ChallengeSection';
import CitizenshipSection from './components/CitizenshipSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Floating Navigation Menu */}
      <Navbar />

      {/* Main Single Page Content */}
      <main>
        {/* Inicio / Hero Section */}
        <Hero />

        {/* Manifiesto "Aprender a aprender" */}
        <ManifestoSection />

        {/* Mis 3 herramientas estrella */}
        <ToolsSection />

        {/* Un desafío, una solución digital */}
        <ChallengeSection />

        {/* Reflexión de ciudadanía digital responsable */}
        <CitizenshipSection />
      </main>

      {/* Cierre / Footer */}
      <Footer />
    </>
  );
}

export default App;
