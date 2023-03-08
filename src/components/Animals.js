import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getDataAnimal } from '../services/getData'
import '../App.css'

const Animals = () => {
  const [dataAnimals, setDataAnimals] = useState([])
  const [filterCategory, setFilterCategory ] = useSearchParams()

  useEffect(() => {
    getDataAnimal().then((data) => setDataAnimals(data))
  }, [])

  console.log(dataAnimals);


  return (
    <>
      <div className="animals">
        <button onClick={() => setFilterCategory({filter: 'mammals'})}>mammals</button>
        <button>birds</button>
        <button>fish</button>

        <div className="photo-container">
          <span>
            {dataAnimals.map((item, idx) => (
              <>
                {idx % 3 === 0 && (
                  <img
                    key={idx}
                    src={item['node']['photoUrl'][0].url}
                    alt="animal-photo"
                  />
                )}
              </>
            ))}
          </span>
          <span>
            {dataAnimals.map((item, idx) => (
              <>
                {(idx + 1) % 3 === 0 && (
                  <img
                    key={idx}
                    src={item.node.photoUrl[0].url}
                    alt="animal-photo"
                  />
                )}
              </>
            ))}
          </span>
          <span>
            {dataAnimals.map((item, idx) => (
              <>
                {(idx + 2) % 3 === 0 && (
                  <img
                    key={idx}
                    src={item.node.photoUrl[0].url}
                    alt="animal-photo"
                  />
                )}
              </>
            ))}
          </span>
        </div>
      </div>
    </>
  )
}

export default Animals
