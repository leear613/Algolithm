const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let x = [];
let y = [];

for (let i = 0; i < 3 ; i++) {
    const [a,b] =input[i].split(' ').map(Number);
    x.push(a);
    y.push(b);
}

const findUnique = (arr) =>{
    return arr[0] === arr[1] ? arr[2] : (arr[0] === arr[2] ? arr[1] : arr[0]);
};

console.log(`${findUnique(x)} ${findUnique(y)}`);
