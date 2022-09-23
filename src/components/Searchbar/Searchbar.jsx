import React from 'react'
import styles from './Searchbar.module.css';

function Searchbar() {
  return (
    <form className={styles.container}>
      <input onFocus='false' type='text' placeholder='Add guests' />
      <div className={styles.submit}>
        <span class="material-symbols-outlined">
          search
        </span>
      </div>
    </form>
  )
}

export default Searchbar