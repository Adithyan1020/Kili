const steps = [
  { title: 'Free Consultation', desc: 'We understand your goals, background, and eligibility.' },
  { title: 'Plan Your Pathway', desc: 'We identify the best work permit or visa route for your profile.' },
  { title: 'Prepare Your Application', desc: 'We support you with accurate documentation.' },
  { title: 'Submit With Confidence', desc: 'We guide you through the application process.' },
  { title: 'Achieve Your Goal', desc: 'We stand beside you until you reach your destination.' },
];

export default function Process() {
  return (
    <section className="process" id="process" data-idx="04" data-label="Process">
      <div className="wrap">
        <div className="process-head reveal">
          <span className="eyebrow">How It Works</span>
          <h2>Our simple 5-step process</h2>
        </div>

        <ol className="process-track reveal-stagger">
          {steps.map((s, i) => (
            <li key={s.title} className="process-step">
              <div className="step-dot" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
