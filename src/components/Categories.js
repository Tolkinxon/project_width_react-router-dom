import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDataTravel } from '../services/getData'

const Categories = () => {
  const [dataAnimals, setDataAnimals] = useState([])
  const { nameCategories } = useParams()

  useEffect(() => {
    if (nameCategories === 'travel')
      getDataTravel().then((data) => setDataAnimals(data))
    else {
      setDataAnimals(nameCategories)
    }
  }, [nameCategories])

  console.log(dataAnimals)

  return <div>Categories</div>
}

export default Categories
