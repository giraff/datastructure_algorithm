/** Array.prototype.reduce()
 *  
 *  쓰임새:
 *  배열의 각 요소에 reducer 함수를 누적 실행하고, 
 *  하나의 결과값만을 반환
 * 
 *  리듀서 함수는 네 개의 인자를 가짐.
 * reducer((acc, cur, idx, src) => {return}[, initialValue])
 * 
 * 리듀서 함수의 반환값은 acc에 할당되고 acc는 순회 중 유지되므로
 * 최종 결과 값은 하나의 값이 됨
 * - 누산기accumulator (acc) : 콜백의 반환값을 누적함. 콜백의 이전 반환값 혹은 콜백의 첫번째 호출이면서 
 * initialValue가 제공된 경우, initialValue 값이 acc
 * - 현재 값 (cur) : 처리할 현재 요소
 * initialValue가 제공되면 배열의 첫 번째 요소
 * initialValue가 제공되지 않으면 배열의 두 번째 요소
 * - 현재 인덱스 (idx) : 현재 처리할 요소의 인덱스 값
 * initialValue가 제공되면 0, 제공되지 않으면 1
 * - 원본 배열 (src) : reduce()를 호출한 배열 
 * - initialValue : 최초 호출에서 첫번째 인수에 제공하는 값. 빈 배열에 초기값 없이 reduce() 호출 시 TypeError 발생
 */


const array1 = [1,2,3,4];
const reducer = (acc, cur) => acc + cur;

console.log('array1:', array1.reduce(reducer)); //1 + 2 + 3 + 4
console.log('array1(initialVal:5):', array1.reduce(reducer, 5)); // 5 + 1 + 2 + 3 + 4


// reduce 작동 방식 (완전한 함수 방식)
let callbackNum = 0;
[0,1,2,3,4].reduce(function(accumulator, currentValue, currentIndex, array) {
    callbackNum++;
    console.log(`${callbackNum}번째 호출: accumulator: ${accumulator}, currentValue: ${currentValue}, currentIndex: ${currentIndex}`);
    return accumulator + currentValue;
});

console.log('콜백 호출 횟수:', callbackNum);


console.log('[5,6,7,8,9] 합산:',
[5,6,7,8,9].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
  }, 10)
);