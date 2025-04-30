const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let max = -1;
let maxRow = 0;
let maxCol = 0;

for (let i = 0; i < 9; i++) {
  const row = input[i].split(" ").map(Number);
  for (let j = 0; j < 9; j++) {
    if (row[j] > max) {
      max = row[j];
      maxRow = i + 1; // 1부터 시작
      maxCol = j + 1;
    }
  }
}

console.log(max);
console.log(`${maxRow} ${maxCol}`);
