import { EMAIL, whatsappLink, emailLink } from '../data/contact';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="footer-cta">
          <span className="eyebrow">Talk to an agent</span>
          <h2 id="contact-title">Start your global journey today</h2>
          <p>Your future abroad begins with one conversation.</p>
          <div className="footer-actions">
            <a
              className="button"
              href={whatsappLink('Hi TRUVIQ, I would like a free consultation.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
            <a className="text-link" href={emailLink('Free consultation')}>or email {EMAIL}</a>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-about">
            <div className="footer-brand">
              <span className="brand-glyph" aria-hidden="true">TQ</span>
              <span className="brand-word">TRUVIQ</span>
            </div>
            <p className="footer-tag mono">Your Journey. Our Commitment.</p>
            <p className="footer-desc">TRUVIQ Immigration &amp; Consultancy is dedicated to helping people unlock opportunities abroad through honest guidance, careful preparation, and a process built entirely around your goals.</p>
            <p className="footer-mission">“Our mission is simple: make global dreams achievable through ethical, client-first guidance.”</p>
          </div>

          {/* Phone, address and hours are the existing placeholders (see README) */}
          <address className="footer-contact">
            <div>
              <span className="mono">Phone</span>
              <p><a href="tel:+12345678900">+1 (234) 567-8900</a></p>
            </div>
            <div>
              <span className="mono">Email</span>
              <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            </div>
            <div>
              <span className="mono">Address</span>
              <p>123 Global Ave, Suite 400, NY</p>
            </div>
            <div>
              <span className="mono">Hours</span>
              <p>Mon–Fri, 9am–6pm EST</p>
            </div>
          </address>
        </div>

        <div className="footer-bottom">
          <p>© {year} TRUVIQ. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
