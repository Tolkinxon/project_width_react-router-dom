import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate('about', { replace: true })}>
        go about page
      </button>
    </>
  )
}

export default Home
