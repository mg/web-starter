import { HistoryLocation } from 'react-router'

function onSayHello(to) {
  HistoryLocation.push('/world')
  return {
    type: 'SAY_HELLO',
    to: to,
  }
}

function onDone() {
  HistoryLocation.push('/')
  return {
    type: 'DONE'
  }
}

export { onSayHello, onDone }
