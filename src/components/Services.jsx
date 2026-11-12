import { useState } from 'react';

const img = (id, w) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=72`;

const services = [
  {
    code: 'EU',
    title: 'European Work Permits',
    tag: 'Direct Employment Pathways',
    desc: 'Our primary focus in Europe is securing standard work permits, helping you navigate the requirements for full-time employment and long-term residence.',
    includes: ['Work Permits', 'Employer Contracts', 'Residence Pathways', 'Document Legalisation'],
    regions: 'Europe',
    photo: 'photo-1743065272129-5e261bad0c46',
  },
  {
    code: 'US · CA · UK · AU',
    title: 'Seasonal & Visiting Visas',
    tag: 'Short-Term & Seasonal Work',
    desc: 'For the USA, Canada, UK, and Australia, we specialize in processing visiting visas and facilitating seasonal work programs.',
    includes: ['Visiting Visas', 'Seasonal Work Programs', 'Documentation Support', 'Interview Preparation'],
    regions: 'USA · Canada · UK · Australia',
    photo: 'photo-1758543144598-9d954f44799a',
  },
  {
    code: 'UAE',
    title: 'Construction Recruitment',
    tag: 'UAE Sector Specialists',
    desc: 'In the UAE, we are actively recruiting for large-scale construction projects, handling recruitment, screening, and visa processing.',
    includes: ['Construction Recruitment', 'Candidate Screening', 'Visa Processing', 'Site Mobilisation'],
    regions: 'United Arab Emirates',
    photo: 'photo-1749273858638-ea678cb48e94',
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
  const [active, setActive] = useState(0);
  const total = String(services.length).padStart(2, '0');

  // On phones the panels are an accordion: when the panel above collapses,
  // the tapped banner can jump up out of view, so bring it back into view.
  const openPanel = (i, trigger) => {
    setActive(i);
    if (!window.matchMedia('(max-width: 900px)').matches) return;
    const panel = trigger.closest('.svc-panel');
    setTimeout(() => {
      const top = panel.getBoundingClientRect().top;
      if (top < 80) window.scrollBy({ top: top - 90, behavior: 'smooth' });
    }, 520);
  };

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

          <div className="svc-panels reveal">
            {services.map((s, i) => {
              const isActive = active === i;
              const num = String(i + 1).padStart(2, '0');
              return (
                <article
                  key={s.code}
                  className={`svc-panel ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                >
                  <img
                    className="svc-bg"
                    src={img(s.photo, 1200)}
                    srcSet={`${img(s.photo, 700)} 700w, ${img(s.photo, 1200)} 1200w`}
                    sizes="(max-width: 900px) 100vw, 900px"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="svc-shade" aria-hidden="true"></div>

                  {/* Whole-panel trigger for keyboard / touch; content sits above it */}
                  <button
                    type="button"
                    className="svc-trigger"
                    aria-expanded={isActive}
                    aria-controls={`svc-body-${i}`}
                    onClick={(e) => openPanel(i, e.currentTarget)}
                    onFocus={() => setActive(i)}
                  >
                    <span className="visually-hidden">Show {s.title}</span>
                  </button>

                  {/* Label: vertical strip on desktop, banner header on phones */}
                  <div className="svc-rail" aria-hidden="true">
                    <span className="svc-rail-num">{num}<span className="svc-rail-code">{s.code}</span></span>
                    <span className="svc-rail-title">{s.title}</span>
                    <span className="svc-rail-icon"></span>
                  </div>

                  {/* Expanded state: full details (wrapper animates height on phones) */}
                  <div className="svc-body-wrap">
                  <div className="svc-body" id={`svc-body-${i}`}>
                    <div className="svc-meta">
                      <span className="svc-num">{num} <span>/ {total}</span></span>
                      <span className="svc-code">{s.code}</span>
                    </div>
                    <h3>{s.title}</h3>
                    <span className="svc-tag">{s.tag}</span>
                    <p className="svc-desc">{s.desc}</p>
                    <ul className="svc-includes" aria-label={`${s.title} includes`}>
                      {s.includes.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                    <div className="svc-foot">
                      <span className="svc-regions"><span>Regions</span>{s.regions}</span>
                      <a href="#contact" className="svc-cta">
                        Discuss this route <span className="btn-arrow" aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Divider />
    </>
  );
}
