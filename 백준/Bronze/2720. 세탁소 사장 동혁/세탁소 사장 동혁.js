const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0];

for (let i = 1; i <= T; i++) {
  let change = +input[i];
  const coins = [25, 10, 5, 1];
  const result = [];

  for (let coin of coins) {
    const count = Math.floor(change / coin);
    result.push(count);
    change %= coin;
  }

  console.log(result.join(" "));
}
