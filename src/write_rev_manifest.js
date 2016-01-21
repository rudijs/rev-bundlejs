'use strict';

const fs = require('fs');

module.exports = data => {
  var wstream = fs.createWriteStream('./dist/rev-manifest.json');

  wstream.on('finish', function () {
    console.log('==> rev-bundlejs: rev-manifest has been written.');
  });

  const json = JSON.stringify({[data.fileName]: data.revFileName});

  wstream.write(json);
  wstream.end();
}