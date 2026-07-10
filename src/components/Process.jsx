import React from 'react';

export default function Process() {
  return (
    <section className="process" id="process" data-idx="04" data-label="Process">
      <div className="wrap">
        <div className="process-head reveal">
          <span className="eyebrow">How It Works</span>
          <h2>Our simple 5-step process</h2>
        </div>

        <div className="process-track reveal-stagger">
          <div className="process-step active">
            <div className="step-dot">01</div>
            <h3>Free Consultation</h3>
            <p>We understand your goals, background, and eligibility.</p>
          </div>
          <div className="process-step active">
            <div className="step-dot">02</div>
            <h3>Plan Your Pathway</h3>
            <p>We identify the best immigration or study option.</p>
          </div>
          <div className="process-step active">
            <div className="step-dot">03</div>
            <h3>Prepare Your Application</h3>
            <p>We support you with accurate documentation.</p>
          </div>
          <div className="process-step active">
            <div className="step-dot">04</div>
            <h3>Submit With Confidence</h3>
            <p>We guide you through the application process.</p>
          </div>
          <div className="process-step active">
            <div className="step-dot">05</div>
            <h3>Achieve Your Goal</h3>
            <p>We stand beside you until you reach your destination.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
