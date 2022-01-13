function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    let num = Math.sqrt(i);
    answer = Math.floor(num) === num ? answer - i : answer + i;
  }
  return answer;
}
