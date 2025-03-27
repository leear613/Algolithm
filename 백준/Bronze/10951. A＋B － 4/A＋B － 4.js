const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let line of input) {
    const [a, b] = line.split(' ').map(Number);
    console.log(a + b);
}