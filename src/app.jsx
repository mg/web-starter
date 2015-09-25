import React from 'react'
import { RouteHandler } from 'react-router'

// ES6 classes: http://ponyfoo.com/articles/es6-classes-in-depth
export default class App extends React.Component {

  // render() is the one method every React component must implement
  // more on React's lifecycle methods at https://facebook.github.io/react/docs/component-specs.html
  render() {

    // a JSX compnoent must return ONE root component
    return (
      <div>
        <div style={styles.header}>Hello World</div>
        <div style={styles.frame}>
          <RouteHandler/>
        </div>
      </div>
    )
  }
}

// inline styling in React: https://facebook.github.io/react/tips/inline-styles.html
import vendorPrefix from './vendorPrefix.js'
const styles = vendorPrefix({
  header: {
    color: 'white',
    fontSize: 32,
    padding: '30px 0',
    textAlign: 'center',
  },

  frame: {
    backgroundColor: '#eee',
    width: '100%',
    maxWidth: 414,
    minWidth: 320,
    margin: '0 auto',
    padding: 10,
    overflow: 'hidden',
  }
})
