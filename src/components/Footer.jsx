import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact" data-idx="06" data-label="Contact">
      <div className="section-divider section-divider-dark reveal" style={{ paddingTop: '60px' }}>
        <span className="divider-line"></span>
        <span className="divider-ornament"></span>
        <span className="divider-line"></span>
      </div>
      <div className="wrap footer-main">
        <div>
          <div className="footer-brand">
            <span className="brand-glyph">TQ</span>
            <span className="brand-word">TRUVIQ</span>
          </div>
          <div className="footer-tag">Your Journey. Our Commitment.</div>
          <p className="footer-desc">TRUVIQ Immigration &amp; Consultancy is dedicated to helping people unlock opportunities abroad through honest guidance, careful preparation, and a process built entirely around your goals.</p>
          <p className="footer-mission">"Our mission is simple: make global dreams achievable through ethical, client-first guidance."</p>
        </div>

        <div className="footer-right">
          <h3>Start your global journey today</h3>
          <p>Your future abroad begins with one conversation.</p>

          <div className="footer-contact">
            <div>
              <span className="eyebrow">Phone</span>
              <p>+1 (234) 567-8900</p>
            </div>
            <div>
              <span className="eyebrow">Email</span>
              <p>contact@truviq.com</p>
            </div>
            <div>
              <span className="eyebrow">Address</span>
              <p>123 Global Ave, Suite 400, NY</p>
            </div>
            <div>
              <span className="eyebrow">Hours</span>
              <p>Mon–Fri, 9am–6pm EST</p>
            </div>
          </div>

          <div className="footer-cta">
            <a href="#contact" className="btn btn-solid">Get Your Free Consultation <span className="btn-arrow">→</span></a>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>© 2025 TRUVIQ. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
