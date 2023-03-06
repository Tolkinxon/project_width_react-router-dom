import React from 'react'
import { useParams } from 'react-router-dom'

const Categories = () => {
  const { nameCategories } = useParams()

  console.log(nameCategories)

  return <div>Categories</div>
}

export default Categories
