const fs = require('fs');
let N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let divisor = 2;

while (N > 1) {
    if (N % divisor === 0) {
        console.log(divisor);
        N = N / divisor;
    } else {
        divisor++;
    }
}
