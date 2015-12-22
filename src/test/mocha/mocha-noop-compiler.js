// From http://stackoverflow.com/questions/32683440/handle-webpack-css-imports-when-testing-with-mocha

function noop() {
  return null
}

require.extensions['.png'] = noop
require.extensions['.svg'] = noop
