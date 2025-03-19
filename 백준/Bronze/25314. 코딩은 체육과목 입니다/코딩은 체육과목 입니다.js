const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

const longCount = N / 4;
const result = 'long '.repeat(longCount) + 'int';
console.log(result);