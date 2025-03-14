const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [A, B] = input[0].split(' ').map(Number);
let C = Number(input[1]);

B += C;
A += Math.floor(B / 60);
B %= 60;
A %= 24;

console.log(A, B);