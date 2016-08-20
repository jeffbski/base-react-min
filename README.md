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
 - **webpack** for bundling javascript for the browser
 - **chokidar** to automatically rebuild on changes
 - **uglify** for js minification
 - **less** CSS style compiler
 - **autoprefixer** for automatically adding css prefixes
 - **cleancss** for css minification
 - **karma** for js unit testing in browsers or phantomjs
 - **phantomjs** for headless testing in browser
 - **npm-run-all** for simple parallel/serial npm script exec
 - **axios** for promise based HTTP client
 - **cross platform** - runs on Mac OS X, linux, unix, windows


Structure:

 - package.json - dependencies and build commands
 - public/index.html - main HTML
 - public/fake-api.json - mock REST api returning json data
 - src/browser.jsx - React.js JSX code which fetches REST data and renders App component into the main HTML
 - src/app.jsx - Main app component used to display data
 - src/items.kmocha.jsx - sample karma mocha test for items
 - src/util/polyfill.js - Import any core-js or other polyfills here
 - src/util/karma-setup.js - common karma setup
 - style/site.less - CSS styles used by site, edit or import into
 - .babelrc - babel configuration
 - .eslintrc - eslint configuration
 - bs-config.js - browser-sync config, set browser to launch
 - karma.conf.js - karma test configuration
 - postcss.json - postcss config controls autoprefixer
 - webpack.config.js - webpack configuration
 - dist/ - contains compiled and minified css and js


## Installation

Tested with node.js >= 4.4.0


```bash
npm install ## install all dependencies
```

## Usage

TODO: update with your usage

Primary use - auto build and reload browser
```bash
# use control-c to exit the autobuild watch
npm start # build and watch, auto recompile and load changes
```

Build only
```bash
npm run build # build only
```

Single run of tests
```bash
npm test
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
