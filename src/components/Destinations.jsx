import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const destinationsData = [
  {
    code: 'CA', name: 'Canada',
    img: 'https://images.unsplash.com/photo-1750479015832-b33a015d45b1',
    desc: 'In Canada, our primary focus is on facilitating Seasonal Work programs and processing Visiting Visas for short-term stays and employment.',
    services: ['Seasonal Work Programs', 'Temporary Permits', 'Compliance Support', 'Visiting Visas', 'Employer Matching']
  },
  {
    code: 'US', name: 'United States',
    img: 'https://images.unsplash.com/photo-1729614501639-52af5f4576a2',
    desc: 'For the United States, we specialise in visiting visas and seasonal work programs, helping candidates navigate short-term entry with confidence.',
    services: ['Visiting Visas', 'Seasonal Work Programs', 'Documentation Support', 'Interview Preparation']
  },
  {
    code: 'UK', name: 'United Kingdom',
    img: 'https://images.unsplash.com/photo-1758543144598-9d954f44799a',
    desc: 'In the UK, our consultants process visiting visas and seasonal work opportunities across a range of eligible sectors.',
    services: ['Visiting Visas', 'Seasonal Work Programs', 'Sponsor Liaison', 'Compliance Support']
  },
  {
    code: 'EU', name: 'Europe',
    img: 'https://images.unsplash.com/photo-1743065272129-5e261bad0c46',
    desc: 'Our primary focus in Europe is securing standard work permits, helping you navigate the requirements for full-time employment and long-term residence.',
    services: ['Work Permits', 'Employer Contracts', 'Residence Pathways', 'Document Legalisation']
  },
  {
    code: 'AE', name: 'UAE',
    img: 'https://images.unsplash.com/photo-1749273858638-ea678cb48e94',
    desc: 'In the UAE, we are actively recruiting for large-scale construction projects, handling recruitment, screening, and visa processing.',
    services: ['Construction Recruitment', 'Candidate Screening', 'Visa Processing', 'Site Mobilisation']
  },
  {
    code: 'AU', name: 'Australia',
    img: 'https://images.unsplash.com/photo-1692734761800-c4d8d88b65c8',
    desc: 'For Australia, we specialise in visiting visas and seasonal work programs suited to short-term employment and agricultural sectors.',
    services: ['Visiting Visas', 'Seasonal Work Programs', 'Regional Placement', 'Employer Matching']
  }
];

const sized = (base, w, q = 72) => `${base}?auto=format&fit=crop&w=${w}&q=${q}`;

export default function Destinations() {
  const [activeDest, setActiveDest] = useState(destinationsData[0]);

  return (
    <section className="destinations cinematic-mode" id="destinations" data-idx="05" data-label="Destinations">
      {/* Cinematic background (decorative) */}
      <div className="dest-cinematic-bg-container" aria-hidden="true">
        <AnimatePresence>
          <motion.img
            key={activeDest.code}
            src={sized(activeDest.img, 1600)}
            srcSet={`${sized(activeDest.img, 900)} 900w, ${sized(activeDest.img, 1600)} 1600w`}
            sizes="100vw"
            alt=""
            className="dest-cinematic-bg"
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className="dest-bg-overlay"></div>
      </div>

      <div className="wrap position-relative">
        <div className="dest-head reveal">
          <span className="eyebrow">Global Reach</span>
          <h2>Choose your destination</h2>
          <p>Explore the specialized recruitment and visa programs we facilitate across our primary operational regions.</p>
        </div>

        <div className="dest-grid reveal-stagger" role="group" aria-label="Destinations">
          {destinationsData.map((d) => {
            const active = activeDest.code === d.code;
            return (
              <button
                key={d.code}
                type="button"
                className={`dest-card ${active ? 'active' : ''}`}
                aria-pressed={active}
                aria-controls="destPanel"
                onClick={() => setActiveDest(d)}
              >
                <img src={sized(d.img, 600)} alt="" loading="lazy" decoding="async" width="600" height="800" />
                <span className="dest-card-label">
                  <span className="dest-card-code">{d.code}</span>
                  <span className="dest-card-name">{d.name}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="dest-panel glassmorphism reveal" id="destPanel" aria-live="polite">
          <div className="dest-panel-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDest.code}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="dest-panel-country">{activeDest.name}</h3>
                <p className="dest-panel-desc">{activeDest.desc}</p>
                <ul className="dest-services">
                  {activeDest.services.map((s) => (
                    <li key={s} className="dest-service-chip">{s}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="dest-cta">
            <a href="#contact" className="btn btn-solid">Get Started <span className="btn-arrow" aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
