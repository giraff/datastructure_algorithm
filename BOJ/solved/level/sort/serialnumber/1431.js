const [firstValue, ...array] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
// 문자열 입력 받음

// 정렬 함수
function compareFunction(a, b) {
  // 길이가 다르면 짧은 것 먼저
  if (a.length !== b.length) return a.length - b.length;
  else {
    // 길이가 같으면 자릿수합 작은 게 먼저
    let sumA = 0,
      sumB = 0;
    for (let elem of a) {
      if (!isNaN(elem)) sumA += parseInt(elem);
    }
    for (let elem of b) {
      if (!isNaN(elem)) sumB += parseInt(elem);
    }

    if (sumA !== sumB) return sumA - sumB;
    // 길이가 같고 자릿수합이 같으면 사전순 정렬
    else return a > b ? 1 : a < b ? -1 : 0;
  }
}

array.sort(compareFunction);

console.log(array.join("\n"));
