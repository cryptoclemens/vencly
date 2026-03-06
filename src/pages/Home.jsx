import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import styles from './Home.module.css'

const WORDS_DE = ['no Slides but Prototypes!','digitale Transformation!','Innovation auf Knopfdruck!','von Startups lernen!','Wachstum beschleunigen!','skalierbar & bezahlbar!','mit Startups wachsen!']
const WORDS_EN = ['no Slides but Prototypes!','digital Transformation!','Innovation on Demand!','learn from Startups!','accelerate Growth!','scalable & affordable!','grow with Startups!']

function TypeWriter({ lang }) {
  const words = lang === 'de' ? WORDS_DE : WORDS_EN
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  useEffect(() => { setIdx(0); setText(''); setDeleting(false) }, [lang])
  useEffect(() => {
    const target = words[idx]
    if (!deleting && text === target) { const t = setTimeout(() => setDeleting(true), 1800); return () => clearTimeout(t) }
    if (deleting && text === '') { setDeleting(false); setIdx(i => (i + 1) % words.length); return }
    const t = setTimeout(() => setText(deleting ? text.slice(0,-1) : target.slice(0, text.length+1)), deleting ? 28 : 58)
    return () => clearTimeout(t)
  }, [text, deleting, idx, words])
  return <span className={styles.typedText}>{text}<span className={styles.cursor} /></span>
}

function Counter({ to, suffix = '' }) {
  const [count, setCount] = useState(0); const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let s = 0; const step = to / 60
        const t = setInterval(() => { s += step; if (s >= to) { setCount(to); clearInterval(t) } else setCount(Math.floor(s)) }, 16)
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to])
  return <span ref={ref}>{count}{suffix}</span>
}

const FAQ_DE = [
  { q: 'Was ist Venture Clienting?', a: 'Venture Clienting ist ein Innovationsansatz, bei dem etablierte Unternehmen als erste zahlende Kunden von Startups auftreten – ohne Beteiligung, ohne M&A. Unternehmen nutzen innovative Startup-Lösungen schnell und kostengünstig, reduzieren Entwicklungsrisiken und stärken die eigene Innovationskraft.' },
  { q: 'Wie funktioniert die KI-Agenten-Plattform?', a: 'Unsere KI-Agenten automatisieren den gesamten Innovationsprozess: von der Bedarfsformulierung über das Startup-Matching bis zur compliant-konformen Vergabe. Das spart bis zu 70 % der internen Ressourcen und macht Innovation für jedes Unternehmen zugänglich.' },
  { q: 'Ist Vencly für KMUs geeignet?', a: 'Ja. Vencly wurde speziell entwickelt, um KMUs erstmals einen bezahlbaren, dezentralen Innovation Hub zu ermöglichen – ohne Fixkosten, ohne Personalbindung, sofort einsatzbereit und UVgO-, DSGVO- & SLA-konform.' },
  { q: 'Wie schnell kann ich starten?', a: 'Nach einem kurzen Onboarding-Call ist Ihre Instanz innerhalb von 48 Stunden live. Unsere KI lernt Ihre Unternehmensstruktur und ist sofort einsatzbereit für die ersten Ausschreibungen und Startup-Matches.' },
]
const FAQ_EN = [
  { q: 'What is Venture Clienting?', a: 'Venture Clienting is an innovation approach where established companies become the first paying customers of startups – without equity, without M&A. Companies deploy innovative startup solutions quickly and cost-effectively.' },
  { q: 'How does the AI agent platform work?', a: 'Our AI agents automate the entire innovation process: from need formulation through startup matching to compliant procurement. This saves up to 70% of internal resources and makes innovation accessible to any company.' },
  { q: 'Is Vencly suitable for SMEs?', a: 'Yes. Vencly was specifically designed to give SMEs access to an affordable, decentralized innovation hub – without fixed costs, without staff commitment, ready immediately and compliant with UVgO, GDPR & SLA.' },
  { q: 'How quickly can I get started?', a: 'After a short onboarding call, your instance goes live within 48 hours. Our AI learns your company structure and is immediately ready for the first tenders and startup matches.' },
]

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button className={styles.faqQ} onClick={() => setOpen(!open)}>
        <span>{item.q}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }}><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div className={styles.faqA} style={{ maxHeight: open ? 220 : 0 }}><p>{item.a}</p></div>
    </div>
  )
}

const TollCollectLogo = () => (
  <svg height="44" viewBox="0 0 200 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="7" width="46" height="40" rx="3" fill="#005BAA"/>
    <line x1="12" y1="7" x2="34" y2="47" stroke="white" strokeWidth="9"/>
    <text x="56" y="28" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="#1a1a1a">TOLL COLLECT</text>
    <text x="56" y="44" fontFamily="Arial, sans-serif" fontSize="9" fill="#888">service on the road</text>
  </svg>
)
const SwmLogo = () => (
  <svg height="44" viewBox="0 0 124 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="36" fontFamily="'Arial Black', sans-serif" fontSize="36" fontWeight="900" fill="#1a1a1a">SW</text>
    <text x="74" y="36" fontFamily="'Arial Black', sans-serif" fontSize="36" fontWeight="900" fill="#005BAA">//</text>
    <text x="98" y="36" fontFamily="'Arial Black', sans-serif" fontSize="36" fontWeight="900" fill="#1a1a1a">M</text>
  </svg>
)
const MvgLogo = () => (
  <svg height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,20 13,4 13,36" fill="#005BAA"/>
    <rect x="17" y="4" width="3" height="32" fill="#005BAA"/>
    <text x="27" y="29" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#005BAA">MVG</text>
  </svg>
)

export default function Home() {
  const { lang, t } = useLang()
  const faq = lang === 'de' ? FAQ_DE : FAQ_EN
  const features = [
    { icon: '💡', title: lang==='de'?'Bezahlbare Innovation':'Affordable Innovation', sub: lang==='de'?'Auch ohne eigene Abteilung':'Even without a department', desc: lang==='de'?'KMUs erhalten Zugang zu einem skalierbaren, digitalen Innovation Hub, ohne Fixkosten oder Personalbindung.':'SMEs get access to a scalable digital innovation hub without fixed costs or staff commitment.', accent: '#FF6B35' },
    { icon: '⚡', title: lang==='de'?'Bis zu 70% Entlastung':'Up to 70% relief', sub: lang==='de'?'Automatisierte Prozesse':'Automated processes', desc: lang==='de'?'Recherche, Matching, Dokumentation & Projektsteuerung – alles automatisiert durch smarte KI-Agenten.':'Research, matching, documentation & control – all automated by smart AI agents.', accent: '#6366F1' },
    { icon: '🛡️', title: 'Compliance out-of-the-box', sub: 'UVgO, DSGVO & SLA', desc: lang==='de'?'Rechtssicher und sofort einsatzbereit. Alle Vergabeprozesse sind nach geltendem Gesetz vorgeprüft.':'Legally secure and immediately ready. All procurement processes pre-checked against applicable law.', accent: '#06B6D4' },
    { icon: '🔄', title: lang==='de'?'Skalierbare Zyklen':'Scalable Cycles', sub: lang==='de'?'Von Idee bis Vergabe':'From idea to award', desc: lang==='de'?'Von einzelnen Ideen bis hin zu wiederkehrenden Innovationszyklen – gesteuert durch KI.':'From individual ideas to recurring innovation cycles – driven by AI.', accent: '#10B981' },
    { icon: '👥', title: lang==='de'?'Mitarbeiter aktiviert':'Employees activated', sub: lang==='de'?'Ideen ernst genommen':'Ideas taken seriously', desc: lang==='de'?'Jede Idee wird erfasst und auf Wunsch automatisiert weiterverarbeitet. Keine Idee geht verloren.':'Every idea is captured and automatically processed. No idea gets lost.', accent: '#F59E0B' },
    { icon: '🚀', title: '48h Time-to-Live', sub: lang==='de'?'Sofort einsatzbereit':'Immediately ready', desc: lang==='de'?'Nach dem Onboarding ist Ihre Instanz in 48 Stunden live. Keine langen Implementierungsprojekte.':'After onboarding, your instance is live in 48 hours. No lengthy implementation projects.', accent: '#EC4899' },
  ]

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.blob1}/><div className={styles.blob2}/><div className={styles.blob3}/>
        <div className={styles.grid} aria-hidden="true"/>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroBadge}><span className={styles.badgeDot}/>{t.hero.badge}</div>
          <h1 className={styles.heroH1}>
            {t.hero.label}
            {/* Fixed-height typewriter row prevents layout shift */}
            <span className={styles.typewriterRow}><TypeWriter lang={lang}/></span>
          </h1>
          <p className={styles.heroSub}>{t.hero.sub}</p>
          <div className={styles.heroCtas}>
            <a href="#demo" className={styles.ctaPrimary}>{t.hero.cta1}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            <a href="#factsheet" className={styles.ctaSecondary}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 16V4M8 12l4 4 4-4M4 20h16"/></svg>{t.hero.cta2}</a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}><strong><Counter to={70} suffix="%"/></strong><span>{t.hero.stat1}</span></div>
            <div className={styles.statDivider}/>
            <div className={styles.stat}><strong><Counter to={48} suffix="h"/></strong><span>{t.hero.stat2}</span></div>
            <div className={styles.statDivider}/>
            <div className={styles.stat}><strong><Counter to={500} suffix="+"/></strong><span>{t.hero.stat3}</span></div>
          </div>
        </div>
        <div className={styles.scrollHint}><span>Scroll</span><div className={styles.scrollLine}/></div>
      </section>

      {/* LOGOS */}
      <section className={styles.logos}>
        <div className="container">
          <p className={styles.logosLabel}>{t.logos.label}</p>
          <div className={styles.logosRow}>
            <div className={styles.logoRef}><TollCollectLogo/></div>
            <div className={styles.logoRef}><SwmLogo/></div>
            <div className={styles.logoRef}><MvgLogo/></div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features} id="features">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>{t.features.eyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.features.title}</h2>
            <p className={styles.sectionSub}>{t.features.sub}</p>
          </div>
          <div className={styles.featureGrid}>
            {features.map((f,i) => (
              <div key={i} className={styles.featureCard} style={{'--accent':f.accent}}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div className={styles.featureText}><strong>{f.title}</strong><em>{f.sub}</em><p>{f.desc}</p></div>
                <div className={styles.featureGlow}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className={styles.pillars}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>{t.pillars.eyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.pillars.title}</h2>
          </div>
          <div className={styles.pillarsGrid}>
            {[
              { num:'01', tags: lang==='de'?['Innovation','Prozessoptimierung']:['Innovation','Process Optimisation'], title: lang==='de'?'Innovationsabteilungen':'Innovation Departments', desc: lang==='de'?'Venclÿ ist der effiziente Bieter-Marktplatz für Startups und die smarte Datenverarbeitung für bestehende oder aufzubauende Venture Client Units.':'Venclÿ is the efficient bidder marketplace for startups and smart data processing for existing or new venture client units.' },
              { num:'02', tags: lang==='de'?['Strategie & HR','Unternehmensentwicklung']:['Strategy & HR','Corporate Development'], title: lang==='de'?'Unternehmensentwicklung':'Corporate Development', desc: lang==='de'?'Venclÿ lässt Sie vor der Welle surfen: Steigerung der Innovationsfähigkeit in Zeiten des Fachkräftemangels und Erhöhung der Mitarbeiterbindung.':'Venclÿ lets you surf ahead of the wave: boosting innovation capacity despite skills shortages and improving employee retention.' },
              { num:'03', tags: lang==='de'?['Einkauf','Entlastung']:['Procurement','Relief'], title: lang==='de'?'Einkauf & Vergabe':'Procurement & Tendering', desc: lang==='de'?'Venclÿ nimmt Ihnen die Arbeit bei kleinteiligen Ausschreibungen ab. Direkte Beauftragung dank vorabgeprüftem Vergabeprozess, anpassbar an Ihre Richtlinien.':'Venclÿ takes the work out of small-scale tenders. Direct commissioning thanks to pre-checked procurement processes, adaptable to your policies.' },
            ].map((p,i) => (
              <div key={i} className={styles.pillar}>
                <div className={styles.pillarNum}>{p.num}</div>
                <div className={styles.pillarTags}>{p.tags.map(tag=><span key={tag} className={styles.pillarTag}>{tag}</span>)}</div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
                <a href="#" className={styles.pillarMore}>{lang==='de'?'Mehr erfahren →':'Learn more →'}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner} id="demo">
        <div className="container">
          <div className={styles.ctaBannerInner}>
            <div>
              <h2 className={styles.ctaBannerTitle}>{t.cta.title}</h2>
              <p className={styles.ctaBannerSub}>{t.cta.sub}</p>
            </div>
            <div className={styles.ctaBannerActions}>
              <a href="#" className={styles.ctaPrimary}>{t.cta.btn1}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              <a href="#" className={styles.ctaSecondary}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 16V4M8 12l4 4 4-4M4 20h16"/></svg>{t.cta.btn2}</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqLayout}>
            <div className={styles.faqLeft}>
              <span className={styles.eyebrow}>{t.faq.eyebrow}</span>
              <h2 className={styles.sectionTitle}>{t.faq.title}</h2>
              <p className={styles.sectionSub}><a href="#kontakt" style={{color:'var(--clr-accent)'}}>{t.faq.contact}</a></p>
            </div>
            <div className={styles.faqRight}>{faq.map((item,i)=><FaqItem key={`${lang}-${i}`} item={item}/>)}</div>
          </div>
        </div>
      </section>

      {/* PROJECTS TEASER */}
      <section className={styles.teaser}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>{t.projects.eyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.projects.title}</h2>
            <p className={styles.sectionSub}>{t.projects.sub}</p>
          </div>
          <div className={styles.teaserGrid}>
            <Link to="/projekte/innovation-republic" className={`${styles.teaserCard} ${styles.teaserCardBig}`}>
              <div className={styles.teaserCardGlow} style={{'--tc':'#6366F1'}}/>
              <span className={styles.teaserTag}>{lang==='de'?'Flaggschiff-Projekt':'Flagship Project'}</span>
              <h3>Innovation Republic</h3>
              <p>{lang==='de'?'Die Community für Venture Clienting in Deutschland. Events, Netzwerk und Wissenstransfer.':'The community for Venture Clienting in Germany. Events, networking and knowledge transfer.'}</p>
              <span className={styles.teaserArrow}>→</span>
            </Link>
            <div className={styles.teaserSmall}>
              <Link to="/projekte/venture-scout" className={styles.teaserCard}>
                <div className={styles.teaserCardGlow} style={{'--tc':'#FF6B35'}}/>
                <span className={styles.teaserTag}>{lang==='de'?'KI-Tool':'AI Tool'}</span>
                <h3>Venture Scout</h3>
                <p>{lang==='de'?'Automatisches Startup-Scouting mit KI.':'Automatic startup scouting with AI.'}</p>
                <span className={styles.teaserArrow}>→</span>
              </Link>
              <Link to="/projekte/ki-matchmaker" className={styles.teaserCard}>
                <div className={styles.teaserCardGlow} style={{'--tc':'#06B6D4'}}/>
                <span className={styles.teaserTag}>Beta</span>
                <h3>KI Matchmaker</h3>
                <p>{lang==='de'?'Intelligentes Matching zwischen Bedarf und Lösung.':'Intelligent matching between need and solution.'}</p>
                <span className={styles.teaserArrow}>→</span>
              </Link>
            </div>
          </div>
          <div style={{textAlign:'center',marginTop:'40px'}}>
            <Link to="/projekte" className={styles.ctaSecondary} style={{display:'inline-flex'}}>{t.projects.all}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
          </div>
        </div>
      </section>

    </div>
  )
}
