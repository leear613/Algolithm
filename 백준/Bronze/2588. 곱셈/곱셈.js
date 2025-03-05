const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = parseInt(input[0]); 
const B = input[1]; 


const third = A * parseInt(B[2]);  
const fourth = A * parseInt(B[1]);
const fifth = A * parseInt(B[0]);  
const sixth = A * parseInt(B);     

console.log(third);
console.log(fourth);
console.log(fifth);
console.log(sixth);