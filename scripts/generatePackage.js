const fs = require('fs');
const path = require('path');

console.log('Generating package.json');

const packageJsonPath = path.join(__dirname, '..' , 'package.json');
const packageJson = fs.readFileSync(packageJsonPath);
const packageObj = JSON.parse(packageJson);
delete packageObj['devDependencies'];
packageObj['scripts']['start'] = 'node main.js';
const outFileName = path.join(__dirname, '..', 'target', 'package.json')
fs.writeFileSync(outFileName, JSON.stringify(packageObj,null,2));
