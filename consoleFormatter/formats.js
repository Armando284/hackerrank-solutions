const { generate } = require('./utility.js');

const formatCodes = {
  bold: generate(1),
  light: generate(2),
  italic: generate(3),
  underline: generate(4),
  blinkSlow: generate(5),
  blinkFast: generate(6),
  crossed: generate(9),
}

module.exports = {
  formats: formatCodes,
}