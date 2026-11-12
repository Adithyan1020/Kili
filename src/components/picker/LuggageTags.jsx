import DestinationDetail from './DestinationDetail';
import { useRevealOnce, revealPanel } from './useRevealOnce';

// Destinations as luggage tags hanging from a rail. When the rail scrolls
// into view the tags swing once and settle (rotation about the string's top,
// transform only). Tapping a tag selects it and shows requirements below.
export default function LuggageTags({ list, visible, open, setOpen }) {
  const ref = useRevealOnce();
  const selected = list.find((d) => d.code === open && visible.has(d.code));

  const pick = (code) => {
    setOpen(code);
    revealPanel('tags-detail', 250);
  };

  return (
    <div className="lug-wrap">
      <ul className="lug-rail" ref={ref}>
        {list.map((d, i) => {
          const isSel = open === d.code;
          return (
            <li key={d.code} className="lug-item" style={{ '--i': i }} hidden={!visible.has(d.code)}>
              <button
                type="button"
                className={`lug-tag${isSel ? ' is-selected' : ''}`}
                aria-pressed={isSel}
                aria-controls="tags-detail"
                onClick={() => pick(d.code)}
              >
                <span className="lug-string" aria-hidden="true"></span>
                <span className="lug-body">
                  <span className="lug-hole" aria-hidden="true"></span>
                  <span className="lug-iata mono" aria-hidden="true">{d.iata}</span>
                  <span className="lug-name">{d.name}</span>
                  <span className="lug-visa">{d.visa}</span>
                  <span className="lug-time mono">{d.time}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="lug-detail" id="tags-detail">
        {selected ? (
          <div key={selected.code} className="lug-detail-inner">
            <h3><span className="mono lug-detail-code">{selected.iata}</span> {selected.name} <span className="pp-detail-visa">· {selected.visa}</span></h3>
            <DestinationDetail d={selected} />
          </div>
        ) : (
          <p className="passport-prompt">Tap a tag to see what you need.</p>
        )}
      </div>
    </div>
  );
}
