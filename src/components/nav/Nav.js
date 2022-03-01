import { NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <nav id='navbar'>
    <NavLink to='/home' className="navlink"> About Me</NavLink>
    <NavLink to='/projects' className="navlink"> Projects </NavLink>
    <NavLink to='/contactInfo' className="navlink"> Contact Info </NavLink>
    <NavLink to='/resume' className="navlink"> Resume </NavLink>
  </nav>
  )
}
