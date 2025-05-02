const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const paper = Array.from(Array(100), () => Array(100).fill(0));

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  for (let dx = 0; dx < 10; dx++) {
    for (let dy = 0; dy < 10; dy++) {
      paper[x + dx][y + dy] = 1; // 색종이 영역 칠하기
    }
  }
}

let area = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (paper[i][j] === 1) area++;
  }
}

console.log(area);
