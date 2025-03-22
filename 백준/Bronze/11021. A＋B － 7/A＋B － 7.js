const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]); // 첫 번째 줄에 테스트 케이스 개수
let result = '';

for (let i = 1; i <= T; i++) {
    let [A, B] = input[i].split(' ').map(Number);
    result += `Case #${i}: ${A + B}\n`;
}

console.log(result);