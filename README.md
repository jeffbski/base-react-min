# PROJECT_NAME

This is a minimal React.js boilerplate with a build environment setup which you can fork and clone to easily setup your own projects.

TODO: Replace all this boilerplate with your project description

Features:

 - React.js JSX example which fetches from REST source and renders
 - simple build and auto rebuild (watch) using npm run scripts
 - browser-sync for auto reloading in browser on change
 - ES6/7 and JSX compiling with babeljs
 - eslint for linting
 - browserify (w/babelify) for bundling javascript for the browser
 - watchify to automatically rebuild on changes
 - uglify for js minification
 - less CSS style compiler
 - autoprefixer for automatically adding css prefixes
 - cleancss for css minification
 - axios for promise based HTTP client

Structure:

 - package.json - dependencies and build commands
 - public/index.html - main HTML
 - public/fake-api.json - mock REST api returning json data
 - src/browser.jsx - React.js JSX code which fetches REST data and renders into the main HTML

## Installation

Requires node.js/iojs >= 0.10

```bash
npm install ## install dependent node modules
```

## Usage

TODO: update with your usage

Primary use
```bash
node run watch # build and watch, auto recompile and load changes
```

Build only
```bash
node run build # build only
```

Build for Production
```bash
node run prod-build # sets NODE_ENV=production then builds
```


## Goals

TODO: Add your goals here

## Why

TODO: Add your description of why you created this

## Get involved

If you have input or ideas or would like to get involved, you may:

 - contact me via twitter @jeffbski  - <http://twitter.com/jeffbski>
 - open an issue on github to begin a discussion - <https://github.com/jeffbski/PROJECT_NAME/issues>
 - fork the repo and send a pull request (ideally with tests) - <https://github.com/jeffbski/PROJECT_NAME>

## License

 - [MIT license](http://github.com/jeffbski/PROJECT_NAME/raw/master/LICENSE)
