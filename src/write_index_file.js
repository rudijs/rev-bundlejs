'use strict';

const fs = require('fs');
const path = require('path');

module.exports = (indexHtml, data) => {
  const indexHtmlFile = indexHtml;
  const revData = data;

  // fs.readFile callback
  return (err, data) => {
    if (err) {
      throw err;
    }

    const indexInnerHtml = data.replace(revData.fileName, revData.revFileName);

    var wstream = fs.createWriteStream(indexHtmlFile);

    wstream.on('finish', function () {
      console.log('==> rev-bundlejs: index.html has been updated.');
    });

    wstream.write(indexInnerHtml);
    wstream.end();
  }
}
