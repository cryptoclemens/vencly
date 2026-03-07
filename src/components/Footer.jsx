import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import styles from './Footer.module.css'

const LOGO = 'https://cdn.prod.website-files.com/65c8ecee325d4879779af442/67fe485ef880c01d23f262c1_logo%20vencly.png'

export default function Footer() {
  const year = new Date().getFullYear()
  const { lang, t } = useLang()
  return (
    <footer className={styles.footer} id="kontakt">
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img src={LOGO} alt="Vencly" className={styles.logoImg} />
            </Link>
            <p className={styles.tagline}>{t.footer.tagline.split('\n').map((l,i) => <span key={i}>{l}<br/></span>)}</p>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/company/vencly" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://twitter.com/vencly" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Navigation</h4>
              <Link to="/">Home</Link>
              <Link to="/projekte">Projekte</Link>
              <Link to="/ueber-uns">{lang === 'de' ? 'Über uns' : 'About'}</Link>
              <a href="#kontakt">Kontakt</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Projekte</h4>
              <Link to="/projekte/innovation-republic">Innovation Republic</Link>
              <Link to="/projekte/optaimum">OptAImum</Link>
              <Link to="/projekte/venture-scout">Venture Scout</Link>
              <Link to="/projekte/ki-matchmaker">KI Matchmaker</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4>Unternehmen</h4>
              <Link to="/ueber-uns">{lang === 'de' ? 'Über uns' : 'About us'}</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/karriere">{lang === 'de' ? 'Karriere' : 'Careers'}</Link>
              <a href="https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard" target="_blank" rel="noopener noreferrer">
                {lang === 'de' ? 'Demo buchen' : 'Book Demo'}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>{t.footer.copy.replace('{year}', year)}</p>
          <div className={styles.legal}>
            <Link to="/datenschutz">Datenschutzerklärung</Link>
            <Link to="/impressum">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
