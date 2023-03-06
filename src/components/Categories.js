import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDataTravel } from '../services/getData'

const Categories = () => {
  const [dataTravel, setDataTravel] = useState([])
  const { nameCategories } = useParams()

  useEffect(() => {
    if (nameCategories === 'travel')
      getDataTravel().then((data) => setDataTravel(data))
    else {
        setDataTravel(nameCategories)
    }
  }, [nameCategories])

  console.log(dataTravel)

  return <div>Categories</div>
}

export default Categories
