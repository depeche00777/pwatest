module.exports = {
  staticFileGlobs: [
    '*.html',
    '*.js',
    'manifest.json',
    'css/*.css',
    'images/**.*',
    'img/**.*',
    'js/*.js',
  ],
  stripPrefix: 'app/',
  runtimeCaching: [{
    urlPattern: /this\\.is\\.a\\.regex/,
    handler: 'networkFirst'
  }]
};