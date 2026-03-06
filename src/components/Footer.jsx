import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer} id="kontakt">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <svg width="28" height="28" viewBox="0 0 32 32">
                <defs>
                  <linearGradient id="ftLg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="50%" stopColor="#FF6B35" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
                <polygon points="2,5 16,27 30,5 24,5 16,19 8,5" fill="url(#ftLg)" />
              </svg>
              <span>vencl<em>ÿ</em></span>
            </Link>
            <p className={styles.tagline}>
              Venture Clienting.<br />Jetzt. Skalierbar. Intelligent.
            </p>
            <div className={styles.socials}>
              {/* LinkedIn */}
              <a href="#" className={styles.social} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className={styles.social} aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Navigation</h4>
              <Link to="/">Home</Link>
              <Link to="/projekte">Projekte</Link>
              <a href="#events">Events</a>
              <a href="#kontakt">Kontakt</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Projekte</h4>
              <Link to="/projekte/innovation-republic">Innovation Republic</Link>
              <Link to="/projekte/venture-scout">Venture Scout</Link>
              <Link to="/projekte/ki-matchmaker">KI Matchmaker</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4>Unternehmen</h4>
              <a href="#">Über uns</a>
              <a href="#">Blog</a>
              <a href="#">Karriere</a>
              <a href="#demo">Demo buchen</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Venclÿ GmbH. Alle Rechte vorbehalten.
          </p>
          <div className={styles.legal}>
            <a href="#">Datenschutzerklärung</a>
            <a href="#">Impressum</a>
            <a href="#">Cookie-Einstellungen</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
