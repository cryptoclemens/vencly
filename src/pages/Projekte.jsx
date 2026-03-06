import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './Projekte.module.css'

export default function Projekte() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBlob1} />
        <div className={styles.heroBlob2} />
        <div className="container">
          <span className={styles.eyebrow}>Unser Ökosystem</span>
          <h1 className={styles.heroTitle}>
            Projekte & <span className="gradient-text-2">Initiativen</span>
          </h1>
          <p className={styles.heroSub}>
            Venclÿ ist das Herzstück eines wachsenden Ökosystems an Tools,
            Communities und KI-Anwendungen rund um Venture Clienting.
          </p>
        </div>
      </section>

      {/* ── Project grid ── */}
      <section className={styles.grid}>
        <div className="container">
          {/* Featured */}
          <Link to={`/projekte/${projects[0].slug}`} className={styles.featured}>
            <div className={styles.featuredBg} style={{ background: projects[0].gradient }} />
            <div className={styles.featuredContent}>
              <div className={styles.featuredMeta}>
                <span className={styles.tag} style={{ color: projects[0].tagColor, borderColor: projects[0].tagColor + '44', background: projects[0].tagColor + '15' }}>
                  {projects[0].tag}
                </span>
                <span className={styles.status} style={{ color: projects[0].statusColor }}>
                  <span className={styles.statusDot} style={{ background: projects[0].statusColor }} />
                  {projects[0].status}
                </span>
              </div>
              <div className={styles.featuredIcon}>{projects[0].icon}</div>
              <h2 className={styles.featuredTitle}>{projects[0].title}</h2>
              <p className={styles.featuredDesc}>{projects[0].description}</p>
              <div className={styles.featuredCta}>
                Mehr erfahren
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Cards */}
          <div className={styles.cards}>
            {projects.slice(1).map(p => (
              <Link key={p.slug} to={`/projekte/${p.slug}`} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.tag} style={{ color: p.tagColor, borderColor: p.tagColor + '44', background: p.tagColor + '15' }}>
                    {p.tag}
                  </span>
                  <span className={styles.status} style={{ color: p.statusColor }}>
                    <span className={styles.statusDot} style={{ background: p.statusColor }} />
                    {p.status}
                  </span>
                </div>
                <div className={styles.cardIcon}>{p.icon}</div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardSubtitle}>{p.subtitle}</p>
                <p className={styles.cardDesc}>{p.description}</p>
                <div className={styles.cardGlow} style={{ background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${p.tagColor}25, transparent)` }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
