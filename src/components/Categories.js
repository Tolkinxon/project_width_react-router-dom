import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDataTravel, getDataNature } from '../services/getData'
import '../App.css'

const Categories = () => {
  let array1 = 'node'
  let array2 = 'travelPhoto'

  const [allData, setAllData] = useState([
    { node: { travelPhoto: { url: ' ' } } },
  ])
  const { nameCategories } = useParams()



  useEffect(() => {

    // if (nameCategories === 'nature') {
    //   getDataNature().then((data) => setAllData(data))
    //   array2 = 'naturePicture'
    // } 


    if (nameCategories === 'travel') {
      getDataTravel().then((data) => setAllData(data))
    } 
    
    else {
      setAllData([])
    }

  }, [nameCategories])

  console.log(allData)

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
                    src={item[array1][array2].url}
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
                    src={item[array1][array2].url}
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
                    src={item[array1][array2].url}
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
