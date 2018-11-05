const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const path = require('path')

const srcPath = subdir => path.join(__dirname, 'src', subdir)

module.exports = withTypescript(withSass())
