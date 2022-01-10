const fs = require("fs");

let stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf-8").toString()
    : `25114`
)
  .trim()
  .split("\n");

let input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const str = input();
let dp = Array(5001).fill(0);

function securityCode(n) {
  const code = n.split("");

  if (dp[0] === "0") {
    return 0;
  } else {
    dp[0] += 1;
  }
  for (let i = 1; i < code.length; i++) {
    if (code[i - 1] + code[i] === "00") return 0;
    // 한 자리수로만 해석할 수 있는 경우

    if (
      code[i] !== "0" &&
      parseInt(code[i - 1] + code[i]) < 1 &&
      parseInt(code[i - 1] + code[i]) > 26
    ) {
      dp[i] = dp[i - 1];
    } else if (
      // 두 자리수로만 해석할 수 있는 경우
      code[i] === "0" &&
      parseInt(code[i - 1] + code[i]) >= 1 &&
      parseInt(code[i - 1] + code[i]) <= 26
    ) {
      dp[i] = dp[i - 2];
    }
    // 한자리 두자리 모두 해석 가능
    else if (
      code[i - 1] !== "0" &&
      code[i] !== "0" &&
      parseInt(code[i - 1] + code[i]) >= 1 &&
      parseInt(code[i - 1] + code[i]) <= 26
    ) {
      dp[i] = dp[i - 2] + dp[i - 1];
    } else if (
      code[i] === "0" &&
      code[i] === "0" &&
      parseInt(code[i - 1] + code[i]) < 1 &&
      parseInt(code[i - 1] + code[i]) > 26
    ) {
      return 0;
    } else {
      return 1;
    }
    // 해석 불가
  }

  console.log(dp);
  return dp[code.length - 1];
}

console.log(securityCode(str));
