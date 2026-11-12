export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact" data-idx="07" data-label="Contact">
      <div className="section-divider section-divider-dark reveal" style={{ paddingTop: '60px' }} aria-hidden="true">
        <span className="divider-line"></span>
        <span className="divider-ornament"></span>
        <span className="divider-line"></span>
      </div>
      <div className="wrap footer-main">
        <div>
          <div className="footer-brand">
            <span className="brand-glyph" aria-hidden="true">TQ</span>
            <span className="brand-word">TRUVIQ</span>
          </div>
          <div className="footer-tag">Your Journey. Our Commitment.</div>
          <p className="footer-desc">TRUVIQ Immigration &amp; Consultancy is dedicated to helping people unlock opportunities abroad through honest guidance, careful preparation, and a process built entirely around your goals.</p>
          <p className="footer-mission">"Our mission is simple: make global dreams achievable through ethical, client-first guidance."</p>
        </div>

        <div className="footer-right">
          <h2>Start your global journey today</h2>
          <p>Your future abroad begins with one conversation.</p>

          <address className="footer-contact">
            <div>
              <span className="eyebrow">Phone</span>
              <p><a href="tel:+12345678900">+1 (234) 567-8900</a></p>
            </div>
            <div>
              <span className="eyebrow">Email</span>
              <p><a href="mailto:contact@truviq.com">contact@truviq.com</a></p>
            </div>
            <div>
              <span className="eyebrow">Address</span>
              <p>123 Global Ave, Suite 400, NY</p>
            </div>
            <div>
              <span className="eyebrow">Hours</span>
              <p>Mon–Fri, 9am–6pm EST</p>
            </div>
          </address>

          <div className="footer-cta">
            <a href="#contact" className="btn btn-solid">Get Your Free Consultation <span className="btn-arrow" aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>© {year} TRUVIQ. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
