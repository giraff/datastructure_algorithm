/**
 * 2021-08-12
 *
 * [Youtube] How to Sort Array | Javascript Tutorial
 * https://youtu.be/RsFBsBep-hA?t=74
 *
 */

const { stringify } = require("querystring");

// 문자열 정렬은 잘 됨
const names = ["Florin", "Liam", "Jai", "Ivan"];

names.sort();

// console.log(names);
// Log : [ 'Florin', 'Ivan', 'Jai', 'Liam' ]

// 숫자 정렬은 적용이 안됨 => 숫자를 문자열로 인식하기 때문 '74' '18' '1' '5' '84' '24' '105'
const numbers = [74, 18, 1, 5, 84, 24, 105];

numbers.sort(compareFunction);

// console.log(numbers);
// Log: [  1, 105, 18, 24,  5,  74, 84 ]

// JS method sort로 숫자 정렬하기
function compareFunction(a, b) {
  //1.  < 0  ... a comes first
  //2.  0 ... nothing will be changed
  //3.  > 0 ... b comes first

  return a - b;
}
// console.log(numbers);

const products = [
  {
    name: "laptop",
    price: 1000,
  },
  {
    name: "desktop",
    price: 1500,
  },
  {
    name: "phone",
    price: 500,
  },
];

products.sort((a, b) => {
  return b.price - a.price;
});

// console.log(products);

let line = "5\nABCD\n154C\nA\nA910\nZ321";
let [first, ...array] = line.trim().split("\n");

array.sort(compare);

function compare(a, b) {
  // 길이가 다르면 짦은 것이 먼저
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    // 길이가 같으면 자리합 작은 것이 먼저
    let sumA = 0,
      sumB = 0;
    for (let elem of a) {
      if (!isNaN(elem)) sumA += parseInt(elem);
    }

    for (let elem of b) {
      if (!isNaN(elem)) sumB += parseInt(elem);
    }

    if (sumA !== sumB) return sumA - sumB;
    else return a > b ? 1 : a < b ? -1 : 0;
  }
}

console.log(array);
// const string = "abc369";

// const strings = "abc369";

// let sum = 0;
// for (let elem of string) {
//   if (!isNaN(elem)) sum += parseInt(elem);
// }

// console.log(test);
// console.log(sum);
