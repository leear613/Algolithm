const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const buddhistYear = parseInt(input,10);
const chrstianYear = buddhistYear -543;
console.log(chrstianYear);