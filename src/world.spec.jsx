import React from 'react/addons'
import { World } from './world.jsx'
import { expect } from 'chai'

// React Test Utils: https://facebook.github.io/react/docs/test-utils.html
// Chai documentation: http://chaijs.com/api/bdd/

const { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } = React.addons.TestUtils

describe('World ->', () => {
  it('renders default text', () => {
    const component= renderIntoDocument(<World onDone={()=>{}}/>)
    const h2 = scryRenderedDOMComponentsWithTag(component, 'h2')

    expect(h2.length).to.equal(1)
    expect(h2[0].getDOMNode().textContent).to.equal('Hello world')
  })

  it('renders supplied text', () => {
    const component= renderIntoDocument(<World to='Hello' onDone={()=>{}}/>)
    const h2 = scryRenderedDOMComponentsWithTag(component, 'h2')

    expect(h2.length).to.equal(1)
    expect(h2[0].getDOMNode().textContent).to.equal('Hello Hello')
  })

  it('calls onDone', () => {
    let called= false
    const onDone= () => { called= true }
    const component= renderIntoDocument(<World onDone={onDone}/>)
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    Simulate.click(buttons[0]);
    expect(called).to.equal(true)
  })
})
