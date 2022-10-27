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
    
    ```jsx
    온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 
    이때, 회원들을 나이가 증가하는 순으로, 
    나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.
    
    input: 
    첫째 줄에 온라인 저지 회원의 수 N이 주어진다. (1 ≤ N ≤ 100,000)
    둘째 줄부터 N개의 줄에는 각 회원의 나이와 이름이 공백으로 구분되어 주어진다. 
    나이는 1보다 크거나 같으며, 200보다 작거나 같은 정수이고, 
    이름은 알파벳 대소문자로 이루어져 있고, 길이가 100보다 작거나 같은 문자열이다. 
    입력은 가입한 순서로 주어진다.
    
    3
    21 Junkyu
    21 Dohyun
    20 Sunyoung
    
    output: 
    첫째 줄부터 총 N개의 줄에 걸쳐 온라인 저지 회원을 나이 순, 나이가 같으면 가입한 순으로 
    한 줄에 한 명씩 나이와 이름을 공백으로 구분해 출력한다.
    
    20 Sunyoung
    21 Junkyu
    21 Dohyun
    ```
    
    ```jsx
    const [n, ...members] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    members.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);
    
    console.log(members.join('\n'));
    ```
    
---
**18870 좌표 압축 (1 ≤ N ≤ 1,000,000) 2초 , 512MB ⇒ 시간 초과 주의, map, set 활용**

1초에 1억번 연산 가능 ⇒ 2초에 2억번 연산

입력 데이터 N이 최대 1,000,000 이므로 ,N^2 알고리즘 쓰면 시간은 (1조)ms → 무조건 시간 초과

- 풀이 (답 보고 품)
    
    ```jsx
    수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.
    
    Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표의 개수와 같아야 한다.
    
    X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.
    
    /*
    첫째 줄에 N이 주어진다.
    
    둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.
    */
    5
    2 4 -10 4 -9
    /*
    첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.
    */
    2 3 0 3 1
    ```
    
    **idea 1) 시간 초과**
    
    기존 배열과 똑같은 보조 배열을 먼저 정렬을 한 후
    
    -10 -9 2 4 4
    
    중복을 제거하고
    
    -10 -9 2 4
    
    보조 배열의 인덱스 값을 기존 배열을 방문하면서 대입하면 됨 → 효율성은 장담 못함
    
    ```jsx
    const [n, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let tmp = input.split(' ').sort((a, b) => Number(a) - Number(b)); // 정렬
    let arr = Array.from(new Set(tmp)); // 중복 제거
    let result = []
    input.split(' ').forEach(v => {
        result.push(arr.indexOf(v))
    })
    
    console.log(result.join(' '))
    ```
    
    idea 2) ****
    
    string을 ‘ ‘ 공백 기준 쪼개서 숫자 배열을 만든 뒤 
    
    각 요소를 방문하여 그 요소보다 작은 값들로 필터링한 배열의 길이를 result에 추가하는 방식
    
    **메모리 초과**
    
    ```jsx
    const [n, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let result = [];
    let newArr = input.split(' ').map(v => +v);
    
    newArr.forEach((value, idx) => {
        result.push(newArr.filter(v => value > v).length)
    });
    
    console.log(result.join(' '))
    ```
    
    **idea 3) 답을 참고.**
    
    - 나를 제외한 나보다 작은 숫자라는 건 정렬된 배열의 index 값과 똑같다 → idea1 일때와 같은 생각
    - 시간 초과가 중요한 문제. 아무생각 없이 이중 for문 돌리면 무조건 초과 뜬다
    - 시간 초과를 방지하기 위해 js의 map과 set 구조를 이용하지 않으면 안된다.
    
    ```jsx
    const [n, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let result = [];
    let arr = input.split(' ').map(v => +v).sort((a, b) => a - b); // 숫자 배열로
    let set = Array.from(new Set(arr)); // 중복 제거
    let map = new Map(); // 객체 map 생성
    
    set.forEach((item, index) => {
        map.set(item, index); // key = item(integer), value = index
    })
    
    input.split(' ').forEach((item, index) => {
        result.push(map.get(+item));
    })
    
    console.log(result.join(' '))
    ```
    
---
10825 **국영수 (1s, 256MB) : sort 라이브러리**

- 풀이 : 5분내 풀이
    
    ```jsx
    도현이네 반 학생 N명의 이름과 국어, 영어, 수학 점수가 주어진다. 이때, 다음과 같은 조건으로 학생의 성적을 정렬하는 프로그램을 작성하시오.
    
    국어 점수가 감소하는 순서로
    국어 점수가 같으면 영어 점수가 증가하는 순서로
    국어 점수와 영어 점수가 같으면 수학 점수가 감소하는 순서로
    모든 점수가 같으면 이름이 사전 순으로 증가하는 순서로 
    (단, 아스키 코드에서 대문자는 소문자보다 작으므로 사전순으로 앞에 온다.)
    
    input:
    첫째 줄에 도현이네 반의 학생의 수 N (1 ≤ N ≤ 100,000)이 주어진다. 
    둘째 줄부터 한 줄에 하나씩 각 학생의 이름, 국어, 영어, 수학 점수가 공백으로 구분해 주어진다. 
    점수는 1보다 크거나 같고, 100보다 작거나 같은 자연수이다. 이름은 알파벳 대소문자로 이루어진 문자열이고, 
    길이는 10자리를 넘지 않는다.
    12
    Junkyu 50 60 100
    Sangkeun 80 60 50
    Sunyoung 80 70 100
    Soong 50 60 90
    Haebin 50 60 100
    Kangsoo 60 80 100
    Donghyuk 80 60 100
    Sei 70 70 70
    Wonseob 70 70 90
    Sanghyun 70 70 80
    nsj 80 80 80
    Taewhan 50 60 90
    
    output:
    문제에 나와있는 정렬 기준으로 정렬한 후 첫째 줄부터 N개의 줄에 걸쳐 각 학생의 이름을 출력한다.
    Donghyuk
    Sangkeun
    Sunyoung
    nsj
    Wonseob
    Sanghyun
    Sei
    Kangsoo
    Haebin
    Junkyu
    Soong
    Taewhan
    ```
    
    ```jsx
    const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    const students = input.map(v => v.split(' '));
    
    students.sort((a, b) => a[0] < b[0] ? -1 : 1);
    students.sort((a, b) => b[3] - a[3]);
    students.sort((a, b) => a[2] - b[2]);
    students.sort((a, b) => b[1] - a[1]);
    
    let result = students.map(v => v[0]);
    
    console.log(result.join('\n'))
    ```
    
---
**11652** 카드 (1s, 256MB) : **map 정렬은 array로 변환 뒤 sort 해야 한다**

- **JS의 2^53-1 이상의 수는 BigInt로 다루어야 한다**
- 정렬한 다음 카운트를 세면서 가장 자주 나온 정수를 출력한다.
- 풀이 (해결 못함. 답 봄)
    
    ```jsx
    준규는 숫자 카드 N장을 가지고 있다. 숫자 카드에는 정수가 하나 적혀있는데, 적혀있는 수는 -2^62보다 크거나 같고, 2^62보다 작거나 같다. => 계수 정렬은 안된다
    
    준규가 가지고 있는 카드 중 가장 많이 가지고 있는 정수를 구하시오. 
    만약, 가장 많이 가지고 있는 정수가 여러 가지라면, 작은 것을 출력한다.
    
    input: 첫째 줄에 준규가 가지고 있는 숫자 카드의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 
    둘째 줄부터 N개 줄에는 숫자 카드에 적혀있는 정수가 주어진다.
    5
    1
    2
    1
    2
    1
    output: 첫째 줄에 준규가 가장 많이 가지고 있는 정수를 출력한다.
    1
    
    //
    6
    1
    2
    1
    2
    1
    2
    
    1
    ```
    
    **map 사용 ⇒ TypeError 뜸**
    
    ```jsx
    const [n, ...input] = 
          require('fs').readFileSync('/dev/stdin').toString().
    trim().split('\n');
    
    let map = new Map();
    
    input.forEach((v, i) => {
        if(map.get(v)) {
            map.set(v, map.get(v) + 1);
        } else {
            map.set(v, 1);
        }
    });
    
    let mapToArr = [...map];
    
    mapToArr.sort((a, b) => +a[0] - +b[0]);
    mapToArr.sort((a, b) => b[1] - a[1]);
    
    console.log(mapToArr[0][0])
    ```
    
    ⇒ **틀렸습니다.**
    
    - 틀렸길래 살펴보니 입력 범위가 -2^62부터 2^62까지인 것을 간과했다
    - BOJ는 출력할 때는 toString으로 해야한다
    - js에서 큰 숫자는 따로 BigInt를 이용해야한다.
    
    **BigInt**
    
    - Number 원시 값이 안정적으로 나타나낼 수 있는 최대치인 2^53-1 보다 큰 정수를 표현할 수 있는 내장 객체이다.
    - 배열의 요소로 있을 때는 정렬도 가능하다
    - 정수 리터럴 뒤에 n을 붙이거나 BigInt 함수를 호출해 생성할 수 있다.
    
    **남의 코드** 
    
    ```jsx
    const input = require("fs")
      .readFileSync("/dev/stdin")
      .toString()
      .trim()
      .split("\n")
      .map((v) => BigInt(v));
    
    const [, ...numbers] = input;
    numbers.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    // 정렬을 해둠
    // [1,2,1,2,1,2] 라면 [1,1,1,2,2,2] 가 되도록
    let count = 1;
    let maxValue = numbers[0];
    let maxCount = 0;
    
    // 배열을 돌면서 count를 세고 최대 카운트와 그 카운트의 value 값 저장
    numbers.forEach((v, i) => {
      next = numbers[i + 1];
      if (v === next) {
        count++;
      } else {
        count = 1;
      }
    
      if (count > maxCount) {
        maxCount = count;
        maxValue = v;
      }
    });
    
    // String으로 출력
    console.log(String(maxValue));
    ```
    
---
**11004** K번째 수 (2s, 512MB) 못풀것다 지랄맞다

- 풀이
    
    ```jsx
    수 N개 A1, A2, ..., AN이 주어진다. A를 오름차순 정렬했을 때, 
    앞에서부터 K번째 있는 수를 구하는 프로그램을 작성하시오.
    
    /*첫째 줄에 N(1 ≤ N ≤ 5,000,000)과 K (1 ≤ K ≤ N)이 주어진다.
    
    둘째에는 A1, A2, ..., AN이 주어진다. (-109 ≤ Ai ≤ 109)*/
    input:
    5 2
    4 1 2 3 5
    /* A를 정렬했을 때, 앞에서부터 K번째 있는 수를 출력한다. */
    output:
    2
    ```
    
    ```jsx
    arr = new Array(5000001).fill(0)
    
    ```
    
---
10828 **스택: array 메소드 pop, push, length 이용**

- arr, res 두 배열을 두고 각 명령문에 대한 조건 분기에 따라 res에 채운 뒤 출력
- 풀이
    
    ```jsx
    정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
    
    명령은 총 다섯 가지이다.
    
    push X: 정수 X를 스택에 넣는 연산이다.
    pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 
    			만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    size: 스택에 들어있는 정수의 개수를 출력한다.
    empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
    top: 스택의 가장 위에 있는 정수를 출력한다. 
    		 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    
    /*
    첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 
    둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 
    주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 
    문제에 나와있지 않은 명령이 주어지는 경우는 없다.
    */
    input: 
    14
    push 1
    push 2
    top
    size
    empty
    pop
    pop
    pop
    size
    empty
    pop
    push 3
    empty
    top
    /*출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.*/
    2
    2
    0
    2
    1
    -1
    0
    1
    -1
    0
    3
    ```
    
    ```jsx
    const [k, ...strs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let arr = [];
    let res = [];
    
    strs.forEach((item, idx) => {
        if(item.split(' ')[0] === 'push') {
            arr.push(+item.split(' ')[1]);
        } else if(item.split(' ')[0] === 'size') {
            res.push(arr.length);
        } else if(item.split(' ')[0] === 'empty') {
            res.push(arr.length === 0 ? 1 : 0);
        } else if(item.split(' ')[0] === 'top') {
            res.push(arr.length === 0 ? -1 : arr[arr.length - 1]);
        } else if(item.split(' ')[0] === 'pop') {
            res.push(arr.length === 0 ? -1 : arr.pop());        
        }
    });
    
    console.log(res.join('\n'))
    ```
    
---
9012 괄호

- 풀이
    
    ```jsx
    괄호 문자열(Parenthesis String, PS)은 두 개의 괄호 기호인 ‘(’ 와 ‘)’ 만으로 구성되어 있는 문자열이다. 
    그 중에서 괄호의 모양이 바르게 구성된 문자열을 올바른 괄호 문자열(Valid PS, VPS)이라고 부른다.
    한 쌍의 괄호 기호로 된 “( )” 문자열은 기본 VPS 이라고 부른다. 
    만일 x 가 VPS 라면 이것을 하나의 괄호에 넣은 새로운 문자열 “(x)”도 VPS 가 된다. 
    그리고 두 VPS x 와 y를 접합(concatenation)시킨 새로운 문자열 xy도 VPS 가 된다. 
    예를 들어 “(())()”와 “((()))” 는 VPS 이지만 “(()(”, “(())()))” , 그리고 “(()” 는 모두 VPS 가 아닌 문자열이다. 
    
    여러분은 입력으로 주어진 괄호 문자열이 VPS 인지 아닌지를 판단해서 그 결과를 YES 와 NO 로 나타내어야 한다.
    
    /*
    입력 데이터는 표준 입력을 사용한다. 입력은 T개의 테스트 데이터로 주어진다. 
    입력의 첫 번째 줄에는 입력 데이터의 수를 나타내는 정수 T가 주어진다. 
    각 테스트 데이터의 첫째 줄에는 괄호 문자열이 한 줄에 주어진다. 하나의 괄호 문자열의 길이는 2 이상 50 이하이다.
    */
    6
    (())())
    (((()())()
    (()())((()))
    ((()()(()))(((())))()
    ()()()()(()()())()
    (()((())()(
    
    /*
    출력은 표준 출력을 사용한다. 
    만일 입력 괄호 문자열이 올바른 괄호 문자열(VPS)이면 “YES”, 아니면 “NO”를 한 줄에 하나씩 차례대로 출력해야 한다.
    */
    NO
    NO
    YES
    NO
    YES
    NO
    ```
    
    ```jsx
    const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let result = [];
    
    input.forEach((item, index) => {
        let valid = true
        let tmp = item.split('');
        let stack = [];
        for(let i = 0; i < tmp.length; i++) {
            if(tmp[i] === '(') {
                stack.push('(');
            } else if(tmp[i] === ')') {
                if(stack.length === 0) {
                    valid = false;
                    break;
                } else {
                    stack.pop();
                }
            }
        }
        
        if(!valid || stack.length > 0) {
            result.push('NO')
        } else {
            result.push('YES')
        }
    })
    
    console.log(result.join('\n'))
    ```
    
    **나의 idea)**
    
    - stack 자료구조를 이용한다
    - ( 가 들어오면 stack에 push를 하고, )가 들어오면 stack을 pop한다.
    - 만약 stack이 empty인 데 pop 요청이 들어오면 VPS가 NO
    - 모든 탐색을 끝냈는데 stack이 empty가 아닌 경우에도 VPS가 NO이다.
    - 나머지의 경우에는 VPS가 YES이다.
    - valid check를 넣느냐 안 넣느냐 차이가컸다. 아마 break를 했을 때 stack.length 가 0인 경우에 그런 것 같다.

---
10799 **쇠막대기 (1s, 256MB)**

- 풀이
    
    여러 개의 쇠막대기를 레이저로 절단하려고 한다. 효율적인 작업을 위해서 쇠막대기를 아래에서 위로 겹쳐 놓고, 레이저를 위에서 수직으로 발사하여 쇠막대기들을 자른다. 쇠막대기와 레이저의 배치는 다음 조건을 만족한다.
    
    - **쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있다**. - 쇠막대기를 다른 쇠막대기 위에 놓는 경우 완전히 포함되도록 놓되, 끝점은 겹치지 않도록 놓는다. ⇒ stack을 적용하게끔 한 문제
    - 각 쇠막대기를 자르는 레이저는 적어도 하나 존재한다.
    - 레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않는다.
    
    아래 그림은 위 조건을 만족하는 예를 보여준다. 수평으로 그려진 굵은 실선은 쇠막대기이고, 점은 레이저의 위치, 수직으로 그려진 점선 화살표는 레이저의 발사 방향이다.
    
    ![https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/problem/10799/1.png](https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/problem/10799/1.png)
    
    이러한 레이저와 쇠막대기의 배치는 다음과 같이 괄호를 이용하여 왼쪽부터 순서대로 표현할 수 있다.
    
    1. 레이저는 여는 괄호와 닫는 괄호의 인접한 쌍 ‘( ) ’ 으로 표현된다. 또한, 모든 ‘( ) ’는 반드시 레이저를 표현한다.
    2. 쇠막대기의 왼쪽 끝은 여는 괄호 ‘ ( ’ 로, 오른쪽 끝은 닫힌 괄호 ‘) ’ 로 표현된다.
    
    위 예의 괄호 표현은 그림 위에 주어져 있다.
    
    쇠막대기는 레이저에 의해 몇 개의 조각으로 잘려지는데, 위 예에서 가장 위에 있는 두 개의 쇠막대기는 각각 3개와 2개의 조각으로 잘려지고, 이와 같은 방식으로 주어진 쇠막대기들은 총 17개의 조각으로 잘려진다.
    
    쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 주어졌을 때, 잘려진 쇠막대기 조각의 총 개수를 구하는 프로그램을 작성하시오
    
    ```jsx
    /* 한 줄에 쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 공백없이 주어진다. 
    괄호 문자의 개수는 최대 100,000이다 */
    ()(((()())(())()))(())
    
    /* 잘려진 조각의 총 개수를 나타내는 정수를 한 줄에 출력한다.*/
    17
    ```
    
    **idea) 객체배열을 사용하여 새로운 막대가 추가되면 array에 추가하고 
    각각의 막대가 raser을 맞은 횟수를 카운트 한다.  ⇒ 메모리 초과**
    
    ```jsx
    let tmp = `()(((()())(())()))(())`
    
    // let input = tmp.split('')
    
    let sum = 0;
    // let raser = false;
    let stack = [];
    
    for(let i = 0 ; i < tmp.length; i++) {
        if(tmp[i] == '(') {
    				// 여는 괄호일 때 stack의 모든 요소를 방문하며 
            stack = stack.map(v => {
                return {raser: v.raser, length: v.length + 1}
            })
            stack.push({raser: 0, length:0})
        } else if(tmp[i] === ')') {
            let top = stack.pop();
            if(top.length == 0) {
                // raser
                stack = stack.map(v => {
                    return {
                        raser: v.raser+1,
                        length: v.length + 1
                    }
                })
            } else {
                // raser 아님
                sum += top.raser + 1;
                stack = stack.map(v => {
                    return {
                        raser: v.raser,
                        length: v.length + 1
                    }
                })
            }
        }
    }
    ```
    
    - **여는 괄호를 만나면 전부 스택에 push 하다가, 닫는 괄호를 만나면 스택에서 pop하고 괄호가 레이저면, 파이프 끝이면 1만 더해주면 된다**
    
    ```jsx
    let str = require('fs').readFileSync('/dev/stdin').toString().trim();
    
    let stack = []; // 스택
    let sum = 0; // 조각 갯수 합
    
    for(let i = 0 ; i < str.length; i++) {
        if (str[i] == '(') {
            stack.push('(');
        } else if (str[i] === ')') {
            stack.pop();
            if (str[i-1] === '(') {
                sum += stack.length;
            } else { 
                sum += 1;
            }
        }
    }
    
    console.log(sum);
    ```
    
---
10845 큐 

- 풀이
    
    ```jsx
    정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
    
    명령은 총 여섯 가지이다.
    
    push X: 정수 X를 큐에 넣는 연산이다.
    pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    size: 큐에 들어있는 정수의 개수를 출력한다.
    empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
    front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    
    /*
    첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.
    */
    15
    push 1
    push 2
    front
    back
    size
    empty
    pop
    pop
    pop
    size
    empty
    pop
    push 3
    empty
    front
    
    /* 출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다. */
    1
    2
    2
    0
    1
    2
    -1
    0
    1
    -1
    0
    3
    ```
    
    - commands
    
    ```jsx
    const [N, ...commands] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let queue = [];
    let result = [];
    
    commands.forEach(item => {
    	if(item.split(' ')[0] === 'push') {
    		queue.push(item.split(' ')[1]);
    	} else if(item === 'front') {
    		result.push(queue.length == 0 ? -1 : queue[0]);
    	} else if(item === 'back') {
    		result.push(queue.length == 0 ? -1 : queue[queue.length - 1]);
    	} else if(item === 'empty') {
    		result.push(queue.length == 0 ? 1 : 0);
    	} else if(item === 'pop') {
    		result.push(queue.length == 0 ? -1 : queue.shift());
    	} else if(item === 'size') {
    		result.push(queue.length);
    	}
    });
    
    console.log(result.join('\n'));
    ```
    
---
10866 덱

- 풀이
    
    ```jsx
    수를 저장하는 덱(Deque)를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
    
    명령은 총 여덟 가지이다.
    
    push_front X: 정수 X를 덱의 앞에 넣는다.
    push_back X: 정수 X를 덱의 뒤에 넣는다.
    pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    size: 덱에 들어있는 정수의 개수를 출력한다.
    empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
    front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    
    /* 첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 
    주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.*/
    15
    push_back 1
    push_front 2
    front
    back
    size
    empty
    pop_front
    pop_back
    pop_front
    size
    empty
    pop_back
    push_front 3
    empty
    front
    
    /* 출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.*/
    2
    1
    2
    0
    2
    1
    -1
    0
    1
    -1
    0
    3
    ```
    
    ```jsx
    const [N, ...commands] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let dequeue = [];
    let result = [];
    
    for(let i = 0; i < commands.length; i++) {
    	if(commands[i].split(' ')[0] === 'push_front') {
    		dequeue.unshift(commands[i].split(' ')[1]);
    	} else if(commands[i].split(' ')[0] === 'push_back') {
    		dequeue.push(commands[i].split(' ')[1]);
    	} else if(commands[i] === 'pop_front') {
    		result.push(dequeue.length === 0 ? -1 : dequeue.shift());
    	} else if(commands[i] === 'pop_back') {
    		result.push(dequeue.length === 0 ? -1 : dequeue.pop());	
    	} else if(commands[i] === 'size') {
    		result.push(dequeue.length);
    	} else if(commands[i] === 'empty') {
    		result.push(dequeue.length === 0 ? 1 : 0);
    	} else if(commands[i] === 'front') {
    		result.push(dequeue.length === 0 ? -1 : dequeue[0]);
    	} else if(commands[i] === 'back') {
    		result.push(dequeue.length === 0 ? -1 : dequeue[dequeue.length - 1]);		
    	}
    }
    
    console.log(result.join('\n'));
    ```
    
---
10808 **알파벳 개수:** map 사용

- 풀이

```jsx
알파벳 소문자로만 이루어진 단어 S가 주어진다. 
각 알파벳이 단어에 몇 개가 포함되어 있는지 구하는 프로그램을 작성하시오.

/*첫째 줄에 단어 S가 주어진다. 단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.*/
baekjoon

/*
단어에 포함되어 있는 a의 개수, b의 개수, …, z의 개수를 공백으로 구분해서 출력한다.
*/
1 1 0 0 1 0 0 0 0 1 1 0 0 1 2 0 0 0 0 0 0 0 0 0 0 0
```

idea)

- 길이 26 짜리 알파벳 소문자를 key로 가진 딕셔너리(map)을 생성 값은 0으로 초기화
- 입력 값을 반복문으로 돌면서 각각 소문자 등장 갯수 count
- map의 value 값을 공백 기준으로 구분하여 출력

```jsx
let str = require('fs').readFileSync('/dev/stdin').toString().trim();

let arr = Array.from({length : 26}, (v, i) => [`${String.fromCharCode(i + 97)}`, 0]);
let newMap = new Map(arr);

for (let i = 0; i < str.length ; i++) {
	newMap.set(str[i], newMap.get(str[i]) + 1);
}

let result = ``;

for(let [key, value] of newMap.entries()) {
	result += `${value} `
}

console.log(result.trim());
```
