import React from 'react';
import styles from './styles.css';


const Footer = () => (
  <div className={styles.footerElement}>
    <p>
      <span className={styles.footerElementLight}>Built by: </span>
      <a
        href="https://github.com/paulxuca"
        target="_blank"
        className={styles.footerElement__link}
      >
        paulxuca
      </a>
    </p>
  </div>
);

export default Footer;

