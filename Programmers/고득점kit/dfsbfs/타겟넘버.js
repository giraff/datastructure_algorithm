/**
 *
 * @param {*} numbers
 * @param {*} target
 * @returns
 */

function solution(numbers, target) {
  var answer = 0;
  let operators = [];
  for (let i = 0; i < 2 ** numbers.length; i++) {
    operators.push(i.toString(2).padStart(numbers.length, 0));
  }
  for (let i = 0; i < operators.length; i++) {
    let sum = 0;
    for (let j = 0; j < operators[i].length; j++) {
      if (operators[i][j] == "1") {
        // +
        sum += numbers[j];
      } else {
        // -
        sum -= numbers[j];
      }
    }
    if (sum === target) {
      answer++;
    }
  }
  return answer;
}

/**
 * 백트래킹을 이용해서 풀이
 * @param {*} numbers
 * @param {*} target
 */
function solution(numbers, target) {
  let depth = numbers.length;
  // 언제까지 recursive를 반복할 지 그 depth=numbers의 길이만큼

  let answer = [];
  let count = 0;
  function recursive(index) {
    if (index == depth) {
      let sum = 0;
      /**
       * answer 에 담긴 수식들과 numbers의 수들로 수식결과값을 구하기
       */
      for (let idx = 0; idx < answer.length; idx++) {
        if (answer[idx]) sum += numbers[idx];
        else sum += numbers[idx] * -1;
      }
      // sum이 target과 같으면 방법의 수(count) 1 증가
      if (sum === target) count++;
      return;
    }
    for (let i = 0; i < 2; i++) {
      /** -, 혹은 + 두 개만 이용하므로,  */
      answer.push(i);
      recursive(index + 1);
      answer.pop();
    }
  }
}
