import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="bg-glow"></div>
      <div className="grid-pattern"></div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="badge">
            <span className="badge-dot"></span>
            <span className="badge-text">
              Now with AI-powered automation
            </span>
          </div>

          {/* Heading */}
          <h1>
            Ship projects <span className="text-gradient">10x faster</span>
            <br />
            with AI-powered flow
          </h1>

          {/* Subheadline */}
          <p className="subheadline">
            Flowly combines intelligent task management with seamless team
            collaboration. Automate workflows, track progress, and deliver
            exceptional results.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button className="btn btn-hero">
              Start free trial
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button className="btn btn-outline">
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="social-proof">
            <div className="avatars">
              <div className="avatar">A</div>
              <div className="avatar">B</div>
              <div className="avatar">C</div>
              <div className="avatar">D</div>
              <div className="avatar">E</div>
            </div>
            <p>
              Trusted by <span>2,000+</span> teams worldwide
            </p>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <div className="visual-glow"></div>

          <div className="glass-card">
            <div className="dashboard-mock">
              <div className="dashboard-header">
                <div className="window-dots">
                  <div className="dot dot-red"></div>
                  <div className="dot dot-yellow"></div>
                  <div className="dot dot-green"></div>
                </div>
                <div className="search-bar"></div>
              </div>

              <div className="dashboard-content">
                <div className="column">
                  <div className="column-header"></div>
                  <div className="cards-container">
                    <div className="card">
                      <div className="card-title"></div>
                      <div className="card-subtitle"></div>
                    </div>
                    <div className="card">
                      <div className="card-title"></div>
                      <div className="card-subtitle"></div>
                    </div>
                    <div className="card">
                      <div className="card-title"></div>
                      <div className="card-subtitle"></div>
                    </div>
                  </div>
                </div>

                <div className="column">
                  <div className="column-header active"></div>
                  <div className="cards-container">
                    <div className="card active">
                      <div className="card-title"></div>
                      <div className="card-subtitle"></div>
                    </div>
                    <div className="card active">
                      <div className="card-title"></div>
                      <div className="card-subtitle"></div>
                    </div>
                  </div>
                </div>

                <div className="column">
                  <div className="column-header"></div>
                  <div className="cards-container">
                    <div className="card">
                      <div className="card-title"></div>
                      <div className="card-subtitle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
