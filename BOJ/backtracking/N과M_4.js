const [n, m] = `4 2`.toString().trim().split(" ").map(Number);

let s = [];
let answer = [];
let visited = Array.from({ length: n + 1 }, () => false);

function dfs() {
  if (s.length === m) {
    let tmp = s
      .slice(0)
      .sort((a, b) => a - b)
      .join(" ");
    if (!answer.includes(tmp)) {
      answer.push(s.join(" "));
    }
    return;
  }
  for (let i = 1; i <= n; i++) {
    s.push(i);
    dfs();
    s.pop();
  }
}

dfs();
console.log(answer.join("\n"));
