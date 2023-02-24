import React, { useEffect } from 'react'
import styles from './Navbar.module.css';
import logo from '../../img/logo.png';
import Searchbar from '../Searchbar/Searchbar';
import stays from '../../stays.json';
import loupe from '../../assets/loupe.svg';
import map from '../../assets/map.svg';

function Navbar({ handleInputChange, handleInputSubmit, dropdownMenu, changeDropdownState, locationSearch }) {

  let cities = []
  stays.filter((stay) => cities.push(stay.city))
  let citiesFiltered = []
  cities.map((city) => !citiesFiltered.includes(city) ? citiesFiltered.push(city) : null)

  return <>
    {
      dropdownMenu ? (
        <>
          <div className={styles.background}></div>
          <div className={styles.dropdown}>
            <div className={styles.content}>
              <div className={styles.bar}>
                <div>
                  <p className={styles.locationBar}>Location</p>
                  <p className={styles.location} onClick={() => changeDropdownState()}>
                    Helsinki, Finland
                  </p>
                </div>
                <div>
                  <p className={styles.locationBar}>Guests</p>
                  <Searchbar handleInputChange={handleInputChange} handleInputSubmit={handleInputSubmit} />
                </div>
                <button className={styles.searchBtn} onClick={(e) => handleInputSubmit(e)}>
                  <img src={loupe} className={styles.redLoupe} />
                  <p>Search</p>
                </button>
              </div>
              <li className={styles.locationList} >
                {
                  citiesFiltered.map((city) => (
                    <ul>
                      <img src={map} className={styles.map} />
                      <p onClick={() => locationSearch(city)}>
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
            <p className={styles.location} onClick={() => changeDropdownState()}>
              Helsinki, Finland
            </p>
            <div className={styles.searchbar}>
              <Searchbar handleInputChange={handleInputChange} handleInputSubmit={handleInputSubmit} />
              <div className={styles.submit} onClick={(e) => handleInputSubmit(e)}>
                <img src={loupe} className={styles.redLoupe} />
              </div>
            </div>
          </div>
        </div>
      )
    }
  </>
}

export default Navbar