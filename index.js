#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const revFile = require('./src/rev_file');
const writeIndexFile = require('./src/write_index_file');
const writeRevManifest = require('./src/write_rev_manifest');

const bundleJs = 'dist/bundle.js';
const indexHtml = 'dist/index.html';

module.exports = () => {
  revFile(bundleJs, (err, data) => {
  // copy file. ex: dist/bundle.js to dist/bundle-0ec0fbbcf0f08fcf3d8371d65dd56868.js
  fs.createReadStream(bundleJs)
    .pipe(fs.createWriteStream(path.join(path.dirname(bundleJs), data.revFileName)));

  console.log(`==> rev-bundlejs: ${data.revFileName} has been written.`);

  // create rev-manifest.json
  writeRevManifest(data);

  // update index.html
  fs.readFile(indexHtml, 'utf8', writeIndexFile(indexHtml, data));
});

}
