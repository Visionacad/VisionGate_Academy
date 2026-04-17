import React from 'react'

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Mastery from './components/sections/Mastery';
import Gallery from './components/sections/Gallery';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="font-sans antialiased text-deep-charcoal bg-surface selection:bg-primary/20 selection:text-deep-charcoal w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Mastery />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
