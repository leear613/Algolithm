const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (line) => {
  const dice = line.split(' ').map(Number);
     const [a, b, c] = dice;
    
  let prize = 0;

  if (a === b && b === c) {
    prize = 10000 + a * 1000;
  } else if (a === b || b === c || a === c) {
    if (a === b || a === c) {
      prize = 1000 + a * 100;
    } else {
      prize = 1000 + b * 100;
    }
  } else {
    prize = Math.max(a, b, c) * 100;
  }

  console.log(prize);
  rl.close();
});