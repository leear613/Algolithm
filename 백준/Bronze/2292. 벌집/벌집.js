const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());

let room = 1;  // 현재 층 수
let maxNum = 1; // 현재 층의 마지막 방 번호

while (input > maxNum) {
    maxNum += 6 * room;
    room++;
}

console.log(room);
