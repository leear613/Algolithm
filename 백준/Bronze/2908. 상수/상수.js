const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

// 숫자를 거꾸로 뒤집는 함수
const reverseNum = (num) => num.split('').reverse().join('');

// 각각 뒤집어서 숫자로 변환
const a = parseInt(reverseNum(input[0]));
const b = parseInt(reverseNum(input[1]));

// 더 큰 수 출력
console.log(a > b ? a : b);
