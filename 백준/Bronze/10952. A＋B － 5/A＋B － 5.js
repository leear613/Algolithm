const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach(line => {
  const [A, B] = line.split(' ').map(Number);
  if (A === 0 && B === 0) return;
  console.log(A + B);
});
