import { Link } from 'react-router-dom'
import styles from './Legal.module.css'

export default function Impressum() {
  return (
    <div className={styles.page}>
      <div className="container">
        <Link to="/" className={styles.back}>← Zurück zur Startseite</Link>
        <h1 className={styles.title}>Impressum</h1>

        <div className={styles.content}>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>vencly GmbH<br />Leopoldstraße 31<br />80802 München</p>

          <h2>Vertreten durch</h2>
          <p>Clemens Eugen Theodor Pompeÿ</p>

          <h2>Kontakt</h2>
          <p>E-Mail: <a href="mailto:hello@vencly.com">hello@vencly.com</a></p>

          <h2>Registereintrag</h2>
          <p>Registernummer: HRB 290524 (AG München)</p>

          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [TBD]</p>

          <h2>Streitbeilegung</h2>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

          <h2>Haftungsausschluss</h2>
          <h3>Haftung für Inhalte</h3>
          <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

          <h3>Haftung für Links</h3>
          <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

          <h3>Urheberrecht</h3>
          <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
        </div>
      </div>
    </div>
  )
}
