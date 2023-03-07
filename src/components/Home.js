import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'

const Home = ({ getData }) => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default Home
