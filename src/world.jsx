import React from 'react'

export class World extends React.Component {
  // Property Validation. See more at https://facebook.github.io/react/docs/reusable-components.html
  static propTypes= {
    to: React.PropTypes.string,
    onDone: React.PropTypes.func.isRequired,
  }

  // default values for properties
  static defaultProps= {
    to: 'world'
  }

  render() {
    // ES6 destructuring: http://ponyfoo.com/articles/es6-destructuring-in-depth
    const { to, onDone } = this.props

    return (
      <div style={styles.page}>
        {/* comments in JSX: https://facebook.github.io/react/docs/jsx-in-depth.html#comments */}

        {/* ES6 template literals: http://ponyfoo.com/articles/es6-template-strings-in-depth */}
        <h2 style={{textAlign: 'center'}}>{`Hello ${to}`}</h2>

        <button onClick={onDone} style={styles.button}>Again!</button>
      </div>
    )
  }
}

import  { connect } from 'react-redux'
import * as actions from './actions.js'
export const WorldComponent= connect(state => {
  return {
    to: state.get('to'),
  }
}, actions)(World)

import vendorPrefix from './vendorPrefix.js'
const styles = vendorPrefix({
  page: {
    display: 'flex',
    flexDirection: 'column',
  },

  button: {
    margin: '10px auto',
    minWidth: 300,
    display: 'block',
    cursor: 'pointer',
    borderRadius: '2px',
    color: 'white',
    fontSize: 18,
    padding: '17px 20px',
    backgroundColor: '#3c71ac',
  },
})
