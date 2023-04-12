## solution 1

```javascript
const [inf, ...rest] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [n, m, vStart] = inf
  .trim()
  .split(" ")
  .map((v) => +v);
// [1] 그래프 생성
let graph = Array.from({ length: n + 1 }, () => []);
for (let edge of rest) {
  let vertexs = edge.split(" ").map((v) => +v);
  graph[vertexs[0]].push(vertexs[1]);
  graph[vertexs[1]].push(vertexs[0]);
}
// 그래프 생성 시 중복 제거 및 각 원소들 오름차순 정렬
graph = graph.map((v) => [...new Set(v)].sort((a, b) => a - b));

// dfs, bfs 실행
let answer = [];
check = Array(n + 1).fill(false);
dfs(vStart);
console.log(answer.join(" "));

answer.length = 0;
check.fill(false);
bfs(vStart);
console.log(answer.join(" "));

function dfs(v) {
  // 1. v에 대한 방문 확인
  check[v] = true;
  answer.push(v);
  // 2. v와 인접한 정점(x)이 미 방문이라면 dfs(정점) 실행
  for (let i = 0; i < graph[v].length; i++) {
    let x = graph[v][i];
    if (!check[x]) {
      dfs(x);
    }
  }
}

function bfs(v) {
  // 1. 큐 생성 및 방문 확인
  let q = [v];
  check[v] = true;
  answer.push(v);
  while (q.length !== 0) {
    // 큐가 빌 때까지
    // 2. 큐에서 원소 하나 꺼내기
    let node = q.shift();
    // 3. 그 원소와 인접한 정점들 중 방문하지 않은 정점에 대해 방문 확인 및 배열에 삽입
    for (let i = 0; i < graph[node].length; i++) {
      let x = graph[node][i];
      if (!check[x]) {
        q.push(x);
        check[x] = true;
        answer.push(x);
      }
    }
  }
}
```
