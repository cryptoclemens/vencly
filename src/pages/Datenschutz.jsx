import { Link } from 'react-router-dom'
import styles from './Legal.module.css'

export default function Datenschutz() {
  return (
    <div className={styles.page}>
      <div className="container">
        <Link to="/" className={styles.back}>← Zurück zur Startseite</Link>
        <h1 className={styles.title}>Datenschutzerklärung</h1>

        <div className={styles.content}>
          <p>Bei vencly.com, erreichbar unter <a href="https://www.vencly.com">www.vencly.com</a>, ist der Schutz der Privatsphäre unserer Besucher eine unserer Hauptprioritäten. Dieses Dokument enthält Informationen darüber, welche Daten von vencly.com gesammelt werden und wie wir sie verwenden.</p>

          <h2>Hosting & Technologie</h2>
          <p>Wir nutzen zur Erstellung unserer Website Webflow. Dienstanbieter ist Webflow, Inc., 398 11th St., Floor 2, San Francisco, CA 94103, USA. Webflow ist aktiver Teilnehmer des EU-US Data Privacy Frameworks. Zusätzlich verwendet Webflow Standardvertragsklauseln gemäß Art. 46 Abs. 2 und 3 DSGVO. Mehr Informationen finden Sie unter <a href="https://webflow.com/legal/privacy" target="_blank" rel="noreferrer">webflow.com/legal/privacy</a>.</p>

          <h2>Einwilligung</h2>
          <p>Durch die Nutzung unserer Website erklären Sie sich mit unserer Datenschutzrichtlinie einverstanden und stimmen deren Bedingungen zu.</p>

          <h2>Informationen, die wir sammeln</h2>
          <p>Wenn Sie uns direkt kontaktieren, können wir zusätzliche Informationen über Sie erhalten, wie Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer und den Inhalt Ihrer Nachricht. Wenn Sie sich für ein Konto registrieren, können wir nach Kontaktdaten fragen, einschließlich Name, Firmenname, Adresse und E-Mail-Adresse.</p>

          <h2>Wie wir Ihre Informationen nutzen</h2>
          <p>Wir nutzen die gesammelten Informationen, um unsere Website bereitzustellen und zu verbessern, zu verstehen wie Sie unsere Website nutzen, mit Ihnen zu kommunizieren sowie Betrug zu finden und zu verhindern.</p>

          <h2>Log-Dateien</h2>
          <p>vencly.com folgt einem Standardverfahren zur Nutzung von Log-Dateien. Diese Dateien protokollieren Besucher und erfassen IP-Adressen, Browsertyp, ISP, Datums- und Zeitstempel sowie Verweis-/Exit-Seiten. Diese sind nicht mit persönlich identifizierbaren Informationen verknüpft.</p>

          <h2>Cookies</h2>
          <p>Wie jede andere Website verwendet vencly.com Cookies, um Informationen zu speichern, einschließlich der Präferenzen der Besucher und der Seiten, die der Besucher aufgerufen hat. Sie können Cookies über Ihre Browsereinstellungen deaktivieren.</p>

          <h2>DSGVO-Datenschutzrechte</h2>
          <p>Jeder Nutzer hat das Recht auf Zugang, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung sowie das Recht auf Datenübertragbarkeit. Wenn Sie eine Anfrage stellen, haben wir einen Monat Zeit zu antworten. Kontaktieren Sie uns unter <a href="mailto:datenschutz@vencly.com">datenschutz@vencly.com</a>.</p>

          <h2>Kinder</h2>
          <p>vencly.com sammelt wissentlich keine persönlich identifizierbaren Informationen von Kindern unter 13 Jahren. Wenn Sie glauben, dass Ihr Kind solche Informationen bereitgestellt hat, kontaktieren Sie uns bitte umgehend.</p>

          <h2>Kontakt</h2>
          <p>Bei Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns unter <a href="mailto:datenschutz@vencly.com">datenschutz@vencly.com</a>.</p>
        </div>
      </div>
    </div>
  )
}
