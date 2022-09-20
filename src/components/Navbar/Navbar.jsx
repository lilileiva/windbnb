import React from 'react'
import styles from './Navbar.module.css';
import logo from '../../img/logo.png';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.logo} src={logo} alt='logo' />
        <p>Searchbar</p>
      </div>
    </div>
  )
}

export default Navbar