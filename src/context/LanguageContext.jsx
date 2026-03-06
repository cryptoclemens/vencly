import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const translations = {
  de: {
    nav: { home: 'Home', projects: 'Projekte', events: 'Events', contact: 'Kontakt', login: 'Log in', demo: 'Demo buchen' },
    hero: {
      badge: 'KI-Agenten Plattform · Live',
      label: 'Venture Clienting:',
      sub: 'Die erste KI-Agenten-Plattform, die Unternehmen und Startups automatisiert verbindet – compliant, skalierbar, sofort einsatzbereit.',
      cta1: 'Demo buchen', cta2: 'Factsheet laden',
      stat1: 'Kostenreduktion', stat2: 'Time to Live', stat3: 'geprüfte Startups',
    },
    logos: { label: 'Vertraut von führenden Unternehmen' },
    features: {
      eyebrow: 'Was wir lösen',
      title: 'Ihr persönlicher KI-Agent für Innovation & Ausschreibung',
      sub: 'Mit unserer KI-Agenten-Plattform können KMUs erstmals einen bezahlbaren, dezentralen Innovation Hub schaffen.',
    },
    pillars: { eyebrow: 'Für wen?', title: 'Drei Bereiche. Eine Plattform.' },
    cta: {
      title: 'Bereit für die Zukunft der Innovation?',
      sub: 'Buchen Sie eine kostenlose Demo und sehen Sie, wie Vencly Ihre Innovationsprozesse transformiert.',
      btn1: 'Demo buchen', btn2: 'Factsheet laden',
    },
    faq: { eyebrow: 'FAQ', title: 'Häufige Fragen', contact: 'Nicht gefunden? Kontaktieren Sie uns.' },
    projects: { eyebrow: 'Ökosystem', title: 'Unsere Projekte', sub: 'Venclÿ ist mehr als eine Plattform – entdecken Sie unser Innovationsökosystem.', all: 'Alle Projekte ansehen' },
    footer: { tagline: 'Venture Clienting.\nJetzt. Skalierbar. Intelligent.', copy: '© {year} Venclÿ GmbH. Alle Rechte vorbehalten.' },
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', events: 'Events', contact: 'Contact', login: 'Log in', demo: 'Book Demo' },
    hero: {
      badge: 'AI Agents Platform · Live',
      label: 'Venture Clienting:',
      sub: 'The first AI agent platform that automatically connects corporations and startups – compliant, scalable, ready to use.',
      cta1: 'Book Demo', cta2: 'Download Factsheet',
      stat1: 'Cost Reduction', stat2: 'Time to Live', stat3: 'verified Startups',
    },
    logos: { label: 'Trusted by leading companies' },
    features: {
      eyebrow: 'What we solve',
      title: 'Your personal AI agent for Innovation & Procurement',
      sub: 'With our AI agent platform, SMEs can build an affordable, decentralized innovation hub for the first time.',
    },
    pillars: { eyebrow: 'For whom?', title: 'Three areas. One platform.' },
    cta: {
      title: 'Ready for the future of innovation?',
      sub: 'Book a free demo and see how Vencly transforms your innovation processes.',
      btn1: 'Book Demo', btn2: 'Download Factsheet',
    },
    faq: { eyebrow: 'FAQ', title: 'Frequently Asked Questions', contact: "Didn't find what you're looking for? Contact us." },
    projects: { eyebrow: 'Ecosystem', title: 'Our Projects', sub: 'Venclÿ is more than a platform – explore our innovation ecosystem.', all: 'View all projects' },
    footer: { tagline: 'Venture Clienting.\nNow. Scalable. Intelligent.', copy: '© {year} Venclÿ GmbH. All rights reserved.' },
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('de')
  const t = translations[lang]
  const toggle = () => setLang(l => l === 'de' ? 'en' : 'de')
  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() { return useContext(LanguageContext) }
