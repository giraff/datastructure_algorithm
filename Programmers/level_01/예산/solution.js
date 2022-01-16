function solution(d, budget) {
  // 정해진 예산에 최대 효율을 자랑하려면 '가장 돈이 덜 드는 애들'로만 구성해야한다.
  let sum = 0;

  // 1. d 오름차순 정렬
  d.sort((a, b) => {
    return a - b;
  });
  // 2. 0부터 d.length -1까지의 합을 순차적으로 구하기
  for (let i = 0; i < d.length; i++) {
    // i 값까지의 합이 budget보다 크면 index 값 출력
    sum += d[i];
    if (sum > budget) return i;
  }

  // 끝까지 했을 때마저 sum <= budget 이라면 d.length 반환
  return d.length;
}

// 0.23ms , 30.4MB

// d.reduce() 와 d.length를 이용한 풀이
// 0.23ms , 30.4MB
function solution2(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}
