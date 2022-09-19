import React from 'react'
import styles from './Navbar.module.css';
import logo from '../../img/logo.png';

function Navbar() {
  return (
    <div className={styles.container}>
        <img className={styles.logo} src={logo} alt='logo' />
        <p>Searchbar</p>
    </div>
  )
}

export default Navbar