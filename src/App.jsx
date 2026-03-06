import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projekte from './pages/Projekte'
import ProjectDetail from './pages/ProjectDetail'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import UeberUns from './pages/UeberUns'
import Blog from './pages/Blog'
import Karriere from './pages/Karriere'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/projekte/:slug" element={<ProjectDetail />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/karriere" element={<Karriere />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
