# Sorting (50 problems)

```
- 목차

2743 단어 길이 재기
2750 수 정렬하기 (1 초 / 128 MB) [N(1 ≤ N ≤ 1,000)]
2751 수 정렬하기 2 (2초 / 256MB) [N(1 ≤ N ≤ 1,000,000)]
❌ 10989 수 정렬하기 3 (5초 / 8MB) [1 ≤ N ≤ 10,000,000] ← node.js로는 제한 조건 내에 풀 수 없는 문제
2108 통계학 (수학, 구현,정렬) (2초 / 256MB) [N은 홀수이며 1≤N≤500,000]
1427 소트인사이드 (문자열 정렬) 2초 / 128MB // Easy : 2분 내 풀이
11650 좌표 정렬하기 : sort 라이브러리 활용
11651 좌표 정렬하기 2 : sort 라이브러리 활용
11655 ROT13 : String.fromCharCode(ASCII), ‘’.charCodeAt(index) [아스키 코드 조작]  
11656 접미사 배열 : 배열 메소드 이용
1181 단어 정렬 : sort 라이브러리
10814 나이순 정렬 : sort 라이브러리
18870 **좌표 압축**
10825 **국영수**
11652 카드
11004 K번째 수
10828 스택
9012 괄호
10799 쇠막대기
10845 큐 
10866 덱
10808 알파벳 개수
10809 알파벳 찾기
10824 네 수
1406 에디터
1158 요세푸스 문제
1168 요세푸스 문제2
10430 나머지
2609 최대 공약수와 최소 공배수
1934 최소 공배수
1850 최대 공약수
9613 GCD 합
11005 진법 변환 2
2745 진법 변환
1373 2진수 8진수
1212 8진수 2진수
2098 외판원 순회
11576 Base Conversion 
1978 소수 찾기
1929 소수 구하기
6588 골드바흐의 추측
11653 소인수 분해
10872 팩토리얼
1676 팩토리얼 0의 개수
2004 조합 0의 개수
```

**버블 정렬 Bubble Sort**

i번째 요소와 i+1 번째 요소를 비교해서 i번째 요소가 더 크면 자리 바꿈 (SWAP)

Stable Sort

가장 비효율적인 정렬 알고리즘. 

- Pseudo Code
    
    ```jsx
    BubbleSort(A)
    	for i from 0 to A.length - 1
    		for j from 0 to A.length - i
    			if A[j] > A[j+1]
    				swap A[j] with A[j+1]
    ```
    

**선택 정렬 Selection Sort**

: 처리되지 않은 데이터들 중 ‘가장 작은 값을 선택’해서 맨 앞으로 보내는 알고리즘

: Unstable 정렬

- Pseudo Code
    
    ```jsx
    SelectionSort(A):
    	for i from 0 to A.length - 1:
    		minIdx = A[i]
    		for j from i+1 to A.length:
    			if A[minIdx] > A[j]:
    					minIdx = j
    		swap A[minIdx] with A[i]
    ```
    

**삽입 정렬 Insertion Sort**

: 가장 첫번째 데이터는 정렬되었다고 가정하고, 처리되지 않은 데이터들을 적절한 위치에 삽입

: Stable 정렬

- Pseudo Code
    
    ```jsx
    InsertionSort(A):
    	for i from 1 to A.length:
    		for j from i to 1
    			if A[j] < A[j-1]
    				swap A[j] with A[j-1]
    			else break;
    ```
    

**병합 정렬 Merge Sort**

- 존 폰 노이만이 고안한 알고리즘
- Divide and Conquert (분할 정복 알고리즘) 이자, 완전한 O(nlogn) 알고리즘의 진수
- 퀵 정렬보다 빠르다 할 순 없지만 일정한 실행속도를 가지고 안정 정렬이라 실무에서 주로 쓰임
- 복잡한 문제가 간단한 문제가 될 때까지 문제를 동일한 유형의 하위 유형을 ‘분할’한 뒤, 쪼갤 수 없는 가장 작은 단위의 부분 문제가 되면 문제를 해결하며 ‘정복’하고 그러한 결과를 원래 문제에 대한 결과로 ‘조합’한다.
- Pseudo Code
    
    ```jsx
    function F(x):
    	if F(x)가 간단 then:
    		return F(x) 의 계산값
    	else 
    		x를 x1, x2로 분할
    		F(x1) 호출
    		F(x2) 호출
    		return F(x1), F(x2)로 F(x)를 구한 값
    ```
    
- 실제 구현 코드 (whie문과 재귀)
    
    ```jsx
    const line = require('fs').readFileSync("/dev/stdin", "utf-8");
    
    let [firstLine, ...data] = line.trim().split("\n").map(v => Number(v));
    
    const sorted = [];
    
    function merge(a, left, middle, right) {
      i = left;
      j = middle + 1;
      k = left;
    	while(i <= middle && j <= right) {
    		if(a[i] <= a[j]) {
    			sorted[k++] = a[i++];
            }
            else {
                sorted[k++] = a[j++];
            }
        }
    
        if(i > middle) {
    		for(t = j; t <= right; t++) {
    			sorted[k++] = a[t];
    		}
    	}
    	else {
    		for(t = i; t <= middle ; t++) {
    			sorted[k++] = a[t];
    		}
    	}
    	for(t = left; t <= right; t++) {
    		a[t] = sorted[t];
    	}
    }
    
    function mergeSort(a, left, right){
    	if(left < right) {
            let middle = Math.floor((left + right) / 2);
            mergeSort(a, left, middle); 
            mergeSort(a, middle + 1, right);
            merge(a, left, middle, right);
    	}
    }
    
    mergeSort(data, 0, data.length - 1);
    ```
    

**퀵 정렬 Quick Sort**

- 토니 호어가 1959년 고안한 알고리즘
- 피벗 (Pivot) 기준으로 좌우를 다양한 비율로 분할 하는게 특징
- Divide and Conquer 알고리즘. Pivot보다 작으면 왼쪽, 크면 오른쪽에 배치되도록 쪼개나감
- Pseudo Code
    
    ```jsx
    QuickSort(A, start, end):
    	if start < end then
    		pivot = partition(A, start, end)
    		QuickSort(A, start, pivot - 1)
    		QuickSort(A, pivot + 1, end)
    ```
    
    파티션 나누는 함수
    
    ```jsx
    partition(A, start, end)
    	pivot = A[end] // 피벗을 마지막 데이터로 설정
    	left = start
    	for right from start to end
    		if A[right] < pivot then 
    			swap A[right] with A[left] 
    		  // pivot은 맨 오른쪽 값, 두 포인터가 이동하면서 right 포인터 값이 pivot보다 작다면 left와 right 스왑
    			left += 1
    	swap A[left] with A[end]
    	return left; 
    ```
    
- 실제 구현
    
    ```jsx
    QuickSort(A)
    	if(A.length <= 1)
    		return A
    	pivot = A[0]
    	tail = A.slice(1, A.length)
    	left_sides = tail.filter(x => x <= pivot)
    	right_sides = tail.filter(x => x > pivot)
    	return [...QuickSort(left_sides), pivot, ...QuickSort(right_sides)]
    ```
    

**<Javascript sort 라이브러리 규칙>**

```jsx
- compareFunction (a, b) 이 -1 을 반환하는 경우, a를 b보다 작은 색인으로 정렬한다. 즉 a가 먼저 옴
- compareFunction (a, b)이 0을 반환하는 경우 a === b로 본다.
- compareFunction (a, b) 이 1을 반환하는 경우, a를 b보다 큰 색인으로 정렬한다. 즉 b가 먼저 옴
```

**<아스키코드 ↔ 문자 변환>**

문자 → 아스키 코드

```jsx
'string'.charCodeAt(index);

// 해당 string에서 index에 해당하는 문자를 아스키 코드로 변환
```

아스키 코드 → 문자

```jsx
String.fromCharCode([아스키 코드값]);

// String 객체의 메소드 사용하여 아스키 코드를 문자로 변환
```

**<출력 형식이 잘못되었습니다. 에러 뜰 때>**

11655

input 받을 때 trim() 쓰지 않았는지? 체크 ⇒ 단어 앞 뒤 공백이 중요할 때가 있음

---

2743 **단어 길이 재기**

- 풀이
    
    ```jsx
    # 알파벳으로만 이루어진 단어를 입력받아, 그 길이를 출력하는 프로그램을 작성하시오.
    // 첫째 줄에 영어 소문자와 대문자로만 이루어진 단어가 주어진다. 단어의 길이는 최대 100이다.
    pulljima
    // 첫째 줄에 입력으로 주어진 단어의 길이를 출력한다.
    8
    ```
    
    ```jsx
    // 9336KB / 124ms
    
    const input = require('fs').readFileSync('/dev/stdin').toString().trim();
    
    console.log(input.split('').length);
    ```
    
---
2750 **수 정렬하기** (1 초 / 128 MB) [N(1 ≤ N ≤ 1,000)]

- 풀이
    
    ```jsx
    # N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
    
    // 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 
    // 둘째 줄부터 N개의 줄에는 수 주어진다. 이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 
    // 수는 중복되지 않는다.
    5
    5
    2
    3
    4
    1
    //첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
    1
    2
    3
    4
    5
    ```
    
    **Sort 함수**
    
    ```jsx
    const [first, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    console.log(input.map(v => +v).sort((a, b) => a - b).join('\n'));
    ```
    
    **버블 정렬 :** N번째 위치와 N+1 번째 위치를 비교하여 N 번째 위치 값이 더 클 경우, N번째와 N+1 번째 값 자리 교환
    - in-place (배열 하나에서 정렬)
    - stable : 서로 값이 같으면 교환 연산 하지 않고 넘어가기 때문에 안정적인 정렬
    
    ```jsx
    const [first, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let length = Number(first);
    let arr = input.map(v => +v);
    
    // 버블 정렬
    for(let i = 0; i < length - 1; i++) {
        for(let j = 0; j < length - i; j++) {
            if(arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    
    console.log(arr.join('\n'));
    ```
    
    **선택 정렬: in-place / Not stable**
    
    ```jsx
    const [first, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let length = Number(first);
    let arr = input.map(v => +v);
    
    // 선택 정렬
    for(i = 0; i < length; i++) {
        let smallest = arr[i];
        let smallIdx = i;
        for(j = i; j < length; j++) {
            if(smallest > arr[j]) {
                smallest = arr[j];
                smallIdx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[smallIdx];
        arr[smallIdx] = temp;
    }
    
    console.log(arr.join('\n'))
    ```
    
    **삽입 정렬 in-place / stable**
    
    ```jsx
    const [first, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let length = Number(first);
    let arr = input.map(v => +v);
    
    // 삽입 정렬
    let i, j, key;
    
    for(i = 1; i < length; i++) {
        key = arr[i];
        for(j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = key;
    }
    
    console.log(arr.join('\n'));
    ```
    
 
---
2751 **수 정렬하기 2** (2초 / 256MB) [N(1 ≤ N ≤ 1,000,000)]

- 풀이
    
    ```jsx
    N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
    // 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.
    5
    5
    4
    3
    2
    1
    
    // 
    1
    2
    3
    4
    5
    ```
    
    **Sort 라이브러리**
    
    ```jsx
    const line = require('fs').readFileSync("/dev/stdin", "utf-8");
    
    let [firstLine, ...data] = line.trim().split("\n").map(v => Number(v));
    
    const input = data.sort((a, b) => a - b);
    
    console.log(input.join("\n"));
    ```
    
    **Merge** 
    
    ```jsx
    let [firstLine, ...data] = line.trim().split("\n").map(v => Number(v));
    
    const sorted = [];
    
    function merge(a, left, middle, right) {
        let i,j,k,t;
        i = left;
        j = middle + 1;
        k = left;
    	while(i <= middle && j <= right) {
    		if(a[i] <= a[j]) {
    			sorted[k++] = a[i++];
            }
            else {
                sorted[k++] = a[j++];
            }
        }
    
        if(i > middle) {
    		for(t = j; t <= right; t++) {
    			sorted[k++] = a[t];
    		}
    	}
    	else {
    		for(t = i; t <= middle ; t++) {
    			sorted[k++] = a[t];
    		}
    	}
    	for(t = left; t <= right; t++) {
    		a[t] = sorted[t];
    	}
    }
    
    function mergeSort(a, left, right){
    	if(left < right) {
            let middle = Math.floor((left + right) / 2);
            mergeSort(a, left, middle); 
            mergeSort(a, middle + 1, right);
            merge(a, left, middle, right);
    	}
    }
    
    mergeSort(data, 0, data.length - 1);
    
    // 출력
    
    console.log(data.join("\n"));
    ```
    
 
---
❌ 10989 **수 정렬하기 3** (5초 / 8MB) [1 ≤ N ≤ 10,000,000] ← node.js로는 제한 조건 내에 풀 수 없는 문제
 
---
2108 **통계학** (수학, 구현,정렬) (2초 / 256MB) [N은 홀수이며 1≤N≤500,000]

최빈값 ⇒ Map 자료형 사용 / 평균 ⇒ Math.round

- 풀이
    
    ```jsx
    수를 처리하는 것은 통계학에서 상당히 중요한 일이다. 통계학에서 N개의 수를 대표하는 기본 통계값에는 다음과 같은 것들이 있다. 단, N은 홀수라고 가정하자.
    
    산술평균 : N개의 수들의 합을 N으로 나눈 값
    중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
    최빈값 : N개의 수들 중 가장 많이 나타나는 값
    범위 : N개의 수들 중 최댓값과 최솟값의 차이
    N개의 수가 주어졌을 때, 네 가지 기본 통계값을 구하는 프로그램을 작성하시오.
    
    /* 첫째 줄에 수의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 단, N은 홀수이다. 
    그 다음 N개의 줄에는 정수들이 주어진다. 입력되는 정수의 절댓값은 4,000을 넘지 않는다. */
    5
    1
    3
    8
    -2
    2
    /* 첫째 줄에는 산술평균을 출력한다. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.
    
    둘째 줄에는 중앙값을 출력한다.
    
    셋째 줄에는 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.
    
    넷째 줄에는 범위를 출력한다. */
    2
    2
    1
    10
    ```
    
    ```jsx
    예시 2)
    1
    4000
    //
    4000
    4000
    4000
    0
    ```
    
    풀이
    
    ```jsx
    const [N, ...nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    // 오름차순 정렬
    let intNums = nums.sort((a, b) => a - b).map((v) => +v);
    
    // 평균, 중앙값, 범위
    let avg = Math.round(intNums.reduce((acc,val) => acc+val, 0) / N);
    let middle = intNums[Math.floor(N / 2)];
    let range = intNums[N - 1] - intNums[0];
    
    // 최빈값 구하기
    let mode = 0;
    let maps = new Map();
    intNums.forEach((val) => {
        if(maps.get(val)) {
            maps.set(val, maps.get(val) + 1);
        } else {
            maps.set(val, 1);
        }
    })
    let sortedMap = Array.from(maps).sort((a, b) => b[0] - a[0]).sort((a, b) => a[1] - b[1]);
    let size = maps.size;
    if(size > 1 && sortedMap[size - 1][1] === sortedMap[size - 2][1]) {
      mode = sortedMap[size - 2][0];  
    } else {
      mode = sortedMap[size - 1][0];
    }
    
    console.log(parseInt(avg));
    console.log(parseInt(middle));
    console.log(parseInt(mode));
    console.log(parseInt(range));
    ```
    
 
---
1427 **소트인사이드 (문자열 정렬) 2초 / 128MB //** Easy : 2분 내 풀이

- 풀이
    
    ```jsx
    // 배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.
    
    //첫째 줄에 정렬하려고 하는 수 N이 주어진다. N은 1,000,000,000보다 작거나 같은 자연수이다.
    2143
    //첫째 줄에 자리수를 내림차순으로 정렬한 수를 출력한다.
    4321
    
    예시1)
    999998999
    //
    999999998
    예시 2)
    61423
    //
    64321
    ```
    
    ```jsx
    let N = require('fs').readFileSync('/dev/stdin').toString().trim();
    
    console.log(N.split('').sort((a, b) => {
        return Number(b) - Number(a)
    }).join(''))
    ```
    
 
---
11650 **좌표** **정렬하기** : sort 라이브러리 활용

- 풀이
    
    ```jsx
    2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, 
    x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.
    
    /*
    첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. 
    (-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.
    */
    5
    3 4
    1 1
    1 -1
    2 2
    3 3
    /*첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.*/
    1 -1
    1 1
    2 2
    3 3
    3 4
    ```
    
    ```jsx
    const [n, ...coords] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
    
    console.log(
        coords
            .map(v => ({x: parseInt(v.split(" ")[0]), y: parseInt(v.split(" ")[1])}))
            .sort((a, b) => {
                if (a.x > b.x) return 1;
                else if (a.x < b.x) return -1;
                else {
                    if (a.y > b.y) return 1;
                    else return -1;
                }
            })
            .map(v => String(v.x) + " " + String(v.y)).join("\n")
    ```
    
 
---
11651 **좌표 정렬하기 2** : sort 라이브러리 활용

- 풀이
    
    ```jsx
    /* 2차원 평면 위의 점 N개가 주어진다. 좌표를 y좌표가 증가하는 순으로, 
    y좌표가 같으면 x좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오 */
    
    /* 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 
    둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. 
    (-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다. */
    
    5
    0 4
    1 2
    1 -1
    2 2
    3 3
    //
    1 -1
    1 2
    2 2
    3 3
    0 4
    ```
    
    ```jsx
    let [n, ...matrix] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    console.log(
        matrix.map((val) => val.trim().split(' ')).sort((a, b) => {
            if(+a[1] !== +b[1]) 
                return +a[1] - +b[1];
            else 
                return +a[0] - +b[0];
        }).map((val) => val.join(' ')).join('\n')
    ```
    
 
---
**11655** **ROT13 : String.fromCharCode(ASCII), ‘’.charCodeAt(index) [아스키 코드 조작]**  

- 풀이 (30분 소요)
    
    ```jsx
    ROT13은 카이사르 암호의 일종으로 영어 알파벳을 13글자씩 밀어서 만든다.
    
    예를 들어, "Baekjoon Online Judge"를 ROT13으로 암호화하면 
    "Onrxwbba Bayvar Whqtr"가 된다. 
    ROT13으로 암호화한 내용을 원래 내용으로 바꾸려면 암호화한 문자열을 다시 ROT13하면 된다. 
    앞에서 암호화한 문자열 "Onrxwbba Bayvar Whqtr"에 
    다시 ROT13을 적용하면 "Baekjoon Online Judge"가 된다.
    
    ROT13은 알파벳 대문자와 소문자에만 적용할 수 있다. 
    알파벳이 아닌 글자는 원래 글자 그대로 남아 있어야 한다. 
    예를 들어, "One is 1"을 ROT13으로 암호화하면 "Bar vf 1"이 된다.
    
    문자열이 주어졌을 때, "ROT13"으로 암호화한 다음 출력하는 프로그램을 작성하시오.
    /*
    첫째 줄에 알파벳 대문자, 소문자, 공백, 숫자로만 이루어진 문자열 S가 주어진다. S의 길이는 100을 넘지 않는다.
    */
    Baekjoon Online Judge
    /*
    첫째 줄에 S를 ROT13으로 암호화한 내용을 출력한다.
    */
    Onrxwbba Bayvar Whqtr
    
    예시 2)
    input: One is 1
    output: Bar vf 1
    ```
    
    ```jsx
    const str = require('fs').readFileSync('/dev/stdin').toString();
    
    let lowerRegExp = /^[a-z]$/
    let upperRegExp = /^[A-Z]$/
    
    let result = str.split('').map(v => {
        if(lowerRegExp.test(v)) { # 소문자일 때 분기
            if(v.charCodeAt(0) >= 110) {
               return String.fromCharCode(v.charCodeAt(0) - 13)
            } else return String.fromCharCode(v.charCodeAt(0) + 13)
        } else if(upperRegExp.test(v)) { # 대문자일 때 분기
            if(v.charCodeAt(0) >= 78) {
               return String.fromCharCode(v.charCodeAt(0) - 13)
            } else return String.fromCharCode(v.charCodeAt(0) + 13)
        } else return v; # 나머지 숫자, 공백은 그대로 저장
    }
    ).join('')
    
    console.log(result)
    ```
    
 
---
11656 **접미사 배열 : 배열 메소드 이용**

- 풀이 168ms (30분 소요)
    
    ```jsx
    접미사 배열은 문자열 S의 모든 접미사를 사전순으로 정렬해 놓은 배열이다.
    
    baekjoon의 접미사는 baekjoon, aekjoon, ekjoon, kjoon, joon, oon, on, n 으로 총 8가지가 있고, 이를 사전순으로 정렬하면, aekjoon, baekjoon, ekjoon, joon, kjoon, n, on, oon이 된다.
    
    문자열 S가 주어졌을 때, 모든 접미사를 사전순으로 정렬한 다음 출력하는 프로그램을 작성하시오.
    
    /*
    첫째 줄에 문자열 S가 주어진다. S는 알파벳 소문자로만 이루어져 있고, 길이는 1,000보다 작거나 같다.
    */
    baekjoon
    /*
    첫째 줄부터 S의 접미사를 사전순으로 한 줄에 하나씩 출력한다.
    */
    aekjoon
    baekjoon
    ekjoon
    joon
    kjoon
    n
    on
    oon
    
    ```
    
    내 풀이 (168ms)
    
    ```jsx
    let str = require('fs').readFileSync('/dev/stdin').toString().trim();
    
    let tmp = str.split('');
    let length = str.length;
    let arr = [];
    
    for(let i = 0; i < length; i++) {
        arr.push(tmp.join(''));
        tmp.shift();
    }
    
    console.log(arr.sort().join('\n'));
    ```
    
    다른 사람 풀이 (136ms)
    
    ```jsx
    let arr = [];
    
    for (let i = 0; i < input.length; i++) {
    	let value = input.**slice(i);**
    	arr.**push(value);**
    }
    
    arr.sort();
    
    console.log(arr.join("\n"));
    ```
    
 
---
1181 **단어 정렬 : sort 라이브러리**

- 풀이
    
    ```jsx
    알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
    
    길이가 짧은 것부터
    길이가 같으면 사전 순으로
    
    input:
    첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000) 
    둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다. 
    주어지는 문자열의 길이는 50을 넘지 않는다.
    
    13
    but
    i
    wont
    hesitate
    no
    more
    no
    more
    it
    cannot
    wait
    im
    yours
    
    output: 조건에 따라 정렬하여 단어들을 출력한다. 
    단, 같은 단어가 여러 번 입력된 경우에는 한 번씩만 출력한다.
    
    i
    im
    it
    no
    but
    more
    wait
    wont
    yours
    cannot
    hesitate
    ```
    
    ```jsx
    const [n, ...words] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
    
    words.sort((a, b) => {
    	if(a.length > b.length) return 1;
        if(a.length < b.length) return -1;
        if(a.length === b.length) {
      	    if(a > b) return 1;
            if(a < b) return -1;
            if(a === b) return 0;
            else return -1;
        }
        else return -1;
    })
    
    Array.from(new Set(words)).forEach((val) => console.log(val));
    ```
    
    다른 사람 풀이 (220ms)
    
    ```jsx
    const [n, ...words] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    words.sort((a, b) => a < b ? -1 : 1); // 사전 순 정렬 (문자식 정렬)
    words.sort((a, b) => a.length - b.length); // 길이 순 정렬 (숫자식 정렬)
    
    // 우선순위가 먼저인 정렬을 나중에 하기
    
    const arr = Array.from(new Set(words)); // 중복 제거
    
    console.log(arr.join('\n'));
    ```
    
 
---
10814 **나이순 정렬 : sort 라이브러리**

- 풀이
