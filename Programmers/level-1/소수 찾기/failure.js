function isPrime(x) {
  if (x === 1) return false;
  if (x === 2 || x === 3) {
    return true;
  } else {
    for (let i = Math.floor(Math.sqrt(x)); i > 1; i--) {
      if (x % i === 0) return false;
    }
  }
  return true;
}

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) answer++;
  }

  return answer;
}

// 시간 초과 (효율성)

/**
 * 테스트 1 〉	통과 (0.11ms, 30.1MB)
테스트 2 〉	통과 (0.12ms, 30.3MB)
테스트 3 〉	통과 (0.22ms, 30MB)
테스트 4 〉	통과 (0.49ms, 30.3MB)
테스트 5 〉	통과 (0.29ms, 30.1MB)
테스트 6 〉	통과 (4.10ms, 32MB)
테스트 7 〉	통과 (2.29ms, 32.1MB)
테스트 8 〉	통과 (5.61ms, 32.1MB)
테스트 9 〉	통과 (4.42ms, 32.8MB)
테스트 10 〉	통과 (242.50ms, 32.1MB) **
테스트 11 〉	통과 (1365.76ms, 32.9MB) *****
테스트 12 〉	통과 (293.60ms, 32.1MB) **
 * 
 */
