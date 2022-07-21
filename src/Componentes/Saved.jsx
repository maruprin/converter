import React from "react";
import styles from '../styles/styles.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Saved = () => {
    return(
        <div className={styles.savedContainer}>
            <div className={styles.savedTitulo}>
                saved
            </div>
            <div className={styles.savedCampo}>
            <span className={styles.savedTexto}>100 millas ➞ 160 km </span>
            <span className={styles.savedExit}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
            
        </div>
    )
}

export default Saved;