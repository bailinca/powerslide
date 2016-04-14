# Powerslide (simple presentation/slides application)
Technologies used: TypeScript, React, JSX, ES6, ES6 modules, Babel, webpack, SASS, TSLint, Karma, Mocha, Chai
Demo: [http://bailinca.github.io/powerslide/](http://bailinca.github.io/powerslide/)

## Install
```
npm i
npm run i-typings
```

## Build
Creates a /build folder to use for production.
```
npm run build
```

## Run
This starts webpack-dev-server on [http://localhost:8080/](http://localhost:8080/) with [Hot Module Replacement (HMR)](https://webpack.github.io/docs/hot-module-replacement.html) enabled.
```
npm start
```

## Test
```
npm test - single run unit tests in PhantomJS
npm run test-debug - repeated unit tests in PhantomJS on every file change
```
