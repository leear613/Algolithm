const fs = require('fs');
const [n, ...words] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0;

for (let word of words) {
  let isGroup = true;
  for (let i = 1; i < word.length; i++) {
    if (word[i] !== word[i - 1] && word.slice(0, i).includes(word[i])) {
      isGroup = false;
      break;
    }
  }
  if (isGroup) count++;
}

console.log(count);
