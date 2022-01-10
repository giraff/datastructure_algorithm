const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf-8").toString()
    : `10
    10 -4 3 1 5 6 -35 12 21 -1`
)
  .trim()
  .split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = +input();
let Array = input().trim().split(" ");
let value = +Array[0];
let max = value;

for (let i = 1; i < N; i++) {
  value = Math.max(+Array[i], +Array[i] + value);
  max = Math.max(value, max);
}

console.log(max);
