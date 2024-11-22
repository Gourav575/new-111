import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom'
import Logo from '../Images/Logo.png'

export default function NavBar() {
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(!isActive)
      }
  return (
    <>
     <header>
     <nav className="navbar container">
        <Link to="/" className="navbar-brand"><img src={Logo} alt="log" /></Link>
        <span className="menu-toggle" onClick={handleClick}>☰</span>
        <ul className={isActive ? 'navbar-links show' : 'navbar-links'}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            {/* <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li> */}
        </ul>
    </nav>
     </header>
    </>
  )
}
