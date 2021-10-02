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

let t = parseInt(input());
let array = [];

for (let i = 0; i < t; i++) {
  array[i] = "";
  for (let j = t - 1; j > i; j--) {
    array[i] += " ";
  }
  for (let k = i; k >= 0; k--) {
    array[i] += "*";
  }
}

console.log(array.join("\n"));
