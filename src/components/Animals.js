import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getDataAnimal } from '../services/getData'
import '../App.css'

const Animals = () => {
  const [dataAnimals, setDataAnimals] = useState([])
  const [filterCategory, setFilterCategory] = useSearchParams({})

  const booleanFilterCategory = filterCategory.get('filter')

  console.log(booleanFilterCategory)

  useEffect(() => {
    getDataAnimal().then((data) =>
      setDataAnimals(
        data.filter((item) => {
          return item.node.category === booleanFilterCategory
        }),
      ),
    )
  }, [filterCategory])

  return (
    <>
      <div className="animals">
        <button onClick={() => setFilterCategory({})}>all</button>
        <button onClick={() => setFilterCategory({ filter: 'mammal' })}>
          mammals
        </button>
        <button onClick={() => setFilterCategory({ filter: 'bird' })}>
          birds
        </button>
        <button onClick={() => setFilterCategory({ filter: 'fish' })}>
          fish
        </button>

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
