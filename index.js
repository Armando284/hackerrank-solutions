const fs = require('fs');
const { exec, execSync } = require('child_process');

const categories = {
  'ps': 'problemSolving',
  'al': 'algorithms'
}
const difficulties = {
  'e': 'Easy',
  'm': 'Medium',
  'h': 'Hard'
}

Object.freeze(categories, difficulties);

function createReadme({ name, difficulty }) {
  return `# ${name}

**Difficulty:** *${difficulty}*

**Success Rate:** * %*

## Problem Description

 .

## Hackerrank

[${name}](https://www.hackerrank.com/challenges/ )
`;
}

function createJSFile({ name }) {
  return `"use strict;"
function ${name}(){
  // Write your code here.

}

// Tests
console.log(${name}());`;
}

(function main() {
  const args = process.argv.slice(2);
  const category = categories[args[0]] || 'Random';
  const difficulty = difficulties[args[1]] || 'Random';
  const name = args[2] || 'Random';
  const exerciseFile = `./${category}/${difficulty}/${name}`;
  fs.mkdirSync(exerciseFile, { recursive: true }, (err) => {
    if (err) throw new Error(err);
    console.log(`Exercise file created here: ${exerciseFile}`);
  });
  fs.writeFileSync(`${exerciseFile}/README.md`, createReadme({ name, difficulty }), err => {
    if (err) throw new Error(err);
    console.log(`README file created! Please fill in the blanks.`);
  });
  fs.writeFileSync(`${exerciseFile}/${name}.js`, createJSFile({ name }), err => {
    if (err) throw new Error(err);
    console.log(`${name}.js created! Please finish function ${name}().`);
  });
  execSync(`code ${exerciseFile}/README.md && code ${exerciseFile}/${name}.js`, (err, stdout, stderr) => {
    if (err) throw new Error(err);
  });
})()