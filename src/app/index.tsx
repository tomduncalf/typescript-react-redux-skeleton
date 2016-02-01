import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import Root from './containers/Root'
import configureStore from './store/configureStore'

require('../css/global/main.css')

const history =  browserHistory
const store = configureStore(history)

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
