# Hello Workbox

> This project is implementation of [Workbox](https://developers.google.com/web/tools/workbox) over on `create-react-app`

## Available Scripts
```bash
'start'       : 'react-scripts start',
# build `workbox` config to override the default `service-worker.js`
'build-sw'    : 'node ./src/sw-build.js',
# clean default `service-worker` stuffs
'clean-cra-sw': 'rm -f build/precache-manifest.*.js && rm -f build/service-worker.js',
'build'       : 'react-scripts build && npm run build-sw && npm run clean-cra-sw',
'test'        : 'react-scripts test',
'eject'       : 'react-scripts eject'
```

## Using `service worker` locally
```bash
# build the project into `build` folder, ready to be deployed
$ npm run build 
# serve `build` folder with a static server
$ serve -s build
```