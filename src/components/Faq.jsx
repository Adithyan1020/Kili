// Answers only restate what the rest of the site already says.
// FAQPage structured data is emitted alongside so Google can show rich results.
const faqs = [
  {
    q: 'Which countries does TRUVIQ work with?',
    a: 'We currently work across six regions: Europe, the United Kingdom, the United States, Canada, Australia and the UAE.',
  },
  {
    q: 'Can you help me get a work permit in Europe?',
    a: 'Yes. Our primary focus in Europe is securing standard work permits, helping you navigate the requirements for full-time employment and long-term residence.',
  },
  {
    q: 'What visas do you handle for the UK, USA, Canada and Australia?',
    a: 'For these countries we specialise in visiting visas and seasonal work programs, supporting you with documentation, interview preparation and the application itself.',
  },
  {
    q: 'Are you recruiting for jobs in the UAE?',
    a: 'Yes. We are actively recruiting for large-scale construction projects in the UAE, handling recruitment, candidate screening and visa processing.',
  },
  {
    q: 'Is the first consultation free?',
    a: 'Yes. Every journey starts with a free consultation where we understand your goals, background and eligibility before recommending a pathway.',
  },
  {
    q: 'What happens after the consultation?',
    a: 'We plan the best work permit or visa route for your profile, help you prepare accurate documentation, guide you through submission, and stay with you until you reach your destination.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Faq() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-inner">
        <div className="section-head">
          <span className="eyebrow">Questions</span>
          <h2 id="faq-title">Frequently asked questions</h2>
          <p>Straight answers about our work permit, visa and recruitment services.</p>
        </div>

        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>
                <span>{f.q}</span>
                <span className="faq-icon" aria-hidden="true"></span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
