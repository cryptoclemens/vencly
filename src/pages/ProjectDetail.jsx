import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <h1>404 – Projekt nicht gefunden</h1>
          <Link to="/projekte" className={styles.back}>← Zurück zu Projekten</Link>
        </div>
      </div>
    )
  }

  const others = projects.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} style={{ background: `radial-gradient(circle, ${project.tagColor}22, transparent 65%)` }} />
        <div className="container">
          <Link to="/projekte" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Alle Projekte
          </Link>

          <div className={styles.heroMeta}>
            <span className={styles.tag} style={{ color: project.tagColor, borderColor: project.tagColor + '44', background: project.tagColor + '15' }}>
              {project.tag}
            </span>
            <span className={styles.status} style={{ color: project.statusColor }}>
              <span className={styles.statusDot} style={{ background: project.statusColor }} />
              {project.status}
            </span>
            <span className={styles.year}>{project.year}</span>
          </div>

          <div className={styles.heroIcon}>{project.icon}</div>
          <h1 className={styles.heroTitle}>{project.title}</h1>
          <p className={styles.heroSub}>{project.subtitle}</p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className={styles.body}>
        <div className="container">
          <div className={styles.bodyLayout}>

            {/* Main content */}
            <div className={styles.main}>
              <p className={styles.lead} dangerouslySetInnerHTML={{ __html: project.description }} />
              {project.longDesc.split('\n\n').map((para, i) => (
                <p key={i} className={styles.para}>{para}</p>
              ))}
              {project.website && (
                <a href={project.website} target="_blank" rel="noopener noreferrer" className={styles.websiteBtn}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  Website besuchen: {project.website.replace('https://', '')}
                </a>
              )}
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sideCard}>
                <h3>Highlights</h3>
                <ul className={styles.highlights}>
                  {project.highlights.map((h, i) => (
                    <li key={i}>
                      <span className={styles.checkIcon} style={{ color: project.tagColor }}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.sideCard} style={{ background: `linear-gradient(135deg, ${project.tagColor}12, transparent)`, borderColor: project.tagColor + '30' }}>
                <h3>Interesse?</h3>
                <p style={{ fontSize: 14, color: 'var(--clr-muted)', lineHeight: 1.7, marginBottom: 16 }}>
                  Lernen Sie mehr über {project.title} und wie es Ihr Unternehmen voranbringen kann.
                </p>
                <a href="#demo" className={styles.sideBtn} style={{ background: project.tagColor }}>
                  Demo buchen
                </a>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── Other projects ── */}
      <section className={styles.moreSection}>
        <div className="container">
          <h2 className={styles.moreTitle}>Weitere Projekte</h2>
          <div className={styles.moreGrid}>
            {others.map(p => (
              <Link key={p.slug} to={`/projekte/${p.slug}`} className={styles.moreCard}>
                <div className={styles.moreCardGlow} style={{ background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${p.tagColor}20, transparent)` }} />
                <span className={styles.moreIcon}>{p.icon}</span>
                <div>
                  <strong className={styles.moreCardTitle}>{p.title}</strong>
                  <p className={styles.moreCardSub}>{p.subtitle}</p>
                </div>
                <svg className={styles.moreArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
