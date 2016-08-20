
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
    'public/*.json',
    'dist/main.js',
    'dist/site.min.css'],
  server: {
    baseDir: './public',
    routes: {
      '/dist': './dist'
    }
  }
};
