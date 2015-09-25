// importing in ES6: http://www.2ality.com/2014/09/es6-modules-final.html
import './style.css'

import React from 'react'
import Router, { Route, DefaultRoute, HistoryLocation } from 'react-router'

import App from './app.jsx'
import { HelloComponent } from './hello.jsx'
import { WorldComponent } from './world.jsx'

import { Provider } from 'react-redux'
import store from './store.js'

// ES6 let & const: http://ponyfoo.com/articles/es6-let-const-and-temporal-dead-zone-in-depth
const routes= (
  <Route path='/' handler={App}>
    <Route path='/world' handler={WorldComponent}/>
    <DefaultRoute handler={HelloComponent}/>
  </Route>
)

// ES6 arrow functions: http://ponyfoo.com/articles/es6-arrow-functions-in-depth
Router.run(routes, HistoryLocation, Root => {
  React.render(
    <Provider store={store}>
      {() => <Root/>}
    </Provider>
    , document.getElementById('app'))
})
