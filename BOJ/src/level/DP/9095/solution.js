const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf-8").toString()
    : `3
    4
    7
    10`
)
  .trim()
  .split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let dp = Array(11).fill(0);
let N = +input();

function recursive(n) {
  // 1의 경우의 수
  if (n === 1) return 1;
  // 2의 경우의 수
  if (n === 2) return 2;
  // 3의 경우의 수
  if (n === 3) return 4;
  // 메모이제이션 (1,2,3이외의 이미 저장된 값이 있으면 가져와서 리턴)
  if (dp[n]) return dp[n];

  //재귀호출
  dp[n] = recursive(n - 1) + recursive(n - 2) + recursive(n - 3);

  return dp[n];
}

// console.log(recursive(10));

for (let i = 0; i < N; i++) {
  console.log(recursive(+input()));
}
