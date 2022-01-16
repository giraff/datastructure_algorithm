// 자릿수가 홀수이면 '박', 짝수이면 '수' 더하기

function solution(n) {
  var answer = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) answer += "수";
    else answer += "박";
  }
  return answer;
}

// 풀이 2

// '수박'을 n을 2로 나눈 몫만큼 곱하고 나머지가 있으면 '수'를 더하기

function waterMelon() {
  return "수박".repeat(n / 2) + (n % 2 ? "수" : "");
}
