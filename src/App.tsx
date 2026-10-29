import { useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { AchievementsSection } from './components/AchievementsSection'
import { CallToAction } from './components/CallToAction'
import Contact from './components/Contact'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SubjectsSection, type SubjectCategory } from './components/SubjectsSection'

function App() {
  const [activeCategory, setActiveCategory] = useState<SubjectCategory>('all')
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    window.localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
  )
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 pt-20 font-sans text-slate-100 transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
      <Header
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        <Hero theme={theme} />
        <CallToAction onContact={scrollToContact} />
        <AboutSection />
        <SubjectsSection
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <ExperienceSection />
        <AchievementsSection />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
