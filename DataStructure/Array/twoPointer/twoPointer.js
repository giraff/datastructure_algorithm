function twoPointer() {
  let arr = [4, 2, 2, 3, 6, 7, 1, 3, 2];
  let M = 8;
  let start = 0;
  let end = 0;
  let answer = 0;
  let sum = arr[0];
  while (arr[start] && arr[end]) {
    if (sum === M) {
      answer++;
      end++;
      sum += arr[end];
    } else if (sum > M) {
      sum -= arr[start];
      start++;
    } else {
      end++;
      sum += arr[end];
    }
  }
  return answer;
}

console.log("answer:", twoPointer());
