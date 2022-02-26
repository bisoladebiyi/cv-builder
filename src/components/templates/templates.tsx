import React from 'react'
import styles from './Templates.module.css'
import { templateImages } from '../../templates'
import { useNavigate } from 'react-router-dom'

const Templates = () => {
    const navigate = useNavigate()
    const chooseTemplate = () => {
       navigate("/information")
    }
  return (
    <div className={styles.container}>
        <div>
            <p>Select Template</p>
            <div className={styles.templatesContainer}>
                {templateImages.map((template)=> (
                    <button onClick={chooseTemplate}>
                    <img className={styles.templateImg} src={template} alt="" />
                    </button>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Templates