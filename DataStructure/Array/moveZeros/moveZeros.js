/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let onlyNums = 0;
  let copyPosition = 0;

  for (onlyNums = 0; onlyNums < nums.length; onlyNums++) {
    if (nums[onlyNums] !== 0) {
      nums[copyPosition] = nums[onlyNums];
      copyPosition++;
    }
  }

  for (let idx = copyPosition; idx < nums.length; idx++) {
    nums[idx] = 0;
  }
};
