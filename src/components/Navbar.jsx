import React, { useState} from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-scroll'




const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);


  return (
    
      
      <nav className={nav ? "nav active"
        : "nav"}>
        
      <Link to='main' className='logo'>
        <img src={logo} alt="" />
      </Link>

      <input className='menu-btn' type='checkbox' id='menu-btn' />

      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to='main' >Home</Link></li>
        <li><Link to='features' >Features</Link></li>
        <li><Link to='presentaion' >Offer</Link></li>
        <li><Link to='about' >About</Link></li>
        <li><Link to='contact' >Contact</Link></li>
      </ul>
    </nav>
   
  )
}

export default Navbar