const array2 = [0,1,2,3];

console.log('대상 배열: ', array2);
let sum = array2.reduce((acc, cur) => acc + cur);

console.log('모든 값 합산:', sum);