function solution(lottos, win_nums) {
  var answer = []; // 1
  let level = [6, 6, 5, 4, 3, 2, 1]; // 1
  const zero_count = lottos.filter((elem) => elem === 0).length; // 시간 복잡도 O(n)
  const same_nums = win_nums.filter((elem) => lottos.includes(elem)).length; // 시간 복잡도 O(n^2)

  let min = same_nums; // 1
  let max = same_nums + zero_count; // 1

  answer.push(level[max]); // O(1)
  answer.push(level[min]); // O(1)

  return answer;
}

// 시간 복잡도 O(n^2)
// 공간 복잡도 O(n)
