import { Link } from 'react-router-dom'
import styles from './Legal.module.css'
import kStyles from './Karriere.module.css'

const jobs = [
  {
    title: 'Senior Full-Stack Developer (m/w/d)',
    type: 'Vollzeit · Remote',
    dept: 'Engineering',
    desc: 'Du entwickelst die nächste Generation unserer KI-Agenten-Plattform. React, Node.js und ein Gespür für nutzerzentriertes Design sind dein Handwerkszeug.',
  },
  {
    title: 'KI / ML Engineer (m/w/d)',
    type: 'Vollzeit · München / Remote',
    dept: 'KI & Data',
    desc: 'Du trainierst und optimierst unsere Matching-Modelle und baust die KI-Agenten weiter aus. Erfahrung mit LLMs, RAG und Embedding-Modellen ist ein Plus.',
  },
  {
    title: 'Business Development Manager – Corporates (m/w/d)',
    type: 'Vollzeit · München',
    dept: 'Sales',
    desc: 'Du baust unsere Unternehmenskunden-Pipeline auf und begleitest DAX-Konzerne sowie Mittelständler bei der Einführung von Venture Clienting.',
  },
]

export default function Karriere() {
  return (
    <div className={styles.page}>
      <div className="container">
        <Link to="/" className={styles.back}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Zurück
        </Link>
        <h1 className={styles.title}>Karriere</h1>
        <div className={styles.content} style={{maxWidth:'100%'}}>
          <p>
            Bei Venclÿ gestaltest du die Zukunft der Corporate Innovation. Wir sind ein kleines, ambitioniertes Team
            in München mit Remote-First-Kultur. Wir suchen Menschen, die Lust haben, etwas wirklich Neues aufzubauen.
          </p>
        </div>

        <div className={kStyles.jobs}>
          {jobs.map((j, i) => (
            <div key={i} className={kStyles.job}>
              <div className={kStyles.jobLeft}>
                <span className={kStyles.dept}>{j.dept}</span>
                <h2 className={kStyles.jobTitle}>{j.title}</h2>
                <p className={kStyles.jobType}>{j.type}</p>
                <p className={kStyles.jobDesc}>{j.desc}</p>
              </div>
              <a href="mailto:hello@vencly.com" className={kStyles.apply}>
                Jetzt bewerben
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>

        <div className={styles.content}>
          <h2>Initiativbewerbung</h2>
          <p>
            Kein passendes Stellenangebot dabei? Schreib uns einfach an{' '}
            <a href="mailto:hello@vencly.com">hello@vencly.com</a> – wir freuen uns auf deine Initiativbewerbung.
          </p>
        </div>
      </div>
    </div>
  )
}
