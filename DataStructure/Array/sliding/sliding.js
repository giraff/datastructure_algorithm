function sliding() {
  let arr = [4, 2, 2, 3, 6, 7, 8, 1, 3, 2];
  let M = 3;
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < M; i++) {
    sum += arr[i];
  }
  answer = sum;
  for (let i = M; i < arr.length; i++) {
    sum += arr[i] - arr[i - M];
    answer = answer < sum ? sum : answer;
  }
  return answer;
}

console.log(`max`, sliding());
