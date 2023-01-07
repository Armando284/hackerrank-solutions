const { generate } = require('./utility.js');

const colorCodes = (isBg = false) => {
  const baseId = isBg ? 40 : 30;
  return {
    black: generate(baseId + 0),
    red: generate(baseId + 1),
    green: generate(baseId + 2),
    yellow: generate(baseId + 3),
    blue: generate(baseId + 4),
    magenta: generate(baseId + 5),
    cyan: generate(baseId + 6),
    white: generate(baseId + 67),
  }
}

module.exports = {
  colors: {
    f: colorCodes(false),
    bg: colorCodes(true),
  },
}