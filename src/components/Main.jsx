import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Feature from './Feature'
import Offer from './Offer'
import About from './About'
import Contact from './Contact'




const Main = () => {
  return (
    <div className='nav-bar'>
      <Navbar />
      <Home />
      <Feature />
      <Offer />
      <About />
      <Contact />
    </div>
  )
}

export default Main