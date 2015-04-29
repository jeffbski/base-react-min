module.exports = {
  // browser: ['google chrome'],
  browser: ['google chrome canary'],
  port: 3005,
  // proxy: 'localhost:8005',
  // reloadDelay: 1000,
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
