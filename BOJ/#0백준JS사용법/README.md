# BOJ에서 JS 사용법

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
- **console.log(data.join(" "));**

---

### 용례

**입력, 출력1**

```jsx
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2 5
1 2
3 4`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//
const f = input().split(" ").map(Number);
const size = f[0];
let pow = f[1];
let matrix = [];

for (let i = 0; i < size; i++) {
  matrix.push(input().split(" ").map(Number)); //deep copy
}
```

**입력 출력 2**

```jsx
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `18`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

//
let N = parseInt(input());
if (N > 1022) {
  console.log(-1);
}
```

**입력 출력 3**

```jsx
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10 7`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let a = [];
let count = 0;
let inVal = input().split(" ").map(Number);
let maxNUm = inVal[0];
let findNum = inVal[1];
```

### 2. readline 모듈 사용 (속도가 느려 비추)

### 1) 한 줄 입력

```jsx
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(line);

  rl.close();
}).on("close", function () {
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
