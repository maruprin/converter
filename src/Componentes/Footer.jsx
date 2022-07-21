import React from "react";
import styles from '../styles/styles.module.scss'

const Footer = ( )=>{
    return(
        <div className={styles.footerContainer}>
            <span className={styles.footerTerms}>Terms of service</span>
            <span className={styles.footerPrivacy}>Privacy policy</span>
        </div>
    )
}

export default Footer;