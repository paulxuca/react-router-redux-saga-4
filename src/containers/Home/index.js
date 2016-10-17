import React from 'react';
import styles from './style.css';

class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.appContainer}>
        <p>Hello!!!!!</p>
      </div>
    );
  }
}

export default Home;
