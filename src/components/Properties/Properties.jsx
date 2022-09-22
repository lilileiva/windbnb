import React from 'react'
import styles from './Properties.module.css';
import stays from '../../stays.json';
import './Properties.css';

function Properties() {
  console.log('stays', stays)

  return (
    <div className={styles.container}>
      <div className={styles.rowList}>
        <h1 className={styles.title}>Stays in Finland</h1>
        <p className={styles.staysAmount}>{stays.length}+ stays</p>
      </div>
      <li className={styles.list}>
        {
          stays.map((stay) => {
            return (
              <ul className={styles.stay}>
                <img src={stay.photo} alt='photo' className={styles.photo} />
                <div className={styles.rowSuperhostRating}>
                  <div className={styles.rowSuperhostType}>
                    {
                      stay.superHost && <p className={styles.superhost}>SUPER HOST</p>
                    }
                    <p className={styles.type}>{stay.type}</p>
                  </div>
                  <div className={styles.ratingContainer}>
                    <span class="material-symbols-outlined">
                      star
                    </span>
                    <p className={styles.rating}>{stay.rating}</p>
                  </div>
                </div>
                <p className={styles.description}>{stay.title}</p>
              </ul>
            )
          })
        }
      </li>
    </div>
  )
}

export default Properties;