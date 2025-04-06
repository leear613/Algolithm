const [n, m, ...ops] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);
let arr = Array.from({length: n}, (_, i) => i + 1);
for (let k = 0; k < m; k++) {
  let [i, j] = [ops[k*2]-1, ops[k*2+1]];
  arr = [...arr.slice(0, i), ...arr.slice(i, j).reverse(), ...arr.slice(j)];
}
console.log(arr.join(' '));
