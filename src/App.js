import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [backgroundImage, setBackgroundImage] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      if (backgroundImage > 5) {
        setBackgroundImage(backgroundImage / backgroundImage)
      } else {
        setBackgroundImage(backgroundImage + 1)
      }
    }, 6000)
  }, [backgroundImage])



  return (
    <>
      <div
        className="App"
        style={{
          backgroundImage: `url(/bg${backgroundImage}.jpg)`,
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
