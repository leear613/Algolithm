const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);
const point = Math.pow(2, N) + 1;
console.log(point * point);
