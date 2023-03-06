import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'

const Home = ({ getData }) => {
  return (
    <>
      <div className="home">Home</div>
      <Outlet />
    </>
  )
}

export default Home
