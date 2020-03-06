const { createHash } = require('./create-hash');
const { createManifest } = require('./create-manifest');

function postBuild(projectName, moduleName) {
  try {
    const hashedBundlePath = createHash(projectName);
    createManifest(projectName, moduleName, hashedBundlePath);
  } catch(err) {
    console.error('Error: ', err);
  }
}

module.exports = {
  postBuild
};