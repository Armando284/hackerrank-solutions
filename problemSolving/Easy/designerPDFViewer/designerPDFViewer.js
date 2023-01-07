"use strict";
function designerPdfViewer(h, word) {
  // Write your code here
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  return Math.max.apply(null, word.split('').map(char => h[abc.indexOf(char)])) * word.length;
}

// Tests
const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
const word = 'zaba';
console.log(designerPdfViewer(h, word));