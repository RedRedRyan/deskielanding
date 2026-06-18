import React from 'react'
import Hero from './components/Hero'
import { ScrambleTextPlugin, SplitText, ScrollTrigger } from 'gsap/all'
import './index.css'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import About from './components/About'
import { Analytics } from '@vercel/analytics/react'


gsap.registerPlugin(ScrambleTextPlugin, SplitText, ScrollTrigger)

const App = () => {
  return (
    <main>
      <Analytics/>
      <Navbar/>

      <Hero/>
      <About/>
    </main>
  );
}


export default App