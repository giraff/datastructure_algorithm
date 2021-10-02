const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf-8").toString()
    : `6`
)
  .trim()
  .split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = parseInt(input());
let array = [];

for (let i = 0; i < t - 1; i++) {
  array[i] = "";
  for (let j = i; j < t - 1; j++) {
    array[i] += " ";
  }
  for (let k = 0; k < 2 * (i + 1) - 1; k++) {
    array[i] += "*";
  }
  array[i] += " ";
}

array[t - 1] = "";
for (let i = 0; i < 2 * t - 1; i++) {
  array[t - 1] += "*";
}

console.log(array.join("\n"));
