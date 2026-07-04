import React from 'react';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="section-dark" style={{ paddingTop: '80px', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        
        {/* Top Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginBottom: '60px' }}>
          
          {/* About Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
              TRU<span style={{ color: 'var(--color-accent)' }}>VIQ</span>
            </h3>
            <div style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
              Your Journey. Our Commitment.
            </div>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
              TRUVIQ Immigration & Consultancy is dedicated to helping people unlock international opportunities through ethical advice, professional expertise, and client-focused solutions.
            </p>
            <p style={{ color: 'var(--text-primary)', fontStyle: 'italic', borderLeft: '3px solid var(--color-accent)', paddingLeft: '15px' }}>
              Our mission is simple: Make global dreams achievable through the right guidance.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '20px' }}>Start Your Global Journey Today</h4>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px' }}>
              Your future abroad begins with one conversation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-secondary)' }}>
                <Phone size={20} color="var(--color-accent)" />
                <span>+1 (234) 567-8900</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-secondary)' }}>
                <Mail size={20} color="var(--color-accent)" />
                <span>contact@truviq.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-secondary)' }}>
                <MapPin size={20} color="var(--color-accent)" />
                <span>123 Global Ave, Suite 400, NY</span>
              </div>
            </div>

            <button className="btn-primary" style={{ width: '100%' }}>Get Your Free Consultation</button>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div style={{ 
          marginTop: '60px', 
          paddingTop: '30px',
        }}>
        </div>

        {/* Bottom divider and copyright */}
        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} TRUVIQ. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
