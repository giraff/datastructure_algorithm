// let line = require('fs').readFileSync('/dev/stdin','utf8');

const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf-8").toString()
    : `3`
)
  .trim()
  .split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = parseInt(input());
let p = "";
for (let i = 1; i < N; i++) {
  let tempN = N;

  // 1. 각 줄의 맨 앞 공백 채우기
  while (tempN - i !== 0) {
    p += " ";
    tempN--;
  }
  // 2. 앞 공백 채운 후 무조건 * 하나 찍기
  p += "*";

  // 1번째 줄은 공백 없음. 2번째 - 1칸 공백 / 3번째 줄 - 3칸 공백 ...
  // 공백이 2번째 줄부터 1칸으로 시작해 +2 만큼 증가한다.
  // 즉 각 줄을 인덱스 i라고 둘 때 각 줄의 중간 공백은 2 * (i-1) - 1 칸이다.
  // 그만큼을 채운다.
  for (let j = 1; j <= 2 * (i - 1) - 1; j++) {
    p += " ";
  }

  // 중간 공백이 없는 첫번째 줄을 제외하고 중간 공백을 갖는 줄은 끝에 꼭 * 을 찍어 마무리한다
  if (i != 1) p += "*";

  // 각 줄의 문단을 나눠주는 줄바꿈 문자를 추가한다.
  p += "\n";
}

// 맨 마지막 줄은 입력한 값만큼 별을 찍어 마무리한다.
for (let i = 0; i < 2 * N - 1; i++) {
  p += "*";
}

console.log(p);
