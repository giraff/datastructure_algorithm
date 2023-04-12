풀이기간 : 22/11/15(화) ~ 12/04(일)

```jsx

풀이한 문제 : 총 15개

1260 DFS와 BFS
11724 연결 요소의 개수 : 순회(DFS, BFS)를 활용하는 문제
1707 이분 그래프 : 무방향 그래프에서 사이클 찾기 (Union Find) or DFS
10451 순열 사이클 : 방향 그래프에서 사이클 찾기 (DFS 스패닝 트리)
2331 반복 수열 : DFS
9466 텀 프로젝트 : DFS로 사이클 판단
2667 단지 번호 붙이기 : DFS로 1을 만날때마다 파고들면서 카운트 세기 [가로 세로 높이가 같을 때]
4963 섬의 개수 : DFS 응용 [2667, 단지번호 붙이기 코드 응용 = 가로 세로 높이가 다를 때]
7576 토마토: 예제는 다 맞추는데 자꾸 시간 초과 : 다른 사람 답지 봄
2178 미로 탐색 : 최단 경로 찾기 문제
2146 다리 만들기 DFS, BFS 활용 문제 (단지 번호 붙이기 + ..)
1991 트리 순회: PreOrder, InOrder, PostOrder (재귀)
11725 트리의 부모 찾기 : DFS와 양방향 그래프 활용
1167 트리의 지름 : DFS를 2회 수행
1967 트리의 지름 : DFS를 2회 수행
```

---

# 선행개념

### 1. 스택과 큐, 트리

- DFS, BFS, 다익스트라 등 그래프 알고리즘을 공부하기 위해 반드시 알아두고 가야할 자료구조

**스택**

- 먼저 들어온 데이터가 나중에 나가는 선입후출 자료구조
- 입구와 출구가 동일한 형태로 스택을 시각화할 수 있다.
- 삽입(push)과 삭제(pop) 연산이 대표적

**큐**

- 먼저 들어온 데이터가 먼저 나가는 선입선출
- 입구와 출구가 다른, 뚫려있는 터널과 같은 형태로 시각화

ex) 대기열

**트리**

1. 1개 이상의 유한한 개수의 노드(vertex)의 집합
2. 루트 노드와 0개 이상의 겹치지 않는 하위 나무 구조들의 집합

트리는 node(노드)와 edge(간선)이라는 것으로 표현된다.

node는 특정 정보를 저장하고 edge는 정보들간의 관계를 나타낸다.

**Binary Tree (이진 트리)**

모든 내부 node들이 둘 이하의 자식을 갖는 나무, 

노드가 하나도 없는 공집합이거나 루트 노드를 기준으로 left, right binary tree로 이루어진 집합

**Complete Binary Tree (완전 이진 나무)**

가장 마지막 level을 제외한 모든 node 들이 꽉 차있고 마지막 level은 왼쪽부터 마지막 node 까지 빈 칸이 없는 tree

**Full Binary Tree (포화 이진 나무)**

마지막 level까지 완전히 꽉 차있는 이진 트리

**트리 순회**

1. 전위 순회 (preorder) : 뿌리 (root)를 먼저 방문
2. 중위 순회 (inorder) : 왼쪽 하위 트리 방문 후 트리(root) 방문
3. 후위 순회 (postorder) : 오른쪽 하위 트리 방문 후 트리(root) 방문

pseudo code

```jsx
/* 2차원 배열로, 인덱스 번호를 부모의 번호, 값을 각각 자식 노드로 보자 */
[ 
  parent: [left, right],
	parent: [left, right],
	parent: [left, right],..
]

// 전위
let answer = [];
function preOrder(node) {
	if(node == '.') return;
  let [lt, rt] = tree[node]; 
  answer.push(node); // 노드 출력
  preOrder(lt); // 왼쪽 진행
  preOrder(rt); // 오른쪽 진행
}
// 중위
function inOrder(node) {
	if(node == '.') return;
  let [lt, rt] = tree[node];
  inOrder(lt); // 왼쪽 진행
  answer.push(node); // 노드 출력
  inOrder(rt); // 오른쪽 진행
}
// 후위
function postOrder(node) {
	if(node == '.') return;
  let [lt, rt] = tree[node];
  postOrder(lt); // 왼쪽 진행
  postOrder(rt); // 오른쪽 진행
  answer.push(node); // 노드 출력
}

// 출력
preOrder("A");
console.log(answer.join(''));
answer=[];
inOrder("A");
console.log(answer.join(''));
answer=[];
postOrder("A");
console.log(answer.join(''));
```

### 2. 재귀함수

**재귀함수의 특징에 대해 설명해보세요.**

**자기 자신을 호출하는 함수**

- while / for 문을 이용하지 않고도 어떤 내용을 **반복적으로 수행**할 수 있다
- **stack** 과 연관이 깊다.
- 함수가 재귀적으로 호출이 되면 자바스크립트의 경우 **call stack**에 함수가 반복적으로 쌓여 가장 마지막에 호출된 함수가 처리된 이후에 그 함수를 불렀던 함수까지 처리
- 컴퓨터 메모리는 한정된 크기 만큼의 메모리를 가지고 있으므로 무작정 함수를 종료하지 않고 쌓아 올려 재귀 호출만 하게 되면 반복적으로 무한히 동작하고 스택 오버플로우(콜 스택 사이즈 초과) 등의 오류가 발생한다.

**재귀 함수에서 필수적인 두가지 부분**

1. BaseCase
    
    재귀함수는 **종료 조건**을 반드시 명시해야한다.
    
2. 다른 입력값
    
    같은 함수가 호출되더라도 매번 다른 데이터가 입력되어야 한다(줄어든다)
    

```jsx
// 재귀를 이용한 sum 함수
function sumRange(num) {
    if(num === 1) return 1; // (1) Base Case
    return num + sumRange(num-1); // (2) 다른 input
}

sumRange(3) // 6
```

**재귀 1. 팩토리얼**

- 4! = 4 * 3 * 2 * 1 팩토리얼 구현 예제 ← 재귀 함수의 대표적인 예

```jsx
def factorial(n):
	if(n <= 1) return 1; // Base Case
	return n * factorial(n-1); // 다른 input
```

**재귀 2. 유클리드 호제법**

- 유클리드 호제법: 2개의 자연수에 대한 최대공약수를 구하는 알고리즘

```jsx
def gcd(a, b):
	if a % b == 0:
		return b // Base Case
	else:
		return gcd(b, a % b);; // 다른 input
```

**재귀의 두가지 디자인 패턴**

**디자인 패턴 1. Helper 메소드 재귀**

- 헬퍼 메소드 재귀는 재귀형이 아닌 외부 함수가 재귀형인 내부 함수를 호출하는 형태이다.
- 나중에 반환할 값을 재귀 안에 정의하면 재귀 호출 시마다 초기화되는 문제가 있으므로 재귀함수 밖에 정의한다. 그리고 그 재귀함수를 감싸는 다른 함수를 만든다

```jsx
function collectOddValues(arr){
        
        let result = [] // 데이터를 저장한 빈 배열, 이 빈 배열을 재귀함수 안에 정의하면 재귀호출시마다 초기화되는 문제가 있으므로, 재귀함수 밖에 정의한다.
    
        function helper(helperInput){
            if(helperInput.length === 0) {
                return;
            }
            
            if(helperInput[0] % 2 !== 0){
                result.push(helperInput[0])
            }
            
            helper(helperInput.slice(1))
        }
        
        helper(arr) // 헬퍼 메소드 재귀는 재귀형이 아닌 외부 함수가 재귀형인 내부 함수를 호출하는 형태이다.
    
        return result;
    }
    
    collectOddValues([1,2,3,4,5,6,7,8,9])
```

**디자인 패턴 2. 순수 재귀**

```jsx
function collectOddValues(arr){
        let newArr = [];
        
        if(arr.length === 0) {
            return newArr;
        }
            
        if(arr[0] % 2 !== 0){
            newArr.push(arr[0]);
        }
            
        newArr = newArr.concat(collectOddValues(arr.slice(1)));
        return newArr;
    }
    
    collectOddValues([1,2,3,4,5]);
```

- 위 순수 재귀함수에서는 함수가 재귀적으로 호출될 때마다 반환값을 담을 배열이 초기화되어 빈 배열이 될 것이다. 하지만 여기서 다른 점은 거기에 신경 쓸 필요가 없다는 것이다. 이번에는 그렇게 작동하도록 의도하였다.
    - 여기서는 배열들을 가장 뒷 부분에 합쳐준 다음에 다시 반환한다.
- 순수함수 사용 Tip
    - `배열`에서, slice와 같은 메서드나 spread 연산자, 그리고 concat 메서드를 사용해서 배열을 복사하고 그 배열을 변화시키지 않는다.
    - `문자열`은 불변이므로, slice나 substr, substring과 같은 메서드를 사용해서 문자열을 복사할 수 있다.
    - `객체` 의 경우, Object.assign이나 spread operator를 사용하여 객체를 복사할 수 있다.
    - 이렇게 하면 결과값을 쌓아갈 수 있다.

### 3. 그래프 순회 (Graph Traversal)

- **그래프를 순회하는 코드를 짤 때는**, 트리에 정해져있는 루트와 달리, ‘**시작점**’을 정해주어야 한다.
- 그래프의 한 노드에서 다른 노드를 이동할 때 유일한 하나의 길만 있다는 보장은 없다. 방문한 노드를 또 방문할 수 있다.
- 그래프 순회의 예시
    - 웹 크롤러
    - P2P 네트워킹
    - 최단 거리 찾기
- DFS와 BFS 모두, 매개변수로 시작점을 받고 순회하면서 방문한 정점을 추적한다는 점이 같다.

### 4. **DFS 깊이 우선 탐색**

- DFS는 다른 형제를 방문하기 전에 한 브랜치에서 가장 깊은 노드까지 방문한다.

**스택** or **재귀 함수** 사용

**구체적인 동작**

1. **탐색 시작 노드**를 스택에 삽입하고 **방문처리**
2. **매번 최상단 노드를 기준으로 방문 안 한 인접노드가 있다면 그 인접 노드로를 스택에 넣고 방문처리:
1.** 스택의 최상단 노드에 방문하지 않은 인접 노드가 하나라도 있다면 그 노드를 스택에 넣고 방문 처리, 
**2.** 여러개 있다면 조건에 따라 선정해야 한다 (번호가 낮은 인접 노드부터 방문하는 경우가 많다)
**3.** 스택의 최상단 노드에 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼낸다.
3. 더이상 2번 과정을 수행할 수 없을 때 까지 반복.

********************DFS 구현********************

‘**그래프’ 표현하기 위해 2차원 배열 사용**

- 노드의 번호가 1번부터 시작하는 경우가 많아서 인덱스 0자리는 비워두고 
인덱스 1번부터 해당 노드에 인접한 노드가 무엇인지 배열 형태로 담아둘 수 있다
- index 0 → [empty]
- index 1 → [인접 노드들,…]
- index 2 → [인접 노드들,…]
- index 3 → [인접 노드들,…]

아래 그래프를 2차원 배열로 표현하면 다음과 같다 

![스크린샷 2022-11-15 오후 3.08.00.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e6f60bd6-6db7-44eb-a55f-a6161b745281/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-15_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.08.00.png)

**‘방문 처리’ 표현하기 위해 boolean 타입의 1차원 배열 선언 : 초기화 false**

- 인덱스 0은 사용하지 않기 위해 배열의 크기는 n+1로 설정 (숫자와 인덱스값을 그대로 맵핑)
    
    ![스크린샷 2022-11-15 오후 3.14.42.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4141429d-9d17-4f91-9e35-fd4de8067901/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-15_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.14.42.png)
    
    visited = [false, true, true, false, false, false, true, true, false]
    

**DFS 구현 - 순수 재귀형**

```jsx
// graph : 2차원 배열, v: 최상단 노드의 번호 (1부터 시작), visited: 1차원 배열
def DFS(graph, v, visited): 
	**visited[v] = true // 현재 노드 방문 처리**
	console.log(v);   // 출력

	// 현재 노드와 연결된 인접 노드를 재귀적으로 방문
	**for(num from 0 to graph[v].length):**

		let neighborNode = graph[v][num];

		// 인접 노드가 아직 방문처리가 안된 노드라면
		**if(!visited[neighborNode]):** 
			DFS(graph, neighborNode, visited) // 해당 인접 노드를 상대로 DFS 수행 

```

```jsx
// 그래프 
graph = [
	[],
	[2, 3, 8],
	[1, 7],
	[1, 4, 5],
	[3, 5],
	[3, 4],
	[7],
	[2, 6, 8],
	[1, 7]
]
/*
   1
 / | \
2  8  3
| /   /\
7     4- 5
|
6
*/

// 방문 처리
visited = Array.from({length: graph.length}, () => false);

// 정의된 DFS 함수 호출
DFS(graph, 1, visited);
// [1, 2, 7, 6, 8, 3, 4, 5]

```

**DFS 구현 - 헬퍼 재귀형**

```jsx
function DFSHelperMethod(v) {
	let inResult = [];
  let graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [4, 5],
    [7],
    [2,6,8],
    [1, 7]
  ]
	let visited = Array.from({length: graph.length}, () => false);
  
  **(function DFS(vertex) {
    visited[vertex] = true;
    inResult.push(vertex);

    graph[vertex].forEach((neighbor) => {
      if(!visited[neighbor]) {
        return DFS(neighbor);
      }
    });
  })(v);**

  return inResult;
}

console.log(DFSHelperMethod(1));// 시작점만 받음
// **[1, 2, 7, 6, 8, 3, 4, 5]**
```

**DFS 구현 - 반복문**

```jsx
let graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [4, 5],
  [7],
  [2,6,8],
  [1, 7]
]
function DFSIteratice (v) {
	**const stack = [v]; // stack 배열을 정의하고, v (시작점)을 추가한다.**
	const result = []; // 결과를 저장할 빈 배열 result를 만든다.
	let visited = Array.from({length: graph.length}, () => false);
	let currentV;
	visited[v] = true;

	while(stack.length) {
		currentV = stack.pop();
		result.push(currentV);
		
		graph[currentV].forEach((neighbor) => {
			if(!visited[neighbor]) {
				visited[neighbor] = true;
				stack.push(neighbor);
			}
		})
	}
}
```

### 5. BFS 너비 우선 탐색 : 최단 경로 문제 찾을 때 / 반복문(while), 큐(queue) 사용

- 현재 같은 높이의 이웃 정점들을 먼저 방문하는 알고리즘
- 가장 가까운 노드부터 우선적으로 탐색하는 알고리즘 → ‘**큐’ 자료구조** 이용
- 따라서 **특정 조건에서의 최단 경로 문제**를 해결하기 위한 목적으로 사용한다. **(재귀 X)**

구체적인 동작

1. 탐색 시작 노드를 큐에 삽입하고 방문 처리
2. **매번 큐에서 꺼낸 노드의 방문하지 않은 인접한 노드들을 ‘전부’, 한 번에 ‘큐’에 넣고 방문 처리**
3. 더이상 2번 문제를 해결할 수 없을 때 까지 반복

BFS 구현

```jsx
let graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [4, 5],
  [7],
  [2,6,8],
  [1, 7]
]

function BFS(start) {
	let queue = [start];
	let visited = Array.from({length: graph.length}, () => false);
	visited[start] = true;
	
	while(queue.length) {
		let v = queue.shift();
		result.push(v);
		
		graph[v].forEach((neighbor) => {
			if(!visited[neighbor]) {
				visited[neighbor] = true;
				queue.push(neighbor);
			}
		});
	}
}
```

DFS의 순환형 코드와 거의 유사하게 while 조건문을 순회하지만, stack 대신 queue를 사용하고 이를 위해 pop 메소드 대신 shift() 메소드를 쓴다.

### | 그래프에서 사이클 찾는 방법 Detect Cycle in a Graph

**Q. 사이클이란?** 

그래프에서 특정 정점에서 출발해 돌아다니다가 다시 처음 출발했던 곳으로 되돌아 갈 수 있으면 사이클이 있는 것

**Q 사이클을 찾는다(Detect)는 것은?**

- 그래프 내에서 사이클이 존재하는가?
- 총 몇개 존재하는가?
- 사이클에 포함된 노드의 개수는 몇개인가? 등을 알아내는 것이다.

ex) 최소신장트리(MST)를 생성하려면 그래프 내 사이클이 없어야 하는데, MST를 생성하는 알고리즘 중 하나가 크러스컬 (Kruskal, 크루스칼이라고도 함) 알고리즘에서도 필요하다.

**Q. 서로소집합(Disjoint Set) - 합집합 찾기(Union - FInd) 로 사이클 검출이 가능하다?**

Disjoint Set에 대해 모르면 우선 서로소 집합-합집합 찾기를 반드시 선행해야 한다.

**서로소 집합**의 원소를 정점(Node)라고 할 때 같은 집합 (sub Graph)에 포함되어 있는 정점들끼리는 이미간선(Edge)로 연결된 것들이고 다른 집합(other subgraph)에 있는 정점들과는 서로 연결되어 있지 않다는 걸 전제로한다.

**Union Find Algorithm은 그래프 내 셀프 루프(Self loop: 자기 자신을 가리키는 간선)을 포함하면 안되고, 무방향 그래프에서 사이클을 찾는데 유용하다.**

Q. DFS로 사이클 검출이 가능하다고 하던데?

**DFS로는 모든 정점을 엣지의 방향에 따라 순회하면서 Back Edge가 있으면 사이클이 있다고 판단한다.**

### 트리의 지름 구하기 : DFS를 두 번 실행.

```jsx
임의의 정점 X에서 가장 먼 정점인 Y를 찾고

찾은 정점 Y에서 가장 먼 정점 Z를 찾는다

이 Y부터 Z까지의 경로가 트리의 지름이다

트리 정보 기반으로 임의의 정점에서 DFS나 BFS를 실행한 결과에다가 한번 더 실행해 트리의 지름을 구한다
```

---

1260 DFS와 BFS
 
 ```jsx
    문제
    그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 
    단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 
    더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.
    
    입력
    첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 
    탐색을 시작할 정점의 번호 V가 주어진다. 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 
    어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.
    
    출력
    첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. 
    V부터 방문된 점을 순서대로 출력하면 된다.
    
    // 예제 입력 1 
    4 5 1
    1 2
    1 3
    1 4
    2 4
    3 4
    // 예제 출력 1 
    1 2 4 3
    1 2 3 4
    // 예제 입력 2 
    5 5 3
    5 4
    5 2
    1 2
    3 4
    3 1
    // 예제 출력 2 
    3 1 2 5 4
    3 1 4 2 5
    // 예제 입력 3 
    1000 1 1000
    999 1000
    // 예제 출력 3 
    1000 999
    1000 999
```

코드 
```jsx
  let [first, ...vertex] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

  let [N, M, V] = first.split(' ').map(v => +v);

  // graph 만들기
  let graph = Array.from({length: N+1}, () => []);
  vertex.forEach((relation) => {
      let [x, y] = relation.split(' ').map(v => +v);
      graph[x].push(y);
      graph[y].push(x);
  })

  // 각 정점 정렬
  graph = graph.map(v => v.sort((a, b) => a - b));

  function DFS(start) {
      let result = [];
      let visited = Array.from({length: N+1}, () => false);

      (function pureDFS(v) {
          visited[v] = true;
          result.push(v);

          graph[v].forEach((neighbor) => {
              if(!visited[neighbor]) {
                  return pureDFS(neighbor);
              }
          });
      })(start);

      return result;
  }

  function BFS(start) {
      let result = [];
      let visited = Array.from({length: N + 1}, () => false);
      let queue = [start];
      visited[start] = true;

      while(queue.length > 0) {
          let v = queue.shift();
          result.push(v);

          graph[v].forEach((neighbor) => {
              if(!visited[neighbor]) {
                  visited[neighbor] = true;
                  queue.push(neighbor);
              }
          })
      }

      return result;
  }

  console.log(DFS(V).join(' '));
  console.log(BFS(V).join(' '));
```
  
---

- 11724 연결 요소의 개수 : 순회(DFS, BFS)를 활용하는 문제
    
```jsx
  연결 요소의 개수
  시간 제한	메모리 제한
  3 초	512 MB
  문제
  방향 없는 그래프가 주어졌을 때, 연결 덩어리 (Connected Component)의 개수를 구하는 프로그램을 작성하시오.

  입력
  첫째 줄에 정점의 개수 N과 간선의 개수 M이 주어진다. (1 ≤ N ≤ 1,000, 0 ≤ M ≤ N×(N-1)/2) 
  둘째 줄부터 M개의 줄에 간선의 양 끝점 u와 v가 주어진다. (1 ≤ u, v ≤ N, u ≠ v) 
  같은 간선은 한 번만 주어진다.

  출력
  첫째 줄에 연결 요소의 개수를 출력한다.

  예제 입력 1 
  6 5
  1 2
  2 5
  5 1
  3 4
  4 6
  예제 출력 1 
  2
  예제 입력 2 
  6 8
  1 2
  2 5
  5 1
  3 4
  4 6
  5 4
  2 4
  2 3
  예제 출력 2 
  1
```

풀이
    
```jsx
HelperDFS 순회 한 번에, 한 연결 요소로 뭉쳐진 모든 정점들이 제거된다.
HelperDFS 순회의 횟수가 연결 요소의 개수이다,
```

1. 정점을 모아둔 배열A 생성(** 중요)
2. graph 로 관계도 생성
3. 순회 (DFS or BFS)
4. 방문 처리가 된 것들을 A 배열에서 지운다. (순회 한 번에, 한 연결 요소에 뭉쳐져있는 정점들은 모두 지워진다)
5. 아직 A에 남은게 있으면 (다른 연결 요소로 뭉쳐진 요소일 것). 그 배열의 요소를 가지고 2-3 반복
6. A에 남은게 없을 때 까지 반복

실제코드
    
```jsx
let [first, ...vertex] = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n');
let [N, M] = first.split(' ').map(v => +v);

let graph = Array.from({length: N+1},() => []); // 그래프
let remainV = Array.from({length: N}, (_, i) => i+1); // 정점들 
vertex.forEach((relation) => {
  let [x, y] = relation.split(' ').map(v => +v);
  graph[x].push(y);
  graph[y].push(x);
})
graph = graph.map(v => v.sort((a, b) => a - b)); // 그래프 내부 정렬

function HelperDFS(start){
  let visited = Array.from({length: N+1}, () => false);

  function DFS(v) {
    visited[v] = true;
    remainV = remainV.filter(rm => rm !== v);

    graph[v].forEach((neighbor) => {
      if(!visited[neighbor]) {
        return DFS(neighbor);
      }
    });
  }

  DFS(start);
}

let count = 0;
while(remainV.length > 0) {
  let tmp = remainV.shift();
  HelperDFS(tmp);
  count++;
}

console.log(count);

```

---

- 1707 이분 그래프 : 무방향 그래프에서 사이클 찾기 (Union Find) or DFS
    
```jsx
이분 그래프
시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	256 MB	72126	19033	11420	23.500%
문제
그래프의 정점의 집합을 둘로 분할하여, 
각 집합에 속한 정점끼리는 서로 인접하지 않도록 분할할 수 있을 때, 
그러한 그래프를 특별히 이분 그래프 (Bipartite Graph) 라 부른다.

그래프가 입력으로 주어졌을 때, 이 그래프가 이분 그래프인지 아닌지 판별하는 프로그램을 작성하시오.

입력
입력은 여러 개의 테스트 케이스로 구성되어 있는데, 
첫째 줄에 테스트 케이스의 개수 K가 주어진다. 
각 테스트 케이스의 첫째 줄에는 그래프의 정점의 개수 V와 간선의 개수 E가 빈 칸을 사이에 두고 순서대로 주어진다. 
각 정점에는 1부터 V까지 차례로 번호가 붙어 있다. 
이어서 둘째 줄부터 E개의 줄에 걸쳐 간선에 대한 정보가 주어지는데, 
각 줄에 인접한 두 정점의 번호 u, v (u ≠ v)가 빈 칸을 사이에 두고 주어진다. 

출력
K개의 줄에 걸쳐 입력으로 주어진 그래프가 이분 그래프이면 YES, 아니면 NO를 순서대로 출력한다.

제한
2 ≤ K ≤ 5
1 ≤ V ≤ 20,000
1 ≤ E ≤ 200,000
예제 입력 1 
2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2
예제 출력 1 
YES
NO
```

알고리즘

그래프 내부에 순환고리가 있는지 없는지만 체크하면 되지 않을까
생각보다 사이클 감지 알고리즘이 매우매우 고난이도의 문제였다. 자료 찾아보는데 꽤 시간이 걸렸다
결론만 정리를 하자면 사이클 찾기 알고리즘은 크게 서로소 집합을 활용한 Union Find 알고리즘과 DFS 알고리즘이 있다.
나는 DFS 알고리즘으로 먼저 해결을 해볼것이다.
    
1. DFS 알고리즘으로 사이클 찾기
    
```jsx
DFS 순회에서 시작노드로 다시 돌아오는 경우를 찾으면 된다.
1) 정점 u로 시작했을 때 다음에 방문해야할 정점은 미리 방문한 정점인 출발점으로 되돌아 와야 한다
2) 이때 바로 직전에 방문한 정점이 아니어야 한다.
```

더 블로깅을 해보니 DFS의 사이클 찾기는 ‘유향 그래프’ 한에서 역방향 엣지를 찾는 풀이라
이 문제와는 맞지 않는다고 판단했고
다른 사람들 코드 찾아보니까 그래프 내 사이클 찾기로 해결하지 않는 경우가 대다수였다.
다시 천천히 아주 쉽게 생각해봐야겠다.
    
2. BFS로 해결하기

1) 모든 TestCase 만큼 “YES”로 셋팅된 result 배열 생성
2) 순회 

그래프들의 노드들에 색깔을 정해줄 수 있다면 인접한 노드끼리는 반드시 색깔이 달라야 이분 그래프라 할 수 있다. 인접한 노드들은 방문하지 않았으면 현재 노드와 다른 색깔로 초기화해주고 방문한다.

만약 이미 방문했다면… 현재 방문 노드와 반드시 색상이 달라야 한다!!

만약 방문도 했고, 색상도 같다면 이분 그래프가 아니다 ❌❌❌❌

```jsx
const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n');

const K = +input.shift();
const SET_A = 1;
const SET_B = 2;

let result = Array.from({length: K}, () => "YES");

function BFS(graph, start, count, visitV) {
let visited = Array.from({length: graph.length - 1}, () => 0);
let queue = [start];
visited[start] = SET_A;

while(queue.length) {
let v = queue.shift();

for(let neighbor=0; neighbor < graph[v].length ; neighbor++) {
  if(visited[neighbor]) {
    // 이미 방문
    if(visited[v] === visited[neighbor]) {
      result[count] = "NO";
                break;
    }		
  } else {
  //미방문
    if(visited[v] === SET_A) {
      visited[neighbor] = SET_B;	
    } else if(visited[v] === SET_B) {
      visited[neighbor] = SET_A;	
    }
    queue.push(neighbor);
    visitV = visitV.filter(visit => visit !== neighbor);
  }
}
    if(result[count] === "NO") break;
}
return visitV;

}

for(let i = 0; i < K; i++) {
const [V, E] = input.shift().split(' ').map(Number);
const edges = input.splice(0, E).map(v => v.split(' ').map(Number));
let graph = Array.from({length: V+1}, () => []);
edges.forEach((edge) => {
let [from, to] = edge;
graph[from].push(to);
graph[to].push(from);
});

let visitedVertex = Array.from({length: V}, (_,i) => i+1);
while(visitedVertex.length > 0) {
        let tmp = visitedVertex.shift();
  visitedVertex = BFS(graph, tmp, i, visitedVertex);
}
}

console.log(result.join('\n'));
```

```jsx
메모리 초과는 제 경우에 간선의 정보를 인접 행렬(2차원배열)로 저장했고

인접 리스트(VECTOR)로 수정한 뒤에 해결됐습니다.

반례이전에 다른분이 올려주신 자주 틀리는 경우도 꼭 챙겨보시고 돌려보세요 화이팅

반례모음
1
6 6
1 3
3 4
4 2
2 5
5 6
6 1
YES

2
3 3
1 2
2 3
1 3
2 1
1 2
NO YES

1
5 4
1 2
2 3
3 1
4 5
NO

1
4 2
1 2
3 4
YES

1
5 4
1 2
3 4
4 5
3 5
NO

1
4 3
1 4
4 3
3 2
YES

1
5 4
1 2
1 3
2 4
3 5
YES

1
4 3
1 2
4 3
2 3
YES
```

---

- 10451 순열 사이클 : 방향 그래프에서 사이클 찾기 (DFS 스패닝 트리)
    

```jsx
순열 사이클
시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	16084	10149	7295	62.828%
문제
1부터 N까지 정수 N개로 이루어진 순열을 나타내는 방법은 여러 가지가 있다. 
예를 들어, 8개의 수로 이루어진 순열 (3, 2, 7, 8, 1, 4, 5, 6)을 배열을 이용해 표현하면
또는, Figure 1과 같이 방향 그래프로 나타낼 수도 있다.

순열을 배열을 이용해  
i에서 πi로 간선을 이어 그래프로 만들 수 있다.

Figure 1에 나와있는 것 처럼, 순열 그래프 (3, 2, 7, 8, 1, 4, 5, 6) 에는 총 3개의 사이클이 있다. 
이러한 사이클을 "순열 사이클" 이라고 한다.

N개의 정수로 이루어진 순열이 주어졌을 때, 순열 사이클의 개수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다. 
각 테스트 케이스의 첫째 줄에는 순열의 크기 N (2 ≤ N ≤ 1,000)이 주어진다. 
둘째 줄에는 순열이 주어지며, 각 정수는 공백으로 구분되어 있다.

출력
각 테스트 케이스마다, 입력으로 주어진 순열에 존재하는 순열 사이클의 개수를 출력한다.

예제 입력 1 
2 // T
8 // N
3 2 7 8 1 4 5 6
10 // N (순열의 크기)
2 1 3 4 5 6 7 9 10 8

예제 출력 1 
3
7
```

스패닝 트리 개념 이용

어떤 그래프를 DFS로 탐색했을 때 지나간 edge만 남겨놓으면 트리 형태가 된다 → DFS 스패닝 트리

```jsx
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = +input.shift();

function HelperDFS(start) {
  let visited = [];
  let finished = [];

  DFS(start) {
    if(visited[start]) { // 이미 방문했었던 정점에 도착
      return 
    }
    visited[start] = true; //
    result.push(start);

    graph.forEach((neighbor) => {
      if(!visited[neighbor]) {
        DFS(neighbor);
      }
    })

  }

}
for(let i = 0; i < T; i++) {

}
```

Tree edge (트리 간선) : DFS 스패닝 트리에 속하는 간선이다. (DFS를 하면서 거쳐간 간선)

Forward edge(순방향 간선) : DFS를 통해 어떤 연결된 두 노드 사이의 부모 자식 관계를 정립할 수 있지만 DFS 스패닝 트리에서 트리 간선이 아닌 간선이다.

Back Edge (역방향 간선) : DFS 스패닝 트리에서 자식 → 부모로 거슬러 올라가는 간선이다.

Cross Edge (교차 간선) : 위 세종류를 제외한 나머지 간선이며, 형제 노드끼리 연결된 간선이다
각 간선들은 DFS의 구현에 따라 언제든지 그 지위가 바뀔 수 있다.
    
**방향 그래프에서 사이클 찾기**

위 분류를 통해 방향 그래프에서 사이클이 존재하는 경우를 간단히 정의할 수 있다.

= 역방향 간선의 존재 여부이다. 역방향 간선의 개수는 곧 사이클의 개수가 된다.

역방향 간선은 DFS을 응용하면 간단히 구현할 수 있다.

우선 다음 두 정보를 관리하는 배열을 둔다.

discovered[] : 기존의 DFS에서 visited[]의 역할을 하는 그 배열이다. 해당 노드를 방문했는지 여부를 관리한다.

finished[] : 해당 노드를 대상으로 호출한 함수가 종료되었는지 여부를 관리하는 배열이다.

DFS 탐색을 하면서 방문하지 않은 노드는 방문하고 만약 해당 노드가 방문된 상태인데 종료가 되지 않았다면(discovered == true && finished == false이면) 역방향 간선을 찾았다는 의미이다. 다음 그림을 보자.

---

- **2331 반복 수열 : DFS**
    
9^5 + 9^5 + 9^5 + 9^5 = 약 250,000가 최대

```jsx
def next(A,P):  // 다음 수 구하기
  a = str(A)
  answer = 0
  for i in a:
    answer+=pow(int(i), P)
  return answer

def DFS(A,P,count, check): 
  if check[A] != -1: // 이미 방문한 구간이라면, 카운트된 값을 반환
    return check[A]
  check[A] = count
  b = next(A,P)
  count+=1
  return DFS(b,P,count,check)

check = [-1]*250000
A, P = map(int, input().split())
count = 0
print(DFS(A,P,count,check))
```

```jsx
let [A, P] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let check = Array.from({length: 250000}, () => -1)
let count = 0;

function next(a, p) {
  let answer = 0;
  a.toString().split('').map(Number).forEach((i) => {
    answer += Math.pow(i, +p); 
  });
  return answer;
}

function DFS(a, p, cnt, chk) {
  if(chk[a] !== -1) {
    return chk[a];
  }
  chk[a] = cnt;
  let b = next(a, p);
  cnt++;
  return DFS(b, p, cnt, chk);
}

DFS(A,P,count,check);
```

---

- 9466 텀 프로젝트 : DFS로 사이클 판단
    
```powershell
이번 가을학기에 '문제 해결' 강의를 신청한 학생들은 텀 프로젝트를 수행해야 한다. 
프로젝트 팀원 수에는 제한이 없다. 심지어 모든 학생들이 동일한 팀의 팀원인 경우와 같이 한 팀만 있을 수도 있다. 
프로젝트 팀을 구성하기 위해, 모든 학생들은 프로젝트를 함께하고 싶은 학생을 선택해야 한다. 
(단, 단 한 명만 선택할 수 있다.) 혼자 하고 싶어하는 학생은 자기 자신을 선택하는 것도 가능하다.

학생들이(s1, s2, ..., sr)이라 할 때, r=1이고 s1이 s1을 선택하는 경우나, s1이 s2를 선택하고, 
s2가 s3를 선택하고,..., sr-1이 sr을 선택하고, sr이 s1을 선택하는 경우에만 한 팀이 될 수 있다.

예를 들어, 한 반에 7명의 학생이 있다고 하자. 학생들을 1번부터 7번으로 표현할 때, 선택의 결과는 다음과 같다.

1	2	3	4	5	6	7
3	1	3	7	3	4	6
위의 결과를 통해 (3)과 (4, 7, 6)이 팀을 이룰 수 있다. 1, 2, 5는 어느 팀에도 속하지 않는다.

주어진 선택의 결과를 보고 어느 프로젝트 팀에도 속하지 않는 학생들의 수를 계산하는 프로그램을 작성하라.

**입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다. 
각 테스트 케이스의 첫 줄에는 학생의 수가 정수 n (2 ≤ n ≤ 100,000)으로 주어진다. 
각 테스트 케이스의 둘째 줄에는 선택된 학생들의 번호가 주어진다. (모든 학생들은 1부터 n까지 번호가 부여된다.)**
2
7
3 1 3 7 3 4 6
8
1 2 3 4 5 6 7 8
**출력
각 테스트 케이스마다 한 줄에 출력하고, 각 줄에는 프로젝트 팀에 속하지 못한 학생들의 수를 나타내면 된다.**
3
0
```
    
그러면 다음과 같은 그래프로 나타낼 수  있는데 여기서 팀이 될 수 있는 것은 (3)과 (4,6,7) 뿐이다.

즉, `사이클을 형성`하는 것만 팀이 될 수 있다.

따라서 이 `사이클을 형성하는 번호를 제외한 나머지`가 어느 프로젝트 팀에도 속하지 않는 학생들의 수이다.

사이클을 판단하는 방법은 여러가지가 있겠지만 나는 `dfs`를 활용하여 사이클을 판단하였다.

그럼 아래 코드를 살펴보자


```jsx
import sys

sys.setrecursionlimit(10 ** 7)

input = sys.stdin.readline

def dfs(x):
    global ans
    vis[x] = True
    cycle.append(x)
    num = arr[x]

    if vis[num]:
        if num in cycle:
            ans += cycle[cycle.index(num):]
        return
    else:
        dfs(num)

t = int(input())

for _ in range(t):
    n = int(input())
    arr = [0] + list(map(int, input().split()))
    vis = [False] * (n + 1)
    ans = []

    for i in range(1, n + 1):
        if not vis[i]:
            cycle = []
            dfs(i)

    print(n - len(ans))
```

```jsx
const [K, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];

for(let i = 0 ; i < +K ; i++) {
  let n = +input[i];
  let nums = [0].concat(input[i+1].split(' ').map(Number));
  visited = Array.from({length: n+1}, () => false);
  let answer = [];
  let cycle = [];

  for(let k = 1; k <= n; k++) {
      if(!visited[k]) {
          DFS(k, nums, visited, answer, cycle);
      }
  }
  result.push(n - answer.length);
}

function DFS(start, graph, vis, ans, cyc) {
    // 방문 처리
    vis[start] = true;
    // cyc에도 추가
    cyc.push(start);
    // start가 가라키는 노드로 이동
  let num = graph[start-1]

    if(vis[num]) {
        // 이미 방문?
        if(cyc.includes(num)) {
            ans.push(num);
            return;
        }
    } else {
        DFS(num, graph, vis, ans, cyc);
    }
}

console.log(result.join('\n'));
```

시간 초과

```jsx
const [K, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];

for(let i = 0 ; i < +K ; i++) {
  let n = +input[i * 2];
  let nums = [0].concat(input[i * 2 + 1].split(' ').map(Number));
  visited = Array.from({length: n+1}, () => false);
  let answer = [];
  let cycle = [];

    for(let k = 1; k <= n; k++) {
        if(!visited[k]) {
            DFS(k, nums, visited, answer, cycle);
        }
    }
  result.push(n - answer.length);
}

function DFS(start, graph, vis, ans, cyc) {
    // 방문 처리
    vis[start] = true;
    // cyc에도 추가
    cyc.push(start);
    // start가 가라키는 노드로 이동
  let num = graph[start]

    if(vis[num]) {
        // 이미 방문?
        if(cyc.includes(num)) {
            ans.push(num);
            return;
        }
    } else {
        DFS(num, graph, vis, ans, cyc);
    }
}

console.log(result.join('\n'));

```

---

- **2667 단지 번호 붙이기 : DFS로 1을 만날때마다 파고들면서 카운트 세기 [가로 세로 높이가 같을 때]**

```jsx
<그림 1>과 같이 정사각형 모양의 지도가 있다. 1은 집이 있는 곳을, 
0은 집이 없는 곳을 나타낸다. 철수는 이 지도를 가지고 연결된 집의 모임인 단지를 정의하고, 
단지에 번호를 붙이려 한다. 여기서 연결되었다는 것은 어떤 집이 좌우, 
혹은 아래위로 다른 집이 있는 경우를 말한다. 
대각선상에 집이 있는 경우는 연결된 것이 아니다. 

<그림 2>는 <그림 1>을 단지별로 번호를 붙인 것이다. 지도를 입력하여 단지수를 출력하고, 
각 단지에 속하는 집의 수를 오름차순으로 정렬하여 출력하는 프로그램을 작성하시오.
```
    

```jsx
입력
첫 번째 줄에는 지도의 크기 N(정사각형이므로 가로와 세로의 크기는 같으며 5≤N≤25)이 입력되고, 그 다음 N줄에는 각각 N개의 자료(0혹은 1)가 입력된다.

출력
첫 번째 줄에는 총 단지수를 출력하시오. 그리고 각 단지내 집의 수를 오름차순으로 정렬하여 한 줄에 하나씩 출력하시오.

예제 입력 1 
7
0110100
0110101
1110101
0000111
0100000
0111110
0111000
예제 출력 1 
3
7
8
9
```

solution

1. 해당 바둑판을 2차원 배열로 표현 (graph)

```jsx
graph = input.map(e => e.split('').map(v => +v))
```

2. 방문 처리를 표시할 visited 역시 N * N 크기의 2차원 배열로 표현

```jsx
let visited = Array.from({length: N}, ()=> Array.from({length: N}, () => false));
```

3. 상, 하, 좌, 우 돌면서 방문할 것이므로 그 방향키 역할을 1차원 배열로 선언

```jsx
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
```


```jsx
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input.shift();

// 입력값 받기
let graph = input.map(elem => elem.split('').map(v => +v));
let visited = Array.from({length: N}, ()=> Array.from({length: N}, () => false));
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let count = 0;
let totalDanzi = 0;
let itemOfDanzi = [];

// dfs 함수 선언
function dfs(v) {
    // 상, 하, 좌, 우 돌면서 방문하지 않았고 1인 경우에 
    // 1. count 증가 2. 방문 표시 3. dfs를 재호출(재귀)
  for(let i = 0; i < 4; i++) {
    let nx = v.x + dx[i];
    let ny = v.y + dy[i];
    if(nx < 0 || nx >= N || ny < 0 || ny >= N) {
      continue;
    } else if(visited[nx][ny] == false && graph[nx][ny] == 1) {
      count++;
      visited[nx][ny] = true;
      dfs({x: nx, y: ny});
    }
  }
}

for(let i = 0; i < N; i++) {
  for(let j = 0; j < N; j++) {
    if(visited[i][j] === false && graph[i][j] === 1) {
      // 맨 처음에는 시작점을 포함하기 위해 count 1초기화 , (i,j)에 해당하는 위치 방문 표시
      visited[i][j] = true;
      count = 1;
      // dfs 호출
      dfs({x: i, y: j});
      // dfs 끝나고 전체 단지 수를 하나 증가시킨다. 
      totalDanzi++;
      // count를 배열에 추가시키고 나중에 출력한다.
      itemOfDanzi.push(count);
    }
  }
}

console.log(totalDanzi);
console.log(itemOfDanzi.sort((a, b) => a - b).join('\n'));
```

---

- **4963 섬의 개수 : DFS 응용 [2667, 단지번호 붙이기 코드 응용 = 가로 세로 높이가 다를 때]**

```jsx
정사각형으로 이루어져 있는 섬과 바다 지도가 주어진다. 섬의 개수를 세는 프로그램을 작성하시오.

한 정사각형과 가로, 세로 또는 대각선으로 연결되어 있는 사각형은 걸어갈 수 있는 사각형이다. 

두 정사각형이 같은 섬에 있으려면, 한 정사각형에서 다른 정사각형으로 
걸어서 갈 수 있는 경로가 있어야 한다. 
지도는 바다로 둘러싸여 있으며, 지도 밖으로 나갈 수 없다.

입력
입력은 여러 개의 테스트 케이스로 이루어져 있다. 
각 테스트 케이스의 첫째 줄에는 지도의 너비 w와 높이 h가 주어진다.
w와 h는 50보다 작거나 같은 양의 정수이다.

둘째 줄부터 h개 줄에는 지도가 주어진다. 1은 땅, 0은 바다이다.
입력의 마지막 줄에는 0이 두 개 주어진다.

출력
각 테스트 케이스에 대해서, 섬의 개수를 출력한다.
```

0 1 1

1 1 0

일때 3 X 2 이지만

배열로 표현하면

0: [’0’, ‘1’, ‘1’]

1 : [’1’, ‘1’, ‘0’]

이기 때문에 height 기준으로 배열 세어주는 것 주의

```jsx
let input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let results = [];

while(input.length > 1) {
  let [w, h] = input.shift().split(' ').map(v => +v);
  let graph = input.splice(0, h).map(v => v.split(' '));
  let count = 0;

  let dx = [0, 0, -1, 1, -1, 1, 1, -1]
  let dy = [-1, 1, 0, 0, -1, 1, -1, 1];
  let visited = Array.from({length: h}, () => Array.from({length: w}, () => false));

    function DFS(v) {
        for(let i = 0; i < 8; i++) {
            let nx = v.x + dx[i];
            let ny = v.y + dy[i];
            if(nx < 0 || nx >= w || ny < 0 || ny >= h) { continue; }
            else if(visited[ny][nx] == false && graph[ny][nx] == 1) {
                visited[ny][nx] = true;
                DFS({x: nx, y: ny});
            }
        }
    }

    for(let i = 0; i < h; i++) {
        for(let j = 0 ; j < w; j++) {
            if(visited[i][j] == false && graph[i][j] == 1) {
                visited[i][j] = true
                DFS({x: j, y: i});
                count++;
            }
        }
    }


  results.push(count);
}

console.log(results);
```

---

7576 토마토: 예제는 다 맞추는데 자꾸 시간 초과 : 다른 사람 답지 봄

- 풀이
    
```jsx
철수의 토마토 농장에서는 토마토를 보관하는 큰 창고를 가지고 있다. 
토마토는 아래의 그림과 같이 격자 모양 상자의 칸에 하나씩 넣어서 창고에 보관한다. 

창고에 보관되는 토마토들 중에는 잘 익은 것도 있지만, 
아직 익지 않은 토마토들도 있을 수 있다. 보관 후 하루가 지나면, 
익은 토마토들의 **인접한 곳에 있는** 익지 않은 토마토들은 익은 토마토의 영향을 받아 익게 된다. 
하나의 토마토의 인접한 곳은 왼쪽, 오른쪽, 앞, 뒤 네 방향에 있는 토마토를 의미한다. 
대각선 방향에 있는 토마토들에게는 영향을 주지 못하며, 
토마토가 혼자 저절로 익는 경우는 없다고 가정한다. 
철수는 창고에 보관된 토마토들이 며칠이 지나면 다 익게 되는지, 그 최소 일수를 알고 싶어 한다.

토마토를 창고에 보관하는 격자모양의 상자들의 크기와 익은 토마토들과 익지 않은 토마토들의 정보가 주어졌을 때, 
며칠이 지나면 토마토들이 모두 익는지, 그 최소 일수를 구하는 프로그램을 작성하라. 
단, 상자의 일부 칸에는 토마토가 들어있지 않을 수도 있다.

입력
첫 줄에는 상자의 크기를 나타내는 두 정수 M,N이 주어진다. 
M은 상자의 가로 칸의 수, N은 상자의 세로 칸의 수를 나타낸다. 
단, 2 ≤ M,N ≤ 1,000 이다. 둘째 줄부터는 하나의 상자에 저장된 토마토들의 정보가 주어진다. 
즉, 둘째 줄부터 N개의 줄에는 상자에 담긴 토마토의 정보가 주어진다. 
하나의 줄에는 상자 가로줄에 들어있는 토마토의 상태가 M개의 정수로 주어진다. 
정수 1은 익은 토마토, 정수 0은 익지 않은 토마토, 정수 -1은 토마토가 들어있지 않은 칸을 나타낸다.

토마토가 하나 이상 있는 경우만 입력으로 주어진다.

출력
여러분은 토마토가 모두 익을 때까지의 최소 날짜를 출력해야 한다. 
만약, 저장될 때부터 모든 토마토가 익어있는 상태이면 0을 출력해야 하고, 
토마토가 모두 익지는 못하는 상황이면 -1을 출력해야 한다.

예제 입력 1 
6 4
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1
예제 출력 1 
8
예제 입력 2 
6 4
0 -1 0 0 0 0
-1 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1
예제 출력 2 
-1
예제 입력 3 
6 4
1 -1 0 0 0 0
0 -1 0 0 0 0
0 0 0 0 -1 0
0 0 0 0 -1 1
예제 출력 3 
6
예제 입력 4 
5 5
-1 1 0 0 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 0 0 0 0
예제 출력 4 
14
예제 입력 5 
2 2
1 -1
-1 1
예제 출력 5 
0
```

처음부터 끝까지 훑으면서, 

1. visited false이면서 graph[i][j]가 1(익은 토마토)를 발견하면, BFS를 시작한다.
2. BFS를 하면서 visited false이면서 graph[i][j] == 0을 발견하면 count를 세고 visited true를 하고 graph[i][j] 를 1로 변경한다.
3. 그렇게 모든 원소를 훑은 뒤, 다시 한번 이중 for문을 돌려서
    1. graph[i][j]들 중 0이 하나라도 포함이 된다면 -1
    2. 0이 없다면 count를 출력한다. 

```jsx
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [w, h] = input.splice(0, 1).split(' ').map(Number);

let graph = input.splice(0, h).map(v => v.split(' '));
let visited = Array.from({length: h}, () => Array.from({length: w}, () => false));
let answer = 0;
let queue = [];
let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];

// 그래프 중 1을 가지면 미리 queue에 넣기
for(let i = 0; i < h; i++) {
    for(let j = 0; j < w; j++) {
      if(+graph[i][j] === 1) {
          queue.push({h: i, w: j})
          visited[i][j] = true;
      } 
    }
}

for(let i = 0; i < h; i++) {
  for(let j = 0; j < w; j++) {
    while(queue.length) {
      let x = queue.shift();
      for(let K = 0; K < 4; K++) {
        let nh = x.h + dy[K];
        let nw = x.w + dx[K];
        if(nh < 0 || nh >= h || nw < 0 || nw >= w) continue;
        else if(!visited[nh][nw] && graph[nh][nw] === '0') {
          graph[nh][nw] = +graph[x.h][x.w] + 1
          visited[nh][nw] = true;
          queue.push({h: nh, w: nw});
        }
      }
    }
  }
}

for(let i = 0; i < h; i++) {
    for(let j = 0; j < w; j++) {
        if(+graph[i][j] === 0) {
            answer = -1;
            break;

        } 
        if(answer < graph[i][j]) answer = graph[i][j];
    }
    if(answer == -1) {
        answer = 0;
        break;
    }
}
console.log(answer - 1);
```

예제는 모두 통과한 코드

시간 초과 이슈는

queue.shift() 떄문인 것 같다.

```jsx
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [w, h] = input.splice(0, 1).split(' ').map(Number);

let graph = input.splice(0, h).map(v => v.split(' '));
let visited = Array.from({length: h}, () => Array.from({length: w}, () => false));
let answer = 0;
let queue = [];
let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];

// 그래프 중 1을 가지면 미리 queue에 넣기
for(let i = 0; i < h; i++) {
    for(let j = 0; j < w; j++) {
      if(+graph[i][j] === 1) {
          queue.push({h: i, w: j})
          visited[i][j] = true;
      } 
    }
}

let prevIdx = 0;
for(let i = 0; i < h; i++) {
  for(let j = 0; j < w; j++) {
    while(true) {
      let curIdx = queue.length;
      let change = 0;
      for(let p = prevIdx; p < curIdx; p++) {
        let x = queue.shift();
        for(let K = 0; K < 4; K++) {
          let nh = x.h + dy[K];
          let nw = x.w + dx[K];
          if(nh < 0 || nh >= h || nw < 0 || nw >= w) continue;
          else if(!visited[nh][nw] && graph[nh][nw] === '0') {
            graph[nh][nw] = +graph[x.h][x.w] + 1
            visited[nh][nw] = true;
            queue.push({h: nh, w: nw});
          }
        }
      }
      if(!change) break;
      prevIdx = curIdx;
    }
  }
}

for(let i = 0; i < h; i++) {
    for(let j = 0; j < w; j++) {
        if(+graph[i][j] === 0) {
            answer = -1;
            break;

        } 
        if(answer < graph[i][j]) answer = graph[i][j];
    }
    if(answer == -1) {
        answer = 0;
        break;
    }
}
console.log(answer - 1);
```


- **7576 다른 사람 풀이**
    
```jsx
let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [M, N] = input[0].split(" ").map(Number);
const DX = [-1, 0, 0, 1];
const DY = [0, -1, 1, 0];
const q = new Array(1005).fill(0);
let head = 0;
let tail = 0;

const q_push = (dat) => {
  q[tail++] = dat;
};
const q_shift = () => {
  return q[head++];
};
const q_size = () => tail - head;

let list = [];
let c = [];
for (let i = 1; i <= N; i++) {
  let line = input[i].split(" ").map(Number);
  list.push(line);
  c.push(line);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (list[i][j] === 1) {
      q_push({ x: i, y: j });
    }
  }
}
while (q_size() > 0) {
  let curr = q_shift();
  for (let i = 0; i < 4; i++) {
    const nextX = curr.x + DX[i];
    const nextY = curr.y + DY[i];
    if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
    if (c[nextX][nextY] === 0) {
      c[nextX][nextY] = c[curr.x][curr.y] + 1;
      q_push({ x: nextX, y: nextY });
    }
  }
}

let max = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (list[i][j] === 0) {
      console.log(-1);
      return;
    }
    if (list[i][j] > max) max = list[i][j];
  }
}
console.log(max - 1);
```

---

**2178 미로 탐색 : 최단 경로 찾기 문제**

- 풀이
    
```jsx
N×M크기의 배열로 표현되는 미로가 있다.

1	0	1	1	1	1
1	0	1	0	1	0
1	0	1	0	1	1
1	1	1	0	1	1

미로에서 1은 이동할 수 있는 칸을 나타내고, 
0은 이동할 수 없는 칸을 나타낸다. 
이러한 미로가 주어졌을 때, (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 
지나야 하는 최소의 칸 수를 구하는 프로그램을 작성하시오. 

한 칸에서 다른 칸으로 이동할 때, 서로 인접한 칸으로만 이동할 수 있다.

위의 예에서는 15칸을 지나야 (N, M)의 위치로 이동할 수 있다. 
칸을 셀 때에는 시작 위치와 도착 위치도 포함한다.

첫째 줄에 두 정수 N, M(2 ≤ N, M ≤ 100)이 주어진다. 
다음 N개의 줄에는 M개의 정수로 미로가 주어진다. 각각의 수들은 붙어서 입력으로 주어진다.
4 6
101111
101010
101011
111011

첫째 줄에 지나야 하는 최소의 칸 수를 출력한다. 항상 도착위치로 이동할 수 있는 경우만 입력으로 주어진다.
15
```

```jsx
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [H,W] = input[0].split(' ').map(Number);
let graph = input.splice(1, H).map(v => v.split(''))
let visited = Array.from({length: H}, () => Array.from({length: W}, () => false));
let queue = [{h: 0, w: 0}];
visited[0][0] = true;
let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];

// BFS 코드
while(queue.length) {
  let x = queue.shift();

  for(let i = 0; i < 4; i++) {
    // 동서남북 좌표 조회
    let [nh, nw] = [x.h + dy[i], x.w + dx[i]];
    if(nh < 0 || nh >= H || nw < 0 || nw >= W) continue;
    if(!visited[nh][nw] && graph[nh][nw] !== '0') {
      // 아직 미 방문했으나 지나갈 수 있는 경로일 때,
      // 이전 경로까지 누적된 칸수에 + 1를 한 칸수를 해당 칸에 기록.
      graph[nh][nw] = +graph[x.h][x.w] + 1;
      visited[nh][nw] = true;
      queue.push({h: nh, w: nw});
    }
  }
}

// (N,M)지점의 칸 수 출력 = 총 누적된 최단 경로의 칸수
console.log(graph[H-1][W-1]);
```

---

2146 다리 만들기 DFS, BFS 활용 문제 (단지 번호 붙이기 + ..)

- 풀이
```jsx
여러 섬으로 이루어진 나라가 있다. 
이 나라의 대통령은 섬을 잇는 다리를 만들겠다는 공약으로 인기몰이를 해 당선될 수 있었다. 
하지만 막상 대통령에 취임하자, 다리를 놓는다는 것이 아깝다는 생각을 하게 되었다. 
그래서 그는, 생색내는 식으로 한 섬과 다른 섬을 잇는 다리 하나만을 만들기로 하였고, 
그 또한 다리를 가장 짧게 하여 돈을 아끼려 하였다.

이 나라는 N×N크기의 이차원 평면상에 존재한다. 이 나라는 여러 섬으로 이루어져 있으며, 
섬이란 동서남북으로 육지가 붙어있는 덩어리를 말한다. 다음은 세 개의 섬으로 이루어진 나라의 지도이다.

위의 그림에서 색이 있는 부분이 육지이고, 색이 없는 부분이 바다이다. 
이 바다에 가장 짧은 다리를 놓아 두 대륙을 연결하고자 한다. 
가장 짧은 다리란, 다리가 격자에서 차지하는 칸의 수가 가장 작은 다리를 말한다. 
다음 그림에서 두 대륙을 연결하는 다리를 볼 수 있다.

물론 위의 방법 외에도 다리를 놓는 방법이 여러 가지 있으나, 
위의 경우가 놓는 다리의 길이가 3으로 가장 짧다
(물론 길이가 3인 다른 다리를 놓을 수 있는 방법도 몇 가지 있다).

지도가 주어질 때, 가장 짧은 다리 하나를 놓아 두 대륙을 연결하는 방법을 찾으시오.

입력
첫 줄에는 지도의 크기 N(100이하의 자연수)가 주어진다. 
그 다음 N줄에는 N개의 숫자가 빈칸을 사이에 두고 주어지며, 
0은 바다, 1은 육지를 나타낸다. 항상 두 개 이상의 섬이 있는 데이터만 입력으로 주어진다.

출력
첫째 줄에 가장 짧은 다리의 길이를 출력한다.

예제 입력 1 
10
1 1 1 0 0 0 0 1 1 1
1 1 1 1 0 0 0 0 1 1
1 0 1 1 0 0 0 0 1 1
0 0 1 1 1 0 0 0 0 1
0 0 0 1 0 0 0 0 0 1
0 0 0 0 0 0 0 0 0 1
0 0 0 0 0 0 0 0 0 0
0 0 0 0 1 1 0 0 0 0
0 0 0 0 1 1 1 0 0 0
0 0 0 0 0 0 0 0 0 0
예제 출력 1 
3

```
    
알고리즘

DFS 로 각각 섬들에 표시를 한다. 1, 2, 3..

섬이 아닌 구역만 방문하면서

섬과의 가장 짦은 경로를 찾는 문제 : 간척사업. 각 섬들이 1칸씩 확장하는 것을 말한다

1. 탐색을 통해 각 섬의 번호를 지정해준다
2. 모든 육지 중, 주변에 바다가 존재한다면 거리를 구하는 BFS 탐색 수행
3. 자기 육지가 아니거나 바다인 경우 큐에 넣어줌
4. 자기와 영역 번호가 다른 육지를 만나면 최소값을 갱신

1번 과정은 BFS을 통해 쉽게 번호를 지정해줄 수 있다

같은 섬인 조건은 상하좌우가 연결되어 있으면 된다

조건문을 상하좌우 4개 만들 필요 없이 아래와 같이 활용하자.

```jsx

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let graph = input.slice(1).map((str) => str.split(' ').map(Number));
let visited = Array.from(Array(n), () => Array(n).fill(false));
let islandCnt = 0;

function check(x, y) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

// 인접 영역 번호 매기기
//DFS: 모든 인접한 노드 순회하면서 번호 매기기
function dfs(x, y, islandCnt) {
  visited[x][y] = true;
  graph[x][y] = islandCnt;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (check(nx, ny) && graph[nx][ny] && !visited[nx][ny]) 
      dfs(nx, ny, islandCnt);
  }
}

// 매 원소마다 DFS 실행
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] && !visited[i][j]) 
      dfs(i, j, ++islandCnt);
  }
}

// BFS
function bfs(islandCnt) {
  let queue = [];
  visited = Array.from(Array(n), () => Array(n).fill(0));
  // 매 BFS 실행마다 queue와 visited 초기화

  // 한 번에 자기 육지인 애들 모조리, 몽땅 queue에 넣고 방문처리
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++)
      if (graph[i][j] == islandCnt) {
        visited[i][j] = 1;
        queue.push([i, j]);
      }
  }

  let cnt = 0;
  while (queue.length) {
    let qlen = queue.length;

    while (qlen--) {
        // 인접한 정점 만나면서 바다 만난 카운트를 세서 기록해두고.
      let [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (!check(nx, ny)) continue;
        // 바다가 아닌 자기와 다른 영역 번호를 만남 -> 함수 종료하고 최소값 갱신
        if (graph[nx][ny] !== 0 && graph[nx][ny] !== islandCnt) 
          return cnt;
        // 바다이면 방문처리하고 queue에 넣기 
        if (graph[nx][ny] === 0 && !visited[nx][ny]) {
          visited[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
    cnt++;
  }
}

let ans = Infinity;

// 섬의 개수만큼 반복
for (let i = 1; i <= islandCnt; i++) {
  ans = Math.min(ans, bfs(i));
}

console.log(ans);
```

---

**1991 트리 순회: PreOrder, InOrder, PostOrder (재귀)**

- 풀이

```jsx
const [firstLine, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

// 입력 받기
let tree = {}; //object
let n = +firstLine;
let arr = input.forEach((v) => {
  let [node, left, right] = v.trim().split(" ");
  tree[node] = [left, right];
});

// 전위
let answer = [];
function preOrder(node) {
  if(node == '.') return;
  let [lt, rt] = tree[node];
  answer.push(node);
  preOrder(lt);
  preOrder(rt);
}
// 중위
function inOrder(node) {
  if(node == '.') return;
  let [lt, rt] = tree[node];
  inOrder(lt);
  answer.push(node);
  inOrder(rt);
}
// 후위
function postOrder(node) {
  if(node == '.') return;
  let [lt, rt] = tree[node];
  postOrder(lt);
  postOrder(rt);
  answer.push(node);
}

// 출력
preOrder("A");
console.log(answer.join(''));
answer=[];
inOrder("A");
console.log(answer.join(''));
answer=[];
postOrder("A");
console.log(answer.join(''));
```
    
---

**11725 트리의 부모 찾기 : DFS와 양방향 그래프 활용**

- 풀이
    
```jsx
루트 없는 트리가 주어진다. 이때, 트리의 루트를 1이라고 정했을 때, 
각 노드의 부모를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 노드의 개수 N (2 ≤ N ≤ 100,000)이 주어진다. 
둘째 줄부터 N-1개의 줄에 트리 상에서 연결된 두 정점이 주어진다.
7
1 6
6 3
3 5
4 1
2 4
4 7
예제 출력 1 
4
6
1
3
1
4
출력
첫째 줄부터 N-1개의 줄에 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력한다.

12
1 2
1 3
2 4
3 5
3 6
4 7
4 8
5 9
5 10
6 11
6 12
예제 출력 2 
1
1
2
3
3
4
4
5
5
6
6
```

알고리즘

1. 각각의 관계를 2차원 배열에 양방향 관계로 나타낸다.
2. DFS를 이용해서 1을 시작점으로 각각의 관계를 순회한다.
    1. 인접한 정점이 있을 경우, 인접 정점(neighbor)가 키인 edges[neighbor] (배열)에서 v(현재 방문 정점)을 필터링한다 → 남은 정점이 해당 인덱스의 자식들
    2. 그리고 result의 인접한 정점 인덱스(neighbor)위치에 현재 정점(v)을 부모로서 기록한다 ⇒ neighbor의 부모가 v
    3. neighbor(인접 정점)에 대해서 DFS를 재귀 호출한다.
3. 모든 정점을 순회할 때까지 2를 반복한다.

```jsx
// 양방향 연결
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +input[0];
let edges = Array.from({length: N+1}, () => []);
let result = Array.from({length: N + 1}, () => -1);

// 양방향 그래프 관계처럼 두 정점의 관계를 2차원 배열로 정리
for(let edge = 1; edge < input.length; edge++) {
  let [x, y] = input[edge].split(' ');
  // 양방향 연결
  edges[x].push(y);
  edges[y].push(x);
}

/*
[
  0: [],
  1: [6, 4],
  2: [4],
  3: [5,6,7],
  4: [1,7,2],
  5: [3],
  6: [3,1],
  7: [4]
]
*/

// DFS를 이용해서
function DFS(v) {
  edges[v].forEach((neighbor) => {
    edges[neighbor] = edges[neighbor].filter(x => x != v)
    result[neighbor] = v;
    DFS(neighbor)
  })
}

DFS(1);
console.log(result.slice(2).join('\n'));

```

---

**1167 트리의 지름 : DFS를 2회 수행**

- 풀이
    
```jsx
트리의 지름이란, 트리에서 임의의 두 점 사이의 거리 중 가장 긴 것을 말한다. 
트리의 지름을 구하는 프로그램을 작성하시오.

입력
트리가 입력으로 주어진다. 먼저 첫 번째 줄에서는 트리의 정점의 개수 V가 주어지고 (2 ≤ V ≤ 100,000)
둘째 줄부터 V개의 줄에 걸쳐 간선의 정보가 다음과 같이 주어진다. 
정점 번호는 1부터 V까지 매겨져 있다.

먼저 정점 번호가 주어지고, 이어서 연결된 간선의 정보를 의미하는 정수가 두 개씩 주어지는데, 
하나는 정점번호, 다른 하나는 그 정점까지의 거리이다. 
예를 들어 네 번째 줄의 경우 정점 3은 정점 1과 거리가 2인 간선으로 연결되어 있고, 
정점 4와는 거리가 3인 간선으로 연결되어 있는 것을 보여준다. 
각 줄의 마지막에는 -1이 입력으로 주어진다. 주어지는 거리는 모두 10,000 이하의 자연수이다.

출력
첫째 줄에 트리의 지름을 출력한다.

예제 입력 1 
5
1 3 2 -1
2 4 4 -1
3 1 2 4 3 -1
4 2 4 3 3 5 6 -1
5 4 6 -1
예제 출력 1 
11
```

임의의 정점 X에서 가장 먼 정점인 Y를 찾고

찾은 정점 Y에서 가장 먼 정점 Z를 찾는다

**이 Y부터 Z까지의 경로가 트리의 지름이다**.

트리 정보 기반으로 임의의 정점에서 DFS나 BFS를 실행한 결과에다가 한번 더 실행해 트리의 지름을 구한다

주의할 점은 각 입력 행이 ‘노드 다음 노드 가중치, 다음 노드 가중치 … -1’로 주어져 있어 

입력값 처리가 좀 난해하다.

```jsx
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let V = +input[0]
input = input.slice(1);
let tree = Array.from({length: V+1}, () => []); // 2차원 배열

// 입력값 처리
input.forEach((str) => {
  let [curNode, ...nextInfo] = str.split(' ').map(Number);
  for(let i = 0; i < nextInfo.length - 1; i+= 2) {
    tree[curNode].push([nextInfo[i], nextInfo[i+1]]);
    // 각 행의 마지막 요소를 제외한 나머지를 [다음 노드, 거리] 쌍으로 입력받는다
  }
});

console.log(tree)
let visited = Array.from({length: V + 1}, () => false); // 방문 처리
let max = {node: 0, dist: Number.MIN_SAFE_INTEGER}; 
// max 변수에는 최대 거리와 도착 지점의 노드를 넣을 것임. 최소단위로 초기화

function DFS(node, dist) {
  visited[node] = true; // 방문 체크
  if(max.dist < dist) {
    max = {node, dist}
  }

  for(let [nextNode, nextDist] of tree[node]) {
    if(visited[nextNode]) {
      continue;	
    }
    DFS(nextNode, dist + nextDist);
  }
}

DFS(1, 0);
max.dist = Number.MIN_SAFE_INTEGER;
visited = Array.from({length: V + 1}, () => false);

DFS(max.node, 0);

console.log(max.dist);

``` 
---

**1967 트리의 지름 : DFS를 2회 수행**

- 풀이
    
```jsx
트리(tree)는 사이클이 없는 무방향 그래프이다. 
트리에서는 어떤 두 노드를 선택해도 둘 사이에 경로가 항상 하나만 존재하게 된다. 
트리에서 어떤 두 노드를 선택해서 양쪽으로 쫙 당길 때, 가장 길게 늘어나는 경우가 있을 것이다. 
이럴 때 트리의 모든 노드들은 이 두 노드를 지름의 끝 점으로 하는 원 안에 들어가게 된다.

이런 두 노드 사이의 경로의 길이를 트리의 지름이라고 한다. 
정확히 정의하자면 트리에 존재하는 모든 경로들 중에서 가장 긴 것의 길이를 말한다.

입력으로 루트가 있는 트리를 가중치가 있는 간선들로 줄 때, 
트리의 지름을 구해서 출력하는 프로그램을 작성하시오. 
아래와 같은 트리가 주어진다면 트리의 지름은 45가 된다.

트리의 노드는 1부터 n까지 번호가 매겨져 있다.

입력
파일의 첫 번째 줄은 노드의 개수 n(1 ≤ n ≤ 10,000)이다. 
둘째 줄부터 n-1개의 줄에 각 간선에 대한 정보가 들어온다. 
간선에 대한 정보는 세 개의 정수로 이루어져 있다. 
첫 번째 정수는 간선이 연결하는 두 노드 중 부모 노드의 번호를 나타내고, 
두 번째 정수는 자식 노드를, 세 번째 정수는 간선의 가중치를 나타낸다. 
간선에 대한 정보는 부모 노드의 번호가 작은 것이 먼저 입력되고, 
부모 노드의 번호가 같으면 자식 노드의 번호가 작은 것이 먼저 입력된다. 
루트 노드의 번호는 항상 1이라고 가정하며, 간선의 가중치는 100보다 크지 않은 양의 정수이다.
```

```jsx
12
1 2 3
1 3 2
2 4 5
3 5 11
3 6 9
4 7 1
4 8 7
5 9 15
5 10 4
6 11 6
6 12 10
예제 출력 1 
45
```

```jsx
let input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = +input[0];
input = input.slice(1);
let graph = Array.from({length: n+1}, () => []);
input.forEach((str) => {
  let [parent, ...nextInfo] = str.split(' ').map(Number);
  // 양방향 그래프
  graph[parent].push([nextInfo[0], nextInfo[1]]);
  graph[nextInfo[0]].push([parent, nextInfo[1]]);
})

// 최대 거리와 그에 해당하는 가장 먼 정점을 저장하는 max
let max = { node: 0, dist: Number.MIN_SAFE_INTEGER };
let visited = Array.from({length: n+1}, () => false);

function DFS(node, dist) {
  visited[node] = true;
  if(max.dist < dist) max = {node, dist}; // 가장 먼 정점 갱신
  // 인접 정점을 방문하면서 DFS 재귀 호출
  for(let [nextNode, nextDist] of graph[node]) {
    if(visited[nextNode]) {
      continue;
    }
    DFS(nextNode, dist + nextDist);
  }
}

DFS(1, 0);
// 가장 먼 거리의 정점을 기준으로 최대 거리와 방문 처리를 초기화 한 후 DFS 재 호출
max.dist = Number.MIN_SAFE_INTEGER;
visited = Array.from({length: n+1}, () => false);

DFS(max.node, 0);

console.log(max.dist);

```
