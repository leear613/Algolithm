const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

const count = Array(26).fill(0);

for (let ch of input) {
  count[ch.charCodeAt() - 65]++;
}

const max = Math.max(...count);
const index = count.indexOf(max);

// 중복 확인
console.log(count.filter(v => v === max).length > 1 ? '?' : String.fromCharCode(index + 65));
