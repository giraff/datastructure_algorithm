## 수학 문제 (13문제)
- 풀이 시간 : 22/ 11 / 03 (금) ~ 11월 06일 (일)
- Last Updated : 12 / 11 (일)

```jsx
풀이한 문제 13문제


10430 나머지 : 수학 구현 사칙연산 
2609 최대 공약수와 최소 공배수 : 유클리드 호제법 (재귀)
1934 최소 공배수 (LCM) :: 최대 공약수 이용
1850 최대 공약수++ 최대 공약수 변형한 문제 ← 규칙 찾기!!
9613 GCD 합++ 문제 독해 잘하자. 
11005 진법 변환 2 : 내장 메소드를 알면 쉬운 문제
2745 진법 변환 : 내장 메소드를 알면 쉬운 문제
1373 2진수 8진수++ 2진수를 10진수로 변환할 때 숫자 범위를 생각할 필요가 있다.
1212 8진수 2진수++  8진수를 10진수로 변환할 때 숫자 범위를 생각할 필요가 있다
1978 소수 찾기 : 조건 분기문 
1929 소수 구하기: 에라토스테네스의 체
11653 소인수분해++ 나누어 떨어질 때 까지 계속 나누기 (무한 반복)
10872 팩토리얼 : 재귀
```

---

# 선행 개념

### JS의 수학 내장 메소드
- 절댓값 반환

```js
Math.abs(x)
```

- 주어진 숫자보다 큰 정수 중 가장 작은 수 (올림)

```js
Math.ceil(x)
```

- 주어진 숫자보다 작은 정수 중 가장 큰 수 (내림)

```js
Math.floor(x)
```

- 반올림

```js
Math.round(x)
```

- 제곱근

```js
Math.sqrt(x)
```

### JS의 실수 / 정수 판별
- 모듈러스 :: 1로 나눈 나머지로 보기

```js
num % 1 이 0이면 정수
num % 1이 0이 아니면 실수
```

- Math 내장 메소드 .floor()로 확인


```js
Math.floor(num) === num

// 내린 수가 원래 수와 같다면 정수,
// 아니면 실수
```
- 문자열 메소드로 확인

```js
String.indexOf('.') === -1
// 문자열로 변환 후, 1번째 인덱스의 값이 '.' 소수점이라면 실수
// 아니면 정수

```

### 약수의 갯수가 짝수인지 아닌지 판별
- 약수 갯수가 짝수 : 제곱근으로 나눈 값이 딱 떨어지지 않는다. 제곱근이 실수
- 약수 갯수가 홀수 : 제곱근이 정수 

### JS의 Bit 연산

```js
& : AND
| : OR
^ : XOR
~ : NOT
<< : 왼쪽으로 shift 
>> : 오른쪽으로 shift
```

### JS의 숫자인지 아닌지 판별법
- isNaN() 함수 이용

```js
console.log(isNaN('195')); // true
console.log(isNaN('boo')); // false
```

- '+' 연산자 이용
```js
console.log(+'195'); // 195
console.log(+'boo'); // NaN
```

- parseInt(): 숫자이면 숫자, 아니면 NaN 반환

```js
console.log(parseInt('195')); // 195
console.log(parseInt('boo')); // NaN
```

- Number() : 숫자면 숫자, 아니면 NaN 반환

```js
console.log(Number('195')); // 195
console.log(Number('boo')); // NaN
```

### 최대 공약수 구하는 법 :: **유클리드 호제법**

```jsx
자연수 A와 B의 최대 공약수

1) A를 B로 모듈러 연산
A % B
2) 만약 1)의 결과가 0이라면, 'B'가 최대 공약수
if(A % B === 0) GCD = B
3) 만약 1)의 결과가 0이 아니라면 A 를 B로, B를 A % B의 결과값으로 치환한 뒤 다시 1)을 한다
if(A % B !== 0)
	A = B
	B = A % B
	...다시 1)
```

pseudo code :: recursive

```jsx
function gcd(a, b) {
	if(b === 0) return a;
	else return gcd(b, a % b);
}
```

pseudo code :: iterative

```jsx
function gcd(a, b) {
	while(true) {
		if(a & b === 0) return b;
		a = b;
		b = a % b;
	}
}

```

### 최소 공배수 구하는 법 1. 최대 공약수 이용

```jsx
두 자연수의 공통된 배수 중 가장 작은 자연수 
==> 두 자연수의 곱 / 최대 공약수
```

### 진법 변환하는 방법 1. 내장 메소드 활용

1. 10진수 → N진수
    
    ```jsx
    let decimal = `132891028230`;
    
    let n = decimal.toString(8); // 10진수를 8진수로
    ```
    
2. N진수 → 10진수
    
    ```jsx
    let octal = `123123`;
    
    let dec = parseInt(octal, 8); // 8진수를 10진수로
    ```
    
3. N진수 → M진수
    
    ```jsx
    let octal = `123123`;
    
    let result = parseInt(octal, 8).toString(16); // 8진수를 16진수로
    ```
    

4 2진수를 10진수로 변환할 때 2진수의 길이가 길면 10진수로 변환할 때 매우 큰수가 나올 수 있다.

따라서, 2진수는 3씩 끊으면 000~111 로 0~7까지이므로 3개씩 끊어서 8진수로 변환하면 된다.

같은 의미로 진수는 4씩 끊으면 0000 ~ 1111 (0~15)까지이므로 4개씩 자릿수는 16진수 한 자리다.

### 특정한 수(x)가 소수인지 아닌지 판별 :: **2부터 x-1 까지 모든 자연수에 대해 나누기 연산**

**2부터 x-1까지의 모든 자연수에 대해, 해당 수가 소수인지 아닌지 판별하는 코드**

```jsx
function isPrime(n):
	for(i from 2 to x-1):
		if(n % i === 0) return false; // 소수 X
	return true; // 소수 O
```

이때 모든 약수는 가운데 약수 기준으로 곱셈 연산에 대해 대칭된다.

**따라서 특정 수의 모든 약수를 찾을 때는 가운데 약수(제곱근)까지만 확인하면 된다.**

```jsx
(위 코드와 동일하면서 업그레이드 버전)
function isPrime(n):
	for(i from 2 to Math.floor(Math.sqrt(n)) ):
		if(n % i === 0) return false; // 소수 X
	return true; // 소수 O
```

### 특정한 수(x)가 소수인지 아닌지 판별 :: **더 효율적인 접근**

```jsx
1. 1은 소수가 아니다.
2. 짝수는 소수가 아니다
3. 1...n까지의 수로 n을 나눈 나머지 중 하나라도 나누어 떨어지는 수가 있으면 
소수가 아니다.
4. 위 1,2,3 모두 PASS 이면 소수이다.
```

```jsx
function isPrime(n) {
  if(n <= 1) return false;
  if(n % 2 === 0) return n === 2 ? true : false;
  for(let i = 3; i <= Math.sqrt(n); i += 2) {
    if(n % i === 0) return false;
  }
  return true;
}
```

### 특정 범위 내 모든 소수들을 찾아야 할 때 :: **에라토스테네스의 체**

```jsx
(1은 소수 아님)
1. 2부터 N까지의 모든 자연수를 인덱스로 가지는 배열 (n+1)을 true로 초기화
2. 남는 수 중에서 아직 처리하지 않은 가장 작은 소수 (i)를 찾는다
3. 찾았다면, 그를 제외하고 남은 수 중 i의 배수를 찾아 모두 제거한다 (i는 제외)
4. 2,3을 반복하고 남은 수가 2~N 사이 모든 소수!
```

**왜 n+1인가?** 우리는 인덱스를 찾고자 하는 수로 볼 것이기 때문에 0부터 N을 인덱스 값으로 모두 포함할 수 있어야한다. 따라서 n+1 길이의 배열을 생성한다.

```jsx
// 만약 범위가 1~2,000 까지 주어지고 그 중에 소수를 모두 찾아야 한다면?

let n = 2000;
let Arr = Array.from({length: n+1}, () => true);
// 처음엔 모든 수가 소수인 것으로 설정 (0과 1 제외)

for(i from 2 to Math.floor(Math.sqrt(n)) {
	if(Arr[i] === true) { // i가 소수인 경우
		j = 2;
		while(i * j <= n) {// i을 제외한 i의 배수를 false(소수 아님)으로 설정
			Arr[i*j] = false;
			j++;
		}
	}
}

// 값이 (true)인 것만 빼내서 출력 = 소수 출력
answer = [];
for(i from 2 to n) {
	if(Arr[i]) 
		answer.push(i);
}

console.log(answer.join('\n'));
```

---
10430 나머지 : 수학 구현 사칙연산 

- 풀이
    
    ```jsx
    (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
    
    (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
    
    세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.
    
    /*첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)*/
    5 8 4
    /*첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.*/
    1
    1
    0
    0
    ```
    
    ```jsx
    const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
    
    console.log((A + B) % C);
    console.log(((A%C) + (B%C)) % C);
    console.log((A * B) % C);
    console.log(((A % C) * (B%C)) % C);
    ```
    
---
2609 **최대 공약수와 최소 공배수** :: 유클리드 호제법 (재귀)

- 풀이
    
    ```jsx
    두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.
    
    24 18
    
    6
    72
    ```
    
    ```jsx
    const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);
    
    // 최대공약수
    function gcd(a, b) {
    	if(b === 0) return a;
    	else return gcd(b, a % b);
    }
    
    // 최소공배수
    
    let gcdValue = gcd(A, B);
    console.log(gcdValue);
    console.log(A*B / gcdValue);
    ```
    
---
1934 **최소 공배수 (LCM) :: 최대 공약수 이용**

- 풀이
    
    ```jsx
    두 자연수 A와 B에 대해서, A의 배수이면서 B의 배수인 자연수를 A와 B의 공배수라고 한다. 
    이런 공배수 중에서 가장 작은 수를 최소공배수라고 한다. 
    예를 들어, 6과 15의 공배수는 30, 60, 90등이 있으며, 최소 공배수는 30이다.
    
    두 자연수 A와 B가 주어졌을 때, A와 B의 최소공배수를 구하는 프로그램을 작성하시오.
    
    /* 첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 둘째 줄부터 T개의 줄에 걸쳐서 A와 B가 주어진다. (1 ≤ A, B ≤ 45,000) */
    3
    1 45000
    6 10
    13 17
    /* 첫째 줄부터 T개의 줄에 A와 B의 최소공배수를 입력받은 순서대로 한 줄에 하나씩 출력한다. */
    45000
    30
    221
    ```
    
    ```jsx
    const [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let result = [];
    function gcd(a,b) {
    	if(b === 0) return a;
    	else return gcd(b, a%b);
    }
    input.forEach((item) => {
    	let [a, b] = item.split(' ').map(v => +v);
    	result.push(a * b / gcd(a, b));	
    })
    
    console.log(result.join('\n'));
    ```
    
---
**1850** **최대 공약수** :: 최대 공약수 변형한 문제 ← **규칙 찾기**!!

- 풀이 (답 보고 품)
    
    ```jsx
    모든 자리가 1로만 이루어져있는 두 자연수 A와 B가 주어진다. 이때, A와 B의 최대 공약수를 구하는 프로그램을 작성하시오.
    
    예를 들어, A가 111(3)이고, B가 1111(4)인 경우에 A와 B의 최대공약수는 1이고, A가 111(3)이고, B가 111111(6)인 경우에는 최대공약수가 111이다.
    
    /* 첫째 줄에 두 자연수 A와 B를 이루는 1의 개수가 주어진다. 입력되는 수는 2^63보다 작은 자연수이다.*/
    3 4
    /* 첫째 줄에 A와 B의 최대공약수를 출력한다. 정답은 천만 자리를 넘지 않는다. */
    1
    ```
    
    풀이1)
    
    111 (3) / 1111 (4) ⇒ 1
    
    111(3) / 111111(6) ⇒ 111(3) :: 3과 6의 최대 공약수 3
    
    11111(5) / 1111111111(10) ⇒ 11111(5) :: 5와 10의 최대 공약수 5
    
    11111(5) / 111111111111111(15) ⇒ 11111(5) :: 5와 15의 최대 공약수 5
    
    이렇게 된다면 사실상 A와 B에 최대공약수를 구하고 결과 수만큼 1을 자릿수에 채워 출력해주면 된다.
    
    ```jsx
    let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => BigInt(v));
    function gcd(a, b) {
    	if(b == 0) return a;
    	else return gcd(b, a%b);
    }
    
    let gcdValue = gcd(A, B);
    let result = [];
    for(let i = 0; i < gcdValue; i++) {
        result.push(1);
    }
    console.log(result.join(''))
    ```
    
    ```jsx
    for(let i = 0; i < gcdValue; i++) {
        result += 1 * (10**i)
    }
    ```
    
    이렇게 수식으로 1의 자릿수를 채우는 것 보다
    
    빈 배열에 ‘1’을 추가함으로써 시간 단축을 할 수 있었다.
    
---
**9613 GCD 합 :: 문제 독해 잘하자.** 

```jsx
문제
양의 정수 n개가 주어졌을 때, 가능한 모든 쌍의 GCD의 합을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 t (1 ≤ t ≤ 100)이 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있다. 
각 테스트 케이스는 수의 개수 n (1 < n ≤ 100)가 주어지고, 다음에는 n개의 수가 주어진다. 
입력으로 주어지는 수는 1,000,000을 넘지 않는다.

출력
각 테스트 케이스마다 가능한 모든 쌍의 GCD의 합을 출력한다.

input;
3
**4** 10 20 30 40
**3** 7 5 12
**3** 125 15 25

output: 
70
3
35
```

주어진 수들을 두 개씩 짝지어서 그 두 수의 GCD의 합을 구하여 출력하여야 한다.

```jsx
let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];
function gcd(a, b) {
	if(b == 0) return a;
	else return gcd(b, a%b);
}

input.forEach((str) => {
	let sum = 0;
	let [tc, ...tmp] = str.split(' ');

	for(let i = 0; i < tmp.length - 1; i++) {
		for(let j = i + 1; j < tmp.length; j++) {
			sum += gcd(+tmp[i], +tmp[j])
		}
	}
	result.push(sum);
});

console.log(result.join('\n'));
```

독해가 중요한 문제.

1) 각 줄에 들어오는 값들은 [n의 개수_n1_n2_n3_…nn]이다.

착각하지 말자!

2) input 갯수가 100개 뿐이라서 3중 for문도 가능했다.

---
11005 **진법 변환 2** : 내장 메소드를 알면 쉬운 문제

- 풀이
    
    ```jsx
    10진법 수 N이 주어진다. 이 수를 B진법으로 바꿔 출력하는 프로그램을 작성하시오.
    
    10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.
    
    A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35
    
    입력
    첫째 줄에 N과 B가 주어진다. (2 ≤ B ≤ 36) N은 10억보다 작거나 같은 자연수이다.
    60466175 36
    출력
    첫째 줄에 10진법 수 N을 B진법으로 출력한다.
    ZZZZZ
    ```
    
    ```jsx
    const [N, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);
    
    console.log(N.toString(B).toLocaleUpperCase());
    ```
    
---
2745 **진법 변환** : 내장 메소드를 알면 쉬운 문제

- 풀이
    
    ```jsx
    B진법 수 N이 주어진다. 이 수를 10진법으로 바꿔 출력하는 프로그램을 작성하시오.
    
    10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.
    
    A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35
    
    입력
    첫째 줄에 N과 B가 주어진다. (2 ≤ B ≤ 36)
    
    B진법 수 N을 10진법으로 바꾸면, 항상 10억보다 작거나 같다.
    ZZZZZ 36
    출력
    첫째 줄에 B진법 수 N을 10진법으로 출력한다.
    60466175
    ```
    
    ```jsx
    const [N, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
    
    console.log(parseInt(N, +B));
    ```
    
---
1373 **2진수 8진수** : 2진수를 10진수로 변환할 때 숫자 범위를 생각할 필요가 있다.

- 풀이 (답 보고 품)
    
    ```jsx
    문제
    2진수가 주어졌을 때, 8진수로 변환하는 프로그램을 작성하시오.
    
    입력
    첫째 줄에 2진수가 주어진다. 주어지는 수의 길이는 1,000,000을 넘지 않는다.
    11001100
    출력
    첫째 줄에 주어진 수를 8진수로 변환하여 출력한다.
    314
    ```
    
    ```jsx
    const n = require('fs').readFileSync('/dev/stdin').toString().trim();
    
    console.log(parseInt(n, 2).toString(8));
    ```
    
    문제를 처음 풀 때 위의 방법으로 쉽게 풀릴 줄 알았으나, 문제 조건에서 주어지는 2진수의 길이가 1,000,000을 넘지 않는다고 하였으니(999,999은 가능), 10진수로 변환하였을때 엄청나게 큰 수가 나올 수 있다. 그래서 아래 방식처럼 작게 나누어서 문자열로 저장해야 한다.
    
    세 자리수 2진수는 최대 7까지 나타낼 수 있어서(000~111) 2진수를 세 자리씩 끊어서 10진수로 변환하여 이어 붙이면 8진수가 된다(ex 111000111(2진수) => 707(8진수)).
    
    ```jsx
    let n = require("fs").readFileSync("/dev/stdin").toString().trim();
    let oct = "";
    while (n.length >= 3) {
        oct = parseInt(n.slice(n.length-3), 2).toString(8) + oct;
        n = n.slice(0, n.length-3);
    }
    console.log((n ? parseInt(n, 2).toString(8) : "") + oct);
    ```
    
---
1212 **8진수 2진수 : 8진수를 10진수로 변환할 때 숫자 범위를 생각할 필요가 있다**

- 풀이 (답 보고 품)
    
    ```jsx
    8진수가 주어졌을 때, 2진수로 변환하는 프로그램을 작성하시오.
    
    입력
    첫째 줄에 8진수가 주어진다. 주어지는 수의 길이는 333,334을 넘지 않는다.
    314
    출력
    첫째 줄에 주어진 수를 2진수로 변환하여 출력한다. 수가 0인 경우를 제외하고는 반드시 1로 시작해야 한다.
    11001100
    ```
    
    1. 8진수의 한자리를 2진수의 세자리로 나타낼 수 있기 때문에 한자리씩 끊어서 2진수로 변환하고
    
    변환한 값이 세자리면 그대로 넣고
    
    변환한 값이 세자리보다 적으면 세자리가 될 때 까지 맨 앞에 ‘0’을 채워서
    
    결과값에 추가한다.
    
    1. 맨 마지막에는 0을 3자리가 될때까지 채울 필요가 없으므로 그냥 변환하여 갖다 붙인다.
    
    ```jsx
    let n = require('fs').readFileSync('/dev/stdin').toString().trim();
    
    let binary = '';
    while(n.length > 1) {
    	let trans = parseInt(n.slice(n.length - 1), 8).toString(2);
    	while(trans.length < 3) {
    		trans = '0' + trans;
    	}
    	binary = trans + binary;
    	n = n.slice(0, n.length - 1);
    }
    console.log(parseInt(n, 8).toString(2) + binary);
    ```
    
---
1978 **소수 찾기** :: 조건 분기문 

- 풀이
    
    ```jsx
    주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
    
    입력
    첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.
    4
    1 3 5 7
    출력
    주어진 수들 중 소수의 개수를 출력한다.
    3
    ```
    
    ```jsx
    const [n, array] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let nums = array.split(' ').map(v => +v);
    
    function isPrime(n) {
      if(n <= 1) return false;
      if(n % 2 === 0) return n === 2 ? true : false;
      for(let i = 3; i <= Math.sqrt(n); i += 2) {
        if(n % i === 0) return false;
      }
      return true;
    }
    
    let count = 0;
    nums.forEach((num) => {
      if(isPrime(Number(num))) count++;
    })
                  
    console.log(count);
    ```
    
---
1929 **소수 구하기**:: 에라토스테네스의 체

- 풀이
    
    ```jsx
    M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.
    
    입력
    첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.
    3 16
    출력
    한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.
    3
    5
    7
    11
    13
    ```
    
    ```jsx
    const [n,m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
    
    let start = +n;
    let end = +m;
    
    let check = Array.from({length: end + 1}, () => true);
    
    check[0] = false;
    check[1] = false;
    
    for(let i = 2; i*i <= end; i++) {
      if(check[i]) {
        for(let j = i + i; j <= end ;j += i) {
          check[j] = false;
        }
      }
    }
    
    for(let i = start; i <= end; i++) {
      if(check[i]) {
        console.log(i)
      }
    }
    ```
    
---
11653 **소인수분해 :: 나누어 떨어질 때 까지 계속 나누기 (무한 반복)**

- 풀이
    
    ```jsx
    입력
    첫째 줄에 정수 N (1 ≤ N ≤ 10,000,000)이 주어진다.
    
    출력
    N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.
    
    예제 입력1
    72
    
    예제 출력1
    2
    2
    2
    3
    3
    ```
    
    소인수분해란? 자연수를 소인수들의 곱으로 표현하는 것
    
    ex) 60 = 2 * 2 * 3 * 5
    
    **방법:**
    
    **내가 나누는 수가 소수인지 아닌지는 신경쓰지 않고**
    
    **1은 소수가 아니므로 무시한 채 2부터 시작하여 sqrt(N)까지 1씩 증가시키면서 나누어 떨어지는 경우에 출력하고 N은 몫으로 감소시킨다.**
    
    2로 나누어 떨어질 때까지 계속 나누는 것이며 모두 나누어 떨어지면 그 다음은 1씩 증가시켜 3으로 나누어 떨어질 때 까지 나눈다
    
    (4에서 멈추는 경우는 없다. 이미 2로 나누는 과정에서 나누어 떨어졌을 것이기 때문)
    
    ```jsx
    let target = +require('fs').readFileSync('/dev/stdin').toString().trim();
    
    let num = target
    let result = [];
    
    for(let div = 2; div <= num; div++) {
    	if(target === 1) break; // 1은 소인수분해가 안되기 때문에 의미 없음. 바로 탈출
    	while(target % div === 0) { // div로 나누어 떨어진다면?
    		result.push(div); // 정답에 추가하고
    		target /= div; // 나눈 몫을 target에 대입
    	}
    }
    
    if(result.length > 0) { // 길이가 0이면 출력 안 함 ex 1)
    	console.log(result.join('\n')); // 출력
    }
    ```
    
---
10872 **팩토리얼 :: 재귀**

- 풀이
    
    ```jsx
    문제
    0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
    
    입력
    첫째 줄에 정수 N(0 ≤ N ≤ 12)이 주어진다.
    10
    출력
    첫째 줄에 N!을 출력한다.
    3628800
    ```
    
    팩토리얼이란?
    
    0! = 1
    
    1! = 1
    
    2! = 2 * 1 = 2
    
    3! = 3 * 2 * 1 = 6
    
    4! = 24
    
    5! = 120
    
    6! = 720
    
    7! = 5040
    
    8! = 40320
    
    9! = 362880
    
    10! = 3628800
    
    11! = 39916800
    
    ```jsx
    const n = require('fs').readFileSync('/dev/stdin').toString().trim()
    
    function factorial (n) {
    	if(n === 1 || n === 0) return 1;
    	else return n * factorial(n-1);
    }
    
    console.log(factorial(+n));
    ```
