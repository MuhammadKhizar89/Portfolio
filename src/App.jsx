import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Work/>
    <Experience/>
    </>
  )
}
export default App
