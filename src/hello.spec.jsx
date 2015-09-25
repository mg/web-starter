import React from 'react/addons'
import { Hello } from './hello.jsx'
import { expect } from 'chai'

// React Test Utils: https://facebook.github.io/react/docs/test-utils.html
// Chai documentation: http://chaijs.com/api/bdd/

const { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } = React.addons.TestUtils

describe('Hello ->', () => {
  it('renders a button', () => {
    const component= renderIntoDocument(<Hello onSayHello={()=>{}}/>)
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    expect(buttons.length).to.equal(1)
    expect(buttons[0].getDOMNode().textContent).to.equal('Say')
  })

  it('calls onSayHello with hello value', () => {
    let helloValue= 'value'
    const onSayHello= value => helloValue= value
    const component= renderIntoDocument(<Hello onSayHello={onSayHello}/>)
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')

    Simulate.click(buttons[0]);
    console.log(helloValue)
    expect(helloValue).to.equal('')
  })
})
