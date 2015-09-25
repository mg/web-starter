import React from 'react'

export class Hello extends React.Component {
  // Property Validation. See more at https://facebook.github.io/react/docs/reusable-components.html
  static propTypes= {
    onSayHello: React.PropTypes.func.isRequired,
  }

  render() {
    // ES6 destructuring: http://ponyfoo.com/articles/es6-destructuring-in-depth
    const { onSayHello } = this.props

    return (
      <div>
        {/* comments in JSX: https://facebook.github.io/react/docs/jsx-in-depth.html#comments */}

        <h2 style={{textAlign: 'center'}}>Hello to me, hello to you, hello to whom?</h2>

        {/* forms in React: https://facebook.github.io/react/docs/forms.html
         and https://facebook.github.io/react/docs/events.html#form-events */}
        <form onSubmit={onSayHello} style={styles.form}>
          <label htmlFor='hello' style={styles.label}>Say hello to</label>

          {/* always use a controlled input: https://facebook.github.io/react/docs/forms.html#controlled-components */}
          <input ref='input' id='hello' type='text' value={this.state.to} onChange={::this.onEnterTo} placeholder='Your friend' style={styles.text}/>
          <button onClick={::this.onSayHello} style={styles.button}>Say</button>
        </form>
      </div>
    )
  }

  // events in React: https://facebook.github.io/react/docs/events.html
  onEnterTo(event) {
    this.setState({to: event.target.value})
  }

  onSayHello(event) {
    event.preventDefault()
    this.props.onSayHello(this.state.to)
  }

  componentDidMount() {
    // this.refs contains nodes with ref attribute.
    this.refs.input.getDOMNode().focus()
  }

  constructor(props) {
    super(props)
    this.state= {
      to: ''
    }
  }
}

import  { connect } from 'react-redux'
import * as actions from './actions.js'
export const HelloComponent= connect(state => {return {}}, actions)(Hello)

import vendorPrefix from './vendorPrefix.js'
const styles = vendorPrefix({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },

  label: {
    margin: '10px 20px',
    display: 'block',
    fontSize: '24px',
  },

  text: {
    margin: '10px 20px',
    display: 'block',
    border: '1px solid #b6c7db',
    fontSize: 16,
    padding: '7px 11px 7px 14px',
    borderRadius: '3px',
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
