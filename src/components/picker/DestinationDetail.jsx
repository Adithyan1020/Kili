import { whatsappLink, emailLink } from '../../data/contact';

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

// Requirements + "contact an agent" for one destination. Shared by every
// picker design; colours come from CSS variables on .dest-detail.
export default function DestinationDetail({ d }) {
  return (
    <div className="dest-detail">
      <p className="dest-desc">{d.desc}</p>
      <div className="dest-cols">
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
      <div className="dest-actions">
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
      <p className="dest-note">Processing times are typical estimates, not a guarantee.</p>
    </div>
  );
}
