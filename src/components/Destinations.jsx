import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const destinationsData = [
  {
    code: 'CA', name: 'Canada',
    img: 'https://images.unsplash.com/photo-1750479015832-b33a015d45b1?auto=format&fit=crop&w=2200&q=80',
    desc: "In Canada, our primary focus is on facilitating Seasonal Work programs and processing Visiting Visas for short-term stays and employment.",
    services: ['Seasonal Work Programs', 'Temporary Permits', 'Compliance Support', 'Visiting Visas', 'Employer Matching']
  },
  {
    code: 'US', name: 'United States',
    img: 'https://images.unsplash.com/photo-1729614501639-52af5f4576a2?auto=format&fit=crop&w=2200&q=80',
    desc: "For the United States, we specialise in visiting visas and seasonal work programs, helping candidates navigate short-term entry with confidence.",
    services: ['Visiting Visas', 'Seasonal Work Programs', 'Documentation Support', 'Interview Preparation']
  },
  {
    code: 'UK', name: 'United Kingdom',
    img: 'https://images.unsplash.com/photo-1758543144598-9d954f44799a?auto=format&fit=crop&w=2200&q=80',
    desc: "In the UK, our consultants process visiting visas and seasonal work opportunities across a range of eligible sectors.",
    services: ['Visiting Visas', 'Seasonal Work Programs', 'Sponsor Liaison', 'Compliance Support']
  },
  {
    code: 'EU', name: 'Europe',
    img: 'https://images.unsplash.com/photo-1743065272129-5e261bad0c46?auto=format&fit=crop&w=2200&q=80',
    desc: "Our primary focus in Europe is securing standard work permits, helping you navigate the requirements for full-time employment and long-term residence.",
    services: ['Work Permits', 'Employer Contracts', 'Residence Pathways', 'Document Legalisation']
  },
  {
    code: 'AE', name: 'UAE',
    img: 'https://images.unsplash.com/photo-1749273858638-ea678cb48e94?auto=format&fit=crop&w=2200&q=80',
    desc: "In the UAE, we are actively recruiting for large-scale construction projects, handling recruitment, screening, and visa processing.",
    services: ['Construction Recruitment', 'Candidate Screening', 'Visa Processing', 'Site Mobilisation']
  },
  {
    code: 'AU', name: 'Australia',
    img: 'https://images.unsplash.com/photo-1692734761800-c4d8d88b65c8?auto=format&fit=crop&w=2200&q=80',
    desc: "For Australia, we specialise in visiting visas and seasonal work programs suited to short-term employment and agricultural sectors.",
    services: ['Visiting Visas', 'Seasonal Work Programs', 'Regional Placement', 'Employer Matching']
  }
];

export default function Destinations() {
  const [selectedCode, setSelectedCode] = useState('CA');
  const [activeDest, setActiveDest] = useState(destinationsData[0]);

  const handleSelect = (code) => {
    if (code === selectedCode) return;
    const dest = destinationsData.find(d => d.code === code);
    setSelectedCode(code);
    setActiveDest(dest);
  };

  return (
    <section className="destinations cinematic-mode" id="destinations" data-idx="05" data-label="Destinations">
      {/* Cinematic Background Layer */}
      <div className="dest-cinematic-bg-container">
        <AnimatePresence>
          <motion.img
            key={activeDest.code}
            src={activeDest.img}
            alt={activeDest.name}
            className="dest-cinematic-bg"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            decoding="async"
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

        <div className="dest-grid reveal-stagger">
          {destinationsData.map((d) => (
            <div 
              key={d.code} 
              className={`dest-card ${selectedCode === d.code ? 'active' : ''}`}
              data-code={d.code}
              onClick={() => handleSelect(d.code)}
            >
              <img src={d.img.replace('w=2200', 'w=600')} alt={d.name} loading="lazy" decoding="async" />
              <div className="dest-card-label">
                <span className="dest-card-code">{d.code}</span>
                <span className="dest-card-name">{d.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="dest-panel glassmorphism reveal">
          <div className="dest-panel-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDest.code}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="dest-panel-country">{activeDest.name}</div>
                <p className="dest-panel-desc">{activeDest.desc}</p>
                <div className="dest-services">
                  {activeDest.services.map((s, idx) => (
                    <span key={idx} className="dest-service-chip">{s}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="dest-cta">
            <a href="#contact" className="btn btn-solid">Get Started <span className="btn-arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
