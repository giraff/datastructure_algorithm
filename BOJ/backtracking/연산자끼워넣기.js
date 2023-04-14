const [[n], nums, op] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

/**
 * 모든 연산자를 할 것 없이.
 * 존재하는 연산자만 간추려
 * 연산자 수식을 완성되면 수식에 대한 결과를 minmax 비교하여 올림
 */
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
let operator = [];

function recursive(index) {
  if (index == n) {
    // depth=index 가능한 연산자 조합이 완성되면 연산자 결과를 min, max에 비교
    let answer = nums[0];
    for (let i = 1; i < n; i++) {
      let tmp = operator[i - 1];

      if (tmp == 0) {
        answer = answer + nums[i];
      } else if (tmp == 1) {
        answer = answer - nums[i];
      } else if (tmp == 2) {
        answer = answer * nums[i];
      } else if (tmp == 3) {
        if (answer < 0) {
          answer = Math.floor(Math.abs(answer) / nums[i]) * -1;
        } else {
          answer = Math.floor(answer / nums[i]);
        }
      }
    }
    if (answer < min) min = answer;
    if (answer > max) max = answer;

    return;
  }

  for (let i = 0; i < 4; i++) {
    if (op[i] > 0) {
      op[i] = op[i] - 1;
      operator.push(i);
      recursive(index + 1);
      operator.pop();
      op[i] = op[i] + 1;
    }
  }
}

recursive(1);
console.log(`${max}\n${min}`);
