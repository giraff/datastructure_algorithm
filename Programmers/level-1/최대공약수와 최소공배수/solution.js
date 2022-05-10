function gcd(a, b) {
  while (true) {
    let c = a % b;
    if (c === 0) return b;
    a = b;
    b = c;
  }
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(n, m) {
  var answer = [];

  answer.push(gcd(n, m));
  answer.push(lcm(n, m));
  return answer;
}
