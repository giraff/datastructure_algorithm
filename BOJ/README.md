# BOJ에서 JS 사용

## 입출력

### 1. 숫자 입력 받아 출력

```javascript
const line = require("fs").readFileSync("/dev/stdin", "utf-8");

let [...data] = line
  .trim()
  .split("\n")
  .map((v) => Number(v));

const input = data.sort((a, b) => a - b);

console.log(input.join("\n"));
```

### 2. 문자열 입력받아 정렬

```javascript
let [...data] = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .toString()
  .trim()
  .split("\n");
```

### 3. 구조 분해

```javascript
let [first, second, third, forth, ...data] = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split("\n");

console.log(first); // 첫 번째로 입력받은 값

console.log(second); // 두 번째로 입력받은 값

console.log(third); // 세 번째로 입력받은 값

console.log(forth); // 네 번째로 입력받은 값

console.log(data); // 나머지 원소 배열
```

### 4. 배열 원소 출력하기 (forEach) : 한 라인에 한 원소씩 출력

```javascript
let array = [1, 1, 1, 1, 1, 1, 1, 2];

Array.from(new Set(array)).forEach((i) => console.log(i));
// Log:
// 1
// 2
```

### 5. 배열 원소 출력하기 (join)

```javascript
let array = [1, 1, 1, 1, 1, 1, 1, 2];

console.log(array.join(" ")); // 띄어쓰기로 구분해서 출력
// Log : 1 1 1 1 1 1 1 2

console.log(array.join("\n")); //줄바꿈으로 구분해서 출력
// Log:
// 1
// 1
// 1
// 1
// 1
// 1
// 1
// 2
```

## 베열

### 1. 배열에서 중복 원소 제거하기 (Set 이용)

```javascript
let array = [1, 1, 1, 1, 1, 1, 1, 1];

console.log(Array.from(new Set(array))); // Log : [1, 2]
```
