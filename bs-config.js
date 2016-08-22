
// http://www.browsersync.io/docs/options/

module.exports = {
  // uses default browser or you can specify your own choice
  // browser: ['google chrome'],
  // browser: ['google chrome canary'],
  // browser: ['firefox'],
  ghostMode: false,
  port: 3005,
  // proxy: 'localhost:8005',
  reloadDelay: 500,
  reloadDebounce: 500,
  files: [
    'public/*.html',
    'public/*.json'
    // since we are using browser-sync-webpack-plugin
    // and webpack is now building js and css, it will trigger reload
    // for the following files
    // 'dist/main.js',
    // 'dist/style.min.css'
  ],
  server: {
    baseDir: './public',
    routes: {
      '/dist': './dist'
    }
  }
};
