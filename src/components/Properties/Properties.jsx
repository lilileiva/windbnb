import React, { useEffect } from 'react'
import styles from './Properties.module.css';
import stays from '../../stays.json';
import './Properties.css';
import { useState } from 'react';

function Properties({ dropdownMenu, numberGuests, setNumberGuests, location, setLocation, search, setSearch }) {

  let properties = []
  const [listProperties, setListProperties] = useState([])

  const setProperties = (numberGuests, location) => {
    if (numberGuests !== "" && location == "") {          
      properties = stays.filter((stay) => stay.maxGuests === numberGuests)        
    }
    else if (location !== "" && numberGuests == "") {      
      properties = stays.filter((stay) => stay.city === location)        
    } else {
      properties = stays
      setListProperties(properties) 
    }
    setLocation("")
    setNumberGuests("")  
    return properties
  }

  const [noSearchYet, setNoSearchYet] = useState(true)
  useEffect(() => { 
    if (search == true)  {
      properties = setProperties(numberGuests, location)
      setListProperties(properties)    
      setNoSearchYet(false)   
    }
    if (search == false && noSearchYet == true) {
      properties = stays
      setListProperties(properties) 
    }
    setSearch(false)
  }, [search, listProperties])

  return (
    <div className={styles.container}>
      <div className={styles.rowList}>
        <h1 className={styles.title}>Stays in Finland</h1>
        {
          listProperties.length > 1 ? <p className={styles.staysAmount}>{listProperties.length - 1}+ stays</p>
            : listProperties.length === 1 ? <p className={styles.staysAmount}>{listProperties.length} stays</p>
              : <p className={styles.staysAmount}>0 stays</p>
        }
      </div>
      {
        listProperties.length === 0
          ? <div className={styles.noResults}>
            <p>No results...</p>
          </div>
          : <li className={styles.list}>
            {
              listProperties.map((stay) => {
                return (
                  <ul className={styles.stay} key={stay.title}>
                    <img src={stay.photo} alt='photo' className={styles.photo} />
                    <div className={styles.rowSuperhostRating}>
                      <div className={styles.rowSuperhostType}>
                        {
                          stay.superHost && <p className={styles.superhost}>SUPER HOST</p>
                        }
                        <p className={styles.type}>{stay.type}</p>
                      </div>
                      <div className={styles.ratingContainer}>
                        <span class="material-symbols-outlined">
                          star
                        </span>
                        <p className={styles.rating}>{stay.rating}</p>
                      </div>
                    </div>
                    <p className={styles.description}>{stay.title}</p>
                  </ul>
                )
              })
            }
          </li>
      }
    </div>
  )
}

export default Properties;