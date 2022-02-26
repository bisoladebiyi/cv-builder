import React from 'react'
import styles from "./Form.module.css"

interface Props {
    info:any
} 


const Form = ({info}: Props) => {
  return (
      <div>
    <div className={styles.resumeInfo}>
      <h3>{info.title}</h3>
      <form action="" className={styles.form}>
        <div className={styles.infoGrid}>
          <input
          className={styles.input}
            type="text"
            name="name"
            placeholder={info.entries.firstName}
            id=""
          />
          <input
          className={styles.input}
            name="entryYear"
            type="text"
            placeholder={info.entries.lastName}
            id=""
          />
          <input
          className={styles.input}

            name="degree"
            type="text"
            placeholder={info.entries.occupation}
            id=""
          />
          <input
          className={styles.input}
            name="gradYear"
            type="text"
            placeholder={info.entries.phoneNumber}
            id=""
          />
           <input
          className={styles.input}

            name="degree"
            type="text"
            placeholder={info.entries.email}
            id=""
          />
          <input
          className={styles.input}
            name="gradYear"
            type="text"
            placeholder={info.entries.homeAddress}
            id=""
          />
        </div>
        
      </form>
    </div>
    </div>
  )
}

export default Form