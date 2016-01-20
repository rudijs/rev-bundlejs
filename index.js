#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const revFile = require('./src/rev_file');
const writeIndexFile = require('./src/write_index_file');

const file = 'dist/scripts.js';

revFile(file, (err, data) => {
  // copy file dist/scripts.js to dist/scripts-0ec0fbbcf0f08fcf3d8371d65dd56868.js
  fs.createReadStream(file)
    .pipe(fs.createWriteStream(path.join(path.dirname(file), data.revFileName)));

  // read in index.html then write it out
  fs.readFile('./dist/index.html', 'utf8', writeIndexFile(data));
});
