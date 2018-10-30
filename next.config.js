const withTypescript = require('next-with-typescript')
const withSass = require('@zeit/next-sass')

module.exports = withTypescript(withSass())
