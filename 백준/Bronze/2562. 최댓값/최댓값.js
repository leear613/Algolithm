const fs = require('fs');

// 백준에서는 '/dev/stdin'을 사용하지만, 로컬 테스트 시 'input.txt' 사용 가능
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const maxVal = Math.max(...input);
const index = input.indexOf(maxVal) + 1;

console.log(maxVal);
console.log(index);