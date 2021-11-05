# 알고리즘 (11-05 ~ 11-30)
## BOJ - 자바스크립트로 풀기

### 1. fs 모듈 사용

**var fs = require('fs);**  

→ Node.js의 fs 모듈 이용하여 PS

**var input = fs.readFileSync('/dev/stdin')**

→ 동기적 읽기로 표준 입력 장치의 값을 읽어 input에 저장

**console.log(a+b);** 

→ 출력

---

**입력 (간소화 버전)**

```
const line = require('fs').readFileSync("/dev/stdin", "utf-8");
```

- 구조분해로 변수에 데이터 할당.
- firstLine은 데이터 하나. data는 배열 형태로 받음

```
let [firstLine, ...data] = line.trim().split("\n").map(v => Number(v));
```

- line에서 양 옆 공백 제거
- \n 기준으로 데이터 분할
- map 이용하여 각 원소 String → Number로 형 변환한 새 배열 저장

---

**출력 (간소화 버전)**

- 문자 하나하나 console.log로 찍으면 매우매우 시간 낭비
- 문자배열을 **join을 이용하여 하나의 문자열로 나타내어 console.log로 출력해도 상관 없음**
- 문자 배열 요소를 \n 줄바꿈으로 구분하여 출력
- **console.log(data.join("\n"));**
- 문자 배열 요소를 띄어쓰기로 구분하여 출력
- **console.log(data.join("  "));**

---

### 용례

**입력, 출력1**

```jsx
const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `2 5
1 2
3 4`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

//
const f = input().split(' ').map(Number);
const size = f[0];
let pow = f[1];
let matrix = [];

for(let i=0; i<size; i++){
    matrix.push(input().split(' ').map(Number)); //deep copy
}
```

**입력 출력 2**

```jsx
const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `18`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

// 
let N = parseInt(input());
if(N > 1022){
    console.log(-1);
}
```

**입력 출력 3**

```jsx
const fs = require('fs');
const stdin = (process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `10 7`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let a = [];
let count = 0;
let inVal = input().split(' ').map(Number);
let maxNUm = inVal[0];
let findNum = inVal[1];
```

### 2. readline 모듈 사용 (속도가 느려 비추)

### 1) 한 줄 입력

```jsx
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  console.log(line);

  rl.close();
}).on("close", function() {
  process.exit();
});
```

- 매개변수 line에 할당되는 것이 입력값, 문자열로 할당된다.
- console.log(line);에 의해 입력값이 출력됨

### 2) 여러 줄 입력

```jsx
onst readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  console.log(input);
  process.exit();
});
```
## 입출력 (29)
- [x]  2557
- [x]  1000
- [x]  2558
- [x]  10950
- [x]  10951
- [x]  10952
- [x]  10953
- [x]  11021
- [x]  11022
- [x]  11718
- [x]  11719
- [x]  11720
- [x]  11721
- [x]  2741
- [x]  2742
- [x]  2739
- [x]  1924
- [x]  8393
- [x]  10818
- [x]  2438
- [x]  2439
- [x]  2440
- [x]  2441
- [x]  2442
- [x]  2445
- [x]  2446
- [x]  2522
- [x]  10991
- [x]  10992

## DP(21)

- [x]  1463
- [x]  1699
- [x]  1912
- [ ]  2011
- [ ]  2133
- [ ]  2156
- [ ]  2193
- [ ]  2225
- [ ]  2579
- [x]  9095
- [ ]  9461
- [ ]  9465
- [ ]  10844
- [ ]  11052
- [ ]  11053
- [ ]  11054
- [ ]  11055
- [ ]  11057
- [ ]  11722
- [ ]  11726
- [ ]  11727

## 정렬

- [ ]  버블
- [ ]  선택
- [ ]  삽입
- [ ]  머지
- [ ]  퀵
- [ ]  2743
- [ ]  2750
- [ ]  2751
- [ ]  10989
- [ ]  2108
- [ ]  1427
- [ ]  11650
- [ ]  11651
- [ ]  11655
- [ ]  11656
- [ ]  1181
- [ ]  10814
- [ ]  18870
- [ ]  10825
- [ ]  11652
- [ ]  11004
- [ ]  10828
- [ ]  9012
- [ ]  10799
- [ ]  10845
- [ ]  10866
- [ ]  10808
- [ ]  10809
- [ ]  10824
- [ ]  1406
- [ ]  1158
- [ ]  1168
- [ ]  10430
- [ ]  2609
- [ ]  1934
- [ ]  1850
- [ ]  9613
- [ ]  11005
- [ ]  2745
- [ ]  1373
- [ ]  1212
- [ ]  2098
- [ ]  11576
- [ ]  1978
- [ ]  1929
- [ ]  6588
- [ ]  11653
- [ ]  10872
- [ ]  1676
- [ ]  2004

## 그래프(15)

- [ ]  1260
- [ ]  11724
- [ ]  1707
- [ ]  10451
- [ ]  2331
- [ ]  9466
- [ ]  2667
- [ ]  4963
- [ ]  7576
- [ ]  2178
- [ ]  2146
- [ ]  1991
- [ ]  11725
- [ ]  1167
- [ ]  1967

## 이분탐색/삼분탐색 (6)

- [ ]  1654
- [ ]  2805
- [ ]  2110
- [ ]  10815
- [ ]  10816
- [ ]  11662

## 분할정복(8)

- [ ]  11728
- [ ]  1780
- [ ]  11729
- [ ]  1992
- [ ]  2447
- [ ]  2448
- [ ]  1517
- [ ]  2261

## 그리디(8)

- [ ]  11047
- [ ]  2875
- [ ]  10610
- [ ]  1783
- [ ]  1931
- [ ]  11399
- [ ]  2873
- [ ]  1744

## 완전탐색(27)

- [ ]  1476
- [ ]  1107
- [ ]  1451
- [ ]  9095
- [ ]  10819
- [ ]  10971
- [ ]  1697
- [ ]  1963
- [ ]  9019
- [ ]  1525
- [ ]  2251
- [ ]  2186
- [ ]  3108
- [ ]  5014
- [ ]  1759
- [ ]  2580
- [ ]  1987
- [ ]  6603
- [ ]  1182
- [ ]  2003
- [ ]  1806
- [ ]  1644
- [ ]  1261
- [ ]  1208
- [ ]  7453
- [ ]  2632
- [ ]  2143
