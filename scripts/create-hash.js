const fs = require('fs');
const crypto = require('crypto');
const { filePath, fileBuffer } = require('./utils');

function createHash(projectName) {
  const fileBufferDev = fileBuffer(projectName);
  const fileBufferProd = fileBuffer(projectName, true);

  const getHash = contentBuffer => crypto
    .createHash('md5')
    .update(contentBuffer.toString())
    .digest('hex');

  const hash = getHash(fileBufferDev);

  fs.writeFile(`./dist/${projectName}` + filePath(projectName, hash), fileBufferDev, err => {
    if (err) {
      console.error(`Couln't write the new file ./dist/${projectName}${filePath(projectName, hash)}`);
      process.exit(1);
    }

    console.log(`Successfully wrote the new file ./dist/${projectName}${filePath(projectName, hash)}`);
  });

  fs.writeFile(`./dist/${projectName}` + filePath(projectName, hash, true), fileBufferProd, err => {
    if (err) {
      console.error(`Couln't write the new file ./dist/${projectName}${filePath(projectName, hash, true)}`);
      process.exit(1);
    }

    console.log(`Successfully wrote the new file ./dist/${projectName}${filePath(projectName, hash, true)}`);
  });

  const hashedBundlePath = `/modulo${projectName}${filePath(projectName, hash)}`;

  return hashedBundlePath;
}

module.exports = {
  createHash
};