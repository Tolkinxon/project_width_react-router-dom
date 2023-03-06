import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Animals from './components/Animals'
import Travel from './components/Travel'
import Athletics from './components/Athletics'
import Food from './components/Food'
import Nature from './components/Nature'


function App() {
  const [backgroundImage, setBackgroundImage] = useState(1)

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (backgroundImage > 5) {
  //       setBackgroundImage(backgroundImage / backgroundImage)
  //     } else {
  //       setBackgroundImage(backgroundImage + 1)
  //     }
  //   }, 6000)
  // }, [backgroundImage])

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
          <Route path="/" element={<Home />} >
            

          </Route>
          <Route path="animals" element={<Animals />} />
          {/* <Route path="travel" elemant={<Travel />} />
          <Route path="food" element={<Food />} />
          <Route path="nature" element={<Nature />} />
          <Route path="athletics" element={<Athletics />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
