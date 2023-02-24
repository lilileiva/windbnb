import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css';
import logo from '../../img/logo.png';
import Searchbar from '../Searchbar/Searchbar';
import stays from '../../stays.json';
import loupe from '../../assets/loupe.svg';
import map from '../../assets/map.svg';


function Navbar({ handleInputChange, handleInputSubmit, dropdownMenu, changeDropdownState, locationSearch, location }) {

  let cities = []
  stays.filter((stay) => cities.push(stay.city))
  let citiesFiltered = []
  cities.map((city) => !citiesFiltered.includes(city) ? citiesFiltered.push(city) : null)
  const [selectedCity, setSelectedCity] = useState("Helsinki")

  const searchLocation = (city) => {
    locationSearch(city)
    setSelectedCity(city)
  }

  return <>
    {
      dropdownMenu ? (
        <>
          <div className={styles.background}></div>
          <div className={styles.dropdown}>
            <div className={styles.content}>
              <div className={styles.dropdownBar}>
                <div className={styles.boxDropdown}>
                  <p className={styles.locationBar}>Location</p>
                  <p className={styles.locationText} onClick={() => changeDropdownState()}>
                    { selectedCity }, Finland
                  </p>
                </div>
                <div className={styles.boxDropdown}>
                  <p className={styles.locationBar}>Guests</p>
                  <Searchbar handleInputChange={handleInputChange} handleInputSubmit={handleInputSubmit} />
                </div>
                <div className={styles.buttonBox}>
                  <button className={styles.searchBtn} onClick={(e) => handleInputSubmit(e)}>
                    <img src={loupe} className={styles.redLoupe} />
                    <p>Search</p>
                  </button>
                </div>
              </div>
              <li>
                {
                  citiesFiltered.map((city) => (
                    <ul className={styles.locationList} onClick={() => searchLocation(city)}>
                      <img src={map} className={styles.map} />
                      <p>
                        {city}, Finland
                      </p>
                    </ul>
                  ))
                }
              </li>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.container}>
          <img className={styles.logo} src={logo} alt='logo' />
          <div className={styles.bar}>
            <div  className={styles.boxBar}>
              <p className={styles.locationText} onClick={() => changeDropdownState()}>
                { selectedCity }, Finland
              </p>
            </div>
            <div className={styles.searchbar}>
              <Searchbar handleInputChange={handleInputChange} handleInputSubmit={handleInputSubmit} />
            </div>
            <div className={styles.submit} onClick={(e) => handleInputSubmit(e)}>
              <img src={loupe} className={styles.redLoupe} />
            </div>
          </div>
        </div>
      )
    }
  </>
}

export default Navbar