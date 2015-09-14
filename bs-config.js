
// http://www.browsersync.io/docs/options/

module.exports = {
  browser: ['google chrome'],
  // browser: ['google chrome canary'],
  ghostMode: false,
  port: 3005,
  // proxy: 'localhost:8005',
  reloadDelay: 500,
  reloadDebounce: 500,
  files: [
    'public/*.html',
    'public/*.json',
    'dist/bundle.js',
    'dist/site.min.css'],
  server: {
    baseDir: './public',
    routes: {
      '/dist': './dist'
    }
  }
};
