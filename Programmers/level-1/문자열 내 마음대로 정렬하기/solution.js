function solution(strings, n) {
  return strings.sort(function (a, b) {
    if (a.charAt(n) === b.charAt(n)) return a < b ? -1 : a > b ? 1 : 0;
    return a.charAt(n) < b.charAt(n) ? -1 : a.charAt(n) > b.charAt(n) ? 1 : 0;
  });
}
