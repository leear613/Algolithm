const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const matrixA = [];
const matrixB = [];

for (let i = 1; i <= N; i++) {
  matrixA.push(input[i].split(' ').map(Number));
}
for (let i = N + 1; i <= N * 2; i++) {
  matrixB.push(input[i].split(' ').map(Number));
}

const result = [];
for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(matrixA[i][j] + matrixB[i][j]);
  }
  result.push(row.join(' '));
}

console.log(result.join('\n'));
