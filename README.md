# rev-bundlejs
Revision dist/bundle.js file and update dist/index.html with the revision'd file.

The goal is 'cache bust' bundle.js with each new release.

For example with source file:

- dist/index.html
- dist/bundle.js
- dist/bundle.map.js

Will create files:

- dist/index.html
- dist/bundle-3ddb1efaef26ecc1ff7a2a44a3746ee2.js
- dist/bundle.js
- dist/bundle.map.js

The index.html file will also be updated

- From: `<script src="bundle.js"></script>`
- To: `<script src="bundle-3e181d36e8d2d5448ab9fce2eec68e13.js"></script>`

Note: The original bundle.js file is left in place as it's referenced/used by the soure map file bundle.map.js

## Usage example

**Script**

```
const revBundleJs = require('.');

revBundleJs();
```

**CLI**

    ./node_modules/.bin/rev-bundlejs

**NPM script in package.json**

```
"scripts": {
  "rev": "rev-bundlejs"
}
```
    npm run rev

## TODO

- Add tests
- Add command line flag options
