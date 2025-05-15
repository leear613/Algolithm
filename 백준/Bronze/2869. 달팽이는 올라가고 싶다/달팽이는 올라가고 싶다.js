const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const [A, B, V] = input;

const days = Math.ceil((V - B) / (A - B));
console.log(days);
