import React, { useEffect } from 'react'
import styles from './Navbar.module.css';
import logo from '../../img/logo.png';
import Searchbar from '../Searchbar/Searchbar';
import stays from '../../stays.json';

function Navbar({ handleInputChange, handleInputSubmit, dropdownMenu, changeDropdownState }) {

  let cities = []
  stays.filter((stay) => cities.push(stay.city))
  let citiesFiltered = []
  cities.map((city) => !citiesFiltered.includes(city) ? citiesFiltered.push(city) : null)

  return <>
    {
      dropdownMenu ? (
        <div className={styles.container}>
          <div className={styles.dropdown}>
            <div className={styles.content}>            
              <div className={styles.bar}>
                <div>
                  <p className={styles.locationBar}>Location</p>
                  <p className={styles.location} onClick={() => changeDropdownState()}>
                    Helsinki, Finland
                  </p>
                </div>
                <Searchbar handleInputChange={handleInputChange} handleInputSubmit={handleInputSubmit} />
              </div>
              <li>
                {
                  citiesFiltered.map((city) => (
                    <ul>
                      <p>{city}, Finland</p>
                    </ul>
                  ))
                }
              </li>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.spaceBetween}>
              <img className={styles.logo} src={logo} alt='logo' />
              <div className={styles.row}>
                <p className={styles.location} onClick={() => changeDropdownState()}>
                  Helsinki, Finland
                </p>
                <Searchbar handleInputChange={handleInputChange} handleInputSubmit={handleInputSubmit} />
              </div>
            </div>
          </div>
        </div>
      )
    }
  </>
}

export default Navbar