import { Link } from 'react-router-dom'
import styles from './Legal.module.css'

export default function UeberUns() {
  return (
    <div className={styles.page}>
      <div className="container">
        <Link to="/" className={styles.back}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Zurück
        </Link>
        <h1 className={styles.title}>Über uns</h1>
        <div className={styles.content}>
          <p>
            <strong>Venclÿ GmbH</strong> ist die erste KI-Agenten-Plattform für Venture Clienting im deutschsprachigen Raum.
            Wir verbinden Unternehmen mit den besten Startups Europas – automatisiert, compliant und skalierbar.
          </p>

          <h2>Unsere Mission</h2>
          <p>
            Venture Clienting ist die effektivste Methode, um als Unternehmen von Startup-Innovationen zu profitieren –
            ohne Beteiligung, ohne M&A-Risiko. Venclÿ macht diese Methode für jedes Unternehmen zugänglich: von DAX-Konzernen
            bis hin zu mittelständischen Betrieben.
          </p>

          <h2>Was uns antreibt</h2>
          <p>
            Wir glauben, dass Innovation kein Privileg großer Konzerne sein sollte. Mit unserer KI-Agenten-Plattform
            demokratisieren wir den Zugang zu Startup-Innovationen und machen strukturierte Innovationsprozesse für
            jedes Unternehmen bezahlbar und sofort einsetzbar.
          </p>

          <h2>Das Team</h2>
          <p>
            Venclÿ wurde von <strong>Clemens Eugen Theodor Pompeÿ</strong> gegründet und hat seinen Sitz in München.
            Das Team vereint Expertise aus den Bereichen Venture Capital, Corporate Innovation, KI und Softwareentwicklung.
          </p>

          <h2>Kontakt</h2>
          <p>
            Venclÿ GmbH<br />
            Leopoldstraße 31<br />
            80802 München<br />
            Deutschland<br /><br />
            <a href="mailto:hello@vencly.com">hello@vencly.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
