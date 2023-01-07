const fs = require('fs');
const { execSync } = require('child_process');
const { colors, formats } = require('./consoleFormatter');

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
  const firstLetter = fn => s => s.charAt(0)[fn]() + s.slice(1);
  const problemName = firstLetter('toUpperCase')(name.replace(/\-/g, ' '));
  const funcName = firstLetter('toLowerCase')(name.split('-').join(''));
  const exerciseFile = `./${category}/${difficulty}/${funcName}`;

  // Creates directory tree.
  fs.mkdirSync(exerciseFile, { recursive: true }, (err) => {
    if (err) throw new Error(err);
  });
  // Creates problem README file based on a template.
  fs.writeFileSync(`${exerciseFile}/README.md`, createReadme({ name: problemName, difficulty }), err => {
    if (err) throw new Error(err);
  });
  // Creates problem solution JS file based on a template.
  fs.writeFileSync(`${exerciseFile}/${funcName}.js`, createJSFile({ name: funcName }), err => {
    if (err) throw new Error(err);
  });
  // Updates common README file with the new problem set.
  fs.appendFileSync(`./README.md`, `* **${problemName}** ${category} *${difficulty}* \n`, err => {
    if (err) throw new Error(err);
  });
  // Open each file in the vscode.
  execSync(`code README.md && code ${exerciseFile}/README.md && code ${exerciseFile}/${funcName}.js`, (err, stdout, stderr) => {
    if (err) throw new Error(err);
  });

  // CLI response
  console.log(colors.bg.green(formats.bold(' Finished! ')));
  console.log(`${colors.f.green('Problem set files created here')} ${exerciseFile}`);
  console.log(colors.f.yellow('Remember filling the blanks at the problem README!'));
})() //  main IIFE
