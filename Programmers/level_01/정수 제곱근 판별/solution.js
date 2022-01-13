function solution(n) {
  let num = Math.sqrt(n);
  return Math.floor(num) === num ? (num + 1) ** 2 : -1;
}
