import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from './styles.css';
import { selectHomeReducerDomain } from './selectors';
import { changeUsernameField } from './actions';

const ExampleListElement = ({ name, url, description }) => (
  <div className={styles.exampleContainer__listElement}>
    <a href={url} target="_blank">{name}</a>
    <p>{description}</p>
  </div>
);

ExampleListElement.propTypes = {
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  description: React.PropTypes.string,
};

class Example extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { queriedUsername, fetchData, fetchErrors } = this.props.exampleState;
    return (
      <div className={styles.exampleContainer}>
        <h2>Async Redux Saga Example</h2>
        <p>Type in a github username to see their starred repositories.</p>
        <input
          type="text"
          className={styles.exampleContainer__input}
          value={queriedUsername}
          onChange={this.props.changeUsernameField}
        />
        {fetchErrors ?
          <small className={styles.exampleContainer__error}>{fetchErrors}</small> : null
        }
        <div className={styles.exampleContainer__list}>
          {fetchData ?
            fetchData.map(each =>
              <ExampleListElement
                name={each.name}
                description={each.description}
                url={each.html_url}
                key={each.id}
              />) : null
          }
        </div>
      </div>
    );
  }
}

Example.propTypes = {
  exampleState: React.PropTypes.object,
  changeUsernameField: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  exampleState: selectHomeReducerDomain(),
});

const mapDispatchToProps = dispatch => ({
  changeUsernameField: e => dispatch(changeUsernameField(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);
