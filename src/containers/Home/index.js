import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUsernameField } from './selectors';
import { changeUsernameField } from './actions';
import styles from './style.css';
import reactLogo from '../../static/images/react.svg';
import reduxLogo from '../../static/images/redux.svg';
import reactRouterLogo from '../../static/images/reactrouter.png';
import webpackLogo from '../../static/images/webpack.png';


class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.appContainer}>
        <div className={styles.appIntroBanner}>
          <img
            src={reactLogo}
            style={{
              height: 100,
            }}
          />
          <h2>React Redux Router 4 Boilerplate</h2>
          <p>Boilerplate built on best principles and practices</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/paulxuca/react-router-redux-saga-4"
          >
            Source on Github
          </a>
        </div>
        <div className={styles.appIntroSection}>
          <h5 className={styles.appIntroSection__header}>Whats included</h5>
          <hr className={styles.appIntroSection__headerDivider} />
          <div className={styles.appIntroSection__features}>
            <div className={styles.appIntroSection__feature}>
              <img
                src={reactLogo}
                style={{
                  height: 50,
                }}
              />
              <p>React</p>
              <small>UI Library</small>
            </div>
            <div className={styles.appIntroSection__feature}>
              <img
                src={reduxLogo}
                style={{
                  height: 50,
                }}
              />
              <p>Redux // Saga</p>
              <small>State Management</small>
            </div>
            <div className={styles.appIntroSection__feature}>
              <img
                src={reactRouterLogo}
                style={{
                  height: 50,
                }}
              />
              <p>React Router 4</p>
              <small>Routing Management</small>
            </div>
            <div className={styles.appIntroSection__feature}>
              <img
                src={webpackLogo}
                style={{
                  height: 50,
                }}
              />
              <p>Webpack 2</p>
              <small>Module Bundler</small>
            </div>
          </div>
        </div>
        <input
          type="text"
          value={this.props.usernameField}
          onChange={this.props.changeUsernameField}
        />
      </div>
    );
  }
}

Home.propTypes = {
  usernameField: React.PropTypes.string,
  changeUsernameField: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  usernameField: selectUsernameField(),
});

const mapDispatchToProps = dispatch => ({
  changeUsernameField: e => dispatch(changeUsernameField(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
