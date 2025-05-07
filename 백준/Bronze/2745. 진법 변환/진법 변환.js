const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function (line) {
  const [N, B] = line.split(" ");
  console.log(parseInt(N, parseInt(B)));
  rl.close();
});
