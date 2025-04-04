const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const submitted = new Set(input);
const result = [];

for (let i = 1; i <= 30; i++) {
  if (!submitted.has(i)) {
    result.push(i);
  }
}

result.sort((a, b) => a - b);
console.log(result[0]);
console.log(result[1]);
