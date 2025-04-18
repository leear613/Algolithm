const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

input.forEach(line => console.log(line));
