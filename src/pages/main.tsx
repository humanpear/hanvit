import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { LayoutOutletContext } from '@/app/layout/RootLayout'
import { SECTION_IDS, SectionId } from '@/shared/constants/sections'
import Home from './home'
import About from './about'
import Portfolio from './portfolio'
import Process from './process'
import ContactUs from './contactUs'

function Main() {
  const { onSectionChange } = useOutletContext<LayoutOutletContext>()

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      const mostVisible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (mostVisible) {
        onSectionChange(mostVisible.target.id as SectionId)
      }
    }

    const options: IntersectionObserverInit = {
      threshold: 0.4,
    }

    const observer = new IntersectionObserver(callback, options)

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => {
      observer.disconnect()
    }
  }, [onSectionChange])

  return (
    <main className="flex flex-col">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="contactUs">
        <ContactUs />
      </section>
    </main>
  )
}

export default Main
