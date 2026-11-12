import { useEffect, useState } from 'react';
import DepartureBoard from './picker/DepartureBoard';
import { DESTINATIONS, VISA_GROUPS } from '../data/destinations';
import { whatsappLink } from '../data/contact';

// PROTOTYPE: alternative picker designs, chosen with ?picker=<id>.
// The board is the default (and what is pre-rendered); the others are
// loaded on demand so they add nothing to the default page.
const VARIANTS = {
  board: { label: 'Departure board' },
  passport: { label: 'Passport page', load: () => import('./picker/PassportPage') },
  pass: { label: 'Boarding passes', load: () => import('./picker/BoardingPasses') },
};

const matches = (d, group, q) =>
  (group === 'all' || d.group === group) &&
  (!q ||
    d.name.toLowerCase().includes(q) ||
    d.visa.toLowerCase().includes(q) ||
    d.aliases.some((a) => a.includes(q)));

export default function Destinations() {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState('all');
  const [open, setOpen] = useState(null);
  const [variant, setVariant] = useState(null); // null until a ?picker= is given
  const [Picker, setPicker] = useState(null);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('picker');
    if (!VARIANTS[id]) return;
    setVariant(id);
    VARIANTS[id].load?.().then((m) => setPicker(() => m.default));
  }, []);

  const q = query.trim().toLowerCase();
  const visible = new Set(DESTINATIONS.filter((d) => matches(d, group, q)).map((d) => d.code));
  const groupInfo = VISA_GROUPS.find((g) => g.id === group);
  const pickerProps = { list: DESTINATIONS, visible, open, setOpen };
  const ActivePicker = variant && variant !== 'board' ? Picker : DepartureBoard;

  return (
    <section className="section section-alt destinations" id="destinations" aria-labelledby="destinations-title">
      <div className="wrap">
        {variant && (
          <nav className="variant-switch" aria-label="Prototype: picker designs">
            <span className="mono">Prototype</span>
            {Object.entries(VARIANTS).map(([id, v]) => (
              <a key={id} href={`?picker=${id}#destinations`} aria-current={id === variant ? 'page' : undefined}>
                {v.label}
              </a>
            ))}
          </nav>
        )}

        <div className="section-head">
          <span className="eyebrow">Departures</span>
          <h2 id="destinations-title">Pick your destination</h2>
          <p>Tap a country to see what you need.</p>
        </div>

        <div className="board-tools">
          <div className="search">
            <label htmlFor="dest-search" className="visually-hidden">Search a country</label>
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              id="dest-search"
              type="search"
              placeholder="Search a country"
              autoComplete="off"
              enterKeyHint="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* #services kept as an anchor: the old Services section lives here now */}
          <div className="chips anchor" id="services" role="group" aria-label="Visa type">
            {VISA_GROUPS.map((g) => (
              <button
                key={g.id}
                type="button"
                className="chip"
                aria-pressed={group === g.id}
                onClick={() => setGroup(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>
          <p className="chips-desc">{groupInfo.desc}</p>
        </div>

        {ActivePicker ? <ActivePicker {...pickerProps} /> : <div className="picker-loading" aria-busy="true" />}

        {visible.size === 0 && (
          <p className="picker-empty">
            No match for “{query}”. We may still help —{' '}
            <a className="text-link" href={whatsappLink(`Hi TRUVIQ, do you help with visas for ${query}?`)} target="_blank" rel="noopener noreferrer">
              ask us on WhatsApp
            </a>.
          </p>
        )}
      </div>
    </section>
  );
}
