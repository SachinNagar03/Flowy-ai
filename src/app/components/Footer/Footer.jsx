import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <span>F</span>
              </div>
              <span className={styles.logoText}>Flowly</span>
            </div>
            <p className={styles.brandDescription}>
              AI-powered project management for modern teams. Ship faster, work smarter.
            </p>
          </div>

          {/* Links */}
          <div className={styles.footerLinks}>
            <h4>Product</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">GDPR</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2024 Flowly. All rights reserved.
          </p>
          <div className={styles.socialLinks}>
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
