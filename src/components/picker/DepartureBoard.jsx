import Flag from '../Flag';
import DestinationDetail from './DestinationDetail';

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

export default function DepartureBoard({ list, visible, open, setOpen }) {
  return (
    <div className="board" data-reveal>
      <div className="board-top mono">
        <span className="board-title">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
          </svg>
          Departures
        </span>
        <span className="board-count" aria-live="polite">
          {visible.size} {visible.size === 1 ? 'destination' : 'destinations'}
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
        {list.map((d, row) => {
          const isOpen = open === d.code;
          const panelId = `dest-${d.code}`;
          return (
            <li key={d.code} className={`board-row${isOpen ? ' is-open' : ''}`} hidden={!visible.has(d.code)}>
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
                <DestinationDetail d={d} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
