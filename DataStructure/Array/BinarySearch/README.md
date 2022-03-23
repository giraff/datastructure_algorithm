# Binary Search 이진 탐색

[leetcode 704]

- pivot으로 찾아간다.
- left : 가장 왼쪽 인덱스 [0]
- right : 가장 오른쪽 인덱스 [array.length - 1]

left가 right보다 작은 동안 특정 과정을 반복한다

1. pivot을 설정한다.
   - pivot : L + R / 2 = Math.floor((L + R)/2)
2. 찾을 숫자와 pivot에 위치한 값을 비교한다.
   1. 만약 pivot 보다 숫자가 크다면 left를 pivot 다음 인덱스로 이동시킨다
   2. 만약 pivot 보다 숫자가 작다면 right를 pivot 이전 인덱스로 이동시킨다.
   3. 만약 pivot과 숫자의 크기가 같다면 pivot 자체를 반환한다.
3. 다시 설정된 left와 right를 이용해 Pivot을 재설정한다.
4. 여기서 left와 right의 위치가 바뀐다면 찾는 값이 없다는 의미이므로 -1를 반환한다.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let pivot = 0;
  while (start <= end) {
    pivot = Math.floor((start + end) / 2);
    if (nums[pivot] === target) {
      return pivot;
    } else if (nums[pivot] > target) {
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }
  }
  return -1;
};
```
