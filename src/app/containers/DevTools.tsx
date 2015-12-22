/* tslint:disable:no-unused-variable */
import * as React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import SliderMonitor from 'redux-slider-monitor'
/* tslint:enable:no-unused-variable */

// noPureRender

export default createDevTools(
  <DockMonitor toggleVisibilityKey='H'
               changePositionKey='W'
               defaultIsVisible={false}>
    <LogMonitor />
  </DockMonitor>
)
