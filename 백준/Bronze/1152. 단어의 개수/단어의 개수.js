const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

// 공백 기준으로 나누고, 길이가 0인 건 제외
const words = input.split(' ').filter(word => word !== '');

console.log(words.length);