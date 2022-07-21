import React from "react";
import styles from '../styles/styles.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
   return(
    <div className={styles.header}>
    <div className={styles.icon} ><FontAwesomeIcon icon={faRightLeft}/></div>
    <h1 className={styles.title}>unit converter</h1>
    </div>
    
    ) 
}



export default Header;