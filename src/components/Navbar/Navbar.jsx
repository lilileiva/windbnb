import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css';
import logo from '../../img/logo.png';
import Searchbar from '../Searchbar/Searchbar';
import stays from '../../stays.json';
import loupe from '../../assets/loupe.svg';
import map from '../../assets/map.svg';


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
  }, [numberAdults, numberChildren])

  return <>
    {
      dropdownMenu ? (
        <>
          <div className={styles.background} onClick={() => changeDropdownState()}></div>
          <div className={styles.dropdown}>
            <div className={styles.content}>
              <div className={styles.dropdownBar}>
                <div className={styles.boxDropdown}>
                  <p className={styles.locationBar}>Location</p>
                  {
                    location !== ""
                      ? <p className={styles.searchText} onClick={() => changeDropdownState()}>
                        {location}, Finland
                      </p>
                      : <p className={styles.defaultText} onClick={() => changeDropdownState()}>
                        Add city
                      </p>
                  }
                </div>
                <div className={styles.boxDropdown}>
                  <p className={styles.locationBar}>Guests</p>
                  {
                    numberGuests
                      ? <p className={styles.searchText} onClick={() => changeDropdownState()}>{numberGuests} guests</p>
                      : <p className={styles.defaultText} onClick={() => changeDropdownState()}>Add guests</p>
                  }
                </div>
                <div className={styles.buttonBox}>
                  <button className={styles.searchBtn} onClick={() => search()}>
                    <img src={loupe} className={styles.redLoupe} />
                    <p>Search</p>
                  </button>
                </div>
              </div>
              <div className={styles.options}>
                <li>
                  {
                    citiesFiltered.map((city) => (
                      <ul className={styles.locationList} onClick={() => setLocation(city)}>
                        <img src={map} className={styles.map} />
                        <p>
                          {city}, Finland
                        </p>
                      </ul>
                    ))
                  }
                </li>
                <div>
                  <div className={styles.adultsChildren}>
                    <h3>Adults</h3>
                    <p>Ages 13 or above</p>
                    <div className={styles.counter}>
                      <button onClick={() => substractNumberAdults()}>-</button>
                      <p>{numberAdults}</p>
                      <button onClick={() => addNumberAdults()}>+</button>
                    </div>
                  </div>
                  <div className={styles.adultsChildren}>
                    <h3>Children</h3>
                    <p>Age 2-12</p>
                    <div className={styles.counter}>
                      <button onClick={() => substractNumberChildren()}>-</button>
                      <p>{numberChildren}</p>
                      <button onClick={() => addNumberChildren()}>+</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.container}>
          <img className={styles.logo} src={logo} alt='logo' onClick={() => resetProperties()} />
          <div className={styles.bar}>
            <div className={styles.boxBar}>
              <p className={styles.searchText} onClick={() => changeDropdownState()}>
                {
                  location !== ""
                    ? <p className={styles.searchText} onClick={() => changeDropdownState()}>{location}, Finland</p>
                    : <p className={styles.defaultText} onClick={() => changeDropdownState()}>Add city</p>
                }
              </p>
            </div>
            <div className={styles.boxBar}>
              <p className={styles.searchText} onClick={() => changeDropdownState()}>
                {
                  numberGuests
                    ? <p className={styles.searchText} onClick={() => changeDropdownState()}>{numberGuests} guests</p>
                    : <p className={styles.defaultText} onClick={() => changeDropdownState()}>Add guests</p>
                }
              </p>
            </div>
            <div className={styles.submit} onClick={() => search()}>
              <img src={loupe} className={styles.redLoupe} />
            </div>
          </div>
        </div>
      )
    }
  </>
}

export default Navbar