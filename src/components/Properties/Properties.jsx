import React, { useEffect } from 'react'
import styles from './Properties.module.css';
import stays from '../../stays.json';
import './Properties.css';
import { useState } from 'react';

function Properties({ dropdownMenu, numberGuests, setNumberGuests, location, setLocation, search, setSearch }) {

  let properties = []

  const setProperties = (numberGuests, location, properties) => {
    if (numberGuests !== "" && location == "") {          
      properties = stays.filter((stay) => stay.maxGuests === numberGuests)
      console.log(properties)            
    }
    if (location !== "" && numberGuests == "") {      
      properties = stays.filter((stay) => stay.city === location)
      console.log(properties)             
    }
    setLocation("")
    setNumberGuests("")
    console.log(properties)      
    return properties
  }

  const [noSearchYet, setNoSearchYet] = useState(true)
  useEffect((properties) => { 
    if (search == true)  {
      setProperties(numberGuests, location, properties)      
      setNoSearchYet(false)   
    }
    setSearch(false)
  }, [search, properties])

  if (search == false && noSearchYet == true) {
    properties = stays
  }

  return (
    <div className={styles.container}>
      <div className={styles.rowList}>
        <h1 className={styles.title}>Stays in Finland</h1>
        {
          properties.length > 1 ? <p className={styles.staysAmount}>{properties.length - 1}+ stays</p>
            : properties.length === 1 ? <p className={styles.staysAmount}>{properties.length} stays</p>
              : <p className={styles.staysAmount}>0 stays</p>
        }
      </div>
      {
        properties.length === 0
          ? <div className={styles.noResults}>
            <p>No results...</p>
          </div>
          : <li className={styles.list}>
            {
              properties.map((stay) => {
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