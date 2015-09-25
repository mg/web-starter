import { List, Map, fromJS } from 'immutable'
import { expect } from 'chai';

import reducer from './reducers.js';

describe('Reducer ->', () => {

  it('handles SAY_HELLO', () => {
    const initialState = Map()
    const action = {
      type: 'SAY_HELLO',
      to: 'World',
    }

    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      to: 'World',
    }))
  })

  it('handles DONE', () => {
    const initialState = Map()
    const action = {
      type: 'DONE',
    }

    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({}))
  })

})
