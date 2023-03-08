import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'
import { getDataAnimal } from '../services/getData'

const Home = ({ getData }) => {
  return (
    <>
    
      
      <Outlet />
    </>
  )
}

export default Home
