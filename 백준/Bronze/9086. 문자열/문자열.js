const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]); // 테스트 케이스 개수

for (let i = 1; i <= T; i++) {
  const str = input[i];
  const firstChar = str[0];
  const lastChar = str[str.length - 1];
  console.log(firstChar + lastChar);
}
