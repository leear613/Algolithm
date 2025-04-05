const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const remainders = input.map(num => Number(num) % 42);
const unique = new Set(remainders);

console.log(unique.size);
