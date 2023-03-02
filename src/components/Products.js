import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <input type="search" placeholder="search some thing" />
      <Outlet />

      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
    </>
  )
}

export default Products
