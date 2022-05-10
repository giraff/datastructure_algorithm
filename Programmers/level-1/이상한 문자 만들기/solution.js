function solution(s) {
  var answer = "";
  let temp = s.split(" ");
  let res = temp.map((val, idx) =>
    val
      .split("")
      .map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()))
      .join("")
  );
  answer = res.join(" ");
  return answer;
}
