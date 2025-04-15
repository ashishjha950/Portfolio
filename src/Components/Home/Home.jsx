import React from 'react'
import Footer from '../Footer'
import Hero from './Hero'
import LatestWork from './LatestWork'
import Contact from './Contact'
import About from './About'
import FrontendWork from './FrontendWork'

function Home() {
  return (
    <div className='fullbackgroundcolor px-4 xl:px-12 relative ' >
      <Hero />
      <About />
      <LatestWork />
      <FrontendWork/>
      <Contact />
      <Footer />
    </div>
  )
}

export default Home