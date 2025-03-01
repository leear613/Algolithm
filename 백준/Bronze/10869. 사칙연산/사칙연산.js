const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("", (input) => {
    const [A, B] = input.split(" ").map(Number);

    console.log(A + B);  // 덧셈
    console.log(A - B);  // 뺄셈
    console.log(A * B);  // 곱셈
    console.log(Math.floor(A / B));  // 정수 나눗셈 (몫)
    console.log(A % B);  // 나머지

    rl.close();
});
