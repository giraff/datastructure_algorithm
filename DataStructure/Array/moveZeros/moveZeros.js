/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let onlyNums = 0; // 숫자만 찾아가는 인덱스
  let copyPosition = 0; // 숫자를 카피할 자리를 가리키는 인덱스

  // 숫자들을 순차적으로 배열 앞 쪽으로 복붙하기
  for (onlyNums = 0; onlyNums < nums.length; onlyNums++) {
    if (nums[onlyNums] !== 0) {
      nums[copyPosition] = nums[onlyNums];
      copyPosition++;
    }
  }

  // 나머지 배열들을 0으로 채우기
  for (let idx = copyPosition; idx < nums.length; idx++) {
    nums[idx] = 0;
  }
};
