import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [backgroundImage, setBackgroundImage] = useState(4)

  return (
    <>
      <div
        className="App"
        style={{
          backgroundImage: `url(/bg${1}.jpg)`,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
