import * as React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './containers/App'
import Test from './components/Test'

export function renderRoutes(store: Redux.Store): React.ReactElement<any> {
  return (
    <Route path='/' component={App}>
      <Route path='/test' component={Test} />
    </Route>
  )
}
