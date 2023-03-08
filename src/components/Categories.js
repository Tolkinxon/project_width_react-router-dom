import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  getDataTravel,
  getDataNature,
  getDataAthletics,
  getDataFood,
} from '../services/getData'
import '../App.css'

const Categories = () => {
  const [allData, setAllData] = useState([
    { node: { travelPhoto: { url: ' ' } } },
  ])
  const { nameCategories } = useParams()

  useEffect(() => {
    if (nameCategories === 'food') {
      getDataFood().then((data) => setAllData(data))
    }

    if (nameCategories === 'athletics') {
      getDataAthletics().then((data) => setAllData(data))
    }

    if (nameCategories === 'nature') {
      getDataNature().then((data) => setAllData(data))
    }

    if (nameCategories === 'travel') {
      getDataTravel().then((data) => setAllData(data))
    } else {
      setAllData([])
    }
  }, [nameCategories])

  console.log()

  return (
    <>
      {allData.length !== 0 && (
        <div className="photo-container">
          <span>
            {allData.map((item, idx) => (
              <>
                {idx % 3 === 0 && (
                  <img
                    key={idx}
                    src={JSON.stringify(item).slice(
                      JSON.stringify(item).search(/"https/) + 1,
                      JSON.stringify(item).search(/"}/),
                    )}
                    alt="animal-photo"
                  />
                )}
              </>
            ))}
          </span>
          <span>
            {allData.map((item, idx) => (
              <>
                {(idx + 1) % 3 === 0 && (
                  <img
                    key={idx}
                    src={JSON.stringify(item).slice(
                      JSON.stringify(item).search(/"https/) + 1,
                      JSON.stringify(item).search(/"}/),
                    )}
                    alt="animal-photo"
                  />
                )}
              </>
            ))}
          </span>
          <span>
            {allData.map((item, idx) => (
              <>
                {(idx + 2) % 3 === 0 && (
                  <img
                    key={idx}
                    src={JSON.stringify(item).slice(
                      JSON.stringify(item).search(/"https/) + 1,
                      JSON.stringify(item).search(/"}/),
                    )}
                    alt="animal-photo"
                  />
                )}
              </>
            ))}
          </span>
        </div>
      )}
    </>
  )
}

export default Categories
