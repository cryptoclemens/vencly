import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import styles from './Nav.module.css'

const LOGO = 'https://cdn.prod.website-files.com/65c8ecee325d4879779af442/67fe485ef880c01d23f262c1_logo%20vencly.png'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, t, toggle } = useLang()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img src={LOGO} alt="Vencly" className={styles.logoImg} />
        </Link>
        <nav className={styles.links}>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link} end>{t.nav.home}</NavLink>
          <NavLink to="/projekte" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>{t.nav.projects}</NavLink>
          <NavLink to="/ueber-uns" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>{t.nav.about}</NavLink>
          <a href="#kontakt" className={styles.link}>{t.nav.contact}</a>
        </nav>
        <div className={styles.actions}>
          <button className={styles.langToggle} onClick={toggle} aria-label="Toggle language">
            <span className={lang === 'de' ? styles.langActive : ''}>DE</span>
            <span className={styles.langDivider}>/</span>
            <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
          </button>
          <a href="https://www.optainum.com" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>{t.nav.login}</a>
          <span className={styles.version}>v1.3</span>
          <a href="https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            <span>{t.nav.demo}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <button className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <Link to="/" className={styles.mobileLink}>{t.nav.home}</Link>
        <Link to="/projekte" className={styles.mobileLink}>{t.nav.projects}</Link>
        <Link to="/ueber-uns" className={styles.mobileLink}>{t.nav.about}</Link>
        <Link to="/blog" className={styles.mobileLink}>Blog</Link>
        <Link to="/karriere" className={styles.mobileLink}>{lang === 'de' ? 'Karriere' : 'Careers'}</Link>
        <a href="#kontakt" className={styles.mobileLink}>{t.nav.contact}</a>
        <div className={styles.mobileCtas}>
          <button className={styles.langToggle} onClick={toggle}>
            <span className={lang === 'de' ? styles.langActive : ''}>DE</span>
            <span className={styles.langDivider}>/</span>
            <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
          </button>
          <a href="https://outlook.office.com/bookwithme/user/9c11749d74b349809103953c39ba26d4@vencly.com?anonymous&ep=pcard" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}><span>{t.nav.demo}</span></a>
        </div>
      </div>
    </header>
  )
}
