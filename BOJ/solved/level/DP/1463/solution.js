const n = 2;

let dp = [];
dp[1] = 0;
dp[2] = 1;
dp[3] = Math.min(dp[3 - 1] + 1, dp[3 / 3] + 1);

for (let i = 4; i <= n; i++) {
  // 2와 3으로 나누어 떨어지는 수
  if (i % 2 === 0 && i % 3 === 0)
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1, dp[i / 3] + 1);
  // 2로 나누어 떨어지는 수
  else if (i % 2 === 0) dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1);
  // 3으로 나누어 떨어지는 수
  else if (i % 3 === 0) dp[i] = Math.min(dp[i - 1] + 1, dp[i / 3] + 1);
  // 2와 3 모두 나누어 떨어지지 않는 수
  else dp[i] = dp[i - 1] + 1;
}

console.log(dp[n]);
