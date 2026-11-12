import Flag from '../Flag';
import DestinationDetail from './DestinationDetail';
import { useRevealOnce } from './useRevealOnce';

// Each destination is a boarding pass. Tapping tears off the stub
// (transform/opacity) and reveals the requirements under the ticket.
export default function BoardingPasses({ list, visible, open, setOpen }) {
  const ref = useRevealOnce();

  return (
    <ul className="tickets" ref={ref}>
      {list.map((d, i) => {
        const isOpen = open === d.code;
        const panelId = `ticket-${d.code}`;
        return (
          <li key={d.code} className={`ticket${isOpen ? ' is-torn' : ''}`} style={{ '--i': i }} hidden={!visible.has(d.code)}>
            <h3 className="ticket-h">
              <button
                type="button"
                className="ticket-btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : d.code)}
              >
                <span className="ticket-main">
                  <span className="ticket-top mono">
                    <span>Boarding pass</span>
                    <Flag code={d.code} />
                  </span>
                  <span className="ticket-to">
                    <span className="ticket-iata mono" aria-hidden="true">{d.iata}</span>
                    <span className="ticket-country">{d.name}</span>
                  </span>
                  <span className="ticket-meta">
                    <span><span className="ticket-label mono">Visa</span>{d.visa}</span>
                    <span><span className="ticket-label mono">Processing</span><span className="mono">{d.time}</span></span>
                  </span>
                </span>
                <span className="ticket-stub" aria-hidden="true">
                  <span className="ticket-label mono">Gate</span>
                  <span className="ticket-stub-iata mono">{d.iata}</span>
                  <span className="ticket-barcode"></span>
                  <span className="ticket-hint mono">Tap to open</span>
                </span>
                <span className="ticket-open-hint mono" aria-hidden="true">Requirements below ↓</span>
              </button>
            </h3>

            <div className="ticket-detail" id={panelId} hidden={!isOpen}>
              <DestinationDetail d={d} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
