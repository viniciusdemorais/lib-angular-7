const fs = require('fs');

function createManifest(projectName, moduleName, hashedBundlePath) {
  const packageJson = require(`../projects/${projectName}/package.json`);
  
  const manifestContent = {
    nome: moduleName,
    rota: projectName,
    moduloPadrao: `${moduleName}Module`,
    url: hashedBundlePath,
    versao: packageJson.version || undefined
  };

  const manifestPath = `./dist/${projectName}/manifest.json`;

  fs.writeFile(manifestPath, JSON.stringify(manifestContent), err => {
    if (err) {
      console.error(`Couln't write the manifest file ${manifestPath}`);
      process.exit(1);
    }

    console.log(`Successfully wrote the new file ${manifestPath}`);
  });
}

module.exports = {
  createManifest
};