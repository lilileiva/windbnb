import React, { useState } from 'react'
import styles from './Searchbar.module.css';
import stays from '../../stays.json';


function Searchbar({ handleInputChange, handleInputSubmit }) {
  return (
    <form className={styles.container} onSubmit={(e) => handleInputSubmit(e)}>
      <input type='text' placeholder='Add guests' onChange={(e) => handleInputChange(e)} />
    </form>
  )
}

export default Searchbar