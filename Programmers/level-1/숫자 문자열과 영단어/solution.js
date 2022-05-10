function solution(s) {
  var answer = "";

  let table = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let stack = [];
  s.split("").forEach((elem) => {
    if (isNaN(elem)) {
      stack.push(elem);
      if (table.includes(stack.join(""))) {
        answer += String(table.findIndex((value) => value === stack.join("")));
        stack = [];
      }
    } else {
      answer += String(elem);
    }
  });

  return parseInt(answer);
}
