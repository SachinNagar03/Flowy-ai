import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaBox}>
          <div className={styles.ctaGlow}></div>

          <div className={styles.ctaContent}>
            <h2>
              Ready to <span className={styles.textGradient}>transform</span> your workflow?
            </h2>

            <p className={styles.ctaSubtitle}>
              Join thousands of teams already using Flowly to ship better products, faster.
            </p>

            <div className={styles.ctaButtons}>
              <button className={styles.btnHero}>
                Start free trial
                <svg
                  className={styles.icon}
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

              <button className={styles.btnOutline}>
                Schedule demo
              </button>
            </div>

            <p className={styles.ctaNote}>
              No credit card required · Free 14-day trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
