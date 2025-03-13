const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(parseInt(line));
    if (input.length === 2) {
        const [x, y] = input;

        if (x > 0 && y > 0) {
            console.log(1);
        } else if (x < 0 && y > 0) {
            console.log(2);
        } else if (x < 0 && y < 0) {
            console.log(3);
        } else if (x > 0 && y < 0) {
            console.log(4);
        }
        
        rl.close();
    }
});
