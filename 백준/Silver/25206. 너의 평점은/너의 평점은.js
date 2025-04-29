const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const grade = {
  "A+": 4.5,
  "A0": 4.0,
  "B+": 3.5,
  "B0": 3.0,
  "C+": 2.5,
  "C0": 2.0,
  "D+": 1.5,
  "D0": 1.0,
  "F": 0.0
};

let totalScore = 0;
let totalCredit = 0;

input.forEach(line => {
  const [subject, creditStr, gradeStr] = line.split(' ');
  const credit = parseFloat(creditStr);

  if (gradeStr !== 'P') {
    totalScore += credit * grade[gradeStr];
    totalCredit += credit;
  }
});

console.log((totalScore / totalCredit).toFixed(6));
