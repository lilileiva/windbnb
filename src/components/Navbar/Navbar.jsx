import React from 'react'
import styles from './Navbar.module.css';
import logo from '../../img/logo.png';
import Searchbar from '../Searchbar/Searchbar';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.logo} src={logo} alt='logo' />
        <div className={styles.row}>
          <p>Helsinki, Finland</p>
          <Searchbar />
        </div>
      </div>
    </div>
  )
}

export default Navbar