'use strict';

const fs = require('fs');
const path = require('path');

module.exports = data => {
  const revData = data;

  // fs.readFile callback
  return (err, data) => {
    if (err) {
      throw err;
    }

    const destIndexHtml = data.replace(revData.fileName, revData.revFileName);

    var wstream = fs.createWriteStream('./dist/index.html');
    wstream.write(destIndexHtml);
    wstream.end();
  }
}
