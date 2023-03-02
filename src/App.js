import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import NoMatched from './components/NoMatched'
import Products from './components/Products'
import Featured from './components/Featured'
import New from './components/New'
import User from './components/User'
import userId from './components/userId'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="user" element={<User />} />

        <Route path="*" element={<NoMatched />} />
      </Routes>
    </>
  )
}

export default App
