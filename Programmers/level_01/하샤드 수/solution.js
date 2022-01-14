function solution(x) {
  let temp = x,
    sum = 0;
  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  return x % sum === 0;
}
