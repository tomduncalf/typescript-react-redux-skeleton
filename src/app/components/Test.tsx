import * as React from 'react'
import CSSModules from 'react-css-modules'

import pureRender from 'decorators/pureRender'
import StatelessTest from 'components/StatelessTest'

const styles: any = require('../../scss/components/Test.scss')

interface Props {
}

@pureRender
@CSSModules(styles)
class Test extends React.Component<Props, {}> {
  render(): React.ReactElement<{}> {
    return <div>
      <div styleName='container'>Hello world</div>
      <StatelessTest />
    </div>
  }
}

export default Test
