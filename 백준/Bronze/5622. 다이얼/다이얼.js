const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let time = 0;

for (let i = 0; i < input.length; i++) {
  const char = input[i];

  if ("ABC".includes(char)) time += 3;
  else if ("DEF".includes(char)) time += 4;
  else if ("GHI".includes(char)) time += 5;
  else if ("JKL".includes(char)) time += 6;
  else if ("MNO".includes(char)) time += 7;
  else if ("PQRS".includes(char)) time += 8;
  else if ("TUV".includes(char)) time += 9;
  else if ("WXYZ".includes(char)) time += 10;
}

console.log(time);
