import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyTrustUs from './components/WhyTrustUs';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import './index.css';

function App() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg-light)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <WhyTrustUs />
      <Destinations />
      <Testimonials />
      
      {/* Footer Placeholder */}
      <footer id="contact" className="section-dark" style={{ padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            Eli<span style={{ color: 'var(--color-accent)' }}>+</span>eam
          </h2>
          <p style={{ color: 'var(--color-text-muted)' }}>© 2026 ELI Immigration Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
