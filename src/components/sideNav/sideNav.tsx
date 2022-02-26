import React from 'react'
import styles from './SideNav.module.css'

const SideNav = () => {
  return (
    <div className={styles.sideNav}>
    <div className={styles.entries}>
      <button><div className={`${styles.entry} ${styles.active}`}>Personal Info</div></button>
      <button><div className={styles.entry}>Experiences</div></button>
      <button><div className={styles.entry}>Education</div></button>
      <button><div className={styles.entry}>hobbies and interests</div></button>
      <button><div className={styles.entry}>Skills</div></button>
      <button><div className={styles.entry}>Quotes</div></button>
    </div>
  </div>
  )
}

export default SideNav