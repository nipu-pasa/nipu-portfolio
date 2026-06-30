import {Hero} from "@/sections/Hero"
import {About} from "@/sections/About"
import {Experience} from "@/sections/Experience"
// import {Projects} from "@/sections/Projects"
import {Testimonials} from "@/sections/Testimonials"
import {Contact} from "@/sections/Contact"
import {NavBar} from "@/layout/Navbar"
import {Footer} from "@/layout/Footer"

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <NavBar />
        <main>
          <Hero />
          <About />
          {/* <Projects /> */}
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App