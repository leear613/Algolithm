const [n, scores] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = scores.split(' ').map(Number);
const max = Math.max(...arr);
const avg = arr.reduce((a, b) => a + (b / max * 100), 0) / arr.length;
console.log(avg);
