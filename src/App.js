import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [backgroundImage, setBackgroundImage] = useState(2)

  setInterval(() => {
    setBackgroundImage((prev) => prev + 1)
    if (backgroundImage === 7) {
      setBackgroundImage(0)
    }
  }, 1000)

  return (
    <>
      <div
        className="App"
        style={{ backgroundImage: `url(bg${backgroundImage}.jpg)` }}
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
