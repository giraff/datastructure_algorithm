function solution(n) {
  let arr = [];

  // O(n/10)
  while (n > 0) {
    arr.push(n % 10);
    n = parseInt(n / 10);
  }

  //O(nlogn)
  const answer = parseInt(
    arr
      .sort(function (a, b) {
        return b - a;
      })
      .join("")
  );

  return answer;
}
