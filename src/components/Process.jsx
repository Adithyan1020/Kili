// Existing 5 steps condensed to 4 stops: "Submit With Confidence" and
// "Achieve Your Goal" are merged into the last stop.
const stops = [
  { tag: 'Start', title: 'Free consultation', desc: 'We understand your goals, background, and eligibility.' },
  { tag: 'Plan', title: 'Plan your pathway', desc: 'We identify the best work permit or visa route for your profile.' },
  { tag: 'Prepare', title: 'Prepare your application', desc: 'We support you with accurate documentation.' },
  { tag: 'Arrive', title: 'Submit and arrive', desc: 'We guide you through the application and stay with you until you reach your destination.' },
];

function Plane() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
    </svg>
  );
}

export default function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2 id="process-title">Four stops to your visa</h2>
          <p>We stay with you from the first chat to the day you land.</p>
        </div>

        <div className="route" data-reveal>
          <ol className="route-stops">
            {stops.map((s, i) => (
              <li key={s.title} className="stop" style={{ '--i': i }}>
                {/* dotted leg to the next stop; a cover slides off it once to "draw" it */}
                {i < stops.length - 1 && (
                  <span className="route-leg" aria-hidden="true"><span className="route-cover"></span></span>
                )}
                <span className={`stop-dot mono${i === stops.length - 1 ? ' is-last' : ''}`} aria-hidden="true">
                  {i === stops.length - 1 ? <Plane /> : String(i + 1).padStart(2, '0')}
                </span>
                <div className="stop-body">
                  <span className="stop-tag mono">Stop {i + 1} · {s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
