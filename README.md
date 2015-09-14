This is a **minimal React.js boilerplate with an auto build environment** which you can fork and clone to easily setup your own projects.

Tip: Using [git-clone-init](https://github.com/jeffbski/git-clone-init) makes this very simple. (non-windows users)

`git-clone-init https://github.com/jeffbski/base-react-min.git myProjectName`

TODO: Replace this boilerplate with your project description

Features:

 - **React.js JSX example which fetches from REST source and renders**
 - **simple build and auto rebuild** (watch) using npm run scripts
 - **browser-sync** for auto reloading in browser on change
 - **ES6/7 and JSX compiling** to ES5 with **babeljs**
 - **eslint** for linting
 - **browserify** (w/babelify) for bundling javascript for the browser
 - **watchify** to automatically rebuild on changes
 - **uglify** for js minification
 - **less** CSS style compiler
 - **autoprefixer** for automatically adding css prefixes
 - **cleancss** for css minification
 - **karma** for js unit testing in browsers or phantomjs
 - **phantomjs** for headless testing in browser
 - **axios** for promise based HTTP client
 - **cross platform** - runs on Mac OS X, linux, unix, windows


Structure:

 - package.json - dependencies and build commands
 - public/index.html - main HTML
 - public/fake-api.json - mock REST api returning json data
 - src/browser.jsx - React.js JSX code which fetches REST data and renders into the main HTML
 - src/util/polyfill.js - Import any core-js or other polyfills here
 - assets/site.less - CSS styles used by site, edit or import into
 - .babelrc - babel configuration
 - bs-config.js - browser-sync config, set browser to launch
 - karma.conf.js - karma test configuration
 - postcss.json - postcss config controls autoprefixer
 - dist/ - contains compiled and minified css and js

Notes:

 - My default browser for browser-sync is `Google Chrome Canary`, if you want to use a different browser like `Google Chrome` or `Mozilla Firefox` edit `bs-config.js`


## Installation

Requires node.js/iojs >= 0.10

```bash
npm install ## install dependent node modules
```

## Usage

TODO: update with your usage

Primary use - auto build and reload browser
```bash
npm run watch # build and watch, auto recompile and load changes
# use control-c to exit the autobuild watch
```

Build only
```bash
npm run build # build only
```

Build for Production
```bash
npm run prod-build # sets NODE_ENV=production then builds
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
