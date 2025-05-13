const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let line = 1;
let sum = 0;

// 몇 번째 대각선(line)인지 찾기
while (sum + line < input) {
  sum += line;
  line++;
}

let pos = input - sum;

let numerator, denominator;
if (line % 2 === 0) {
  // 짝수 번째 줄 → 위에서 아래
  numerator = pos;
  denominator = line - pos + 1;
} else {
  // 홀수 번째 줄 → 아래에서 위
  numerator = line - pos + 1;
  denominator = pos;
}

console.log(`${numerator}/${denominator}`);
