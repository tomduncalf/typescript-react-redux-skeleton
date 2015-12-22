// From https://gist.github.com/ryanseddon/e76fd16af2f8f4f4bed8

var hook = require('css-modules-require-hook')
var sass = require('node-sass')

hook({
  extensions: ['.scss'],
  generateScopedName: '[name]__[local]',
  preprocessCss: function (css) {
    var result =  sass.renderSync({
      data: css
    })

    return result.css;
  }
})
