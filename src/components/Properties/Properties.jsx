import React from 'react'
import styles from './Properties.module.css';
import stays from '../../stays.json';

function Properties() {
  console.log('stays', stays)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Stays in Finland</h1>
      <li className={styles.list}>
        {
          stays.map((stay) => {
            return (
              <ul className={styles.stay}>
                <img src={stay.photo} alt='photo' className={styles.photo} />
                <div className={styles.row}>
                  <div className={styles.roww}>
                    {
                      stay.superHost && <p className={styles.superhost}>SUPER HOST</p>
                    }
                    <p className={styles.type}>{stay.type}</p>
                  </div>
                  <p className={styles.rating}>{stay.rating}</p>
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