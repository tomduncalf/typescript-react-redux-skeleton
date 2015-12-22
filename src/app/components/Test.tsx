import * as React from 'react'
import CSSModules from 'react-css-modules'

import pureRender from '../decorators/pureRender'

const styles: any = require('../../css/components/Test.css')

interface Props {
}

@pureRender
@CSSModules(styles)
class Test extends React.Component<Props, {}> {
  render(): React.ReactElement<{}> {
    return <div styleName='container'>Hello world</div>
  }
}

export default Test
