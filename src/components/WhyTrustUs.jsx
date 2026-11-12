// Trust: stats, existing "why us" points and testimonials.
// Stats come from existing copy: "500+ Successful Placements" (old hero),
// six destinations, and "Three specialised practice areas" (old Services).
const stats = [
  { value: 500, suffix: '+', label: 'Successful placements' },
  { value: 6, label: 'Destinations' },
  { value: 3, label: 'Specialist practice areas' },
];

const featureCards = [
  { title: 'Trusted Expertise', desc: 'Reliable advice based on your profile, goals, and eligibility.' },
  { title: 'Complete Support', desc: 'From your first consultation to final application preparation.' },
  { title: 'Clear Communication', desc: 'No confusion, no hidden steps — only a smooth and guided process.' },
  { title: 'Personalized Strategy', desc: 'Every journey is different. We create solutions designed specifically for you.' },
];

// PLACEHOLDER: replace all three with real client reviews (with permission).
const testimonials = [
  { name: 'Client name', to: 'EUROPE', visa: 'Work permit' },
  { name: 'Client name', to: 'CANADA', visa: 'Seasonal' },
  { name: 'Client name', to: 'UAE', visa: 'Jobs' },
];

const REEL = '01234567890123456789'.split('');

// Each digit is a reel that rolls up to its value once (transform only).
function Reel({ value, suffix = '' }) {
  return (
    <span className="reel" aria-hidden="true">
      {String(value).split('').map((d, i) => (
        <span key={i} className="reel-win">
          <span className="reel-col" style={{ '--n': d, '--i': i }}>
            {REEL.map((c, k) => <span key={k}>{c}</span>)}
          </span>
        </span>
      ))}
      {suffix && <span className="reel-suffix">{suffix}</span>}
    </span>
  );
}

export default function WhyTrustUs() {
  return (
    <section className="section section-alt trust" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Why people trust us</span>
          <h2 id="about-title">Immigration made clear — a guided journey built around you.</h2>
        </div>

        <ul className="stats" data-reveal>
          {stats.map((s) => (
            <li key={s.label} className="stat">
              <span className="visually-hidden">{s.value}{s.suffix} </span>
              <Reel value={s.value} suffix={s.suffix} />
              <span className="stat-label">{s.label}</span>
            </li>
          ))}
        </ul>

        <div className="trust-body">
          <div className="trust-copy reveal">
            <p><b>At TRUVIQ, we help skilled workers and families pursue work and travel opportunities abroad</b> with strategic guidance, transparent processes, and personalized support. Every case is assessed on its own merits, never handled as a template.</p>
            <p>Whether you are applying for a work permit in Europe, joining a seasonal work programme, taking up a construction role in the UAE, or visiting loved ones overseas, our experts guide you at every stage — from the first conversation to the day you land.</p>
          </div>

          <ul className="points reveal-stagger" aria-label="Why choose TRUVIQ">
            {featureCards.map((f) => (
              <li key={f.title} className="point">
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <circle cx="12" cy="12" r="11" fill="var(--accent)" />
                  <path d="M7 12.5l3.2 3L17 9" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="passes-title">What our clients say</h3>
        <ul className="passes reveal-stagger">
          {testimonials.map((t, i) => (
            <li key={i}>
              <figure className="pass">
                <div className="pass-main">
                  <span className="pass-flag mono">Placeholder</span>
                  <blockquote>
                    <p>“Add a real client review here. Keep it to one or two short sentences.”</p>
                  </blockquote>
                  <figcaption>{t.name}</figcaption>
                </div>
                <div className="pass-stub mono" aria-hidden="true">
                  <span>To</span>
                  <b>{t.to}</b>
                  <span>Visa</span>
                  <b>{t.visa}</b>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
