// let line = require('fs').readFileSync('/dev/stdin','utf8');

const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf-8").toString()
    : `4`
)
  .trim()
  .split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = parseInt(input());
let p = "";
for (let i = 1; i <= N; i++) {
  let tempN = N;
  let tempI = i;

  while (tempN - i !== 0) {
    p += " ";
    tempN--;
  }
  while (tempI !== 0) {
    p += "* ";
    tempI--;
  }

  p += "\n";
}

console.log(p);
