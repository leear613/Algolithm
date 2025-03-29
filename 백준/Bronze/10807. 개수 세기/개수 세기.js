const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]); // 첫째 줄: 정수의 개수
const numbers = input[1].split(' ').map(Number); // 둘째 줄: 정수 배열
const v = Number(input[2]); // 셋째 줄: 찾으려는 정수

// v의 개수를 세기
const count = numbers.filter(num => num === v).length;

console.log(count);
