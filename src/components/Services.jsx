const services = [
  {
    idx: 'EU',
    title: 'European Work Permits',
    tag: 'Direct Employment Pathways',
    desc: 'Our primary focus in Europe is securing standard work permits, helping you navigate the requirements for full-time employment and long-term residence.',
  },
  {
    idx: 'US·CA·UK·AU',
    title: 'Seasonal & Visiting Visas',
    tag: 'Short-Term & Seasonal Work',
    desc: 'For the USA, Canada, UK, and Australia, we specialize in processing visiting visas and facilitating seasonal work programs.',
  },
  {
    idx: 'UAE',
    title: 'Construction Recruitment',
    tag: 'UAE Sector Specialists',
    desc: 'In the UAE, we are actively recruiting for large-scale construction projects, handling recruitment, screening, and visa processing.',
  },
];

function Divider() {
  return (
    <div className="section-divider reveal" aria-hidden="true">
      <span className="divider-line"></span>
      <span className="divider-ornament"></span>
      <span className="divider-line"></span>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <Divider />

      <section className="services" id="services" data-idx="03" data-label="Services">
        <div className="wrap">
          <div className="services-head reveal">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2>Our immigration &amp; visa services</h2>
            </div>
            <p>Three specialised practice areas, each handled by consultants who work exclusively within that region and route.</p>
          </div>

          <div className="modern-services-grid reveal-stagger">
            {services.map((s) => (
              <article key={s.idx} className="modern-service-card">
                <span className="modern-service-idx">{s.idx}</span>
                <h3>{s.title}</h3>
                <span className="tag">{s.tag}</span>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Divider />
    </>
  );
}
