import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Animals from './components/Animals'
import Categories from './components/Categories'

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
          <Route path="/" element={<Home />}>
            <Route path=":nameCategories" element={<Categories />} />
          </Route>
          <Route path="animals" element={<Animals />} />
          {/* <Route path="travel" elemant={<Travel />} />
          <Route path="nature" element={<Nature />} />
          <Route path="/food" element={<Categories />} />
          <Route path="athletics" element={<Athletics />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
