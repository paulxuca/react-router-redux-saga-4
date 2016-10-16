import React from 'react';
import styles from './styles.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.appContainer}>
        {this.props.children}
      </div>
    );
  }
}

export default App;