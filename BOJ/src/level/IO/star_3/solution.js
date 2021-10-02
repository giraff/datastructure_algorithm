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

const t = input();
const array = [];

for (let i = 0; i < t; i++) {
  array[i] = "";
  for (let j = t - i; j > 0; j--) {
    array[i] += "*";
  }
}

console.log(array.join("\n"));
