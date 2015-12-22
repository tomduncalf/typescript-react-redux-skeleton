import * as React from 'react'
import * as ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Root from './containers/Root'
import configureStore from './store/configureStore'

require('../css/global/main.css')

const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
