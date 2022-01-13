function solution(n, x = 1) {
  let min = n,
    x = n;
  while (x > 0) {
    if (n % x === 1 && min > x) {
      min = x;
    }
    x--;
  }
  return min;
}
