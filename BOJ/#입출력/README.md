풀이 기간 : 22/10/07 ~ 22/10/08(토)

```
- 입출력 문제들을 풀 때 10분이상 이 문제를 붙들고 있는 경우, 이건 입출력에서 뭔가 모르는 부분이 있다는 뜻이다.
그러므로 이전 질문들을 무조건 찾아보고 다른 사람이 푼 코드를 반드시 봐야한다.
- 코드 길이를 줄이려고 이상하게 짧은 코드들로 된 것들도 많은데,
그런건 보지말고 랭킹 100위권 안에 드는 사람들 중 인덴트 멀쩡한 코드를 보면 된다.

풀이한 문제
2557, 1000, 2558, 10950, 10951, 10952, 10953, 11021, 11022, 11718, 11719, 11720, 11721, 2741,
2742, 2739, 1924, 8393, 10818, 2438, 2439, 2440, 2441, 2442, 2445, 2522, 2446, 10991, 10992
```

---

2557 Hello World!

- 풀이
    
    **Hello World!를 출력하시오.**
    
    ```jsx
    console.log('Hello World!')
    ```
    

---
1000 **A+B** → 입력값이 한 줄인데 공백(’ ‘) 으로 구분

- 풀이
    
    ```jsx
    input: 
    1 2
    output:
    3
    ```
    
    ```jsx
    const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
    
    const a = input[0];
    const b = input[1];
    
    console.log(a + b);
    ```
    

---
2558 **A+B - 2** → 입력값이 한 줄인데 줄바꿈(’\n’) 으로 구분

- 풀이
    
    ```jsx
    input:
    1
    2
    output:
    3
    ```
    
    ```jsx
    const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(v => +v);
    
    console.log(input[0] + input[1]);
    ```
    

---
10950 **A+B - 3** → 입력값이 여러줄, 출력값도 여러줄 

- 풀이
    
    ```jsx
    5
    1 1
    2 3
    3 4
    9 8
    5 2
    
    2
    5
    7
    17
    7
    ```
    
    해당 코드는 동작 안됨 ❌ ⇒ 입력값 처리할 때 toString() 이후 꼭 .trim() 해주기
    
    ```jsx
    const [first, ...input] = require('fs').readFileSync('/dev/stdin').toString().**trim()**.split('\n');
    
    const result = [];
    
    input.forEach(elem => {
        let [a, b] = elem.split(' ').map(v => +v);
        result.push(a+b);
    })
    
    console.log(result.join('\n'));
    ```
    
    아래 코드는 동작 됨
    
    ```jsx
    const [firstVal, ...data] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    
    const result = [];
    
    for(let i = 0; i < firstVal; i++) {
        let temp = data[i].split(' ');
        let a = parseInt(temp[0]);
        let b = parseInt(temp[1]);
        result.push(a+b);
    }
    
    console.log(result.join('\n'));
    ```
    

---
10951 **A+B - 4** → 입력값 여러 줄, 출력값 여러 줄 (입력 갯수 미입력)

- 풀이
    
    ```jsx
    1 1
    2 3
    3 4
    9 8
    5 2
    
    2
    5
    7
    17
    7
    ```
    
    풀이 1
    
    ```jsx
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    input.forEach(elem => {
        console.log(+elem.split(' ')[0] + +elem.split(' ')[1]);
    })
    ```
    
    풀이 2
    
    ```jsx
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let result = [];
    for(let i = 0; i < input.length; i++) {
        let a = Number(input[i].split(' ')[0]);
        let b = Number(input[i].split(' ')[1]);
        result.push(a + b);
    }
    
    console.log(result.join('\n'))
    ```
    

---
10952 **A+B - 5** → 종료 조건

- 풀이
    
    ```jsx
    /*
    입력은 여러 개의 테스트 케이스로 이루어져 있다.
    
    각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
    
    입력의 마지막에는 0 두 개가 들어온다.
    */
    1 1
    2 3
    3 4
    9 8
    5 2
    0 0
    
    /*
    각 테스트 케이스마다 A+B를 출력한다.
    */
    2
    5
    7
    17
    7
    ```
    
    ```jsx
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let result = [];
    for(let i = 0; i < input.length - 1; i++) {
        result.push(+input[i].split(' ')[0] + +input[i].split(' ')[1]);
    }
    
    console.log(result.join('\n'));
    ```
    
    **다른 풀이 (메모리, 시간 절약)**
    
    result 가 배열이 아닌 ‘’ 빈 문자열로 두고 \n 를 추가만 해도 console.log를 찍을 때 최종 줄바꿈 된채로 나온다
    
    ```jsx
    let fs = require('fs');
    let input = fs.readFileSync('/dev/stdin').toString().split('\n');
    
    let isNotZero = true;
    let i = 0;
    let result = '';
    
    while (isNotZero) {
      if (i !== 0) {
        result += '\n';
      }
      let temp = input[i].split(' ');
      let sum = Number(temp[0]) + Number(temp[1]);
      if (!sum) isNotZero = false;
      else {
        result += sum.toString();
        i++;
      }
    }
    
    console.log(result);
    ```
    

---
10953 **A+B - 6** → 입력값 여러 줄, 입력값마다 (,) 구분자

- 풀이
    
    ```jsx
    5
    1,1
    2,3
    3,4
    9,8
    5,2
    
    2
    5
    7
    17
    7
    ```
    
    ```jsx
    const [first, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let result = [];
    input.forEach((elem, idx) => {
        result.push(+elem.split(',')[0] + +elem.split(',')[1]);
    })
    
    console.log(result.join('\n'));
    ```
    

---
11021 **A+B - 7**

- 풀이
    
    ```jsx
    5
    1 1
    2 3
    3 4
    9 8
    5 2
    
    /*
    각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.
    */
    Case #1: 2
    Case #2: 5
    Case #3: 7
    Case #4: 17
    Case #5: 7
    ```
    
    ```jsx
    const [first,...input]=require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let result = '';
    input.forEach((elem, idx) => {
       result += `Case #${idx+1}: ${+elem.split(' ')[0] + +elem.split(' ')[1]}`;
       if(idx !== input.length - 1) result += '\n';
    })
    
    console.log(result)
    ```
    
    ```jsx
    const [first,...input]=require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let result = [];
    input.forEach((elem, idx) => {
       result.push(`Case #${idx+1}: ${+elem.split(' ')[0] + +elem.split(' ')[1]}`);
    })
    
    console.log(result.join('\n'))
    ```
    

---
11022 **A+B - 8**

- 풀이
    
    ```jsx
    5
    1 1
    2 3
    3 4
    9 8
    5 2
    
    Case #1: 1 + 1 = 2
    Case #2: 2 + 3 = 5
    Case #3: 3 + 4 = 7
    Case #4: 9 + 8 = 17
    Case #5: 5 + 2 = 7
    ```
    
    ```jsx
    const [first, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let result = [];
    input.forEach((elem, idx) => {
        let a = +elem.split(' ')[0];
        let b = +elem.split(' ')[1];
        result.push(`Case #${idx + 1}: ${a} + ${b} = ${a+b}`);
    })
    
    console.log(result.join('\n'))
    ```
    

---
11718 **그대로 출력하기 [구현 + 문자열]**

- 풀이
    
    ```jsx
    /*
    입력이 주어진다. 입력은 최대 100줄로 이루어져 있고, 
    알파벳 소문자, 대문자, 공백, 숫자로만 이루어져 있다. 
    각 줄은 100글자를 넘지 않으며, 빈 줄은 주어지지 않는다. 
    또, 각 줄은 공백으로 시작하지 않고, 공백으로 끝나지 않는다.
    */
    Hello
    Baekjoon
    Online Judge
    
    /*
    입력받은 그대로 출력한다
    */
    Hello
    Baekjoon
    Online Judge
    ```
    
    ```jsx
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let result = [];
    input.forEach(elem => {
        result.push(elem);
    })
    
    console.log(result.join('\n'));
    ```
    

---
11719 **그대로 출력하기 2**

- 풀이
    
    ```jsx
    Hello
    
    Baekjoon     
       Online Judge
    
    Hello
    
    Baekjoon     
       Online Judge
    ```
    
    ```jsx
    console.log(require('fs').readFileSync('/dev/stdin').toString());
    ```
    

---
11720 **숫자의 합**

- 풀이
    
    ```jsx
    /*첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.*/
    1
    1
    
    /*입력으로 주어진 숫자 N개의 합을 출력한다.*/
    1
    
    //2번째 예제
    
    5
    54321
    
    15
    
    // #3
    25
    7000000000000000000000000
    
    7
    ```
    
    ```jsx
    const [firstVal, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let sum = 0;
    for(let a of input) {
        sum += Number(a);
    }
    console.log(sum)
    ```
    
    - reduce 사용 버전 (128ms, 9592KB)
    
    ```jsx
    const [first, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let result = input.split('').map(v => +v).reduce((acc, val) => acc + val, 0);
    
    console.log(result);
    ```
    
1. **열개씩 끊어 출력하기 [구현, 문자열]**
- 풀이
    
    ```jsx
    /*첫째 줄에 단어가 주어진다. 단어는 알파벳 소문자와 대문자로만 이루어져 있으며, 
    길이는 100을 넘지 않는다. 길이가 0인 단어는 주어지지 않는다.*/
    BaekjoonOnlineJudge
    
    /*입력으로 주어진 단어를 열 개씩 끊어서 한 줄에 하나씩 출력한다. 
    단어의 길이가 10의 배수가 아닌 경우에는 마지막 줄에는 10개 미만의 글자만 출력할 수도 있다.*/
    BaekjoonOn
    lineJudge
    ```
    
    1. slice 이용
    
    ```jsx
    const input = require('fs').readFileSync('/dev/stdin').toString().trim();
    
    let result = [];
    for(let i = 0; i <= input.length / 10 ; i++) {
        if(input.length % 10 > 0 && i === input.length / 10) {
            result.push(input.slice(i*10));
        } else {
            result.push(input.slice(i*10, i*10 + 10));
        }
    };
    
    console.log(result.join('\n'))
    ```
    

---
2741 **N 찍기 (N 입력 받고 1~N까지 출력)**

- 풀이
    
    ```jsx
    자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
    
    /*첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.*/
    5
    
    /*첫째 줄부터 N번째 줄 까지 차례대로 출력한다.*/
    1
    2
    3
    4
    5
    ```
    
    배열 이용
    
    ```jsx
    const input = require('fs').readFileSync('/dev/stdin').toString().trim();
    
    result = [];
    
    for(let i = 1; i <= Number(input); i++) {
        result.push(i);
    }
    
    console.log(result.join('\n'))
    ```
    
    Array.from 이용
    
    ```jsx
    const input = +require('fs').readFileSync('/dev/stdin').toString().trim();
    
    let arr = Array.from({length: +input}, (_, i) => i+1);
    
    console.log(arr.join('\n'))
    ```
    
    리터럴 문자열 + 반복문 이용
    
    ```jsx
    const data = parseInt(require("fs").readFileSync("/dev/stdin", "utf8").toString().trim());
    let str = ""
    for (let i = 0; i < data; i++) {
      str += `${i + 1}\n`
    }
    console.log(str);
    ```
    

---
2742 기찍 N (N을 입력받고 N~1까지 출력)

- 풀이
    
    ```jsx
    5
    
    5
    4
    3
    2
    1
    ```
    
    ```jsx
    const input = +require('fs').readFileSync('/dev/stdin').toString().trim();
    
    let str = '';
    
    for(let i = input ; i > 0 ; i--) {
        str += `${i}\n`
    }
    
    console.log(str)
    ```
    

---
2739 **구구단 : 출력**

- 풀이
    
    ```jsx
    /* 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다. */
    2
    
    /* 출력형식과 같게 N*1부터 N*9까지 출력한다. */
    2 * 1 = 2
    2 * 2 = 4
    2 * 3 = 6
    2 * 4 = 8
    2 * 5 = 10
    2 * 6 = 12
    2 * 7 = 14
    2 * 8 = 16
    2 * 9 = 18
    ```
    
    ```jsx
    const input = +require('fs').readFileSync('/dev/stdin').toString().trim();
    
    let str = '';
    for(let i = 1; i < 10; i++) {
        str+= `${input} * ${i} = ${input * i}\n`;
    }
    
    console.log(str)
    ```
    

---
1924 : **2007년**

- 풀이
    
    ```jsx
    오늘은 2007년 1월 1일 월요일이다. 그렇다면 2007년 x월 y일은 무슨 요일일까? 이를 알아내는 프로그램을 작성하시오.
    
    /*첫째 줄에 빈 칸을 사이에 두고 x(1 ≤ x ≤ 12)와 y(1 ≤ y ≤ 31)이 주어진다. 
    참고로 2007년에는 1, 3, 5, 7, 8, 10, 12월은 31일까지, 4, 6, 9, 11월은 30일까지, 2월은 28일까지 있다.*/
    1 1
    
    /* 첫째 줄에 x월 y일이 무슨 요일인지에 따라 SUN, MON, TUE, WED, THU, FRI, SAT중 하나를 출력한다. */
    MON
    ```
    
    1/1 ⇒ MON
    
    1/8 ⇒ MON
    
    1/15 ⇒ MON
    
    1/22 ⇒ MON
    
    1/29 ⇒ MON
    
    2/ 5 ⇒ 1/36 … 뒷자리 7로 나눌 때 나머지 1이면 MON
    
    나머지 2이면 TUE
    
    나머지 3이면 WED
    
    나머지 4이면 THU
    
    나머지 5이면 FRI
    
    나머지 6이면 SAT
    
    나머지 0 이면 SUN
    
    ```jsx
    const [x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);
    
    let days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    let sum = 0;
    for(let i = 0; i < x; i++) {
        sum += days[i];
    }
    
    sum += y;
    
    console.log(week[sum % 7]);
    ```
    

---
8393 **합 (N 입력받고 1~N까지 합 출력) [수학, 구현] ** 재귀 함수 사용 코드 있음**

- 풀이
    
    ```jsx
    n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
    
    /*첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.*/
    3
    
    /*1부터 n까지 합을 출력한다.*/
    6
    ```
    
    **Array.from과 reduce 활용**
    
    ```jsx
    const n = +require('fs').readFileSync('/dev/stdin').toString().trim();
    
    console.log(Array.from({length: n}, (_, i) => i+1).reduce((acc, val) => acc + val, 0));
    ```
    
    **재귀함수 활용**
    
    수식
    
    ```jsx
    sum + 1 (if n === 1) END
    sum + n. else
    ```
    
    ```jsx
    const n = +require('fs').readFileSync('/dev/stdin').toString().trim();
    
    function re(n, sum) {
    	if(n === 1) {
    		console.log(sum + 1); // 출력하고 끝
    	} else {
    		sum += n;
    		n--;
    		re(n, sum); // 재귀 호출
    	}
    }
    
    // 초기 조건 sum = 0 설정
    re(n, 0);
    ```
    

---
10818 **최소, 최대**

- 풀이
    
    ```jsx
    /*첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 
    둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 
    모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.*/
    5
    20 10 35 30 7
    
    /*첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.*/
    7 35
    ```
    
    ```jsx
    const [first,input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let arr = input.split(' ').map(v => +v);
    
    let min = arr[0], max = arr[0];
    
    arr.forEach((elem) => {
        if(min > elem) min = elem;
        if(max < elem) max = elem;
    });
    
    console.log(`${min} ${max}`);
    ```
    
    let max = Number.MIN_SAFE_INTEGER,
    min = Number.MAX_SAFE_INTEGER;
    

---
2438 **별 찍기 - 1**

- 풀이
    
    ```jsx
    5
    
    *
    **
    ***
    ****
    *****
    ```
    
    ```jsx
    const n = +require('fs').readFileSync('/dev/stdin').toString().trim();
    
    let result = '';
    for(let i = 0; i < n; i++) {
        let str = '';
        for(let j = 0; j < i+1; j++) {
            str += '*';
        }
        result += str + '\n';
    }
    
    console.log(result);
    ```
    

---
2439 

- 풀이
    
    ```jsx
    5
    
        *
       **
      ***
     ****
    *****
    ```
    
    ```jsx
    const t = +require('fs').readFileSync('/dev/stdin').toString().trim();
    
    let str = '';
    for (let i = 0; i < t; i++) {
      for (let j = t - 1; j > i; j--) {
        str += " ";
      }
      for (let k = i; k >= 0; k--) {
        str += "*";
      }
      str += '\n'
    }
    
    console.log(str);
    ```
    

---
2440 별 찍기 - 3

- 풀이
    
    ```jsx
    *****
    ****
    ***
    **
    *
    
    (* 별 뒤에 공백이 있어서는 안된다)
    ```
    
    ```jsx
    const t = +require('fs').readFileSync('/dev/stdin').toString().trim();
    
    let str = '';
    for(let i = 0; i < t; i++) {
        for(let j = 0; j < t - i; j++) {
            str += '*';
        }
        str += '\n';
    }
    
    console.log(str);
    ```
    

---
2441 별찍기 - 4

- 풀이
    
    ```jsx
    *****
     ****
      ***
       **
        *
    ```
    
    ```jsx
    const input = +require('fs').readFileSync('/dev/stdin').toString().trim();
    
    let str = '';
    for(let i = 0; i < input; i++) {
        for(let j = 0; j < i; j++) {
            str += ' ';
        }
        for(let k = 0; k < input - i; k++) {
            str += '*';
        }
        str += '\n';
    }
    
    console.log(str);
    ```
    

---
2442 별찍기 - 5

- 풀이
    
    ```jsx
        *
       ***
      *****
     *******
    *********
    ```
    
    ```jsx
    const input = +require('fs').readFileSync("/dev/stdin").toString().trim();
    
    let str ='';
    let num = 1;
    for(let i = 0; i < input; i++) {
        for(let j = 0; j < input - i - 1; j++) {
            str += ' ';
        }
        for(let k = 0; k < **2 * i + 1**; k++) {
            str += '*'
        } 
        str += '\n';
    }
    
    console.log(str);
    ```
    

---

2445 별찍기 - 8

- 풀이
    
    ```jsx
    5
    예제 출력 1 
    *        *
    **      **
    ***    ***
    ****  ****
    **********
    ****  ****
    ***    ***
    **      **
    *        *
    ```
    
    ```jsx
    
    ```
    

---
2522 별찍기 - 12

- 풀이
    
    ```jsx
      *
     **
    ***
     **
      *
    ```
    
    ```jsx
    
    ```
    

---
2446 별찍기 - 9

- 풀이
    
    ```jsx
    5
    
    *********
     *******
      *****
       ***
        *
       ***
      *****
     *******
    *********
    ```
    
    ```jsx
    
    ```
    

---
10991 별찍기 - 16

- 풀이
    
    ```jsx
    1
    
    *
    
    2
    
     *
    * *
    
    3
    
      *
     * *
    * * *
    ```
    
    ```jsx
    
    ```
    

---
10992 별찍기 - 17

- 풀이
