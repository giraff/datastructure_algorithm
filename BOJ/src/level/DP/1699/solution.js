// let line = require('fs').readFileSync('/dev/stdin').toString().trim();

// let n = parseInt(line);
const N = +8;
let dp = Array(N + 1).fill(100000);

// 제곱수 먼저 대입
for (let i = 1; i * i <= N; i++) {
  dp[i * i] = 1;
}

// 알고리즘
for (let i = 2; i <= N; i++) {
  let left = 1;
  let right = i - 1;
  while (left <= right) {
    if (dp[i] > dp[left] + dp[right]) {
      dp[i] = dp[left] + dp[right];
    }
    left += 1;
    right -= 1;
  }
}

console.log(dp[N]);
