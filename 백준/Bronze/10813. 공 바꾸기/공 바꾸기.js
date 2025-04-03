const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let baskets = Array.from({ length: N }, (_, i) => i + 1);

for (let k = 1; k <= M; k++) {
    let [i, j] = input[k].split(" ").map(Number);
    [baskets[i - 1], baskets[j - 1]] = [baskets[j - 1], baskets[i - 1]]; // Swap operation
}

console.log(baskets.join(" "));
