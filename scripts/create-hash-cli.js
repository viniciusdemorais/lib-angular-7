const { createHash } = require('./create-hash');

const projectName = process.argv[2];

if (!projectName) {
  console.error('No project name specified');
  process.exit(1);
}

createHash(projectName);
