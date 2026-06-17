import React from 'react'
import Hero from './components/Hero'
import { ScrambleTextPlugin, SplitText, ScrollTrigger } from 'gsap/all'
import './index.css'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import About from './components/About'

gsap.registerPlugin(ScrambleTextPlugin, SplitText, ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  );
}


export default App