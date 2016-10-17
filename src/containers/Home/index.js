import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUsernameField } from './selectors';
import { changeUsernameField } from './actions';
import styles from './style.css';

class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.appContainer}>
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
