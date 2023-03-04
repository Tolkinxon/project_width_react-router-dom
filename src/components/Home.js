import React from 'react'
import '../App.css'

const Home = ({ getData }) => {
  getData().then((data) => console.log(data))
  return <div className="home">Home</div>
}

export default Home
