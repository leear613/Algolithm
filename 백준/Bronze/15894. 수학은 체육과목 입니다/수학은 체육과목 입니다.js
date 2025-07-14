const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = BigInt(input); // 입력이 최대 10^9이므로 BigInt로 처리
const result = n * 4n;

console.log(result.toString());