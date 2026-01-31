import "./Features.css";

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="bg-glow"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>
            Everything you need to{" "}
            <span className="text-gradient">ship faster</span>
          </h2>
          <p className="section-subtitle">
            Powerful features designed to help modern teams move from idea to
            impact in record time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
            </div>
            <h3 className="feature-title">AI-Powered Automation</h3>
            <p className="feature-description">
              Let AI handle repetitive tasks, smart scheduling, and predictive
              insights to keep your team focused on what matters.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3 className="feature-title">Lightning Fast</h3>
            <p className="feature-description">
              Built for speed with instant updates, real-time collaboration, and
              sub-second response times across all devices.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </div>
            <h3 className="feature-title">Advanced Analytics</h3>
            <p className="feature-description">
              Get deep insights into team performance, project health, and
              bottlenecks with beautiful dashboards.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="feature-title">Team Collaboration</h3>
            <p className="feature-description">
              Work together seamlessly with shared workspaces, @mentions,
              comments, and real-time presence indicators.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="feature-title">Enterprise Security</h3>
            <p className="feature-description">
              SOC 2 compliant with SSO, 2FA, audit logs, and role-based access
              control.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="feature-card">
            <div className="icon-wrapper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className="feature-title">Global Scale</h3>
            <p className="feature-description">
              Built on edge infrastructure for low-latency access worldwide.
              Works offline and syncs automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
