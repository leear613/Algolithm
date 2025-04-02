const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  let [N, M] = input.shift().split(" ").map(Number);
  let baskets = Array(N).fill(0);

  input.forEach((cmd) => {
    let [i, j, k] = cmd.split(" ").map(Number);
    baskets.fill(k, i - 1, j);
  });

  console.log(baskets.join(" "));
  process.exit();
});
