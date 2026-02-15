import Home from './home'
import About from './about'
import Portfolio from './portfolio'
import Process from './process'
import ContactUs from './contactUs'

function Main() {
  return (
    <main className="flex flex-col">
      <Home />
      <About />
      <Portfolio />
      <Process />
      <ContactUs />
    </main>
  )
}

export default Main