const fs = require('fs');

const filePath = (moduleName, hash, isProd = false) =>
  `/bundles/${moduleName}${hash ? '.' + hash : ''}.umd${isProd ? '.min' : ''}.js`;

const fileBuffer = (projectName, isProd = false) => {
  const path = isProd ? filePath(projectName, null, true) : filePath(projectName)
  return fs.readFileSync(`./dist/${projectName}` + path);
}

module.exports = {
  filePath,
  fileBuffer
};