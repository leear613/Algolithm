const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]); // 첫 번째 줄에 주어진 테스트 케이스 개수
for (let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
}