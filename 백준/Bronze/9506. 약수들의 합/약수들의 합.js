const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

for (let n of input) {
    if (n === -1) break;

    let divisors = [];
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }

    const sum = divisors.reduce((a, b) => a + b, 0);
    if (sum === n) {
        console.log(`${n} = ${divisors.join(' + ')}`);
    } else {
        console.log(`${n} is NOT perfect.`);
    }
}
