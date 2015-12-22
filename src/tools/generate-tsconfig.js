var fs = require('fs')
var glob = require("glob")

var tsconfigPath = process.argv[2]
if(!tsconfigPath) {
  console.error('Path to tsconfig file must be specified, e.g. node tools/generate-tsconfig.js tsconfig.json')
  process.exit(1)
}

var currentConfig = JSON.parse(fs.readFileSync(tsconfigPath))

var allFiles = []
for(var fileGlob of currentConfig['filesGlob']) {
  var files = glob.sync(fileGlob)
  allFiles = allFiles.concat(files)
}

var newConfig = Object.assign(currentConfig, {}, {files: allFiles})

var json = JSON.stringify(newConfig, null, 2)
fs.writeFile(tsconfigPath, json)
