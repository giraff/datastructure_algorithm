function solution(numbers) {
  let sum = 0;
  let idx = 0;
  let check = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  numbers.forEach((num) => (check[num] = 0));

  while (check.includes(1)) {
    idx = check.indexOf(1);
    sum += idx;
    check[idx] = 0;
  }

  return sum;
}
