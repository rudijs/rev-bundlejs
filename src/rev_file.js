'use strict';

var crypto = require('crypto');
var fs = require('fs');
var path = require('path');

module.exports = revFile;

function revFile(file, callback) {

  const fileName = path.basename(file);
  const fileExt = path.extname(file);

  fs.readFile(file, function (err, data) {
    if (err) {
      throw err;
    }

    const checksum = createChecksum(data);

    callback(null, {
      checksum: checksum,
      fileName: fileName,
      revFileName: fileName.replace(fileExt, `-${checksum}${fileExt}`)
    });
  });
}

function createChecksum(str, algorithm, encoding) {
  return crypto
    .createHash(algorithm || 'md5')
    .update(str, 'utf8')
    .digest(encoding || 'hex')
}
