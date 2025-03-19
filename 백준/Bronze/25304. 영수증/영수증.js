const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const total = Number(input[0]);
const itemCount = Number(input[1]);
let sum = 0;

for (let i = 2; i < 2 + itemCount; i++) {
    const [price, quantity] = input[i].split(' ').map(Number);
    sum += price * quantity;
}

console.log(sum === total ? 'Yes' : 'No');