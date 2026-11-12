import ScrollFlight from './ScrollFlight';

// Route points are anchored to the real elements ({ el, ey, oy }) so the
// flight lines up with the empty spaces at any screen size.
const TEXT = { el: '.about-text' };
const INTRO = { el: '.about-intro' };
const PHOTO = { el: '.about-image' };
const CARDS = { el: '.feature-grid' };

// Desktop: rounded zigzag across the space above the heading, a gentle
// weave down the gutter between the copy and the photo, then a zigzag
// through the gap above the feature cards and out to the right.
const ROUTE = [
  { x: -0.04, ...TEXT, oy: -72 },
  { x: 0.1, ...TEXT, oy: -98 },
  { x: 0.22, ...TEXT, oy: -52 },
  { x: 0.34, ...TEXT, oy: -98 },
  { x: 0.45, ...TEXT, oy: -58 },
  { x: 0.519, ...TEXT, oy: 10 },
  { x: 0.508, ...INTRO, ey: 0.3 },
  { x: 0.53, ...INTRO, ey: 0.55 },
  { x: 0.508, ...INTRO, ey: 0.8 },
  { x: 0.54, ...CARDS, oy: -58 },
  { x: 0.64, ...CARDS, oy: -30 },
  { x: 0.75, ...CARDS, oy: -64 },
  { x: 0.86, ...CARDS, oy: -30 },
  { x: 0.96, ...CARDS, oy: -60 },
  { x: 1.05, ...CARDS, oy: -44 },
];

// Phones: one column with no side gutter, so the plane makes three zigzag
// passes through the empty gaps — above the heading, between the copy and the
// photo (flying back), and between the photo and the cards. Each pass plays
// as its gap crosses the screen.
const LEGS_MOBILE = [
  [
    { x: -0.15, ...TEXT, oy: -50 },
    { x: 0.12, ...TEXT, oy: -66 },
    { x: 0.37, ...TEXT, oy: -36 },
    { x: 0.62, ...TEXT, oy: -66 },
    { x: 0.87, ...TEXT, oy: -36 },
    { x: 1.15, ...TEXT, oy: -52 },
  ],
  [
    { x: 1.15, ...PHOTO, oy: -36 },
    { x: 0.82, ...PHOTO, oy: -48 },
    { x: 0.5, ...PHOTO, oy: -24 },
    { x: 0.18, ...PHOTO, oy: -48 },
    { x: -0.15, ...PHOTO, oy: -34 },
  ],
  [
    { x: -0.15, ...CARDS, oy: -46 },
    { x: 0.18, ...CARDS, oy: -60 },
    { x: 0.5, ...CARDS, oy: -32 },
    { x: 0.82, ...CARDS, oy: -60 },
    { x: 1.15, ...CARDS, oy: -44 },
  ],
];

const featureCards = [
  { num: '01', title: 'Trusted Expertise', desc: 'Reliable advice based on your profile, goals, and eligibility.' },
  { num: '02', title: 'Complete Support', desc: 'From your first consultation to final application preparation.' },
  { num: '03', title: 'Clear Communication', desc: 'No confusion, no hidden steps — only a smooth and guided process.' },
  { num: '04', title: 'Personalized Strategy', desc: 'Every journey is different. We create solutions designed specifically for you.' },
];

// Spotlight follows the pointer (CSS reads --mx / --my)
const trackPointer = (e) => {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - r.left}px`);
  el.style.setProperty('--my', `${e.clientY - r.top}px`);
};

export default function WhyTrustUs() {
  return (
    <section className="about" id="about" data-idx="02" data-label="About">
      <ScrollFlight points={ROUTE} mobileLegs={LEGS_MOBILE} />
      <div className="wrap">
        <div className="about-intro">
          <div className="about-text reveal">
            <span className="eyebrow">Professional Guidance. Transparent Process. Personal Commitment.</span>
            <h2>Immigration made clear — a guided journey built around you.</h2>
            <div className="about-cols">
              <p><b>At TRUVIQ, we help skilled workers and families pursue work and travel opportunities abroad</b> with strategic guidance, transparent processes, and personalized support. Every case is assessed on its own merits, never handled as a template.</p>
              <p>Whether you are applying for a work permit in Europe, joining a seasonal work programme, taking up a construction role in the UAE, or visiting loved ones overseas, our experts guide you at every stage — from the first conversation to the day you land.</p>
            </div>
          </div>
          <div className="about-image reveal">
            <div className="about-image-card img-wipe">
              <img
                src="https://images.unsplash.com/photo-1758518729908-d4220a678d81?auto=format&fit=crop&w=900&q=75"
                srcSet="https://images.unsplash.com/photo-1758518729908-d4220a678d81?auto=format&fit=crop&w=600&q=75 600w, https://images.unsplash.com/photo-1758518729908-d4220a678d81?auto=format&fit=crop&w=1200&q=75 1200w"
                sizes="(max-width: 960px) 420px, 560px"
                width="900"
                height="1058"
                loading="lazy"
                decoding="async"
                alt="TRUVIQ consultant reviewing an application with a client"
              />
            </div>
          </div>
        </div>

        <div className="feature-grid reveal-stagger" role="list" aria-label="Why choose TRUVIQ">
          {featureCards.map((f) => (
            <div key={f.num} className="feature-card" role="listitem" onMouseMove={trackPointer}>
              <span className="feature-num">{f.num}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
