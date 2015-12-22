import * as React from 'react'
import { connect } from 'react-redux'

import pureRender from '../decorators/pureRender'

import { State } from '../interfaces/State'

interface Props {
  children: any
}

@pureRender
class App extends React.Component<Props, {}> {
  render(): React.ReactElement<{}> {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connect(
  (state: State) => ({
  })
)(App)
