import React, { useState } from 'react'
import styles from './Navbar.module.css';
import logo from '../../img/logo.png';
import Searchbar from '../Searchbar/Searchbar';

function Navbar({ handleInputChange, handleInputSubmit, dropdownMenu, changeDropdownState }) {

  // const [dropdownMenu, setDropdownMenu] = useState(false)

  // return (
  //   <div className={styles.container}>
  //     <div className={styles.content}>
  //       <img className={styles.logo} src={logo} alt='logo' />
  //       <div className={styles.row}>
  //         <p className={styles.location} onClick={() => setDropdownMenu(true)}>
  //           Helsinki, Finland
  //         </p>
  //         <Searchbar handleInputChange={handleInputChange} handleInputSubmit={handleInputSubmit} />
  //       </div>
  //     </div>
  //   </div>
  // )

  return <>
    {
      dropdownMenu ? (
        <div className={styles.container}>
          <div className={styles.dropdown}>
            <div className={styles.content}>
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
      ) : (
        <div className={styles.container}>
          <div className={styles.content}>
            <img className={styles.logo} src={logo} alt='logo' />
            <div className={styles.row}>
              <p className={styles.location} onClick={() => changeDropdownState()}>
                Helsinki, Finland
              </p>
              <Searchbar handleInputChange={handleInputChange} handleInputSubmit={handleInputSubmit} />
            </div>
          </div>
        </div>
      )
    }
  </>
}

export default Navbar