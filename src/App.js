import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import bgImg from '../src/images/bg2.jpg'

function App() {
  const [backgroundImage, setBackgroundImage] = useState(4)

  return (
    <>
      <div
        className="App"
        style={{
          backgroundImage: `url(${bgImg})`,
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
