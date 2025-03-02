const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (id) => {
  console.log(id + "??!");
  rl.close();
});
