const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());
const N = input;

// 위쪽 삼각형
for (let i = 1; i <= N; i++) {
  const spaces = ' '.repeat(N - i);
  const stars = '*'.repeat(2 * i - 1);
  console.log(spaces + stars);
}

// 아래쪽 삼각형
for (let i = N - 1; i >= 1; i--) {
  const spaces = ' '.repeat(N - i);
  const stars = '*'.repeat(2 * i - 1);
  console.log(spaces + stars);
}
