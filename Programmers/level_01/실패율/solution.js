function solution(N, stages) {
  let obj = [];
  let count = Array.from({ length: N + 1 }, (v, i) => 0);
  // 각 스테이지에 머무르는 회원 수 세기
  for (let i = 0; i < stages.length; i++) {
    if (stages[i] <= N) {
      count[stages[i] - 1] += 1;
    }
  }
  // 객체 배열 생성
  let len = stages.length;
  for (let j = 0; j < N; j++) {
    obj.push({ key: j + 1, fail: count[j] / len });
    len -= count[j];
  }
  // 객체 배열 정렬
  let answer = obj.sort(function (a, b) {
    if (b.fail !== a.fail) return b.fail - a.fail;
    else a.key - b.key;
  });

  answer = answer.map((v, i) => v.key);
  return answer;
}
