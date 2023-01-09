import React, { useState } from 'react'
import styles from './Searchbar.module.css';
import stays from '../../stays.json';


function Searchbar({ handleInputChange, handleInputSubmit }) {
  return (
    <form className={styles.container} onSubmit={(e) => handleInputSubmit(e)}>
      <input onFocus='false' type='text' placeholder='Add guests' onChange={(e) => handleInputChange(e)} />
      <div className={styles.submit} onClick={(e) => handleInputSubmit(e)}>
        <span class="material-symbols-outlined">
          search
        </span>
      </div>
    </form>
  )
}

export default Searchbar