import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'


const Navbar = () => {
  return (
    <> 
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to='animal'>Animals</NavLink>
            <NavLink to='travel'>Travel</NavLink>
            <NavLink to='nature'>Nature</NavLink>
            <NavLink to='athletics'>Athletics</NavLink>
            <NavLink to='food'>Food</NavLink>
        </nav>
  
    </>
  )
}

export default Navbar