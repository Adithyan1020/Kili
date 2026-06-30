import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { SplitWord } from './AnimatedText';
import { CheckCircle2 } from 'lucide-react';

const countries = [
  { id: 'fr', name: 'France', flag: 'https://flagcdn.com/w80/fr.png', map: '/map/France_map.svg' },
  { id: 'pl', name: 'Poland', flag: 'https://flagcdn.com/w80/pl.png', map: '/map/Poland_map_flag.svg.png' },
  { id: 'de', name: 'Germany', flag: 'https://flagcdn.com/w80/de.png', map: '/map/german_map.png' },
  { id: 'us', name: 'USA', flag: 'https://flagcdn.com/w80/us.png', map: '/map/USA_Flag_Map.svg' },
  { id: 'it', name: 'Italy', flag: 'https://flagcdn.com/w80/it.png', map: '/map/italy.png' },
  { id: 'gb', name: 'UK', flag: 'https://flagcdn.com/w80/gb.png', map: '/map/uk.png' },
];

const Destinations = () => {
  const [selectedCountry, setSelectedCountry] = useState('it');

  return (
    <section className="section-light" id="countries" style={{ padding: '80px 0' }}>
      <div className="container">
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, margin: "-50px" }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '10px' }}>you want</div>
          <m.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            style={{ color: 'var(--text-primary)', fontSize: '2.5rem', perspective: '1000px' }}
          >
            <SplitWord>Which Country?</SplitWord>
          </m.h2>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false }}
            style={{ color: 'var(--color-text-muted)', maxWidth: '500px', margin: '0 auto' }}
          >
            Explore our top destination countries and discover the perfect place to build your future.
          </m.p>
        </m.div>

        {/* Flag Selection */}
        <m.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '60px', flexWrap: 'wrap' }}
        >
          {countries.map((c) => (
            <m.button
              key={c.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCountry(c.id)}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                background: selectedCountry === c.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                boxShadow: selectedCountry === c.id ? '0 10px 25px rgba(0,0,0,0.5)' : 'none',
                border: selectedCountry === c.id ? '2px solid var(--color-accent)' : '2px solid transparent',
                fontSize: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <img src={c.flag} alt={`${c.name} flag`} style={{ width: '40px', height: 'auto', borderRadius: '4px' }} />
            </m.button>
          ))}
        </m.div>

        {/* Country Details */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="wait">
          <m.div
            className="grid-2-col"
            key={selectedCountry}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              padding: '20px 0',
            }}
          >
            <div>
              <img 
                src={countries.find(c => c.id === selectedCountry)?.map} 
                alt={`${countries.find(c => c.id === selectedCountry)?.name} Map`} 
                style={{ width: '100%', maxWidth: '400px', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))' }}
              />
            </div>
            <div>
              <div style={{ color: 'var(--color-text-muted)', marginBottom: '5px' }}>About</div>
              <h3 style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--text-primary)' }}>
                {countries.find(c => c.id === selectedCountry)?.name.toUpperCase()}
              </h3>
              <m.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: false }}
                style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '30px', lineHeight: 1.8 }}
              >
                We provide comprehensive immigration services tailored to your specific goals. From work permits to permanent residency, our expert team will guide you through every step of the process.
              </m.p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '40px' }}>
                {['Visa cards', 'Fast book', 'Economy selected', 'International', 'Free network'].map((perk, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={20} color="var(--color-accent)" />
                    <span style={{ fontWeight: '500' }}>{perk}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary" style={{ padding: '12px 30px' }}>Get Started</button>
            </div>
          </m.div>
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
};

export default Destinations;

