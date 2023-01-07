const code = id => `\x1b[${id}m`;
const BREAKER = code(0);
const generate = id => s => `${code(id)}${s}${BREAKER}`;

module.exports = { generate };