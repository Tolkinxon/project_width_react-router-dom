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
          <span>
            {dataAnimals.map((item, idx) => (
              <>
                { idx % 3 === 0 &&  <img
                  key={idx}
                  src={item.node.photoUrl[0].url}
                  alt="animal-photo"
                />}
              
              </>
            ))}
          </span>
          <span>
            {dataAnimals.map((item, idx) => (
              <>
                { (idx + 1) % 3 === 0 &&  <img
                  key={idx}
                  src={item.node.photoUrl[0].url}
                  alt="animal-photo"
                />}
              
              </>
            ))}
          </span>
          <span>
            {dataAnimals.map((item, idx) => (
              <>
                { (idx + 2) % 3 === 0 &&  <img
                  key={idx}
                  src={item.node.photoUrl[0].url}
                  alt="animal-photo"
                />}
              
              </>
            ))}
          </span>
     
        </div>
      </div>
    </>
  )
}

export default Animals
