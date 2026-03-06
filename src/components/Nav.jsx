import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
            <defs>
              <linearGradient id="navLg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="50%" stopColor="#FF6B35" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <polygon points="2,5 16,27 30,5 24,5 16,19 8,5" fill="url(#navLg)" />
          </svg>
          <span className={styles.logoText}>vencl<em>ÿ</em></span>
        </Link>

        {/* Desktop Links */}
        <nav className={styles.links}>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link} end>
            Home
          </NavLink>
          <NavLink to="/projekte" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Projekte
          </NavLink>
          <a href="#events" className={styles.link}>Events</a>
          <a href="#kontakt" className={styles.link}>Kontakt</a>
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <a href="#demo" className={styles.btnSecondary}>Log in</a>
          <a href="#demo" className={styles.btnPrimary}>
            <span>Demo buchen</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <Link to="/" className={styles.mobileLink}>Home</Link>
        <Link to="/projekte" className={styles.mobileLink}>Projekte</Link>
        <a href="#events" className={styles.mobileLink}>Events</a>
        <a href="#kontakt" className={styles.mobileLink}>Kontakt</a>
        <div className={styles.mobileCtas}>
          <a href="#demo" className={styles.btnSecondary}>Log in</a>
          <a href="#demo" className={styles.btnPrimary}><span>Demo buchen</span></a>
        </div>
      </div>
    </header>
  )
}
