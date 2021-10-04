// BOJ 2522
// nodeJS 런타임 에러로 인해
// fs 모듈 대신 readline을 사용하여 풀어야함

// const fs = require("fs");

// const stdin = (
//   process.platform === "linux"
//     ? fs.readFileSync("/dev/stdin", "utf-8 ").toString()
//     : `3`
// )
//   .trim()
//   .split("\n");

// const input = (() => {
//   let line = 0;
//   return () => stdin[line++];
// })();

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  // console.log(line);
  let n = parseInt(line);
  let array = [];

  for (let i = 0; i < n; i++) {
    array[i] = "";
    for (let j = n - 1; j > i; j--) {
      array[i] += " ";
    }
    for (let k = i; k >= 0; k--) {
      array[i] += "*";
    }
  }

  for (let i = n; i < 2 * n - 1; i++) {
    array[i] = "";
    for (let j = i; j > n - 1; j--) {
      array[i] += " ";
    }
    for (let k = 2 * n - i; k > 1; k--) {
      array[i] += "*";
    }
  }
  console.log(array.join("\n"));

  rl.close();
}).on("close", function () {
  process.exit();
});
