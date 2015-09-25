import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers.js'

/*const createStoreWithMiddleware= applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore)*/

const store = createStore(reducers)
export default store
