const n = require('fs').readFileSync('/dev/stdin').toString().trim() * 1;
console.log(n * (n + 1) / 2);