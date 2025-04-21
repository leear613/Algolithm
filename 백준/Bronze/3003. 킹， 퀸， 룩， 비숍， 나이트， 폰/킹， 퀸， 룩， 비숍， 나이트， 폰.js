const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const correct = [1, 1, 2, 2, 2, 8];
const result = correct.map((v, i) => v - input[i]);

console.log(result.join(' '));
