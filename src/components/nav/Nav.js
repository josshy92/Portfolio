import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
    <NavLink to='/'> About Me</NavLink>
    <NavLink to='/projects'> Projects </NavLink>
    <NavLink to='/contactInfo'> Contact Info </NavLink>
    <NavLink to='/resume'> Resume </NavLink>
  </nav>
  )
}
