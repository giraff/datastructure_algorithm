function solution(arr) {
  var answer = arr.reduce((acc, val, i) => acc + val, 0) / arr.length;
  return answer;
}
