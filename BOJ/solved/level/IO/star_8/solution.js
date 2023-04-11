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

let t = input();
let array = [];

for (let i = 0; i < t; i++) {
  array[i] = "";
  for (let j = 0; j < i + 1; j++) {
    array[i] += "*";
  }
  for (let j = 0; j < t * 2 - (i + 1) * 2; j++) {
    array[i] += " ";
  }
  for (let j = 0; j < i + 1; j++) {
    array[i] += "*";
  }
}

for (let k = t; k <= t * 2 - 1; k++) {
  array[k] = "";
  for (let i = k; i < t * 2 - 1; i++) {
    array[k] += "*";
  }
  for (let j = 0; j < t * 2 - (t * 2 - 1 - k) * 2; j++) {
    array[k] += " ";
  }
  for (let i = k; i < t * 2 - 1; i++) {
    array[k] += "*";
  }
}

console.log(array.join("\n").trim());
