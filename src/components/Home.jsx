import React from 'react'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div id='main'>
      <div className='name'>
        <h2>STEP UP YOUR</h2>
        <h1><span>FITNESS</span> WITH US</h1>
        <p className='details'>Build Your Body And Fitness With Professtional Touch</p>
        <div className='header-btns'>
          <Link to="#" className="header-btn">JOIN US</Link>
        </div>
      </div>
    </div>
  )
}

export default Home