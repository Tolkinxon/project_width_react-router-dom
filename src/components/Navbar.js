import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'


const Navbar = () => {
  return (
    <> 
        <nav>
            <NavLink to='animal'>Animals</NavLink>
            <NavLink to='travel'>Travel</NavLink>
            {/* <NavLink>Nature</NavLink>
            <NavLink>Athletics</NavLink>
            <NavLink>Food & Drink</NavLink> */}
        </nav>
  
    </>
  )
}

export default Navbar