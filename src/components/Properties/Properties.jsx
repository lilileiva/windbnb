import React, { useEffect } from 'react'
import styles from './Properties.module.css';
import stays from '../../stays.json';
import './Properties.css';
import { useState } from 'react';
import star from '../../assets/star.svg';

function Properties({ numberGuests, setNumberGuests, location, setLocation, isSearch, setIsSearch, listProperties, setListProperties }) {

  let properties = []  

  const setProperties = (numberGuests, location) => {
    if (numberGuests > 0 && location == "") {          
      properties = stays.filter((stay) => stay.maxGuests === numberGuests)        
    }
    else if (location !== "" && numberGuests == 0) {      
      properties = stays.filter((stay) => stay.city === location)
    }    
    else if (location !== "" && numberGuests > 0) {  
      properties = stays.filter((stay) => stay.city === location)
      properties = properties.filter((stay) => stay.maxGuests === numberGuests) 
    } else {      
      setListProperties(stays) 
    }
    setLocation("")
    setNumberGuests(0)  
    return properties
  }

  const [noSearchYet, setNoSearchYet] = useState(true)
  useEffect(() => { 
    if (isSearch == true)  {
      properties = setProperties(numberGuests, location)
      setListProperties(properties)    
      setNoSearchYet(false)   
    }
    if (isSearch == false && noSearchYet == true) {
      properties = stays
      setListProperties(properties) 
    }
    setIsSearch(false)
  }, [isSearch, listProperties])

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
                        <img src={star} className={styles.star} />
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