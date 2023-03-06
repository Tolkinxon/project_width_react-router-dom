import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDataTravel } from '../services/getData'
import '../App.css'

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

  return (<>
    
    <div className="photo-container">
          <span>
            {dataTravel.map((item, idx) => (
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
            {dataTravel.map((item, idx) => (
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
            {dataTravel.map((item, idx) => (
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
  </>)
}

export default Categories
