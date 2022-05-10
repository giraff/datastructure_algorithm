function solution(n) {
  let answer = 0,
    eratos = Array.from({ length: n + 1 }, () => true);

  for (let i = 2; i <= n; i++) {
    if (eratos[i]) {
      answer++;
      for (let j = i * i; j <= n; j += i) {
        eratos[j] = false;
      }
    }
  }
  return answer;
}
