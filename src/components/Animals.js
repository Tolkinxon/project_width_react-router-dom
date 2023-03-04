import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getData } from '../services/getData'

const Animals = () => {
  const [dataAnimals, setDataAnimals] = useState([])

  useEffect(() => {
    getData().then((data) => setDataAnimals(data))
  }, [])

  console.log(dataAnimals)

  return (
    <>
      <div className="animals">
        <button>mammals</button>
        <button>birds</button>
        <button>fish</button>

        <div className="photo-container">
          {dataAnimals.map((item, idx) => (
            <>
              <h1>{item.node.category}</h1>
              <img
                key={item.idx}
                src={item.node.photoUrl[0].url}
                alt="animal-photo" 
              />
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Animals
