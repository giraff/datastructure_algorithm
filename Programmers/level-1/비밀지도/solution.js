function solution(n, arr1, arr2) {
  var answer = [];
  let first = [],
    second = [],
    result = Array.from({ length: n }, (v, i) =>
      Array.from({ length: n }, () => "#")
    );
  // 2진수로 변환해서 2차원으로 저장
  arr1.map((v, i) => {
    first.push(v.toString(2).padStart(n, "0").split(""));
  });
  arr2.map((v, i) => {
    second.push(v.toString(2).padStart(n, "0").split(""));
  });

  // 두 2차원 배열 비교해서 조건문 따라 2차원 배열 생성
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (first[i][j] === "0" && second[i][j] === "0") result[i][j] = " ";
    }
  }

  // 2차원 -> 1차원
  result.forEach((v, i) => answer.push(v.join("")));

  return answer;
}
