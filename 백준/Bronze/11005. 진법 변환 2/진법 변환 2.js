const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [N, B] = line.split(' ');
  const converted = parseInt(N).toString(parseInt(B)).toUpperCase();
  console.log(converted);
  rl.close();
});
