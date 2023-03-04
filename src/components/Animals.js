import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Animals = () => {
  const [dataAnimals, setDataAnimals] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/animals')
      .then((data) => data.json())
      .then((data) => setDataAnimals(data))
  }, [])

  return (
    <>
      <div className="animals">
        <button>mammals</button>
        <button>birds</button>
        <button>fish</button>

        <div className="photo-container">
          {/* {dataAnimals.map((item) => (
            <>
              <img
                key={item.id}
                src={'https://unsplash.com/photos/ezrmK4ox7SY'}
                alt="animal-photo"
              />
            </>
          ))} */}
        </div>
      </div>
    </>
  )
}

export default Animals
