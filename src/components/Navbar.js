import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <i class="fa-solid fa-camera"></i>
        <span>
          This site created by Tolkinxon's team | Search and have a nice mood
        </span>
        <NavLink to="/">Home</NavLink>
        <NavLink to="animals">Animals</NavLink>
        <NavLink to="travel">Travel</NavLink>
        <NavLink to="nature">Nature</NavLink>
        <NavLink to="athletics">Athletics</NavLink>
        <NavLink to="food">Food</NavLink>
      </nav>
    </>
  )
}

export default Navbar
