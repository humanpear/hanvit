import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Header from './header'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { SECTION_IDS } from '@/shared/constants/sectionIds'

function RootLayout() {
  const activeSection = useScrollSpy(SECTION_IDS)
  
  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
