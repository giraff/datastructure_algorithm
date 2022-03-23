class BinarySearchTest {
  constructor() {
    this.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  binarySearch(value) {
    let start = 0; // 배열 맨 왼쪽 인덱스
    let end = this.arr.length - 1; // 배열 맨 오른쪽 인덱스

    while (start <= end) {
      // 1. pivot 설정
      let pivot = Math.floor((start + end) / 2);
      // 2. 찾을 값과 pivot에 위치한 값을 비교한다.
      if (this.arr[pivot] === value) {
        return pivot;
      } else if (this.arr[pivot] > value) {
        end = pivot - 1;
      } else {
        start = pivot + 1;
      }
    }
    return -1;
  }
}

let testBS = new BinarySearchTest();
console.log(testBS.binarySearch(1)); // 0
console.log(testBS.binarySearch(2)); // 1
console.log(testBS.binarySearch(3)); // 2
console.log(testBS.binarySearch(4)); // 3
console.log(testBS.binarySearch(5)); // 4
console.log(testBS.binarySearch(6)); // 5
console.log(testBS.binarySearch(7)); // 6
console.log(testBS.binarySearch(8)); // 7
console.log(testBS.binarySearch(9)); // 8
console.log(testBS.binarySearch(10)); // 9
console.log(testBS.binarySearch(11)); // -1
