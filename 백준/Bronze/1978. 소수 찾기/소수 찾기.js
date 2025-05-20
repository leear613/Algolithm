const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let count = 0;
for (let num of numbers) {
    if (isPrime(num)) count++;
}

console.log(count);
