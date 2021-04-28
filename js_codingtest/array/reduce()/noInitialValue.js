// 
console.log('==noInitialVal==');

const maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
const maxCallback2 = (max, cur) => Math.max(max, cur);

console.log([{x: 22}, {x: 44}].reduce(maxCallback));
console.log([{x:22}].reduce(maxCallback)); // {x:22}, 초기값이 없으므로 acc 값(배열의 첫번째 요소) 반환
console.log([].reduce(maxCallback)); // TypeError

// map/reduce로 개선
[{x:22}, {x:42}].map( e1 => e1.x)
                .reduce(maxCallback2, -Infinity);
// 위 코드는 비었거나 더 큰 배열에서도 동작
