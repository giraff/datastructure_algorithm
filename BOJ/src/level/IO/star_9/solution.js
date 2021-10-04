const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf-8").toString()
    : `5`
)
  .trim()
  .split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let n = input();
let array = [];

for (let i = 1; i <= n; i++) {
  array[i] = "";
  for (let j = 1; j < i; j++) array[i] += " ";
  for (let k = 2 * (n - i); k >= 0; k--) array[i] += "*";
  console.log(array[i]);
}

for (let i = n - 1; i >= 1; i--) {
  array[i] = "";
  for (let j = 1; j < i; j++) array[i] += " ";
  for (let j = 2 * (n - i); j >= 0; j--) array[i] += "*";
  console.log(array[i]);
}
