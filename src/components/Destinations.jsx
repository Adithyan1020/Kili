import { useState } from 'react';
import Flag from './Flag';
import { DESTINATIONS, VISA_GROUPS } from '../data/destinations';
import { whatsappLink, emailLink } from '../data/contact';

// Text whose letters flip into place once, when the board scrolls into view
// (CSS keys off .board.in). Screen readers get the plain text.
function FlipText({ text, offset = 0, className = '' }) {
  return (
    <span className={`flip ${className}`}>
      <span className="visually-hidden">{text}</span>
      <span className="flip-chars" aria-hidden="true">
        {[...text].map((c, i) => (
          <span key={i} className="ch" style={{ '--d': `${(offset + i) * 28}ms` }}>
            {c === ' ' ? ' ' : c}
          </span>
        ))}
      </span>
    </span>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A2.5 2.5 0 0 1 4 13.5z"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
      />
      <path d="M8.5 8.5h7M8.5 11.5h4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

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

  const q = query.trim().toLowerCase();
  const visible = DESTINATIONS.filter((d) => matches(d, group, q));
  const groupInfo = VISA_GROUPS.find((g) => g.id === group);

  return (
    <section className="section section-alt destinations" id="destinations" aria-labelledby="destinations-title">
      <div className="wrap">
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

        <div className="board" data-reveal>
          <div className="board-top mono">
            <span className="board-title">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
              </svg>
              Departures
            </span>
            <span className="board-count" aria-live="polite">
              {visible.length} {visible.length === 1 ? 'destination' : 'destinations'}
            </span>
          </div>

          <div className="board-cols mono" aria-hidden="true">
            <span></span>
            <span>Destination</span>
            <span className="col-visa">Visa</span>
            <span className="col-time">Processing</span>
            <span></span>
          </div>

          <ul className="board-rows">
            {DESTINATIONS.map((d, row) => {
              const isOpen = open === d.code;
              const panelId = `dest-${d.code}`;
              return (
                <li key={d.code} className={`board-row${isOpen ? ' is-open' : ''}`} hidden={!visible.includes(d)}>
                  <h3 className="board-row-h">
                    <button
                      type="button"
                      className="board-btn"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : d.code)}
                    >
                      <Flag code={d.code} />
                      <span className="board-dest">
                        <FlipText text={d.name.toUpperCase()} offset={row * 4} className="board-name" />
                        <span className="board-visa">{d.visa}</span>
                      </span>
                      <span className="board-time">
                        <span className="visually-hidden">, processing about </span>
                        <FlipText text={d.time} offset={row * 4 + 6} />
                      </span>
                      <svg className="board-chev" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </h3>

                  <div className="board-detail" id={panelId} hidden={!isOpen}>
                    <p className="board-desc">{d.desc}</p>
                    <div className="board-detail-cols">
                      <div>
                        <h4 className="mono">We help with</h4>
                        <ul className="tag-list">
                          {d.services.map((s) => <li key={s}>{s}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mono">Documents you usually need</h4>
                        <ul className="doc-list">
                          {d.docs.map((doc) => <li key={doc}>{doc}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div className="board-actions">
                      <a
                        className="button"
                        href={whatsappLink(`Hi TRUVIQ, I want help with a visa for ${d.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ChatIcon /> Chat on WhatsApp
                      </a>
                      <a className="text-link" href={emailLink(`Visa for ${d.name}`)}>or email us</a>
                    </div>
                    <p className="board-note">Processing times are typical estimates, not a guarantee.</p>
                  </div>
                </li>
              );
            })}
          </ul>

          {visible.length === 0 && (
            <p className="board-empty">
              No match for “{query}”. We may still help —{' '}
              <a className="text-link" href={whatsappLink(`Hi TRUVIQ, do you help with visas for ${query}?`)} target="_blank" rel="noopener noreferrer">
                ask us on WhatsApp
              </a>.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
