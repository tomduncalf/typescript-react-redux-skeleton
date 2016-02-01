// Based on https://github.com/anorudes/redux-easy-boilerplate/blob/master/src/store/configureStore.js
// and https://github.com/rackt/redux/blob/master/examples/real-world/store/configureStore.dev.js

/* tslint:disable:no-unused-variable */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import DevTools from '../containers/DevTools'
import { browserHistory } from 'react-router'
import { routeReducer, syncHistory } from 'redux-simple-router'

import rootReducer from '../reducers/index'

// TS hack for global module variable
declare var module: any

const reduxRouterMiddleware = syncHistory(browserHistory)

const logger = createLogger({ collapsed: true })
/* tslint:enable:no-unused-variable */

const finalCreateStore = compose(
  applyMiddleware(reduxRouterMiddleware),
  applyMiddleware(thunk),
  // Left commented out as this can be useful for debugging
  // applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore)

export default function configureStore(history: any, initialState: Object = {}): any {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
