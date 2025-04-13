const fs = require('fs');
const [n, nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sum = nums.split('').reduce((acc, cur) => acc + +cur, 0);

console.log(sum);