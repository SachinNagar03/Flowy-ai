import "./pricing.css";

export default function PricingPage() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="p-container">
        <div className="section-header">
          <h2>
            Simple, transparent <span className="text-gradient">pricing</span>
          </h2>
          <p className="section-subtitle">
            Start free, upgrade when you need to. No hidden fees, no surprises.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Starter */}
          <div className="pricing-card">
            <div className="plan-header">
              <h3 className="plan-name">Starter</h3>
              <div className="plan-price">
                <span className="price">Free</span>
              </div>
              <p className="plan-description">
                Perfect for individuals and small projects
              </p>
            </div>

            <ul className="features-list">
              {[
                "Up to 5 team members",
                "10 projects",
                "Basic analytics",
                "Email support",
                "1GB storage",
              ].map((item, i) => (
                <li key={i}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="btn btn-outline">Get Started</button>
          </div>

          {/* Pro */}
          <div className="pricing-card popular">
            <span className="popular-badge">Most Popular</span>

            <div className="plan-header">
              <h3 className="plan-name">Pro</h3>
              <div className="plan-price">
                <span className="price">$12</span>
                <span className="period">/user/month</span>
              </div>
              <p className="plan-description">
                For growing teams that need more power
              </p>
            </div>

            <ul className="features-list">
              {[
                "Unlimited team members",
                "Unlimited projects",
                "Advanced analytics",
                "Priority support",
                "100GB storage",
                "AI automation",
                "Custom workflows",
              ].map((item, i) => (
                <li key={i}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="btn btn-hero">Get Started</button>
          </div>

          {/* Enterprise */}
          <div className="pricing-card">
            <div className="plan-header">
              <h3 className="plan-name">Enterprise</h3>
              <div className="plan-price">
                <span className="price">Custom</span>
              </div>
              <p className="plan-description">
                For large organizations with custom needs
              </p>
            </div>

            <ul className="features-list">
              {[
                "Everything in Pro",
                "SSO & SAML",
                "Dedicated support",
                "Unlimited storage",
                "Custom integrations",
                "SLA guarantee",
                "On-premise option",
              ].map((item, i) => (
                <li key={i}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="btn btn-outline">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Icon */
function CheckIcon() {
  return (
    <div className="check-icon">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}
