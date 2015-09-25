import { Map } from 'immutable'

function sayHello(state, to) {
  return state.set('to', to)
}

export default function(state= Map(), action) {
  switch(action.type) {
  case 'SAY_HELLO':
    return sayHello(state, action.to)
  case 'DONE':
    return state
  }
  return state
}
