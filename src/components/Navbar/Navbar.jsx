import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import stays from '../../stays.json';
import loupeRed from '../../assets/loupe_red.svg';
import loupeWhite from '../../assets/loupe_white.svg';
import place from '../../assets/place.svg';


function Navbar({ dropdownMenu, changeDropdownState, setListProperties, numberGuests, setNumberGuests, search, location, setLocation }) {

  let cities = []
  stays.filter((stay) => cities.push(stay.city))
  let citiesFiltered = []
  cities.map((city) => !citiesFiltered.includes(city) ? citiesFiltered.push(city) : null)

  const resetProperties = () => {
    setListProperties(stays)
    setLocation("")
    setNumberGuests(0)
    setNumberAdults(0)
    setNumberChildren(0)
  }

  const [numberAdults, setNumberAdults] = useState(0)
  const [numberChildren, setNumberChildren] = useState(0)
  const [searchCity, setSearchCity] = useState(false)
  const [searchGuests, setSearchGuests] = useState(false)

  const addNumberAdults = () => {
    if (numberAdults > 0) setNumberAdults(numberAdults + 1)
    else setNumberAdults(1)
  }
  const substractNumberAdults = () => {
    if (numberAdults > 0) setNumberAdults(numberAdults - 1)
    else setNumberAdults(0)
  }

  const addNumberChildren = () => {
    if (numberChildren > 0) setNumberChildren(numberChildren + 1)
    else setNumberChildren(1)
  }
  const substractNumberChildren = () => {
    if (numberChildren > 0) setNumberChildren(numberChildren - 1)
    else setNumberChildren(0)
  }

  useEffect(() => {
    setNumberGuests(numberAdults + numberChildren)
  }, [setNumberGuests, numberAdults, numberChildren])

  const addCity = () => {
    setSearchCity(true)
    setSearchGuests(false)
  }
  
  const addGuest = () => {
    setSearchGuests(true)
    setSearchCity(false)    
  }

  const addCityOnDropdownBar = () => {
    setSearchCity(true)
    setSearchGuests(false)
    changeDropdownState()
  }

  const addGuestOnDropdownBar = () => {
    setSearchGuests(true)
    setSearchCity(false)
    changeDropdownState()
  }

  const onKeyPressed = (e) => {
    console.log(e.keyCode);
  }

  return <>
    {
      dropdownMenu ? (
        <>
          <div className={styles.background} onClick={() => changeDropdownState()}></div>
          <div className={styles.dropdown}>
            <div className={styles.content}>
              <p className={styles.editYourSearch}>Edit your search</p>
              <div className={styles.dropdownBar}>                
                <div className={searchCity ? styles.selectedBox : styles.noSelectedBox}>
                  <div className={styles.boxDropdown} onClick={() => addCity()}>
                    <p className={styles.locationBar}>Location</p>
                    {
                      location !== ""
                        ? <p className={styles.searchText}>{location}, Finland</p>
                        : <p className={styles.defaultText}>Add city </p>
                    }
                  </div>
                </div>                
                <div className={searchGuests ? styles.selectedBox : styles.noSelectedBox}>
                  <div className={styles.boxDropdown} onClick={() => addGuest()}>
                    <p className={styles.locationBar}>Guests</p>
                    {
                      numberGuests
                        ? <p className={styles.searchText}>{numberGuests} guests</p>
                        : <p className={styles.defaultText}>Add guests</p>
                    }
                  </div>
                </div>
                <div className={styles.buttonBox}>
                  <button className={styles.searchBtn} onClick={() => search()}>
                    <img src={loupeWhite} alt='loupe' className={styles.loupe} />
                    <p>Search</p>
                  </button>
                </div>
              </div>
              <div className={styles.options}>
                <div>
                  {
                    searchCity && <>
                      <li>
                        {
                          citiesFiltered.map((city) => (
                            <ul className={styles.locationList} onClick={() => setLocation(city)} key={city}>
                              <img src={place} alt='place' className={styles.place} />
                              <p>
                                {city}, Finland
                              </p>
                            </ul>
                          ))
                        }
                      </li>
                    </>
                  }
                </div>
                <div className={styles.optionGuests}>
                  {
                    searchGuests && <>
                      <div className={styles.adultsChildren}>
                        <div>
                          <h3>Adults</h3>
                          <p>Ages 13 or above</p>
                        </div>
                        <div className={styles.counter}>
                          <button onClick={() => substractNumberAdults()}>-</button>
                          <p>{numberAdults}</p>
                          <button onClick={() => addNumberAdults()}>+</button>
                        </div>
                      </div>
                      <div className={styles.adultsChildren}>
                        <div>
                          <h3>Children</h3>
                          <p>Age 2-12</p>
                        </div>
                        <div className={styles.counter}>
                          <button onClick={() => substractNumberChildren()}>-</button>
                          <p>{numberChildren}</p>
                          <button onClick={() => addNumberChildren()}>+</button>
                        </div>
                      </div>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.container}>
          <img className={styles.logo} src={logo} alt='logo' onClick={() => resetProperties()} />
          <div className={styles.bar}>
            <div className={styles.boxBar} onClick={() => addCityOnDropdownBar()}>
              <p className={styles.searchText}>
                {
                  location !== ""
                    ? <p className={styles.searchText}>{location}, Finland</p>
                    : <p className={styles.defaultText}>Add city</p>
                }
              </p>
            </div>
            <div className={styles.boxBar} onClick={() => addGuestOnDropdownBar()}>
              <p className={styles.searchText}>
                {
                  numberGuests
                    ? <p className={styles.searchText}>{numberGuests} guests</p>
                    : <p className={styles.defaultText}>Add guests</p>
                }
              </p>
            </div>
            <div className={styles.submit} onClick={() => search()}>
              <img src={loupeRed} alt='loupe' className={styles.loupe} />
            </div>
          </div>
        </div>
      )
    }
  </>
}

export default Navbar