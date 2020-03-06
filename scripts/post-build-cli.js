const fs = require('fs');
const { postBuild } = require('./post-build');

const projectName = process.argv[2];
const moduleName = process.argv[3];
const shouldWatch = process.argv[4] === '--watch';

if (!projectName) {
  console.error('No project name specified');
  process.exit(1);
}

if (!moduleName) {
  console.error('No module name specified');
  process.exit(1);
}

const path = `./dist/${projectName}/bundles/${projectName}.umd.js`;

console.log('Watching ', path);

if (shouldWatch) {
  fs.watch(path, (event) => {
    if (event === 'change') {
      postBuild(projectName, moduleName);
    }
  })
} else {
  if (fs.existsSync(path)) {
    postBuild(projectName, moduleName);
  }
}
