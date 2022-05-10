function solution(n) {
  let sum = 0,
    sq = Math.sqrt(n);

  for (let i = 1; i < sq; i++) {
    if (n % i === 0) sum = sum + i + parseInt(n / i);
  }
  if (Math.floor(sq) === sq) sum += sq;
  return sum;
}
