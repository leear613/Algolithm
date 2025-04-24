const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let str = input;

for (let i = 0; i < croatia.length; i++) {
  str = str.split(croatia[i]).join('X'); // 각 특수 문자들을 'X'로 바꾸기 (임시 문자)
}

console.log(str.length);
