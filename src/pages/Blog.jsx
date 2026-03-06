import { Link } from 'react-router-dom'
import styles from './Legal.module.css'
import blogStyles from './Blog.module.css'

const posts = [
  {
    date: 'März 2025',
    tag: 'Venture Clienting',
    title: 'Wie KMUs von Startups profitieren können – ohne Kapitalbeteiligung',
    excerpt: 'Venture Clienting ist mehr als ein Trend. Es ist eine bewährte Methode, mit der Unternehmen jeder Größe von Startup-Innovationen profitieren können – schnell, günstig und ohne Risiko.',
    slug: '#',
  },
  {
    date: 'Februar 2025',
    tag: 'KI & Automatisierung',
    title: 'KI-Agenten in der Praxis: Was sie wirklich leisten können',
    excerpt: 'Von der Bedarfsformulierung bis zur Vergabe – KI-Agenten automatisieren heute ganze Innovationsprozesse. Was das konkret bedeutet und wie Venclÿ dies umsetzt.',
    slug: '#',
  },
  {
    date: 'Januar 2025',
    tag: 'Compliance',
    title: 'UVgO-konforme Vergabe: So minimieren Sie rechtliche Risiken bei der Startup-Beauftragung',
    excerpt: 'Die Zusammenarbeit mit Startups ist oft mit Compliance-Fragen verbunden. Wir erklären, wie eine rechtssichere Vergabe aussieht und wie Venclÿ dabei hilft.',
    slug: '#',
  },
]

export default function Blog() {
  return (
    <div className={styles.page}>
      <div className="container">
        <Link to="/" className={styles.back}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Zurück
        </Link>
        <h1 className={styles.title}>Blog</h1>
        <div className={blogStyles.grid}>
          {posts.map((p, i) => (
            <a key={i} href={p.slug} className={blogStyles.card}>
              <div className={blogStyles.cardMeta}>
                <span className={blogStyles.tag}>{p.tag}</span>
                <span className={blogStyles.date}>{p.date}</span>
              </div>
              <h2 className={blogStyles.cardTitle}>{p.title}</h2>
              <p className={blogStyles.cardExcerpt}>{p.excerpt}</p>
              <span className={blogStyles.cardCta}>Weiterlesen →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
