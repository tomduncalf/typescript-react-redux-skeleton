import * as React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import * as Perf from 'react-addons-perf'

import { renderRoutes } from '../routes'
import pureRender from '../decorators/pureRender'

/* tslint:disable:no-unused-variable */
import DevTools from './DevTools'
/* tslint:enable:no-unused-variable */

const devToolsEnabled = false

// TODO split out config
const Config = { dev: true }

// Make react-addons-perf accessible if in dev mode. See README for usage instructions.
if (Config.dev) {
  /* tslint:disable:no-string-literal */
  window['Perf'] = Perf
  /* tslint:enable:no-string-literal */
}

@pureRender
export default class Root extends React.Component<{store: any, history: any}, {}> {
  render(): any {
    const { store, history } = this.props

    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            {renderRoutes(store)}
          </Router>
          { devToolsEnabled && Config.dev ? <DevTools /> : null }
        </div>
      </Provider>
    )
  }
}
