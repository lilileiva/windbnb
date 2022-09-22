import React from 'react'
import styles from './Searchbar.module.css';

function Searchbar() {
  return (
    <div className={styles.container}>
      <input placeholder='Add guests' />
      <span class="material-symbols-outlined">
        search
      </span>
    </div>
  )
}

export default Searchbar