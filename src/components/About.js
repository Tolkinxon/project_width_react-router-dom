import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>About</div>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

export default About
