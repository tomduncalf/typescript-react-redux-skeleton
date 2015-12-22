// Based on http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html

import jsdom from 'jsdom'
import * as chai from 'chai'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
const win = doc.defaultView

global.document = doc
global.window = win

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})

const sinonChai = require('sinon-chai')
chai.use(sinonChai)

require('sinon-as-promised')

const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

const chaiJSX = require('chai-jsx')
chai.use(chaiJSX)
