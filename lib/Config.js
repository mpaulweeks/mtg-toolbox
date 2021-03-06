'use strict'

const Constants = require('./Constants')

const defaults = {
  testImagePath: null,
  apiUrl: 'https://mtgify.org',

  ignoreCase: true,
  trimWhitespace: true,
  excludeUnsets: false,

  enableAutoTag: false,
  popupAutoTag: false,

  imgSource: Constants.imgSource.gatherer,
  linkSource: Constants.linkSource.gatherer,
  language: 'en',
}

const Config = config => {
  const windowConfig = window.MTGIFY_CONFIG || {}
  const customConfig = config || {}
  return {
    ...defaults,
    ...windowConfig,
    ...customConfig,
  }
}

module.exports = Config
