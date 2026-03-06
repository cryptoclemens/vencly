import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

/* ─── Animated words ─────────────────────────────────────────────────────────── */
const WORDS = [
  'no Slides but Prototypes!',
  'digitale Transformation!',
  'Innovation auf Knopfdruck!',
  'in die Zukunft investieren!',
  'von Startups lernen!',
  'Wachstum beschleunigen!',
  'skalierbar & bezahlbar!',
  'mit Startups wachsen!',
]

function TypeWriter() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = WORDS[idx]
    const speed = deleting ? 28 : 58
    const pause = deleting ? 0 : 1800

    if (!deleting && text === target) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setIdx(i => (i + 1) % WORDS.length)
      return
    }
    const t = setTimeout(() => {
      setText(deleting ? text.slice(0, -1) : target.slice(0, text.length + 1))
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, idx])

  return (
    <span className={styles.typedText}>
      {text}<span className={styles.cursor} />
    </span>
  )
}

/* ─── Counter ─────────────────────────────────────────────────────────────────── */
function Counter({ to, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = to / 60
        const t = setInterval(() => {
          start += step
          if (start >= to) { setCount(to); clearInterval(t) }
          else setCount(Math.floor(start))
        }, 16)
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to])
  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── FAQ ─────────────────────────────────────────────────────────────────────── */
const FAQ = [
  { q: 'Was ist Venture Clienting?', a: 'Venture Clienting ist ein Innovationsansatz, bei dem etablierte Unternehmen als erste zahlende Kunden von Startups auftreten – ohne Beteiligung, ohne M&A. Unternehmen nutzen innovative Startup-Lösungen schnell und kostengünstig, reduzieren Entwicklungsrisiken und stärken die eigene Innovationskraft.' },
  { q: 'Wie funktioniert die KI-Agenten-Plattform?', a: 'Unsere KI-Agenten automatisieren den gesamten Innovationsprozess: von der Bedarfsformulierung über das Startup-Matching bis zur compliant-konformen Vergabe. Das spart bis zu 70 % der internen Ressourcen und macht Innovation für jedes Unternehmen zugänglich.' },
  { q: 'Ist Vencly für KMUs geeignet?', a: 'Ja. Vencly wurde speziell entwickelt, um KMUs erstmals einen bezahlbaren, dezentralen Innovation Hub zu ermöglichen – ohne Fixkosten, ohne Personalbindung, sofort einsatzbereit und UVgO-, DSGVO- & SLA-konform.' },
  { q: 'Wie schnell kann ich starten?', a: 'Nach einem kurzen Onboarding-Call ist Ihre Instanz innerhalb von 48 Stunden live. Unsere KI lernt Ihre Unternehmensstruktur und ist sofort einsatzbereit für die ersten Ausschreibungen und Startup-Matches.' },
]

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button className={styles.faqQ} onClick={() => setOpen(!open)}>
        <span>{item.q}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={styles.faqA} style={{ maxHeight: open ? 200 : 0 }}>
        <p>{item.a}</p>
      </div>
    </div>
  )
}

/* ─── Page ────────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className={styles.page}>

      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        {/* Background glows */}
        <div className={`${styles.blob1}`} />
        <div className={`${styles.blob2}`} />
        <div className={`${styles.blob3}`} />

        {/* Grid pattern */}
        <div className={styles.grid} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            KI-Agenten Plattform · Live
          </div>

          <h1 className={styles.heroH1}>
            Venture Clienting:
            <br />
            <TypeWriter />
          </h1>

          <p className={styles.heroSub}>
            Die erste KI-Agenten-Plattform, die Unternehmen und Startups
            automatisiert verbindet – compliant, skalierbar, sofort einsatzbereit.
          </p>

          <div className={styles.heroCtas}>
            <a href="#demo" className={styles.ctaPrimary}>
              Demo buchen
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#factsheet" className={styles.ctaSecondary}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 16V4M8 12l4 4 4-4M4 20h16" />
              </svg>
              Factsheet laden
            </a>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong><Counter to={70} suffix="%" /></strong>
              <span>Kostenreduktion</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong><Counter to={48} suffix="h" /></strong>
              <span>Time to Live</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong><Counter to={500} suffix="+" /></strong>
              <span>geprüfte Startups</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollHint}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ══ LOGOS ══ */}
      <section className={styles.logos}>
        <div className="container">
          <p className={styles.logosLabel}>Vertraut von führenden Unternehmen</p>
          <div className={styles.logosRow}>
            <span className={`${styles.logoRef} ${styles.logoTollCollect}`}>TOLL COLLECT</span>
            <span className={`${styles.logoRef} ${styles.logoSwm}`}>SW//M</span>
            <span className={`${styles.logoRef} ${styles.logoMvg}`}>◀ MVG</span>
            <span className={`${styles.logoRef}`} style={{color:'#aaa'}}>+ weitere</span>
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section className={styles.features} id="features">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Was wir lösen</span>
            <h2 className={styles.sectionTitle}>
              Ihr persönlicher KI-Agent für<br />
              <span className="gradient-text">Innovation & Ausschreibung</span>
            </h2>
            <p className={styles.sectionSub}>
              Mit unserer KI-Agenten-Plattform können KMUs erstmals einen bezahlbaren,
              dezentralen Innovation Hub schaffen – und bestehende Innovationsabteilungen
              senken ihre operativen Kosten signifikant.
            </p>
          </div>

          <div className={styles.featureGrid}>
            {[
              { icon: '💡', title: 'Bezahlbare Innovation', sub: 'Auch ohne eigene Abteilung', desc: 'KMUs erhalten Zugang zu einem skalierbaren, digitalen Innovation Hub, ohne Fixkosten oder Personalbindung.', accent: '#FF6B35' },
              { icon: '⚡', title: 'Bis zu 70% Entlastung', sub: 'Automatisierte Prozesse', desc: 'Recherche, Matching, Dokumentation & Projektsteuerung – alles automatisiert durch smarte KI-Agenten.', accent: '#6366F1' },
              { icon: '🛡️', title: 'Compliance out-of-the-box', sub: 'UVgO, DSGVO & SLA', desc: 'Rechtssicher und sofort einsatzbereit. Alle Vergabeprozesse sind nach geltendem Gesetz vorgeprüft.', accent: '#06B6D4' },
              { icon: '🔄', title: 'Skalierbare Zyklen', sub: 'Von Idee bis Vergabe', desc: 'Von einzelnen Ideen bis hin zu wiederkehrenden Innovationszyklen – gesteuert durch KI.', accent: '#10B981' },
              { icon: '👥', title: 'Mitarbeiter aktiviert', sub: 'Ideen ernst genommen', desc: 'Jede Idee wird erfasst und auf Wunsch automatisiert weiterverarbeitet. Keine Idee geht verloren.', accent: '#F59E0B' },
              { icon: '🚀', title: '48h Time-to-Live', sub: 'Sofort einsatzbereit', desc: 'Nach dem Onboarding ist Ihre Instanz in 48 Stunden live. Keine langen Implementierungsprojekte.', accent: '#EC4899' },
            ].map((f, i) => (
              <div key={i} className={styles.featureCard} style={{ '--accent': f.accent }}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div className={styles.featureText}>
                  <strong>{f.title}</strong>
                  <em>{f.sub}</em>
                  <p>{f.desc}</p>
                </div>
                <div className={styles.featureGlow} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THREE PILLARS ══ */}
      <section className={styles.pillars}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Für wen?</span>
            <h2 className={styles.sectionTitle}>Drei Bereiche. Eine Plattform.</h2>
          </div>

          <div className={styles.pillarsGrid}>
            {[
              {
                num: '01',
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="24" cy="18" r="10" /><path d="M24 28v8M14 44h20M20 36l-4 4 4 4M28 36l4 4-4 4" />
                  </svg>
                ),
                tags: ['Innovation', 'Prozessoptimierung'],
                title: 'Innovationsabteilungen',
                desc: 'Venclÿ ist der effiziente Bieter-Marktplatz für Startups und die smarte Datenverarbeitung für bestehende oder aufzubauende Venture Client Units. KI-gestützte Aktivierung der „schlummernden" Mitarbeitenden-Ideen.',
              },
              {
                num: '02',
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 38V18l16-12 16 12v20"/><rect x="18" y="28" width="12" height="10"/>
                    <path d="M24 28v10"/>
                  </svg>
                ),
                tags: ['Strategie & HR', 'Unternehmensentwicklung'],
                title: 'Unternehmensentwicklung',
                desc: 'Venclÿ lässt Sie vor der Welle surfen: Steigerung der Innovationsfähigkeit in Zeiten des Fachkräftemangels und Erhöhung der Mitarbeiterbindung durch direkte Einbindung innovativer Startup-Lösungen.',
              },
              {
                num: '03',
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="10" y="14" width="28" height="24" rx="3"/>
                    <path d="M10 20h28M17 14v-4M31 14v-4"/>
                    <circle cx="18" cy="28" r="2"/><circle cx="24" cy="28" r="2"/><circle cx="30" cy="28" r="2"/>
                  </svg>
                ),
                tags: ['Einkauf', 'Entlastung'],
                title: 'Einkauf & Vergabe',
                desc: 'Venclÿ nimmt Ihnen die Arbeit bei kleinteiligen Ausschreibungen ab. Direkte Beauftragung dank vorabgeprüftem Vergabeprozess, anpassbar an Ihre Unternehmens-Richtlinien.',
              },
            ].map((p, i) => (
              <div key={i} className={styles.pillar}>
                <div className={styles.pillarNum}>{p.num}</div>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <div className={styles.pillarTags}>
                  {p.tags.map(t => <span key={t} className={styles.pillarTag}>{t}</span>)}
                </div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
                <a href="#" className={styles.pillarMore}>
                  Mehr erfahren
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className={styles.ctaBanner} id="demo">
        <div className={styles.ctaBannerGlow1} />
        <div className={styles.ctaBannerGlow2} />
        <div className="container">
          <div className={styles.ctaBannerInner}>
            <div>
              <h2 className={styles.ctaBannerTitle}>Bereit für die Zukunft<br />der Innovation?</h2>
              <p className={styles.ctaBannerSub}>Buchen Sie eine kostenlose Demo und sehen Sie, wie Vencly Ihre Innovationsprozesse transformiert.</p>
            </div>
            <div className={styles.ctaBannerActions}>
              <a href="#" className={styles.ctaPrimary} style={{fontSize:'15px', padding:'13px 28px'}}>
                Demo buchen
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#factsheet" className={styles.ctaSecondary} style={{fontSize:'15px', padding:'13px 24px'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 16V4M8 12l4 4 4-4M4 20h16" />
                </svg>
                Factsheet laden
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqLayout}>
            <div className={styles.faqLeft}>
              <span className={styles.eyebrow}>FAQ</span>
              <h2 className={styles.sectionTitle}>Häufige Fragen</h2>
              <p className={styles.sectionSub}>Nicht gefunden was Sie suchen? <a href="#kontakt" style={{color:'var(--clr-accent)'}}>Kontaktieren Sie uns.</a></p>
            </div>
            <div className={styles.faqRight}>
              {FAQ.map((item, i) => <FaqItem key={i} item={item} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROJECTS TEASER ══ */}
      <section className={styles.teaser}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Ökosystem</span>
            <h2 className={styles.sectionTitle}>Unsere Projekte</h2>
            <p className={styles.sectionSub}>Venclÿ ist mehr als eine Plattform – entdecken Sie unser Innovationsökosystem.</p>
          </div>
          <div className={styles.teaserGrid}>
            <Link to="/projekte/innovation-republic" className={`${styles.teaserCard} ${styles.teaserCardBig}`}>
              <div className={styles.teaserCardGlow} style={{'--tc': '#6366F1'}} />
              <span className={styles.teaserTag}>Flaggschiff-Projekt</span>
              <h3>Innovation Republic</h3>
              <p>Die Community für Venture Clienting in Deutschland. Events, Netzwerk und Wissenstransfer.</p>
              <span className={styles.teaserArrow}>→</span>
            </Link>
            <div className={styles.teaserSmall}>
              <Link to="/projekte/venture-scout" className={styles.teaserCard}>
                <div className={styles.teaserCardGlow} style={{'--tc': '#FF6B35'}} />
                <span className={styles.teaserTag}>KI-Tool</span>
                <h3>Venture Scout</h3>
                <p>Automatisches Startup-Scouting mit KI.</p>
                <span className={styles.teaserArrow}>→</span>
              </Link>
              <Link to="/projekte/ki-matchmaker" className={styles.teaserCard}>
                <div className={styles.teaserCardGlow} style={{'--tc': '#06B6D4'}} />
                <span className={styles.teaserTag}>Beta</span>
                <h3>KI Matchmaker</h3>
                <p>Intelligentes Matching zwischen Bedarf und Lösung.</p>
                <span className={styles.teaserArrow}>→</span>
              </Link>
            </div>
          </div>
          <div style={{textAlign:'center', marginTop:'40px'}}>
            <Link to="/projekte" className={styles.ctaSecondary} style={{display:'inline-flex'}}>
              Alle Projekte ansehen
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
