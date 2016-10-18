import React from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

const NavigationBar = () => (
  <div className={styles.navigationBar}>
    <div className={styles.navigationBarContainer}>
      <Link
        activeOnlyWhenExact
        activeClassName={styles.navigationBar__link__active}
        className={styles.navigationBar__link} to="/"
      >
        Home
      </Link>
      <Link
        activeClassName={styles.navigationBar__link__active}
        className={styles.navigationBar__link} to="/example"
      >
        Example
      </Link>
      <Link
        activeClassName={styles.navigationBar__link__active}
        className={styles.navigationBar__link} to="/notfound"
      >
        Not Found
      </Link>
    </div>
  </div>
);

export default NavigationBar;
