function solution(arr) {
  let temp = [...arr];
  if (arr.length <= 1) return [-1];
  arr.sort(function (a, b) {
    return a - b;
  });
  temp.splice(temp.indexOf(arr[0]), 1);
  return temp;
}
